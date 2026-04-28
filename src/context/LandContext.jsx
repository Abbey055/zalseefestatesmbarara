import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { fetchLandListings, getFallbackLands } from '../lib/supabaseData';

const DEFAULT_FILTERS = {
  district: '',
  price: '',
  landType: '',
};

export const LandContext = createContext(null);

const getRangeFromPrice = (price) => {
  if (!price) {
    return { minPrice: 0, maxPrice: Infinity };
  }

  const [min = '0', max = `${Number.MAX_SAFE_INTEGER}`] = price.split(' - ');

  return {
    minPrice: Number.parseInt(min, 10) || 0,
    maxPrice: Number.parseInt(max, 10) || Infinity,
  };
};

const applyLandFilters = (collection, filters) => {
  const { district, price, landType } = filters;
  const { minPrice, maxPrice } = getRangeFromPrice(price);

  return collection.filter((land) => {
    const landPrice = Number.parseInt(land.price, 10) || 0;
    const matchesDistrict = !district || land.district === district;
    const matchesPrice = !price || (landPrice >= minPrice && landPrice <= maxPrice);
    const matchesType = !landType || land.landUse === landType;

    return matchesDistrict && matchesPrice && matchesType;
  });
};

const getUniqueValues = (collection, key) => (
  [...new Set(collection.map((item) => item?.[key]).filter(Boolean))].sort((a, b) => a.localeCompare(b))
);

export const useLandCollection = () => {
  const context = useContext(LandContext);

  if (!context) {
    throw new Error('useLandCollection must be used within a LandProvider');
  }

  return context;
};

const LandProvider = ({ children }) => {
  const [allLands, setAllLands] = useState([]);
  const [lands, setLands] = useState([]);
  const [district, setDistrict] = useState('');
  const [price, setPrice] = useState('');
  const [landType, setLandType] = useState('');
  const [activeFilters, setActiveFilters] = useState(DEFAULT_FILTERS);
  const [isLoading, setIsLoading] = useState(true);
  const [isUsingFallback, setIsUsingFallback] = useState(false);
  const [loadError, setLoadError] = useState('');
  const activeFiltersRef = useRef(DEFAULT_FILTERS);

  const districts = useMemo(() => getUniqueValues(allLands, 'district'), [allLands]);
  const landTypes = useMemo(() => getUniqueValues(allLands, 'landUse'), [allLands]);
  const hasActiveFilters = Boolean(activeFilters.district || activeFilters.price || activeFilters.landType);

  useEffect(() => {
    activeFiltersRef.current = activeFilters;
  }, [activeFilters]);

  const syncVisibleLands = (nextCollection, nextFilters) => {
    const filteredLands = applyLandFilters(nextCollection, nextFilters);

    setAllLands(nextCollection);
    setLands(filteredLands);
  };

  const refreshLands = async () => {
    setIsLoading(true);

    try {
      const nextLands = await fetchLandListings();

      setIsUsingFallback(false);
      setLoadError('');
      syncVisibleLands(nextLands, activeFiltersRef.current);
    } catch (error) {
      console.error('Error loading lands from Supabase:', error);

      const fallbackLands = getFallbackLands();
      setIsUsingFallback(true);
      setLoadError(error.message || 'Failed to load listings from Supabase.');
      syncVisibleLands(fallbackLands, activeFiltersRef.current);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refreshLands();
  }, []);

  const searchHandler = (overrideFilters = {}) => {
    const nextFilters = {
      district: overrideFilters.district ?? district,
      price: overrideFilters.price ?? price,
      landType: overrideFilters.landType ?? landType,
    };

    setDistrict(nextFilters.district);
    setPrice(nextFilters.price);
    setLandType(nextFilters.landType);
    setActiveFilters(nextFilters);

    const filteredLands = applyLandFilters(allLands, nextFilters);
    setLands(filteredLands);

    return filteredLands;
  };

  const resetSearch = () => {
    setDistrict('');
    setPrice('');
    setLandType('');
    setActiveFilters(DEFAULT_FILTERS);
    setLands(allLands);
  };

  return (
    <LandContext.Provider
      value={{
        allLands,
        lands,
        district,
        setDistrict,
        districts,
        price,
        setPrice,
        landType,
        setLandType,
        landTypes,
        activeFilters,
        searchHandler,
        resetSearch,
        hasActiveFilters,
        isLoading,
        isUsingFallback,
        loadError,
        refreshLands,
      }}
    >
      {children}
    </LandContext.Provider>
  );
};

export default LandProvider;
