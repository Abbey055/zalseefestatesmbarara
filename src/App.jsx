import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react'; // Change from Container to Box

import Header from './components/Header/Header';
import Home from './routes/Home';
import LandDetails from './routes/LandDetails';
import Gallery from './routes/Gallery';
import Location from './routes/Location';
import PaymentMethods from './routes/PaymentMethods.jsx';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import LandProvider from './context/LandContext';
import { AdminProvider } from './context/AdminContext';
import AdminPanel from './routes/AdminPanel';

import LandForSale from './routes/LandForSale';
import About from './routes/About';
import Contact from './routes/Contact';
import ListLand from './routes/ListLand';

const App = () => {
  return (
    <LandProvider>
      <AdminProvider>
        <Box w="100%" minH="100vh" display="flex" flexDirection="column">
          <Header />
          <Box flex="1">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/land-for-sale' element={<LandForSale />} />
              <Route path='/gallery' element={<Gallery />} />
              <Route path='/gallery/:albumId' element={<Gallery />} />
              <Route path='/location' element={<Location />} />
              <Route path='/payment-methods' element={<PaymentMethods />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/list-land' element={<ListLand />} />
              <Route path='/land-details/:landId' element={<LandDetails />} />
              <Route path='/zalseef-admin-2026' element={<AdminPanel />} />
            </Routes>
          </Box>
          <WhatsAppButton />
          <Footer />
        </Box>
      </AdminProvider>
    </LandProvider>
  );
};

export default App;
