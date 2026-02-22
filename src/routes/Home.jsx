import { Container } from '@chakra-ui/react';
import Banner from '../components/Banner';
import WhyChooseUs from '../components/WhyChooseUs';
import Search from '../components/Search/Search';
import LandList from '../components/LandList/LandList';

const Home = () => {
  return (
    <Container maxW='container.lg' px={{ base: 2, sm: 4, md: 6 }}>
      <Banner />
      <WhyChooseUs />
      <Search />
      <LandList />
    </Container>
  )
}

export default Home;