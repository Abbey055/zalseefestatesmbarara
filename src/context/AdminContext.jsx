import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { isSupabaseConfigured } from '../lib/supabase';
import {
  createLandListing,
  deleteLandListing,
  getAdminSession,
  signInAdmin,
  signOutAdmin,
  subscribeToAdminAuthChanges,
  updateLandListing,
} from '../lib/supabaseData';
import { useLandCollection } from './LandContext';

const AdminContext = createContext(null);

export const useAdmin = () => {
  const context = useContext(AdminContext);

  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }

  return context;
};

export const AdminProvider = ({ children }) => {
  const { allLands, refreshLands, isLoading: areLandsLoading } = useLandCollection();
  const [session, setSession] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const initializeAuth = async () => {
      if (!isSupabaseConfigured) {
        if (isMounted) {
          setIsAuthLoading(false);
        }
        return;
      }

      try {
        const existingSession = await getAdminSession();

        if (isMounted) {
          setSession(existingSession);
        }
      } catch (error) {
        console.error('Error checking Supabase session:', error);
      } finally {
        if (isMounted) {
          setIsAuthLoading(false);
        }
      }
    };

    initializeAuth();

    const subscription = subscribeToAdminAuthChanges((nextSession) => {
      if (isMounted) {
        setSession(nextSession);
        setIsAuthLoading(false);
      }
    });

    return () => {
      isMounted = false;
      subscription?.unsubscribe?.();
    };
  }, []);

  const loginAsAdmin = async ({ email, password }) => {
    const nextSession = await signInAdmin({ email, password });
    setSession(nextSession);
    return true;
  };

  const logoutAdmin = async () => {
    await signOutAdmin();
    setSession(null);
  };

  const addLand = async (newLand) => {
    const createdLand = await createLandListing(newLand);
    await refreshLands();
    return createdLand;
  };

  const updateLand = async (id, updatedLand) => {
    const savedLand = await updateLandListing(id, updatedLand);
    await refreshLands();
    return savedLand;
  };

  const deleteLand = async (id) => {
    await deleteLandListing(id);
    await refreshLands();
  };

  const value = {
    lands: allLands,
    addLand,
    updateLand,
    deleteLand,
    isAdminAuthenticated: Boolean(session),
    loginAsAdmin,
    logoutAdmin,
    isLoading: areLandsLoading || isAuthLoading,
    isAuthLoading,
    isSupabaseConfigured,
    session,
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};
