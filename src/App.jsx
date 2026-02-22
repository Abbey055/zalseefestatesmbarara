import { Routes, Route } from 'react-router-dom';
import { Container, Heading, Text, VStack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './routes/Home';
import LandDetails from './routes/LandDetails';
import Gallery from './routes/Gallery'; // Import Gallery
import Footer from './components/Footer';
import LandProvider from './context/LandContext';

// Import other page components
import LandForSale from './routes/LandForSale';
import About from './routes/About';
import Contact from './routes/Contact';
import ListLand from './routes/ListLand';

const App = () => {
  return (
    <LandProvider>
      <Container maxW='container.lg' px='6'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/land-for-sale' element={<LandForSale />} />
          <Route path='/gallery' element={<Gallery />} /> {/* Add Gallery route */}
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/list-land' element={<ListLand />} />
          <Route path='/land-details/:landId' element={<LandDetails />} />
          <Route path="*" element={
            <VStack 
              spacing={6} 
              py={20} 
              px={4} 
              textAlign="center"
              bg="green.50"
              borderRadius="xl"
              mt={8}
            >
              <Heading 
                size="2xl" 
                color="green.700"
                bgGradient="linear(to-r, green.700, green.500)"
                bgClip="text"
              >
                404
              </Heading>
              <Heading size="lg" color="gray.700">
                Page Not Found
              </Heading>
              <Text color="gray.600" maxW="400px">
                The page you're looking for doesn't exist or has been moved.
              </Text>
              <Link to="/">
                <Button 
                  colorScheme="green" 
                  size="lg"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg'
                  }}
                >
                  Return Home
                </Button>
              </Link>
            </VStack>
          } />
        </Routes>
      </Container>
      <Footer />
    </LandProvider>
  )
}

export default App;