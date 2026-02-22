import { Container, Heading, Text } from '@chakra-ui/react';
import Search from '../components/Search/Search';
import LandList from '../components/LandList/LandList';

const LandForSale = () => {
  return (
    <Container maxW='container.lg' p='0' py='6'>
      <Heading size="lg" mb="4">Land for Sale in Mbarara</Heading>
      <Text mb="6">Browse our available plots across Mbarara district</Text>
      <Search />
      <LandList />
    </Container>
  );
};

export default LandForSale;