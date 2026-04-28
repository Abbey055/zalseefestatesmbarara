import { landsData } from '../data';
import CEOImage from '../assets/images/agents/CEO.jpg';
import {
  ensureSupabase,
  isSupabaseConfigured,
  SUPABASE_STORAGE_BUCKET,
} from './supabase';

const LAND_SELECT_COLUMNS = `
  id,
  name,
  land_use,
  description,
  district,
  location,
  size,
  price_type,
  price,
  has_title,
  features,
  is_sold,
  is_offer_of_day,
  offer_price,
  offer_end_date,
  image_url,
  image_lg_url,
  gallery_urls,
  agent_name,
  agent_phone,
  agent_company,
  agent_image_url,
  created_at,
  updated_at
`;

const DEFAULT_AGENT = {
  image: CEOImage,
  name: 'Muhammad Muhumuza',
  phone: '256 708 124902',
  company: 'ZALSEEF ESTATES',
};

const legacyLandById = new Map(landsData.map((land) => [Number(land.id), land]));

const uniqueStrings = (values) => [...new Set(values.filter(Boolean).map(String))];

const normalizeImageList = (images = []) => uniqueStrings(
  images.map((image) => (typeof image === 'string' ? image : image?.url)),
);

const cloneFallbackLand = (land) => ({
  ...land,
  features: [...(land.features || [])],
  images: uniqueStrings(land.images || [land.image, land.imageLg]),
  agent: {
    ...DEFAULT_AGENT,
    ...(land.agent || {}),
  },
});

export const getFallbackLands = () => landsData.map(cloneFallbackLand);

const mapRowToLand = (row) => {
  const legacyLand = legacyLandById.get(Number(row.id));
  const galleryUrls = uniqueStrings([
    ...(Array.isArray(row.gallery_urls) ? row.gallery_urls : []),
    row.image_url,
    row.image_lg_url,
  ]);
  const fallbackImages = uniqueStrings([
    legacyLand?.image,
    legacyLand?.imageLg,
  ]);
  const images = uniqueStrings([...galleryUrls, ...fallbackImages]);

  return {
    id: Number(row.id),
    landUse: row.land_use || legacyLand?.landUse || 'Residential',
    name: row.name || legacyLand?.name || 'Untitled Listing',
    description: row.description || legacyLand?.description || '',
    district: row.district || legacyLand?.district || 'Mbarara',
    location: row.location || legacyLand?.location || '',
    size: row.size || legacyLand?.size || '',
    priceType: row.price_type || legacyLand?.priceType || 'total',
    price: Number(row.price) || 0,
    hasTitle: Boolean(row.has_title),
    features: Array.isArray(row.features) ? row.features : (legacyLand?.features || []),
    isSold: Boolean(row.is_sold),
    isOfferOfDay: Boolean(row.is_offer_of_day),
    offerPrice: row.offer_price ? Number(row.offer_price) : null,
    offerEndDate: row.offer_end_date || '',
    image: row.image_url || images[0] || legacyLand?.image || '',
    imageLg: row.image_lg_url || row.image_url || images[0] || legacyLand?.imageLg || legacyLand?.image || '',
    images,
    agent: {
      image: row.agent_image_url || legacyLand?.agent?.image || DEFAULT_AGENT.image,
      name: row.agent_name || legacyLand?.agent?.name || DEFAULT_AGENT.name,
      phone: row.agent_phone || legacyLand?.agent?.phone || DEFAULT_AGENT.phone,
      company: row.agent_company || legacyLand?.agent?.company || DEFAULT_AGENT.company,
    },
    createdAt: row.created_at || null,
    updatedAt: row.updated_at || null,
  };
};

const createStoragePath = (file) => {
  const extension = file.name.includes('.') ? file.name.split('.').pop().toLowerCase() : 'jpg';
  const basename = file.name.replace(/\.[^.]+$/, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'land-image';
  const uniqueId = globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const dateSegment = new Date().toISOString().slice(0, 10);

  return `lands/${dateSegment}/${basename}-${uniqueId}.${extension}`;
};

const serializeLandPayload = (landInput) => {
  const images = normalizeImageList(landInput.images);
  const primaryImage = images[0] || landInput.image || null;

  return {
    name: landInput.name?.trim() || '',
    land_use: landInput.landUse || 'Residential',
    description: landInput.description?.trim() || '',
    district: landInput.district || 'Mbarara',
    location: landInput.location?.trim() || '',
    size: landInput.size?.trim() || '',
    price_type: landInput.priceType || 'total',
    price: Number(landInput.price) || 0,
    has_title: Boolean(landInput.hasTitle),
    features: uniqueStrings(landInput.features || []),
    is_sold: Boolean(landInput.isSold),
    is_offer_of_day: Boolean(landInput.isOfferOfDay),
    offer_price: landInput.offerPrice ? Number(landInput.offerPrice) : null,
    offer_end_date: landInput.offerEndDate || null,
    image_url: primaryImage,
    image_lg_url: primaryImage,
    gallery_urls: images,
    agent_name: landInput.agent?.name || DEFAULT_AGENT.name,
    agent_phone: landInput.agent?.phone || DEFAULT_AGENT.phone,
    agent_company: landInput.agent?.company || DEFAULT_AGENT.company,
    agent_image_url: landInput.agent?.image || null,
  };
};

export const fetchLandListings = async () => {
  const client = ensureSupabase();
  const { data, error } = await client
    .from('land_listings')
    .select(LAND_SELECT_COLUMNS)
    .order('id', { ascending: true });

  if (error) {
    throw error;
  }

  return (data || []).map(mapRowToLand);
};

export const createLandListing = async (landInput) => {
  const client = ensureSupabase();
  const { data, error } = await client
    .from('land_listings')
    .insert(serializeLandPayload(landInput))
    .select(LAND_SELECT_COLUMNS)
    .single();

  if (error) {
    throw error;
  }

  return mapRowToLand(data);
};

export const updateLandListing = async (id, landInput) => {
  const client = ensureSupabase();
  const { data, error } = await client
    .from('land_listings')
    .update(serializeLandPayload(landInput))
    .eq('id', id)
    .select(LAND_SELECT_COLUMNS)
    .single();

  if (error) {
    throw error;
  }

  return mapRowToLand(data);
};

export const deleteLandListing = async (id) => {
  const client = ensureSupabase();
  const { error } = await client
    .from('land_listings')
    .delete()
    .eq('id', id);

  if (error) {
    throw error;
  }
};

export const uploadLandImage = async (file) => {
  const client = ensureSupabase();
  const filePath = createStoragePath(file);
  const { error: uploadError } = await client.storage
    .from(SUPABASE_STORAGE_BUCKET)
    .upload(filePath, file, {
      cacheControl: '3600',
      contentType: file.type,
      upsert: false,
    });

  if (uploadError) {
    throw uploadError;
  }

  const { data } = client.storage.from(SUPABASE_STORAGE_BUCKET).getPublicUrl(filePath);

  return {
    path: filePath,
    url: data.publicUrl,
  };
};

export const submitContactInquiry = async (payload) => {
  const client = ensureSupabase();
  const { error } = await client
    .from('contact_inquiries')
    .insert({
      land_id: payload.landId || null,
      land_name_snapshot: payload.landName || null,
      land_location_snapshot: payload.landLocation || null,
      land_price_snapshot: payload.landPrice || null,
      name: payload.name?.trim() || '',
      email: payload.email?.trim() || '',
      phone: payload.phone?.trim() || '',
      message: payload.message?.trim() || '',
    });

  if (error) {
    throw error;
  }
};

export const submitSellerLead = async (payload) => {
  const client = ensureSupabase();
  const { error } = await client
    .from('seller_leads')
    .insert({
      name: payload.name?.trim() || '',
      email: payload.email?.trim() || '',
      phone: payload.phone?.trim() || '',
      land_location: payload.landLocation?.trim() || '',
      land_type: payload.landType || '',
      size: payload.size?.trim() || '',
      expected_price: payload.expectedPrice ? Number(payload.expectedPrice) : null,
      details: payload.details?.trim() || '',
    });

  if (error) {
    throw error;
  }
};

export const signInAdmin = async ({ email, password }) => {
  const client = ensureSupabase();
  const { data, error } = await client.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  return data.session;
};

export const signOutAdmin = async () => {
  if (!isSupabaseConfigured) {
    return;
  }

  const client = ensureSupabase();
  const { error } = await client.auth.signOut();

  if (error) {
    throw error;
  }
};

export const getAdminSession = async () => {
  if (!isSupabaseConfigured) {
    return null;
  }

  const client = ensureSupabase();
  const {
    data: { session },
    error,
  } = await client.auth.getSession();

  if (error) {
    throw error;
  }

  return session;
};

export const subscribeToAdminAuthChanges = (callback) => {
  if (!isSupabaseConfigured) {
    return {
      unsubscribe: () => {},
    };
  }

  const client = ensureSupabase();
  const {
    data: { subscription },
  } = client.auth.onAuthStateChange((_event, session) => {
    callback(session);
  });

  return subscription;
};
