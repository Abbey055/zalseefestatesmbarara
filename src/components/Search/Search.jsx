import {
  Box,
  Button,
  Grid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { LandContext } from '../../context/LandContext';
import LocationFilter from './LocationFilter';
import PriceFilter from './PriceFilter';
import LandTypeFilter from './LandTypeFilter';

const fieldStyles = {
  bg: 'white',
  minH: '54px',
  borderColor: 'rgba(18, 50, 58, 0.12)',
  _hover: {
    borderColor: 'rgba(47, 159, 121, 0.36)',
  },
};

const Search = () => {
  const { allLands, isLoading, searchHandler } = useContext(LandContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = () => {
    searchHandler();

    if (location.pathname === '/land-for-sale') {
      document.getElementById('listing-results')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      return;
    }

    navigate('/land-for-sale#listing-results');
  };

  return (
    <Box
      bg="white"
      border="1px solid rgba(18, 50, 58, 0.10)"
      boxShadow="0 24px 48px rgba(15, 23, 42, 0.10)"
      px={{ base: 4, md: 5, xl: 6 }}
      py={{ base: 5, md: 6 }}
    >
      <Grid templateColumns={{ base: '1fr', lg: 'repeat(4, minmax(0, 1fr))' }} gap={{ base: 4, lg: 5 }} alignItems="end">
        <VStack align="stretch" spacing={2}>
          <Text fontSize="sm" fontWeight="700" color="#20333a">
            Listing Type
          </Text>
          <LandTypeFilter {...fieldStyles} />
        </VStack>

        <VStack align="stretch" spacing={2}>
          <Text fontSize="sm" fontWeight="700" color="#20333a">
            District
          </Text>
          <LocationFilter {...fieldStyles} />
        </VStack>

        <VStack align="stretch" spacing={2}>
          <Text fontSize="sm" fontWeight="700" color="#20333a">
            Budget Range
          </Text>
          <PriceFilter {...fieldStyles} />
        </VStack>

        <Button
          onClick={handleSearch}
          isDisabled={isLoading || allLands.length === 0}
          minH="54px"
          bg="#2f9f79"
          color="white"
          _hover={{
            bg: '#257b5f',
            transform: 'translateY(-2px)',
            boxShadow: '0 18px 34px rgba(47, 159, 121, 0.24)',
          }}
        >
          Search Land
        </Button>
      </Grid>
    </Box>
  );
};

export default Search;
