import { Routes, Route } from 'react-router-dom';
import { Container } from '@chakra-ui/react';

import Header from './components/Header/Header';
import Home from './routes/Home';
import LandDetails from './routes/LandDetails';
import Gallery from './routes/Gallery';
import Location from './routes/Location';
import PaymentMethods from './routes/PaymentMethods';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import LandProvider from './context/LandContext';
import { AdminProvider } from './context/AdminContext';
import AdminPanel from './routes/AdminPanel'; // Import admin panel

// Import other page components
import LandForSale from './routes/LandForSale';
import About from './routes/About';
import Contact from './routes/Contact';
import ListLand from './routes/ListLand';

const App = () => {
  return (
    <AdminProvider>
      <LandProvider>
        <Container maxW='container.lg' px='6'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/land-for-sale' element={<LandForSale />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/location' element={<Location />} />
            <Route path='/payment-methods' element={<PaymentMethods />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/list-land' element={<ListLand />} />
            <Route path='/land-details/:landId' element={<LandDetails />} />
            
            {/* Secret Admin Route - NO ONE KNOWS ABOUT THIS */}
            <Route path='/zalseef-admin-2026' element={<AdminPanel />} />
          </Routes>
        </Container>
        <WhatsAppButton />
        <Footer />
      </LandProvider>
    </AdminProvider>
  );
};

export default App;