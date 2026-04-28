import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Icon,
  Image,
  Link as ChakraLink,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaCheckCircle,
  FaFileSignature,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShieldAlt,
  FaThLarge,
} from 'react-icons/fa';
import { BiLandscape, BiRuler } from 'react-icons/bi';

import Banner from '../components/Banner';
import InteractiveCard from '../components/InteractiveCard';
import Search from '../components/Search/Search';
import { useLandCollection } from '../context/LandContext';
import { teamDirectory } from '../teamData';

const formatPrice = (price) => `UGX ${(price / 1000000).toFixed(1)}M`;

const featuredListingIds = [31, 30, 24, 23, 18, 9];

const serviceCards = [
  {
    icon: FaShieldAlt,
    title: 'Verified Listings',
    text: 'We focus on land opportunities with clearer documentation and better confidence before clients commit.',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Guided Site Visits',
    text: 'Buyers can compare location, access roads, and surroundings with practical support from our team.',
  },
  {
    icon: FaFileSignature,
    title: 'Clearer Buying Support',
    text: 'We help clients understand what to check, what to ask for, and what to confirm before payment.',
  },
];

const featuredTeamMembers = teamDirectory.slice(0, 3);

const Home = () => {
  const { allLands } = useLandCollection();
  const pageBackground = useColorModeValue('#f3f5f7', '#081117');
  const sectionMuted = useColorModeValue('#6b7c86', '#b8ccd0');
  const headingColor = useColorModeValue('#1f3138', '#edf5f3');
  const bodyColor = useColorModeValue('#556871', '#b9ccd1');
  const lightSurface = useColorModeValue('#f9fbfc', '#0c1a21');
  const cardSurface = useColorModeValue('#ffffff', '#0d1b21');
  const cardBorder = useColorModeValue('rgba(18, 50, 58, 0.10)', 'rgba(255,255,255,0.08)');
  const cardShadow = useColorModeValue(
    '0 18px 40px rgba(15, 23, 42, 0.08)',
    '0 18px 40px rgba(0, 0, 0, 0.30)',
  );
  const hoverCardShadow = useColorModeValue(
    '0 28px 52px rgba(15, 23, 42, 0.14)',
    '0 28px 52px rgba(0, 0, 0, 0.34)',
  );
  const hoverCardBorder = useColorModeValue('rgba(47, 159, 121, 0.22)', 'rgba(125, 206, 176, 0.22)');

  const featuredListings = useMemo(() => featuredListingIds
    .map((id) => allLands.find((land) => land.id === id))
    .filter(Boolean), [allLands]);

  const insightCards = useMemo(() => [
    {
      image: featuredListings[0]?.imageLg || featuredListings[0]?.image,
      title: 'How to compare executive plots with less guesswork',
      text: 'Start with the plot size, road access, and the kind of development you plan before judging price alone.',
      to: '/land-for-sale',
    },
    {
      image: featuredListings[2]?.imageLg || featuredListings[2]?.image,
      title: 'Why site visits still matter before final decisions',
      text: 'Photos help buyers shortlist, but a guided visit gives a much better sense of slope, access, and neighborhood context.',
      to: '/gallery',
    },
    {
      image: featuredListings[4]?.imageLg || featuredListings[4]?.image,
      title: 'What to confirm before paying for land',
      text: 'Documentation status, boundary clarity, and the purchase path should all be reviewed before money changes hands.',
      to: '/payment-methods',
    },
  ].filter((card) => card.image), [featuredListings]);

  return (
    <Box w="100%" minH="100vh" bg={pageBackground} overflowX="hidden">
      <Banner />

      <Box position="relative" zIndex={2} mt={{ base: '-56px', md: '-74px' }} px={{ base: 4, md: 6, xl: 8 }}>
        <Box maxW="1680px" mx="auto">
          <Search />
        </Box>
      </Box>

      <Box maxW="1720px" mx="auto" px={{ base: 4, md: 6, xl: 8 }} py={{ base: 10, md: 14, xl: 16 }}>
        <VStack align="stretch" spacing={{ base: 10, md: 14 }}>
          <Box bg={cardSurface} border="1px solid" borderColor={cardBorder} boxShadow={cardShadow} px={{ base: 4, md: 5 }} py={{ base: 4, md: 5 }}>
            <Grid templateColumns={{ base: '1fr', xl: 'minmax(0, 1fr) auto' }} gap={5} alignItems="center">
              <VStack align="flex-start" spacing={2}>
                <HStack spacing={3} color={headingColor}>
                  <Icon as={FaThLarge} color="#2f9f79" />
                  <Text fontWeight="700" textTransform="uppercase" letterSpacing="0.14em" fontSize="sm">
                    Featured View
                  </Text>
                </HStack>
                <Heading fontSize={{ base: '2xl', md: '4xl' }} color={headingColor} lineHeight="1.08">
                  Homeland-inspired sections, rebuilt around your actual Zalseef listings.
                </Heading>
                <Text color={bodyColor} lineHeight="1.85" maxW="70ch">
                  This layout follows the structure of the Homeland template, but the property cards,
                  team highlights, and featured visuals are now tied to your own land and company content.
                </Text>
              </VStack>

              <Stack direction={{ base: 'column', sm: 'row' }} spacing={3}>
                <Button as={Link} to="/land-for-sale" bg="#2f9f79" color="white" _hover={{ bg: '#257b5f' }}>
                  View All Listings
                </Button>
                <Button as={Link} to="/gallery" variant="outline" borderColor="rgba(18, 50, 58, 0.12)" color={headingColor}>
                  Open Gallery
                </Button>
              </Stack>
            </Grid>
          </Box>

          <Box>
            <VStack align="flex-start" spacing={3} mb={6}>
              <Text fontSize="sm" fontWeight="800" letterSpacing="0.16em" textTransform="uppercase" color="#2f9f79">
                Properties
              </Text>
              <Heading fontSize={{ base: '3xl', md: '5xl' }} color={headingColor} lineHeight="1.02">
                Featured land opportunities
              </Heading>
              <Text color={bodyColor} maxW="72ch" lineHeight="1.85">
                These listings give visitors the same immediate property-first feeling as the Homeland
                template, but with real Zalseef data and direct links into each land detail page.
              </Text>
            </VStack>

            <Grid
              templateColumns="repeat(auto-fit, minmax(min(100%, 340px), 1fr))"
              gap={6}
              alignItems="stretch"
            >
              {featuredListings.map((listing) => (
                <InteractiveCard
                  key={listing.id}
                  as={Link}
                  to={`/land-details/${listing.id}`}
                  bg={cardSurface}
                  border="1px solid"
                  borderColor={cardBorder}
                  boxShadow={cardShadow}
                  hoverShadow={hoverCardShadow}
                  hoverBorderColor={hoverCardBorder}
                  hoverLift={7}
                  maxTilt={4}
                  overflow="hidden"
                  display="flex"
                  flexDirection="column"
                  h="100%"
                >
                  <Box position="relative">
                    <AspectRatio ratio={4 / 3}>
                      <Image src={listing.imageLg || listing.image} alt={listing.name} objectFit="cover" />
                    </AspectRatio>
                    <HStack position="absolute" top={4} left={4} spacing={2}>
                      <Badge bg="#c74734" color="white" px={3} py={1.5}>
                        Sale
                      </Badge>
                      <Badge bg="#2f9f79" color="white" px={3} py={1.5}>
                        {listing.hasTitle ? 'Title Ready' : 'Available'}
                      </Badge>
                    </HStack>
                  </Box>

                  <VStack align="stretch" spacing={4} p={{ base: 4, md: 5 }} flex="1">
                    <VStack align="flex-start" spacing={2}>
                      <Heading fontSize={{ base: 'xl', md: '2xl' }} color={headingColor} lineHeight="1.15">
                        {listing.name}
                      </Heading>
                      <HStack spacing={2} color={bodyColor}>
                        <Icon as={FaMapMarkerAlt} color="#2f9f79" />
                        <Text fontSize="sm">{listing.location}</Text>
                      </HStack>
                      <Text color={bodyColor} fontSize="sm" lineHeight="1.8" noOfLines={3}>
                        {listing.description}
                      </Text>
                    </VStack>

                    <Text color="#2f9f79" fontWeight="800" fontSize={{ base: '2xl', md: '3xl' }} letterSpacing="-0.04em">
                      {formatPrice(listing.price)}
                    </Text>

                    <Grid templateColumns="repeat(auto-fit, minmax(min(100%, 120px), 1fr))" gap={3}>
                      <Box bg={lightSurface} px={3} py={3} border="1px solid rgba(18, 50, 58, 0.08)" minW={0}>
                        <HStack spacing={2} mb={1}>
                          <Icon as={BiLandscape} color="#2f9f79" />
                          <Text fontSize="xs" fontWeight="700" textTransform="uppercase" letterSpacing="0.08em">
                            Use
                          </Text>
                        </HStack>
                        <Text fontSize="sm" color={bodyColor}>
                          {listing.landUse}
                        </Text>
                      </Box>
                      <Box bg={lightSurface} px={3} py={3} border="1px solid rgba(18, 50, 58, 0.08)" minW={0}>
                        <HStack spacing={2} mb={1}>
                          <Icon as={BiRuler} color="#2f9f79" />
                          <Text fontSize="xs" fontWeight="700" textTransform="uppercase" letterSpacing="0.08em">
                            Size
                          </Text>
                        </HStack>
                        <Text fontSize="sm" color={bodyColor}>
                          {listing.size}
                        </Text>
                      </Box>
                      <Box bg={lightSurface} px={3} py={3} border="1px solid rgba(18, 50, 58, 0.08)" minW={0}>
                        <HStack spacing={2} mb={1}>
                          <Icon as={FaCheckCircle} color="#2f9f79" />
                          <Text fontSize="xs" fontWeight="700" textTransform="uppercase" letterSpacing="0.08em">
                            Title
                          </Text>
                        </HStack>
                        <Text fontSize="sm" color={bodyColor}>
                          {listing.hasTitle ? 'Ready' : 'Processing'}
                        </Text>
                      </Box>
                    </Grid>
                  </VStack>
                </InteractiveCard>
              ))}
            </Grid>
          </Box>

          <Box bg={lightSurface} px={{ base: 5, md: 6, xl: 8 }} py={{ base: 8, md: 10 }} border="1px solid rgba(18, 50, 58, 0.08)">
            <VStack spacing={3} textAlign="center" mb={8}>
              <Text fontSize="sm" fontWeight="800" letterSpacing="0.16em" textTransform="uppercase" color="#2f9f79">
                Why Choose Us
              </Text>
              <Heading fontSize={{ base: '3xl', md: '5xl' }} color={headingColor} lineHeight="1.04">
                A clearer land-buying experience
              </Heading>
              <Text color={bodyColor} maxW="68ch" lineHeight="1.85">
                The original Homeland template uses this section to explain trust and value. Here, it is
                focused on how Zalseef helps buyers evaluate land more calmly and more confidently.
              </Text>
            </VStack>

            <Grid
              templateColumns="repeat(auto-fit, minmax(min(100%, 250px), 1fr))"
              gap={5}
              alignItems="stretch"
            >
              {serviceCards.map((card) => (
                <InteractiveCard
                  key={card.title}
                  bg={cardSurface}
                  border="1px solid"
                  borderColor={cardBorder}
                  boxShadow={cardShadow}
                  hoverShadow={hoverCardShadow}
                  hoverBorderColor={hoverCardBorder}
                  hoverLift={6}
                  maxTilt={4}
                  px={{ base: 4, md: 5 }}
                  py={{ base: 5, md: 6 }}
                  h="100%"
                >
                  <VStack align="flex-start" spacing={4} h="100%">
                    <Box w="56px" h="56px" bg="rgba(47,159,121,0.12)" display="flex" alignItems="center" justifyContent="center">
                      <Icon as={card.icon} boxSize={6} color="#2f9f79" />
                    </Box>
                    <Heading fontSize="2xl" color={headingColor}>
                      {card.title}
                    </Heading>
                    <Text color={bodyColor} lineHeight="1.85">
                      {card.text}
                    </Text>
                  </VStack>
                </InteractiveCard>
              ))}
            </Grid>
          </Box>

          <Box>
            <VStack align="flex-start" spacing={3} mb={6}>
              <Text fontSize="sm" fontWeight="800" letterSpacing="0.16em" textTransform="uppercase" color="#2f9f79">
                Guidance
              </Text>
              <Heading fontSize={{ base: '3xl', md: '5xl' }} color={headingColor} lineHeight="1.04">
                Buying insights shaped around your listings
              </Heading>
            </VStack>

            <Grid
              templateColumns="repeat(auto-fit, minmax(min(100%, 290px), 1fr))"
              gap={6}
              alignItems="stretch"
            >
              {insightCards.map((card) => (
                <InteractiveCard
                  key={card.title}
                  bg={cardSurface}
                  border="1px solid"
                  borderColor={cardBorder}
                  boxShadow={cardShadow}
                  hoverShadow={hoverCardShadow}
                  hoverBorderColor={hoverCardBorder}
                  hoverLift={6}
                  maxTilt={4}
                  overflow="hidden"
                  display="flex"
                  flexDirection="column"
                  h="100%"
                >
                  <AspectRatio ratio={4 / 3}>
                    <Image src={card.image} alt={card.title} objectFit="cover" />
                  </AspectRatio>
                  <VStack align="flex-start" spacing={4} p={{ base: 4, md: 5 }} flex="1">
                    <Text fontSize="sm" fontWeight="800" letterSpacing="0.16em" textTransform="uppercase" color={sectionMuted}>
                      Property Note
                    </Text>
                    <Heading fontSize={{ base: 'xl', md: '2xl' }} color={headingColor} lineHeight="1.18">
                      {card.title}
                    </Heading>
                    <Text color={bodyColor} lineHeight="1.8">
                      {card.text}
                    </Text>
                    <Button as={Link} to={card.to} variant="ghost" color="#2f9f79" px={0} rightIcon={<FaArrowRight />} _hover={{ bg: 'transparent' }}>
                      Open Section
                    </Button>
                  </VStack>
                </InteractiveCard>
              ))}
            </Grid>
          </Box>

          <Box bg="#0b151c" color="white" px={{ base: 5, md: 6, xl: 8 }} py={{ base: 8, md: 10 }}>
            <Grid templateColumns={{ base: '1fr', xl: 'minmax(0, 0.9fr) 1.1fr' }} gap={{ base: 8, xl: 12 }} alignItems="center">
              <VStack align="flex-start" spacing={4}>
                <Text fontSize="sm" fontWeight="800" letterSpacing="0.16em" textTransform="uppercase" color="#9ed8b1">
                  Team
                </Text>
                <Heading fontSize={{ base: '3xl', md: '5xl' }} lineHeight="1.02">
                  Real people behind the property process
                </Heading>
                <Text color="whiteAlpha.800" lineHeight="1.9" maxW="56ch">
                  The Homeland template includes an agent section, so this version introduces the
                  Zalseef team members buyers are more likely to interact with directly.
                </Text>
                <Button as={Link} to="/contact" bg="#2f9f79" color="white" leftIcon={<FaPhoneAlt />} _hover={{ bg: '#257b5f' }}>
                  Contact Our Team
                </Button>
              </VStack>

              <Grid
                templateColumns={{ base: '1fr', md: 'repeat(2, minmax(0, 1fr))', xl: 'repeat(3, minmax(0, 1fr))' }}
                gap={5}
                alignItems="stretch"
              >
                {featuredTeamMembers.map((member) => (
                  <InteractiveCard
                    key={member.name}
                    bg="rgba(255,255,255,0.06)"
                    border="1px solid rgba(255,255,255,0.10)"
                    hoverBg="rgba(255,255,255,0.08)"
                    hoverBorderColor="rgba(158, 216, 177, 0.26)"
                    hoverShadow="0 26px 48px rgba(0, 0, 0, 0.28)"
                    hoverLift={6}
                    maxTilt={3.5}
                    overflow="hidden"
                    display="flex"
                    flexDirection="column"
                    h="100%"
                  >
                    <AspectRatio ratio={4 / 4.2}>
                      <Image src={member.image} alt={member.name} objectFit="cover" objectPosition="center top" />
                    </AspectRatio>
                    <VStack align="flex-start" spacing={3} p={4} flex="1">
                      <Heading fontSize="xl" lineHeight="1.15">
                        {member.name}
                      </Heading>
                      <Text color="#9ed8b1" fontSize="sm" fontWeight="700" textTransform="uppercase" letterSpacing="0.14em">
                        {member.role}
                      </Text>
                      <Text color="whiteAlpha.800" lineHeight="1.8" fontSize="sm">
                        {member.summary}
                      </Text>
                      <Box mt="auto" pt={1}>
                        <Text color="whiteAlpha.600" fontSize="xs" textTransform="uppercase" letterSpacing="0.08em" mb={1}>
                          {member.phoneLabel}
                        </Text>
                        <ChakraLink
                          href={`tel:${member.phone.replace(/\s+/g, '')}`}
                          color="white"
                          _hover={{ color: '#9ed8b1', textDecoration: 'none' }}
                        >
                          <HStack spacing={2}>
                            <Icon as={FaPhoneAlt} boxSize={3.5} color="#9ed8b1" />
                            <Text fontSize="sm" fontWeight="600">
                              {member.phone}
                            </Text>
                          </HStack>
                        </ChakraLink>
                      </Box>
                    </VStack>
                  </InteractiveCard>
                ))}
              </Grid>
            </Grid>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Home;
