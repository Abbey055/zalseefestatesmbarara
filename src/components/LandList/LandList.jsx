import {
  Badge,
  Box,
  Button,
  Center,
  Grid,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useContext, useEffect, useState } from 'react';
import { FaList, FaThLarge } from 'react-icons/fa';

import { LandContext } from '../../context/LandContext';
import LandItem, { formatPrice } from './LandItem';

const priceRangeLabels = {
  '0 - 20000000': 'Under 20 Million',
  '20000000 - 50000000': '20M - 50M',
  '50000000 - 100000000': '50M - 100M',
  '100000000 - 200000000': '100M - 200M',
  '200000000 - 500000000': '200M - 500M',
  '500000000 - 1000000000': '500M - 1B',
};

const getStartingPrice = (items) => {
  if (!items.length) {
    return 'UGX --';
  }

  return formatPrice(Math.min(...items.map((item) => item.price || 0)));
};

const LandList = () => {
  const {
    allLands,
    lands,
    activeFilters: appliedFilters,
    hasActiveFilters,
    isLoading,
    resetSearch,
  } = useContext(LandContext);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('newest');
  const [filteredLands, setFilteredLands] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const surface = useColorModeValue('rgba(255,255,255,0.84)', 'rgba(8, 24, 31, 0.74)');
  const listSurface = useColorModeValue('rgba(255,255,255,0.94)', 'rgba(12, 32, 41, 0.94)');
  const fieldSurface = useColorModeValue('white', 'rgba(12, 33, 41, 0.88)');
  const subtleGreenSurface = useColorModeValue('rgba(47, 159, 121, 0.12)', 'rgba(47, 159, 121, 0.18)');
  const detailSurface = useColorModeValue('rgba(247, 250, 248, 0.92)', 'rgba(7, 24, 31, 0.68)');
  const baseShadow = useColorModeValue(
    '0 14px 30px rgba(15, 23, 42, 0.08)',
    '0 14px 30px rgba(0, 0, 0, 0.24)',
  );
  const borderColor = useColorModeValue('rgba(18, 50, 58, 0.10)', 'rgba(255,255,255,0.08)');
  const headingColor = useColorModeValue('#14363d', '#edf5f3');
  const bodyColor = useColorModeValue('#51656e', '#b3c6cc');
  const mutedColor = useColorModeValue('#6b7f87', '#9cb1b8');

  const activeFilters = [
    appliedFilters.landType ? `Type: ${appliedFilters.landType}` : null,
    appliedFilters.district ? `District: ${appliedFilters.district}` : null,
    appliedFilters.price ? `Budget: ${priceRangeLabels[appliedFilters.price] || appliedFilters.price}` : null,
  ].filter(Boolean);

  useEffect(() => {
    let result = [...lands];

    if (searchTerm) {
      result = result.filter((land) =>
        land.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        land.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        land.district?.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    switch (sortBy) {
      case 'price_low':
        result.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case 'price_high':
        result.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case 'newest':
        result.sort((a, b) => (b.id || 0) - (a.id || 0));
        break;
      default:
        break;
    }

    setFilteredLands(result);
  }, [lands, searchTerm, sortBy]);

  const clearAllSearch = () => {
    resetSearch();
    setSearchTerm('');
  };

  const titleReadyCount = filteredLands.filter((item) => item.hasTitle).length;
  const districtCount = new Set(filteredLands.map((item) => item.district).filter(Boolean)).size;
  const overviewStats = [
    {
      label: 'Showing Now',
      value: `${filteredLands.length}`,
      detail: 'Visible listings after your current search and filters.',
    },
    {
      label: 'Starting From',
      value: getStartingPrice(filteredLands),
      detail: 'Lowest visible price in the current results.',
    },
    {
      label: 'Title Ready',
      value: `${titleReadyCount}`,
      detail: 'Listings marked with title availability in this view.',
    },
    {
      label: 'District Focus',
      value: `${districtCount || 0}`,
      detail: 'Areas represented in the properties currently on screen.',
    },
  ];

  if (isLoading) {
    return (
      <Center py={20}>
        <Spinner size="xl" color="brand.500" thickness="4px" />
      </Center>
    );
  }

  return (
    <Box py={{ base: 2, md: 3 }}>
      <VStack spacing={5} align="stretch">
        <Box
          bg={surface}
          border="1px solid"
          borderColor={borderColor}
          px={{ base: 4, md: 5 }}
          py={{ base: 4, md: 5 }}
          overflow="hidden"
        >
          <VStack spacing={5} align="stretch">
            <Grid
              templateColumns={{ base: '1fr', xl: 'minmax(0, 1.02fr) minmax(480px, 0.98fr)' }}
              gap={5}
              alignItems="stretch"
            >
              <VStack align="flex-start" spacing={3}>
                <HStack spacing={2} flexWrap="wrap">
                  <Badge
                    bg={subtleGreenSurface}
                    color="#195b45"
                    px={3}
                    py={1.5}
                    fontWeight="800"
                    letterSpacing="0.04em"
                    textTransform="none"
                  >
                    Property Browser
                  </Badge>
                  <Badge
                    bg={detailSurface}
                    color={headingColor}
                    px={3}
                    py={1.5}
                    fontWeight="700"
                    letterSpacing="0.04em"
                    textTransform="none"
                  >
                    Live Inventory
                  </Badge>
                </HStack>

                <Heading fontSize={{ base: 'xl', md: '2xl' }} color={headingColor} lineHeight="1.12">
                  Explore listings in a cleaner, better-organized comparison flow.
                </Heading>

                <Text color={bodyColor} lineHeight="1.85" maxW="68ch">
                  Search, sort, and switch between grid and list views while keeping the important details easy to scan:
                  price, title status, plot size, land use, and district.
                </Text>
              </VStack>

              <SimpleGrid columns={{ base: 1, sm: 2, xl: 4 }} spacing="1px" bg={borderColor}>
                {overviewStats.map((item) => (
                  <Box
                    key={item.label}
                    bg={listSurface}
                    px={{ base: 4, md: 5 }}
                    py={{ base: 4, md: 5 }}
                  >
                    <Text color={mutedColor} fontSize="xs" fontWeight="800" letterSpacing="0.14em" textTransform="uppercase">
                      {item.label}
                    </Text>
                    <Text color={headingColor} fontSize={{ base: '2xl', md: '3xl' }} fontWeight="800" letterSpacing="-0.05em" mt={2}>
                      {item.value}
                    </Text>
                    <Text color={bodyColor} fontSize="sm" lineHeight="1.75" mt={2}>
                      {item.detail}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Grid>

            <Grid templateColumns={{ base: '1fr', lg: 'minmax(0, 1fr) 220px auto' }} gap={3} alignItems="center">
              <InputGroup maxW={{ base: '100%', lg: 'unset' }}>
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="brand.500" />
                </InputLeftElement>
                <Input
                  placeholder="Search by plot name, location, or district"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  bg={fieldSurface}
                />
              </InputGroup>

              <Select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                bg={fieldSurface}
              >
                <option value="newest">Newest First</option>
                <option value="price_low">Price: Low to High</option>
                <option value="price_high">Price: High to Low</option>
              </Select>

              <HStack spacing={2} justify={{ base: 'flex-start', lg: 'flex-end' }}>
                <Button
                  size="sm"
                  variant={viewMode === 'grid' ? 'solid' : 'outline'}
                  onClick={() => setViewMode('grid')}
                  leftIcon={<FaThLarge />}
                >
                  Grid
                </Button>
                <Button
                  size="sm"
                  variant={viewMode === 'list' ? 'solid' : 'outline'}
                  onClick={() => setViewMode('list')}
                  leftIcon={<FaList />}
                >
                  List
                </Button>
              </HStack>
            </Grid>

            <Stack
              direction={{ base: 'column', lg: 'row' }}
              justify="space-between"
              align={{ base: 'flex-start', lg: 'center' }}
              spacing={4}
            >
              <Wrap spacing={3}>
                <WrapItem>
                  <Badge
                    bg={subtleGreenSurface}
                    color="#195b45"
                    px={3}
                    py={1.5}
                    fontWeight="800"
                    letterSpacing="0.04em"
                    textTransform="none"
                  >
                    Showing {filteredLands.length} of {allLands.length || filteredLands.length} listings
                  </Badge>
                </WrapItem>

                {activeFilters.map((filter) => (
                  <WrapItem key={filter}>
                    <Badge
                      bg={detailSurface}
                      color={headingColor}
                      px={3}
                      py={1.5}
                      fontWeight="700"
                      letterSpacing="0.04em"
                      textTransform="none"
                    >
                      {filter}
                    </Badge>
                  </WrapItem>
                ))}

                {searchTerm && (
                  <WrapItem>
                    <Button size="sm" variant="ghost" onClick={() => setSearchTerm('')}>
                      Clear Search
                    </Button>
                  </WrapItem>
                )}

                {(hasActiveFilters || searchTerm) && (
                  <WrapItem>
                    <Button size="sm" variant="ghost" onClick={clearAllSearch}>
                      Clear All
                    </Button>
                  </WrapItem>
                )}
              </Wrap>

              <Text fontSize="sm" color={mutedColor}>
                Compare availability, price, and documentation before making contact.
              </Text>
            </Stack>
          </VStack>
        </Box>

        {filteredLands.length === 0 ? (
          <Box
            bg={listSurface}
            border="1px solid"
            borderColor={borderColor}
            boxShadow={baseShadow}
            px={{ base: 5, md: 6 }}
            py={{ base: 10, md: 12 }}
            textAlign="center"
          >
            <VStack spacing={4}>
              <Heading fontSize={{ base: '2xl', md: '3xl' }} color={headingColor}>
                No matching plots found
              </Heading>
              <Text color={bodyColor} maxW="56ch" lineHeight="1.85">
                Try changing the district, land type, budget range, or keyword search to see more available listings.
              </Text>
              {(hasActiveFilters || searchTerm) && (
                <Button
                  onClick={clearAllSearch}
                  bg="linear-gradient(135deg, #2f9f79 0%, #195b45 100%)"
                  color="white"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: '0 18px 30px rgba(47, 159, 121, 0.24)',
                  }}
                >
                  Clear Filters
                </Button>
              )}
            </VStack>
          </Box>
        ) : viewMode === 'grid' ? (
          <Grid
            templateColumns="repeat(auto-fit, minmax(min(100%, 340px), 1fr))"
            gap={{ base: 5, md: 6, xl: 7 }}
            alignItems="stretch"
            w="100%"
          >
            {filteredLands.map((item) => (
              <LandItem key={item.id} land={item} />
            ))}
          </Grid>
        ) : (
          <VStack spacing={4} w="100%">
            {filteredLands.map((item) => (
              <LandItem key={item.id} land={item} variant="list" />
            ))}
          </VStack>
        )}
      </VStack>
    </Box>
  );
};

export default LandList;
