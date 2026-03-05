import { Center, Heading, Spinner, Box, Text, HStack, Button, SimpleGrid } from '@chakra-ui/react';
import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { LandContext } from "../../context/LandContext";
import LandCarousel from './LandCarousel';
import LandItem from './LandItem';

const LandList = () => {
  const { lands, isLoading } = useContext(LandContext);
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' or 'grid'

  if(isLoading){
    return (
      <Center py={10}>
        <Spinner size="xl" color='green.500' thickness="4px" />
      </Center>
    )
  }

  if (lands.length === 0) {
    return (
      <Box py={16} textAlign="center">
        <Heading size="lg" color="gray.600" mb={4}>
          No Plots Found
        </Heading>
        <Text color="gray.500">
          Try adjusting your search criteria to find available land.
        </Text>
      </Box>
    );
  }

  return (
    <Box py={8}>
      {/* View Toggle */}
      <HStack justify="space-between" mb={4}>
        <Text color="gray.600" fontSize="sm">
          Showing {lands.length} {lands.length === 1 ? 'plot' : 'plots'} available
        </Text>
        <HStack spacing={2}>
          <Button
            size="sm"
            variant={viewMode === 'carousel' ? 'solid' : 'outline'}
            colorScheme="green"
            onClick={() => setViewMode('carousel')}
            leftIcon={<Box as="span" fontSize="lg">↔️</Box>}
          >
            Carousel
          </Button>
          <Button
            size="sm"
            variant={viewMode === 'grid' ? 'solid' : 'outline'}
            colorScheme="green"
            onClick={() => setViewMode('grid')}
            leftIcon={<Box as="span" fontSize="lg">🔲</Box>}
          >
            Grid
          </Button>
        </HStack>
      </HStack>

      {/* Carousel or Grid View */}
      {viewMode === 'carousel' ? (
        <LandCarousel lands={lands} />
      ) : (
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6}>
          {lands.map((item) => (
            <Link to={`/land-details/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
              <LandItem land={item} />
            </Link>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default LandList;