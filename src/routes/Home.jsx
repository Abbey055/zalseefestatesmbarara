import { Container } from '@chakra-ui/react';
import Banner from '../components/Banner';
import WhyChooseUs from '../components/WhyChooseUs';
import Search from '../components/Search/Search';
import LandList from '../components/LandList/LandList';
import Testimonials from '../components/Testimonials'; // Add this import

const Home = () => {
  return (
    <Container maxW='container.lg' px={{ base: 2, sm: 4, md: 6 }}>
      <Banner />
      <WhyChooseUs />
      <Testimonials /> {/* Add this line */}
      <Search />
      <LandList />
    </Container>
  )
}

export default Home;