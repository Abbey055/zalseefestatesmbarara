import { Center, Grid, Heading, Spinner, Stack, Box, Text, SimpleGrid } from '@chakra-ui/react';
import { useContext } from "react";
import { Link } from 'react-router-dom';

import { LandContext } from "../../context/LandContext";
import LandItem from './LandItem';

const LandList = () => {
  const { lands, isLoading } = useContext(LandContext);

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
      {/* Results count */}
      <Text mb={4} color="gray.600" fontSize="sm">
        Showing {lands.length} {lands.length === 1 ? 'plot' : 'plots'} available
      </Text>

      {/* Grid Layout */}
      <SimpleGrid 
        columns={{ base: 1, sm: 2, lg: 3 }} 
        spacing={6}
        spacingY={8}
      >
        {lands.map((item) => (
          <Link to={`/land-details/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
            <LandItem land={item} />
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default LandList;