import {
  Badge,
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useMemo } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  FaArrowRight,
  FaCheckCircle,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaShieldAlt,
} from 'react-icons/fa';

import InteractiveCard from '../components/InteractiveCard';
import Search from '../components/Search/Search';
import Testimonials from '../components/Testimonials';
import LandList from '../components/LandList/LandList';
import { useLandCollection } from '../context/LandContext';

const formatPrice = (price) => `UGX ${(price / 1000000).toFixed(1)}M`;

const flowSteps = [
  {
    title: 'Search by what matters first',
    text: 'Start with land use, district, and budget so the listings already feel closer to your real target.',
  },
  {
    title: 'Compare the shortlist calmly',
    text: 'Review card details, title status, price, and plot size before jumping into a call or site visit.',
  },
  {
    title: 'Move into guided follow-up',
    text: 'When a plot feels right, our team helps with the practical next step instead of vague back-and-forth.',
  },
];

const supportCards = [
  {
    icon: FaCheckCircle,
    title: 'Clearer listing details',
    text: 'Price, size, location, and title information are surfaced early so buyers can compare with less friction.',
  },
  {
    icon: FaMapMarkedAlt,
    title: 'A better shortlist flow',
    text: 'The page is organized to help you move from search to shortlist and then into a site visit conversation.',
  },
  {
    icon: FaShieldAlt,
    title: 'Confidence before payment',
    text: 'Zalseef focuses on helping clients confirm the important things before they move toward commitment.',
  },
];

const LandForSale = () => {
  const location = useLocation();
  const { allLands } = useLandCollection();
  const pageBackground = useColorModeValue(
    'linear-gradient(180deg, #f7f1e7 0%, #efe7db 100%)',
    'linear-gradient(180deg, #06141a 0%, #0b1f28 100%)',
  );
  const heroSurface = useColorModeValue('rgba(222, 235, 241, 0.96)', 'rgba(12, 32, 41, 0.94)');
  const cardSurface = useColorModeValue('rgba(255,255,255,0.88)', 'rgba(12, 32, 41, 0.92)');
  const detailSurface = useColorModeValue('rgba(247, 250, 248, 0.92)', 'rgba(8, 24, 31, 0.70)');
  const mutedSurface = useColorModeValue('rgba(255,255,255,0.52)', 'rgba(8, 24, 31, 0.66)');
  const borderColor = useColorModeValue('rgba(18, 50, 58, 0.10)', 'rgba(255,255,255,0.08)');
  const headingColor = useColorModeValue('#14363d', '#edf5f3');
  const bodyColor = useColorModeValue('#445862', '#bfd1d6');
  const mutedColor = useColorModeValue('#60747d', '#9bb0b7');
  const quietHoverBg = useColorModeValue('white', 'rgba(18, 42, 51, 0.92)');
  const softShadow = useColorModeValue(
    '0 14px 36px rgba(15, 23, 42, 0.08)',
    '0 14px 36px rgba(0, 0, 0, 0.28)',
  );
  const hoverCardShadow = useColorModeValue(
    '0 24px 46px rgba(15, 23, 42, 0.12)',
    '0 24px 46px rgba(0, 0, 0, 0.34)',
  );
  const hoverCardBorder = useColorModeValue('rgba(47, 159, 121, 0.22)', 'rgba(125, 206, 176, 0.22)');

  const startingPrice = allLands.length > 0
    ? Math.min(...allLands.map((land) => land.price))
    : null;
  const titledCount = allLands.filter((land) => land.hasTitle).length;
  const districtCount = new Set(allLands.map((land) => land.district)).size;
  const executiveCount = allLands.filter((land) => land.landUse === 'Executive').length;

  const stats = useMemo(() => [
    {
      value: `${allLands.length}+`,
      label: 'Available opportunities',
      detail: 'A live snapshot of the current plots in the Zalseef portfolio.',
    },
    {
      value: startingPrice ? formatPrice(startingPrice) : 'UGX --',
      label: 'Starting price',
      detail: 'Useful for entering the search with a more realistic budget range.',
    },
    {
      value: `${titledCount}+`,
      label: 'Title-ready plots',
      detail: 'Listings already marked with clearer documentation confidence.',
    },
    {
      value: `${executiveCount}+`,
      label: 'Executive options',
      detail: 'Premium opportunities for buyers comparing more elevated residential plots.',
    },
    {
      value: `${districtCount}`,
      label: 'District focus',
      detail: 'Coverage centered on Mbarara and nearby areas clients ask about often.',
    },
    {
      value: 'Guided',
      label: 'Next-step support',
      detail: 'Shortlisting can move directly into inquiries, calls, and guided site visits.',
    },
  ], [allLands.length, districtCount, executiveCount, startingPrice, titledCount]);

  useEffect(() => {
    if (location.hash !== '#listing-results') {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      document.getElementById('listing-results')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 140);

    return () => window.clearTimeout(timer);
  }, [location.hash]);

  return (
    <Box w="100%" minH="100vh" bg={pageBackground} overflowX="hidden">
      <Box maxW="1720px" mx="auto" px={{ base: 4, md: 6, xl: 8 }} py={{ base: 6, md: 8, xl: 10 }}>
        <VStack spacing={0} align="stretch">
          <Box
            bg={heroSurface}
            border="1px solid"
            borderColor={borderColor}
            boxShadow={softShadow}
            overflow="hidden"
          >
            <Grid templateColumns={{ base: '1fr', xl: 'minmax(0, 1.08fr) minmax(420px, 0.92fr)' }} gap={0}>
              <VStack align="flex-start" spacing={5} px={{ base: 5, md: 7, xl: 8 }} py={{ base: 6, md: 7, xl: 8 }}>
                <Badge
                  bg={mutedSurface}
                  color={headingColor}
                  px={3}
                  py={1.5}
                  borderRadius="0"
                  textTransform="none"
                >
                  Land For Sale
                </Badge>

                <Heading
                  color={headingColor}
                  fontSize={{ base: '3xl', md: '5xl', xl: '6xl' }}
                  lineHeight={{ base: 1.08, md: 1.02 }}
                  letterSpacing="-0.04em"
                  maxW={{ base: '100%', md: '14ch', xl: '14ch' }}
                >
                  Browse plots with a cleaner flow from search to site visit.
                </Heading>

                <Text color={bodyColor} fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.9" maxW="66ch">
                  This page now follows the stronger Homeland listing rhythm: clear hero first, search next,
                  then listing controls and property comparison before the final contact step.
                </Text>

                <HStack spacing={3} flexWrap="wrap">
                  <Button
                    as="a"
                    href="#listing-results"
                    size="lg"
                    bg="linear-gradient(135deg, #2f9f79 0%, #195b45 100%)"
                    color="white"
                    rightIcon={<FaArrowRight />}
                    borderRadius="0"
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: '0 18px 38px rgba(47, 159, 121, 0.24)',
                    }}
                  >
                    View Listings
                  </Button>

                  <Button
                    as={RouterLink}
                    to="/contact"
                    size="lg"
                    variant="outline"
                    borderColor={borderColor}
                    bg={cardSurface}
                    color={headingColor}
                    leftIcon={<FaPhoneAlt />}
                    borderRadius="0"
                    _hover={{
                      bg: quietHoverBg,
                      transform: 'translateY(-2px)',
                    }}
                  >
                    Talk To Our Team
                  </Button>
                </HStack>
              </VStack>

              <Grid templateColumns={{ base: '1fr', md: 'repeat(2, minmax(0, 1fr))' }} gap="1px" bg={borderColor}>
                {stats.map((item) => (
                  <Box
                    key={item.label}
                    px={{ base: 5, md: 6 }}
                    py={{ base: 5, md: 6 }}
                    bg={cardSurface}
                  >
                    <Text color={headingColor} fontSize={{ base: '2xl', md: '3xl' }} fontWeight="700" letterSpacing="-0.05em">
                      {item.value}
                    </Text>
                    <Text color={headingColor} fontWeight="600" mt={2}>
                      {item.label}
                    </Text>
                    <Text color={mutedColor} fontSize="sm" lineHeight="1.8" mt={2}>
                      {item.detail}
                    </Text>
                  </Box>
                ))}
              </Grid>
            </Grid>
          </Box>

          <Box position="relative" zIndex={2} mt={{ base: '-52px', md: '-68px' }}>
            <Box maxW="1500px" mx="auto">
              <Search />
            </Box>
          </Box>

          <VStack spacing={{ base: 7, md: 8 }} align="stretch" pt={{ base: 6, md: 7 }}>
            <Grid templateColumns="repeat(auto-fit, minmax(min(100%, 250px), 1fr))" gap={4} alignItems="stretch">
              {flowSteps.map((step, index) => (
                <InteractiveCard
                  key={step.title}
                  bg={cardSurface}
                  border="1px solid"
                  borderColor={borderColor}
                  boxShadow={softShadow}
                  hoverShadow={hoverCardShadow}
                  hoverBorderColor={hoverCardBorder}
                  hoverLift={6}
                  maxTilt={4}
                  px={{ base: 5, md: 6 }}
                  py={{ base: 5, md: 6 }}
                  h="100%"
                >
                  <VStack align="flex-start" spacing={4} h="100%">
                    <HStack spacing={3}>
                      <Box
                        minW="40px"
                        h="40px"
                        bg="rgba(47, 159, 121, 0.12)"
                        color="#2f9f79"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontWeight="700"
                      >
                        {index + 1}
                      </Box>
                      <Icon as={FaCheckCircle} color="#2f9f79" boxSize={4.5} />
                    </HStack>

                    <Heading fontSize={{ base: 'xl', md: '2xl' }} color={headingColor} lineHeight="1.2">
                      {step.title}
                    </Heading>

                    <Text color={bodyColor} lineHeight="1.85">
                      {step.text}
                    </Text>
                  </VStack>
                </InteractiveCard>
              ))}
            </Grid>

            <Box
              id="listing-results"
              scrollMarginTop={{ base: '100px', md: '120px' }}
              bg={heroSurface}
              border="1px solid"
              borderColor={borderColor}
              boxShadow={softShadow}
              px={{ base: 4, md: 5, xl: 6 }}
              py={{ base: 5, md: 6 }}
            >
              <Stack spacing={{ base: 5, md: 6 }}>
                <VStack align="flex-start" spacing={2}>
                  <HStack spacing={2} color={headingColor}>
                    <Icon as={FaMapMarkedAlt} boxSize={4} />
                    <Text fontSize="sm" fontWeight="600">
                      Current Listings
                    </Text>
                  </HStack>
                  <Heading fontSize={{ base: '2xl', md: '4xl' }} color={headingColor} letterSpacing="-0.03em">
                    Search, compare, and move into the right property conversation.
                  </Heading>
                  <Text color={bodyColor} maxW="72ch" lineHeight="1.9">
                    The reference pages keep the main job simple here: present the listings cleanly.
                    The comparison tools stay in place below, while this section keeps the focus on the actual properties.
                  </Text>
                </VStack>

                <LandList />
              </Stack>
            </Box>

            <Grid templateColumns="repeat(auto-fit, minmax(min(100%, 250px), 1fr))" gap={4} alignItems="stretch">
              {supportCards.map((card) => (
                <InteractiveCard
                  key={card.title}
                  bg={cardSurface}
                  border="1px solid"
                  borderColor={borderColor}
                  boxShadow={softShadow}
                  hoverShadow={hoverCardShadow}
                  hoverBorderColor={hoverCardBorder}
                  hoverLift={6}
                  maxTilt={4}
                  px={{ base: 5, md: 6 }}
                  py={{ base: 5, md: 6 }}
                  h="100%"
                >
                  <VStack align="flex-start" spacing={4} h="100%">
                    <Box
                      w="52px"
                      h="52px"
                      bg={detailSurface}
                      color="#2f9f79"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      border="1px solid"
                      borderColor={borderColor}
                    >
                      <Icon as={card.icon} boxSize={5} />
                    </Box>
                    <Heading fontSize={{ base: 'xl', md: '2xl' }} color={headingColor} lineHeight="1.18">
                      {card.title}
                    </Heading>
                    <Text color={bodyColor} lineHeight="1.85">
                      {card.text}
                    </Text>
                  </VStack>
                </InteractiveCard>
              ))}
            </Grid>

            <Testimonials
              title="A little buyer confidence before the next call."
              description="This stays deliberately small on the listings page so it adds social proof without pulling attention away from the properties."
              maxItems={2}
              columns={{ base: 1, xl: 2 }}
              boxed
            />

            <Box
              bg={cardSurface}
              border="1px solid"
              borderColor={borderColor}
              boxShadow={softShadow}
              px={{ base: 5, md: 6, xl: 8 }}
              py={{ base: 6, md: 7 }}
            >
              <Stack direction={{ base: 'column', xl: 'row' }} justify="space-between" align={{ base: 'flex-start', xl: 'center' }} spacing={5}>
                <VStack align="flex-start" spacing={2}>
                  <Text fontSize="sm" fontWeight="700" letterSpacing="0.16em" textTransform="uppercase" color="#2f9f79">
                    Need Help Choosing?
                  </Text>
                  <Heading fontSize={{ base: '2xl', md: '3xl' }} color={headingColor} lineHeight="1.12">
                    Shortlist the plot first, then let us guide the next practical step.
                  </Heading>
                  <Text color={bodyColor} maxW="62ch" lineHeight="1.85">
                    If two or three options are close, our team can help you compare location, access,
                    price, and documentation before you commit to a visit or payment conversation.
                  </Text>
                </VStack>

                <HStack spacing={3} flexWrap="wrap">
                  <Button
                    as={RouterLink}
                    to="/contact"
                    bg="linear-gradient(135deg, #2f9f79 0%, #195b45 100%)"
                    color="white"
                    leftIcon={<FaPhoneAlt />}
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: '0 18px 38px rgba(47, 159, 121, 0.24)',
                    }}
                  >
                    Talk To Our Team
                  </Button>
                  <Button
                    as={RouterLink}
                    to="/about"
                    variant="outline"
                    borderColor={borderColor}
                    color={headingColor}
                    rightIcon={<FaArrowRight />}
                    _hover={{ bg: detailSurface }}
                  >
                    Learn About Zalseef
                  </Button>
                </HStack>
              </Stack>
            </Box>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default LandForSale;
