import { Container } from '@chakra-ui/react';
import Banner from '../components/Banner';
import WhyChooseUs from '../components/WhyChooseUs'; // Import WhyChooseUs
import Search from '../components/Search/Search';
import LandList from '../components/LandList/LandList';

const Home = () => {
  return (
    <Container maxW='container.lg' p='0'>
      <Banner />
      <WhyChooseUs /> {/* Added Why Choose Us section */}
      <Search />
      <LandList />
    </Container>
  )
}

export default Home;