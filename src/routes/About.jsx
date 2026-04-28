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
import { Link as RouterLink } from 'react-router-dom';
import {
  FaArrowRight,
  FaHandshake,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShieldAlt,
} from 'react-icons/fa';

import InteractiveCard from '../components/InteractiveCard';
import Testimonials from '../components/Testimonials';
import { useLandCollection } from '../context/LandContext';
import { teamDirectory } from '../teamData';

const companyStats = [
  { value: '2000+', label: 'Plots sold' },
  { value: '1000+', label: 'Happy clients' },
  { value: '10+', label: 'Years of experience' },
  { value: '12', label: 'Districts served' },
];

const trustHighlights = [
  {
    icon: FaShieldAlt,
    title: 'Verified and clearer transactions',
    text: 'We focus on authentic land, practical documentation checks, and fewer surprises before payment.',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Local market guidance',
    text: 'Our work is rooted in Mbarara and surrounding areas, which helps buyers compare location with more context.',
  },
  {
    icon: FaHandshake,
    title: 'Support that stays practical',
    text: 'From shortlisting to site visits and transfer questions, we guide buyers through the next real step.',
  },
];

const companyPillars = [
  {
    title: 'Our Mission',
    text: 'To provide authentic land with clearer guidance, transparent transactions, and a buying process clients can understand with confidence.',
  },
  {
    title: 'Our Vision',
    text: 'To remain one of the most trusted land brands in Western Uganda by combining honesty, consistency, and practical buyer support.',
  },
  {
    title: 'How We Work',
    text: 'We help clients compare land calmly, verify what matters, arrange guided site visits, and move toward ownership with fewer blind spots.',
  },
];

const About = () => {
  const { allLands } = useLandCollection();
  const showcaseLand = useMemo(
    () => allLands.find((land) => land.id === 31) || allLands[0],
    [allLands],
  );
  const leadMember = teamDirectory[0];

  const pageBackground = useColorModeValue(
    'linear-gradient(180deg, #f7f1e7 0%, #efe7db 100%)',
    'linear-gradient(180deg, #06141a 0%, #0b1f28 100%)',
  );
  const heroSurface = useColorModeValue('rgba(222, 235, 241, 0.96)', 'rgba(12, 32, 41, 0.94)');
  const cardSurface = useColorModeValue('rgba(255,255,255,0.88)', 'rgba(12, 32, 41, 0.92)');
  const lightSurface = useColorModeValue('rgba(247, 250, 248, 0.92)', 'rgba(8, 24, 31, 0.70)');
  const mutedSurface = useColorModeValue('rgba(255,255,255,0.52)', 'rgba(8, 24, 31, 0.68)');
  const overlayBg = useColorModeValue(
    'linear-gradient(180deg, rgba(12, 38, 46, 0.08) 0%, rgba(12, 38, 46, 0.70) 100%)',
    'linear-gradient(180deg, rgba(4, 18, 23, 0.12) 0%, rgba(4, 18, 23, 0.76) 100%)',
  );
  const borderColor = useColorModeValue('rgba(18, 50, 58, 0.10)', 'rgba(255,255,255,0.08)');
  const headingColor = useColorModeValue('#14363d', '#edf5f3');
  const bodyColor = useColorModeValue('#51656e', '#b3c6cc');
  const mutedColor = useColorModeValue('#6b7f87', '#9cb1b8');
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

  return (
    <Box w="100%" minH="100vh" bg={pageBackground} overflowX="hidden">
      <Box w="100%" px={{ base: 4, md: 6, xl: 8 }} pt={{ base: 1, md: 2, xl: 3 }} pb={{ base: 6, md: 8, xl: 10 }}>
        <VStack spacing={{ base: 5, md: 6 }} align="stretch">
          <Box
            bg={heroSurface}
            border="1px solid"
            borderColor={borderColor}
            boxShadow={softShadow}
            overflow="hidden"
          >
            <Grid templateColumns={{ base: '1fr', xl: 'minmax(0, 1.04fr) minmax(360px, 0.96fr)' }} gap={0}>
              <VStack align="flex-start" spacing={5} px={{ base: 5, md: 7, xl: 8 }} py={{ base: 6, md: 7, xl: 8 }}>
                <Badge
                  bg={mutedSurface}
                  color={headingColor}
                  px={3}
                  py={1.5}
                  borderRadius="0"
                  textTransform="none"
                >
                  About Zalseef Estates
                </Badge>

                <Heading
                  color={headingColor}
                  fontSize={{ base: '3xl', md: '5xl', xl: '6xl' }}
                  lineHeight={{ base: 1.08, md: 1.02 }}
                  letterSpacing="-0.04em"
                  maxW={{ base: '100%', md: '14ch', xl: '15ch' }}
                >
                  Land guidance built on trust, clarity, and local knowledge.
                </Heading>

                <Text color={bodyColor} fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.9" maxW="64ch">
                  Zalseef Estates helps buyers move from first inquiry to final decision with a clearer
                  sense of price, documentation, location, and the next practical step toward ownership.
                </Text>

                <HStack spacing={3} flexWrap="wrap">
                  <Button
                    as={RouterLink}
                    to="/land-for-sale"
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
                    Explore Listings
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
                    Contact Our Team
                  </Button>
                </HStack>

                <Grid templateColumns="repeat(auto-fit, minmax(min(100%, 150px), 1fr))" gap={3} w="100%">
                  {companyStats.map((item) => (
                    <Box
                      key={item.label}
                      bg={cardSurface}
                      border="1px solid"
                      borderColor={borderColor}
                      px={{ base: 4, md: 4.5 }}
                      py={{ base: 4, md: 4.5 }}
                    >
                      <Text color={headingColor} fontSize={{ base: '2xl', md: '3xl' }} fontWeight="700" letterSpacing="-0.05em">
                        {item.value}
                      </Text>
                      <Text color={mutedColor} fontSize="sm" mt={1.5}>
                        {item.label}
                      </Text>
                    </Box>
                  ))}
                </Grid>
              </VStack>

              <Box position="relative" minH={{ base: '340px', md: '460px', xl: '100%' }}>
                <Image
                  src={showcaseLand?.imageLg || showcaseLand?.image || leadMember.image}
                  alt={showcaseLand?.name || 'Zalseef Estates property showcase'}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
                <Box position="absolute" inset={0} bg={overlayBg} />

                <VStack
                  position="absolute"
                  left={{ base: 4, md: 6 }}
                  right={{ base: 4, md: 'auto' }}
                  bottom={{ base: 4, md: 6 }}
                  align="flex-start"
                  spacing={3}
                  maxW={{ base: '100%', md: '420px' }}
                >
                  <Badge bg="rgba(255,255,255,0.16)" color="white" px={3} py={1.5} borderRadius="0" textTransform="none">
                    Rooted in Mbarara
                  </Badge>
                  <Heading color="white" fontSize={{ base: '2xl', md: '3xl' }} lineHeight="1.08">
                    Real land opportunities backed by clearer buyer support.
                  </Heading>
                  <Text color="whiteAlpha.900" lineHeight="1.85">
                    We focus on helping clients compare plots more calmly, verify what matters, and move with better confidence.
                  </Text>
                </VStack>
              </Box>
            </Grid>
          </Box>

          <Grid templateColumns={{ base: '1fr', xl: 'minmax(360px, 0.9fr) minmax(0, 1.1fr)' }} gap={6} alignItems="stretch">
            <Box
              bg={cardSurface}
              border="1px solid"
              borderColor={borderColor}
              boxShadow={softShadow}
              overflow="hidden"
            >
              <AspectRatio ratio={4 / 4.5}>
                <Image src={leadMember.image} alt={leadMember.name} objectFit="cover" objectPosition="center top" />
              </AspectRatio>
            </Box>

            <Box
              bg={cardSurface}
              border="1px solid"
              borderColor={borderColor}
              boxShadow={softShadow}
              px={{ base: 5, md: 6, xl: 7 }}
              py={{ base: 5, md: 6, xl: 7 }}
            >
              <VStack align="stretch" spacing={5}>
                <VStack align="flex-start" spacing={2}>
                  <Text fontSize="sm" fontWeight="700" letterSpacing="0.16em" textTransform="uppercase" color="#2f9f79">
                    Our Company
                  </Text>
                  <Heading fontSize={{ base: '2xl', md: '4xl' }} color={headingColor} lineHeight="1.08">
                    Built to make land buying feel more understandable.
                  </Heading>
                </VStack>

                <Text color={bodyColor} lineHeight="1.9">
                  Zalseef Estates serves buyers in Mbarara and surrounding areas with a strong focus
                  on verified land, clear communication, and a process that feels guided rather than rushed.
                </Text>

                <Text color={bodyColor} lineHeight="1.9">
                  Our work covers land selection, site visits, documentation conversations, and the
                  practical support clients need before they move into payment and transfer.
                </Text>

                <Box bg={lightSurface} border="1px solid" borderColor={borderColor} px={{ base: 4, md: 5 }} py={{ base: 4, md: 5 }}>
                  <Text color={headingColor} fontWeight="700">
                    "Land ownership should feel secure, not confusing. We aim to give buyers quality land and a process they can trust."
                  </Text>
                  <Text color={mutedColor} fontSize="sm" mt={2}>
                    {leadMember.name}, {leadMember.role}
                  </Text>
                </Box>

                <Grid templateColumns="repeat(auto-fit, minmax(min(100%, 220px), 1fr))" gap={3}>
                  {companyPillars.map((item) => (
                    <Box
                      key={item.title}
                      bg={lightSurface}
                      border="1px solid"
                      borderColor={borderColor}
                      px={{ base: 4, md: 4.5 }}
                      py={{ base: 4, md: 4.5 }}
                    >
                      <Text color={headingColor} fontWeight="700" mb={2}>
                        {item.title}
                      </Text>
                      <Text color={bodyColor} fontSize="sm" lineHeight="1.8">
                        {item.text}
                      </Text>
                    </Box>
                  ))}
                </Grid>
              </VStack>
            </Box>
          </Grid>

          <Box>
            <VStack align="flex-start" spacing={3} mb={5}>
              <Text fontSize="sm" fontWeight="700" letterSpacing="0.16em" textTransform="uppercase" color="#2f9f79">
                Why Clients Trust Us
              </Text>
              <Heading fontSize={{ base: '2xl', md: '4xl' }} color={headingColor} lineHeight="1.08">
                A land brand organized around confidence, not guesswork.
              </Heading>
              <Text color={bodyColor} maxW="70ch" lineHeight="1.9">
                The strongest parts of the Homeland about page are the simple company story and trust-building sections.
                This version keeps that structure but grounds it in how Zalseef actually supports buyers.
              </Text>
            </VStack>

            <Grid templateColumns="repeat(auto-fit, minmax(min(100%, 260px), 1fr))" gap={4} alignItems="stretch">
              {trustHighlights.map((item) => (
                <InteractiveCard
                  key={item.title}
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
                      w="54px"
                      h="54px"
                      bg="rgba(47,159,121,0.12)"
                      color="#2f9f79"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon as={item.icon} boxSize={5.5} />
                    </Box>

                    <Heading fontSize={{ base: 'xl', md: '2xl' }} color={headingColor} lineHeight="1.18">
                      {item.title}
                    </Heading>

                    <Text color={bodyColor} lineHeight="1.85">
                      {item.text}
                    </Text>
                  </VStack>
                </InteractiveCard>
              ))}
            </Grid>
          </Box>

          <Testimonials
            title="A small layer of proof from real buyers."
            description="These quick client notes fit best here on the About page because they reinforce trust without turning the page into a long testimonials wall."
            maxItems={3}
            boxed
          />

          <Box bg="#0b151c" color="white" px={{ base: 5, md: 6, xl: 8 }} py={{ base: 8, md: 10 }}>
            <Grid templateColumns={{ base: '1fr', xl: 'minmax(0, 0.88fr) 1.12fr' }} gap={{ base: 8, xl: 12 }} alignItems="center">
              <VStack align="flex-start" spacing={4}>
                <Text fontSize="sm" fontWeight="700" letterSpacing="0.16em" textTransform="uppercase" color="#9ed8b1">
                  Leadership and Team
                </Text>
                <Heading fontSize={{ base: '3xl', md: '5xl' }} lineHeight="1.02">
                  The people clients are likely to meet during the process.
                </Heading>
                <Text color="whiteAlpha.800" lineHeight="1.9" maxW="58ch">
                  Homeland uses agent sections to humanize the company. Here, that idea becomes a more direct
                  introduction to the Zalseef team members buyers interact with most often.
                </Text>
                <HStack spacing={3} flexWrap="wrap">
                  <Button
                    as={RouterLink}
                    to="/contact"
                    bg="#2f9f79"
                    color="white"
                    leftIcon={<FaPhoneAlt />}
                    _hover={{ bg: '#257b5f' }}
                  >
                    Contact Our Team
                  </Button>
                  <Button
                    as={RouterLink}
                    to="/land-for-sale"
                    variant="outline"
                    borderColor="rgba(255,255,255,0.14)"
                    color="white"
                    rightIcon={<FaArrowRight />}
                    _hover={{ bg: 'rgba(255,255,255,0.06)' }}
                  >
                    View Listings
                  </Button>
                </HStack>
              </VStack>

              <Grid templateColumns={{ base: '1fr', md: 'repeat(2, minmax(0, 1fr))' }} gap={4}>
                {teamDirectory.map((member) => (
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
                  Work With Confidence
                </Text>
                <Heading fontSize={{ base: '2xl', md: '3xl' }} color={headingColor} lineHeight="1.12">
                  Explore the listings or speak with the team directly.
                </Heading>
                <Text color={bodyColor} maxW="62ch" lineHeight="1.85">
                  The About page should end with a clear next move, so this closes the page with the two most useful actions.
                </Text>
              </VStack>

              <HStack spacing={3} flexWrap="wrap">
                <Button
                  as={RouterLink}
                  to="/land-for-sale"
                  bg="linear-gradient(135deg, #2f9f79 0%, #195b45 100%)"
                  color="white"
                  rightIcon={<FaArrowRight />}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: '0 18px 38px rgba(47, 159, 121, 0.24)',
                  }}
                >
                  Explore Listings
                </Button>
                <Button
                  as={RouterLink}
                  to="/contact"
                  variant="outline"
                  borderColor={borderColor}
                  color={headingColor}
                  leftIcon={<FaPhoneAlt />}
                  _hover={{ bg: lightSurface }}
                >
                  Speak With Us
                </Button>
              </HStack>
            </Stack>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default About;
