import { createContext, useState, useContext, useEffect } from 'react';
import { landsData as initialLands } from '../data';

const AdminContext = createContext();

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

export const AdminProvider = ({ children }) => {
  // Load lands from localStorage or use initial data
  const [lands, setLands] = useState(() => {
    const savedLands = localStorage.getItem('zalseef_lands');
    return savedLands ? JSON.parse(savedLands) : initialLands;
  });

  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminPassword] = useState('zalseef2026'); // Change this to your preferred password

  // Save to localStorage whenever lands change
  useEffect(() => {
    localStorage.setItem('zalseef_lands', JSON.stringify(lands));
  }, [lands]);

  // Admin authentication
  const loginAsAdmin = (password) => {
    if (password === adminPassword) {
      setIsAdminAuthenticated(true);
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminAuthenticated(false);
  };

  // CRUD Operations
  const addLand = (newLand) => {
    const landWithId = {
      ...newLand,
      id: lands.length + 1,
      image: newLand.image || `/src/assets/images/lands/land${(lands.length % 48) + 1}.jpg`,
      imageLg: newLand.imageLg || `/src/assets/images/lands/land${(lands.length % 48) + 1}lg.jpg`,
      agent: {
        image: '/src/assets/images/agents/CEO.jpg',
        name: 'Muhammad Muhumuza',
        phone: '256 708 124902',
        company: 'ZALSEEF ESTATES'
      }
    };
    setLands([...lands, landWithId]);
  };

  const updateLand = (id, updatedLand) => {
    setLands(lands.map(land => 
      land.id === id ? { ...land, ...updatedLand } : land
    ));
  };

  const deleteLand = (id) => {
    if (window.confirm('Are you sure you want to delete this land?')) {
      setLands(lands.filter(land => land.id !== id));
    }
  };

  const value = {
    lands,
    addLand,
    updateLand,
    deleteLand,
    isAdminAuthenticated,
    loginAsAdmin,
    logoutAdmin
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};