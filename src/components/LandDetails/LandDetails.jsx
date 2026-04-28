import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Center,
  Grid,
  Heading,
  HStack,
  Icon,
  Spinner,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {
  BiCertification,
  BiLandscape,
  BiMap,
  BiRuler,
} from 'react-icons/bi';
import {
  FaArrowRight,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from 'react-icons/fa';

import { LandContext } from '../../context/LandContext';
import ContactForm from './ContactForm';
import ShareButtons from '../ShareButtons';

const propertyJourney = [
  {
    title: 'Send an inquiry',
    text: 'Start with the property that already matches your location, size, and budget requirements.',
  },
  {
    title: 'Schedule a site visit',
    text: 'Our team helps you confirm access, neighborhood context, and what the land feels like in person.',
  },
  {
    title: 'Review documentation',
    text: 'We walk through title status, ownership clarity, and the next practical steps before payment.',
  },
  {
    title: 'Complete the purchase',
    text: 'Move into payment planning and transfer with a clearer understanding of the transaction path.',
  },
];

const supportSteps = [
  'We review your message and confirm whether this plot still fits your budget and goal.',
  'We help arrange a site visit or direct discussion with the listing agent.',
  'We guide you through documentation questions before you move toward payment.',
];

const formatPrice = (price) => `UGX ${(price / 1000000).toFixed(1)}M`;

const LandDetails = () => {
  const { landId } = useParams();
  const { allLands, isLoading } = useContext(LandContext);

  const selectedLand = allLands.find((land) => String(land.id) === String(landId));

  const pageBackground = useColorModeValue(
    'radial-gradient(circle at 8% 0%, rgba(221, 127, 34, 0.18), transparent 20%), radial-gradient(circle at 92% 8%, rgba(47, 159, 121, 0.16), transparent 18%), linear-gradient(180deg, #f4ecdf 0%, #ece2d2 48%, #f6f2eb 100%)',
    'radial-gradient(circle at 12% 0%, rgba(47, 159, 121, 0.16), transparent 20%), radial-gradient(circle at 90% 8%, rgba(125, 206, 176, 0.10), transparent 18%), linear-gradient(180deg, #051218 0%, #091b23 44%, #07141a 100%)',
  );
  const heroShell = useColorModeValue('#0f252d', '#06161d');
  const heroPanelSurface = useColorModeValue(
    'linear-gradient(180deg, rgba(242, 248, 251, 0.98) 0%, rgba(220, 232, 240, 0.96) 100%)',
    'linear-gradient(180deg, rgba(10, 31, 40, 0.98) 0%, rgba(8, 23, 30, 0.98) 100%)',
  );
  const heroFactSurface = useColorModeValue('rgba(255,255,255,0.96)', 'rgba(10, 29, 37, 0.96)');
  const cardSurface = useColorModeValue('rgba(255,255,255,0.92)', 'rgba(11, 30, 38, 0.92)');
  const cardTintSurface = useColorModeValue('rgba(255, 249, 241, 0.94)', 'rgba(16, 40, 50, 0.94)');
  const detailSurface = useColorModeValue('rgba(247, 250, 248, 0.96)', 'rgba(9, 24, 31, 0.74)');
  const tintSurface = useColorModeValue('rgba(47, 159, 121, 0.12)', 'rgba(47, 159, 121, 0.20)');
  const warmSurface = useColorModeValue('rgba(221, 127, 34, 0.10)', 'rgba(221, 127, 34, 0.16)');
  const glassBadge = useColorModeValue('rgba(255,255,255,0.94)', 'rgba(255,255,255,0.12)');
  const imageLabelSurface = useColorModeValue('rgba(8, 20, 25, 0.42)', 'rgba(4, 12, 16, 0.52)');
  const overlayBg = useColorModeValue(
    'linear-gradient(180deg, rgba(10, 25, 31, 0.08) 0%, rgba(10, 25, 31, 0.82) 100%)',
    'linear-gradient(180deg, rgba(4, 18, 23, 0.10) 0%, rgba(4, 18, 23, 0.82) 100%)',
  );
  const borderColor = useColorModeValue('rgba(18, 50, 58, 0.10)', 'rgba(255,255,255,0.08)');
  const heroBorderColor = useColorModeValue('rgba(10, 26, 33, 0.08)', 'rgba(255,255,255,0.08)');
  const headingColor = useColorModeValue('#14363d', '#edf5f3');
  const heroHeadingColor = useColorModeValue('#103847', '#edf5f3');
  const bodyColor = useColorModeValue('#51656e', '#b3c6cc');
  const heroBodyColor = useColorModeValue('#4f6973', '#b8cdd4');
  const mutedColor = useColorModeValue('#6b7f87', '#9cb1b8');
  const heroMutedColor = useColorModeValue('#6f8591', '#99b1b8');
  const quietHoverBg = useColorModeValue('rgba(255,255,255,0.86)', 'rgba(255,255,255,0.08)');
  const liftShadow = useColorModeValue(
    '0 28px 70px rgba(15, 23, 42, 0.14)',
    '0 28px 70px rgba(0, 0, 0, 0.34)',
  );
  const sectionShadow = useColorModeValue(
    '0 16px 40px rgba(15, 23, 42, 0.10)',
    '0 16px 40px rgba(0, 0, 0, 0.28)',
  );

  if (isLoading) {
    return (
      <Center minH="70vh">
        <Spinner size="xl" color="#2f9f79" thickness="4px" />
      </Center>
    );
  }

  if (!selectedLand) {
    return (
      <Box w="100%" minH="100vh" bg={pageBackground} px={{ base: 4, md: 6 }} py={{ base: 12, md: 16 }}>
        <Box
          maxW="820px"
          mx="auto"
          textAlign="center"
          bg={cardSurface}
          border="1px solid"
          borderColor={borderColor}
          borderRadius="30px"
          boxShadow={sectionShadow}
          px={{ base: 6, md: 8 }}
          py={{ base: 10, md: 12 }}
        >
          <Heading size="lg" color={headingColor}>
            Property Not Found
          </Heading>
          <Text mt={4} color={bodyColor} lineHeight="1.8">
            The land you are looking for may no longer be available or the listing reference is incorrect.
          </Text>
        </Box>
      </Box>
    );
  }

  const displayPrice = selectedLand.isOfferOfDay && selectedLand.offerPrice
    ? formatPrice(selectedLand.offerPrice)
    : formatPrice(selectedLand.price);
  const originalPrice = selectedLand.isOfferOfDay && selectedLand.offerPrice
    ? formatPrice(selectedLand.price)
    : null;
  const agentPhone = selectedLand.agent?.phone || '256 708 124902';
  const normalizedPhone = `+${agentPhone.replace(/\s+/g, '')}`;

  const detailFacts = [
    { icon: BiMap, label: 'District', value: selectedLand.district },
    { icon: BiRuler, label: 'Plot Size', value: selectedLand.size },
    { icon: BiLandscape, label: 'Land Use', value: selectedLand.landUse },
    {
      icon: BiCertification,
      label: 'Title Status',
      value: selectedLand.hasTitle ? 'Registered title available' : 'Title processing',
    },
  ];

  const overviewCards = [
    {
      title: 'Location Fit',
      text: `Based in ${selectedLand.location}, this listing is useful for buyers focused on ${selectedLand.district}.`,
    },
    {
      title: 'Best Use',
      text: `Organized as ${selectedLand.landUse?.toLowerCase()} land, making it easier to compare against your intended development plan.`,
    },
    {
      title: 'Documentation',
      text: selectedLand.hasTitle
        ? 'The listing already signals stronger documentation confidence with title availability surfaced early.'
        : 'Title processing is still underway, so this is the right stage to ask documentation questions before committing.',
    },
  ];

  const featuredPoints = (selectedLand.features || []).slice(0, 6);

  return (
    <Box w="100%" minH="100vh" bg={pageBackground} position="relative" overflow="hidden">
      <Box position="absolute" inset={0} pointerEvents="none">
        <Box
          position="absolute"
          top="-140px"
          left="-80px"
          w="360px"
          h="360px"
          bg="rgba(221, 127, 34, 0.12)"
          filter="blur(90px)"
        />
        <Box
          position="absolute"
          top="120px"
          right="-120px"
          w="420px"
          h="420px"
          bg="rgba(47, 159, 121, 0.12)"
          filter="blur(100px)"
        />
      </Box>

      <Box position="relative" w="100%" px={{ base: 4, md: 6, xl: 8 }} py={{ base: 6, md: 8, xl: 10 }}>
        <VStack spacing={{ base: 6, xl: 7 }} align="stretch">
          <Box
            bg={heroShell}
            border="1px solid"
            borderColor={heroBorderColor}
            borderRadius={{ base: '28px', xl: '34px' }}
            boxShadow={liftShadow}
            overflow="hidden"
          >
            <Grid templateColumns={{ base: '1fr', xl: 'minmax(0, 1.15fr) minmax(430px, 0.85fr)' }} gap={0}>
              <VStack
                align="stretch"
                spacing={0}
                px={{ base: 4, md: 5, xl: 6 }}
                pt={{ base: 4, md: 5, xl: 6 }}
                pb={{ base: 5, md: 6 }}
              >
                <Box position="relative">
                  <AspectRatio ratio={16 / 10}>
                    <Box position="relative" borderRadius={{ base: '24px', xl: '28px' }} overflow="hidden">
                      <Box
                        as="img"
                        src={selectedLand.imageLg || selectedLand.image}
                        alt={selectedLand.name}
                        w="100%"
                        h="100%"
                        objectFit="cover"
                      />
                      <Box position="absolute" inset={0} bg={overlayBg} />

                      <HStack
                        position="absolute"
                        top={{ base: 4, md: 6 }}
                        left={{ base: 4, md: 6 }}
                        spacing={2}
                        flexWrap="wrap"
                      >
                        <Badge bg={glassBadge} color={heroHeadingColor} px={4} py={2} borderRadius="full" textTransform="none">
                          Property Spotlight
                        </Badge>
                        <Badge bg="rgba(255,255,255,0.18)" color="white" px={4} py={2} borderRadius="full" textTransform="none">
                          Listing #{selectedLand.id}
                        </Badge>
                        {selectedLand.isSold && (
                          <Badge bg="#c53030" color="white" px={4} py={2} borderRadius="full" textTransform="none">
                            Sold
                          </Badge>
                        )}
                        {selectedLand.isOfferOfDay && (
                          <Badge bg="#dd7f22" color="white" px={4} py={2} borderRadius="full" textTransform="none">
                            Offer Of The Day
                          </Badge>
                        )}
                      </HStack>

                      <VStack
                        position="absolute"
                        left={{ base: 4, md: 6 }}
                        right={{ base: 4, md: 'auto' }}
                        bottom={{ base: 4, md: 6 }}
                        align="flex-start"
                        spacing={3}
                        maxW={{ base: '100%', md: '560px' }}
                        bg={imageLabelSurface}
                        backdropFilter="blur(18px)"
                        border="1px solid rgba(255,255,255,0.12)"
                        borderRadius={{ base: '22px', md: '24px' }}
                        px={{ base: 4, md: 5 }}
                        py={{ base: 4, md: 5 }}
                      >
                        <Text
                          fontSize={{ base: 'xs', md: 'sm' }}
                          fontWeight="800"
                          letterSpacing="0.16em"
                          textTransform="uppercase"
                          color="whiteAlpha.800"
                        >
                          Property Preview
                        </Text>
                        <Text color="white" fontSize={{ base: 'lg', md: '2xl' }} fontWeight="700" lineHeight="1.3">
                          Review the setting first, then move into the details, price, and inquiry path without losing context.
                        </Text>
                      </VStack>
                    </Box>
                  </AspectRatio>
                </Box>

                <Grid
                  mt={{ base: '-18px', md: '-26px' }}
                  templateColumns={{ base: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(4, minmax(0, 1fr))' }}
                  gap={3}
                  position="relative"
                  zIndex={2}
                >
                  {detailFacts.map((item) => (
                    <Box
                      key={item.label}
                      bg={heroFactSurface}
                      border="1px solid"
                      borderColor={borderColor}
                      borderRadius="22px"
                      boxShadow={sectionShadow}
                      px={{ base: 4, md: 4 }}
                      py={{ base: 4, md: 4 }}
                      minW={0}
                    >
                      <HStack spacing={2.5} color={mutedColor} mb={2}>
                        <Box
                          w="34px"
                          h="34px"
                          borderRadius="full"
                          bg={tintSurface}
                          color="#2f9f79"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Icon as={item.icon} boxSize={4} />
                        </Box>
                        <Text fontSize="xs" fontWeight="800" textTransform="uppercase" letterSpacing="0.1em">
                          {item.label}
                        </Text>
                      </HStack>
                      <Text color={headingColor} fontWeight="700" lineHeight="1.45">
                        {item.value}
                      </Text>
                    </Box>
                  ))}
                </Grid>
              </VStack>

              <Box bg={heroPanelSurface} position="relative" overflow="hidden">
                <Box
                  position="absolute"
                  top="-100px"
                  right="-80px"
                  w="260px"
                  h="260px"
                  bg="rgba(47, 159, 121, 0.10)"
                  filter="blur(70px)"
                />

                <VStack
                  align="stretch"
                  spacing={5}
                  h="100%"
                  px={{ base: 5, md: 7, xl: 8 }}
                  py={{ base: 6, md: 7, xl: 8 }}
                >
                  <HStack justify="space-between" align="flex-start" spacing={3} flexWrap="wrap">
                    <Badge
                      bg={glassBadge}
                      color={heroHeadingColor}
                      px={4}
                      py={2}
                      borderRadius="full"
                      textTransform="none"
                    >
                      Current Listing
                    </Badge>
                    <ShareButtons property={selectedLand} size="xs" />
                  </HStack>

                  <VStack align="flex-start" spacing={4}>
                    <Heading
                      fontSize={{ base: '3xl', md: '4xl', xl: '4xl' }}
                      lineHeight={{ base: 1.06, md: 1.02 }}
                      letterSpacing="-0.05em"
                      color={heroHeadingColor}
                      maxW={{ base: '100%', md: '11ch', xl: '12ch' }}
                    >
                      {selectedLand.name}
                    </Heading>

                    <HStack spacing={3} color={heroBodyColor}>
                      <Box
                        w="38px"
                        h="38px"
                        borderRadius="full"
                        bg={tintSurface}
                        color="#2f9f79"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Icon as={FaMapMarkerAlt} boxSize={4} />
                      </Box>
                      <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="600">
                        {selectedLand.location}
                      </Text>
                    </HStack>

                    <Text color={heroBodyColor} lineHeight="1.9" maxW="56ch">
                      {selectedLand.description}
                    </Text>
                  </VStack>

                  <Wrap spacing={2.5}>
                    {[selectedLand.landUse, selectedLand.district, selectedLand.hasTitle ? 'Title Available' : 'Title Processing'].map((item) => (
                      <WrapItem key={item}>
                        <Box
                          bg={detailSurface}
                          color={heroHeadingColor}
                          border="1px solid"
                          borderColor={borderColor}
                          borderRadius="full"
                          px={4}
                          py={2.5}
                          fontSize="sm"
                          fontWeight="700"
                        >
                          {item}
                        </Box>
                      </WrapItem>
                    ))}
                  </Wrap>

                  {featuredPoints.length > 0 && (
                    <Box
                      bg={cardSurface}
                      border="1px solid"
                      borderColor={borderColor}
                      borderRadius="28px"
                      px={{ base: 5, md: 6 }}
                      py={{ base: 5, md: 6 }}
                    >
                      <Text fontSize="xs" fontWeight="800" letterSpacing="0.16em" textTransform="uppercase" color={heroMutedColor} mb={4}>
                        Why This Plot Stands Out
                      </Text>
                      <Wrap spacing={2.5}>
                        {featuredPoints.map((feature) => (
                          <WrapItem key={feature}>
                            <Box
                              bg={tintSurface}
                              color="#195b45"
                              borderRadius="full"
                              px={4}
                              py={2.5}
                              fontSize="sm"
                              fontWeight="700"
                            >
                              {feature}
                            </Box>
                          </WrapItem>
                        ))}
                      </Wrap>
                    </Box>
                  )}

                  <Box
                    bg={cardSurface}
                    border="1px solid"
                    borderColor={borderColor}
                    borderRadius="28px"
                    px={{ base: 5, md: 6 }}
                    py={{ base: 5, md: 6 }}
                  >
                    <Text fontSize="xs" fontWeight="800" textTransform="uppercase" letterSpacing="0.16em" color={heroMutedColor}>
                      Current Price
                    </Text>
                    <HStack spacing={3} align="baseline" mt={3} flexWrap="wrap">
                      <Text fontSize={{ base: '3xl', md: '4xl' }} fontWeight="800" color="#2f9f79" letterSpacing="-0.05em">
                        {displayPrice}
                      </Text>
                      {originalPrice && (
                        <Text color={heroMutedColor} textDecoration="line-through">
                          {originalPrice}
                        </Text>
                      )}
                    </HStack>
                    <Text color={heroBodyColor} fontSize="sm" lineHeight="1.8" mt={2}>
                      {selectedLand.offerEndDate
                        ? `Offer valid until ${new Date(selectedLand.offerEndDate).toLocaleDateString()}.`
                        : 'A strong point to confirm early while comparing other shortlisted plots.'}
                    </Text>
                  </Box>

                  <Stack direction={{ base: 'column', sm: 'row' }} spacing={3} mt="auto">
                    <Button
                      as="a"
                      href="#property-inquiry"
                      size="lg"
                      bg="linear-gradient(135deg, #2f9f79 0%, #195b45 100%)"
                      color="white"
                      rightIcon={<FaArrowRight />}
                      borderRadius="18px"
                      flex="1"
                      _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: '0 18px 38px rgba(47, 159, 121, 0.24)',
                      }}
                    >
                      Inquire About This Plot
                    </Button>
                    <Button
                      as="a"
                      href={`tel:${normalizedPhone}`}
                      size="lg"
                      variant="outline"
                      borderColor={borderColor}
                      bg={cardSurface}
                      color={heroHeadingColor}
                      leftIcon={<FaPhoneAlt />}
                      borderRadius="18px"
                      _hover={{
                        bg: quietHoverBg,
                        transform: 'translateY(-2px)',
                      }}
                    >
                      Call Agent
                    </Button>
                  </Stack>

                  <Box
                    bg={cardTintSurface}
                    border="1px solid"
                    borderColor={borderColor}
                    borderRadius="26px"
                    px={{ base: 5, md: 6 }}
                    py={{ base: 5, md: 6 }}
                  >
                    <Text fontSize="xs" fontWeight="800" letterSpacing="0.16em" textTransform="uppercase" color={heroMutedColor}>
                      Practical Next Step
                    </Text>
                    <Text color={heroBodyColor} lineHeight="1.8" mt={2}>
                      Shortlist the plot, confirm the site visit path, and ask the documentation questions before moving into payment conversations.
                    </Text>
                  </Box>
                </VStack>
              </Box>
            </Grid>
          </Box>

          <Grid templateColumns={{ base: '1fr', xl: 'minmax(0, 1.05fr) minmax(360px, 0.95fr)' }} gap={6} alignItems="start">
            <VStack align="stretch" spacing={6}>
              <Box
                bg={cardSurface}
                border="1px solid"
                borderColor={borderColor}
                borderRadius="30px"
                boxShadow={sectionShadow}
                px={{ base: 5, md: 6, xl: 7 }}
                py={{ base: 5, md: 6, xl: 7 }}
              >
                <VStack align="stretch" spacing={5}>
                  <VStack align="flex-start" spacing={2}>
                    <Text fontSize="sm" fontWeight="700" color={headingColor}>
                      Property Overview
                    </Text>
                    <Heading fontSize={{ base: '2xl', md: '3xl' }} color={headingColor} lineHeight="1.12">
                      Everything important, organized before you make the next move.
                    </Heading>
                    <Text color={bodyColor} lineHeight="1.9" maxW="72ch">
                      {selectedLand.description}
                    </Text>
                  </VStack>

                  <Grid templateColumns={{ base: '1fr', lg: 'repeat(3, minmax(0, 1fr))' }} gap={4}>
                    {overviewCards.map((item, index) => (
                      <Box
                        key={item.title}
                        bg={index === 1 ? cardTintSurface : detailSurface}
                        border="1px solid"
                        borderColor={borderColor}
                        borderRadius="24px"
                        px={{ base: 4, md: 5 }}
                        py={{ base: 4, md: 5 }}
                        minH="100%"
                      >
                        <HStack spacing={3} align="center" mb={3}>
                          <Box
                            w="34px"
                            h="34px"
                            borderRadius="full"
                            bg={index === 1 ? warmSurface : tintSurface}
                            color={index === 1 ? '#dd7f22' : '#2f9f79'}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            fontWeight="800"
                          >
                            {index + 1}
                          </Box>
                          <Text color={headingColor} fontWeight="700">
                            {item.title}
                          </Text>
                        </HStack>
                        <Text color={bodyColor} lineHeight="1.85" fontSize="sm">
                          {item.text}
                        </Text>
                      </Box>
                    ))}
                  </Grid>
                </VStack>
              </Box>

              <Box
                bg={cardSurface}
                border="1px solid"
                borderColor={borderColor}
                borderRadius="30px"
                boxShadow={sectionShadow}
                px={{ base: 5, md: 6, xl: 7 }}
                py={{ base: 5, md: 6, xl: 7 }}
              >
                <VStack align="stretch" spacing={5}>
                  <VStack align="flex-start" spacing={2}>
                    <Text fontSize="sm" fontWeight="700" color={headingColor}>
                      Guided Buying Flow
                    </Text>
                    <Heading fontSize={{ base: '2xl', md: '3xl' }} color={headingColor} lineHeight="1.12">
                      A clearer route from interest to ownership.
                    </Heading>
                  </VStack>

                  <Grid templateColumns={{ base: '1fr', md: 'repeat(2, minmax(0, 1fr))' }} gap={4}>
                    {propertyJourney.map((step, index) => (
                      <Box
                        key={step.title}
                        bg={index % 2 === 0 ? detailSurface : cardTintSurface}
                        border="1px solid"
                        borderColor={borderColor}
                        borderRadius="24px"
                        px={{ base: 4, md: 5 }}
                        py={{ base: 4, md: 5 }}
                      >
                        <VStack align="flex-start" spacing={3}>
                          <HStack spacing={3} align="flex-start">
                            <Box
                              minW="44px"
                              h="44px"
                              borderRadius="full"
                              bg={index % 2 === 0 ? tintSurface : warmSurface}
                              color={index % 2 === 0 ? '#2f9f79' : '#dd7f22'}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              fontWeight="800"
                            >
                              {index + 1}
                            </Box>
                            <Text color={headingColor} fontWeight="700" lineHeight="1.35">
                              {step.title}
                            </Text>
                          </HStack>
                          <Text color={bodyColor} lineHeight="1.85" fontSize="sm">
                            {step.text}
                          </Text>
                        </VStack>
                      </Box>
                    ))}
                  </Grid>
                </VStack>
              </Box>
            </VStack>

            <VStack
              align="stretch"
              spacing={6}
              position={{ base: 'static', xl: 'sticky' }}
              top={{ xl: '110px' }}
            >
              <ContactForm selectedLand={selectedLand} />

              <Box
                bg="linear-gradient(180deg, rgba(12, 31, 39, 0.98) 0%, rgba(17, 49, 57, 0.96) 100%)"
                border="1px solid"
                borderColor="rgba(255,255,255,0.08)"
                borderRadius="30px"
                boxShadow={liftShadow}
                px={{ base: 5, md: 6 }}
                py={{ base: 5, md: 6 }}
              >
                <VStack align="stretch" spacing={4}>
                  <Text fontSize="sm" fontWeight="700" color="whiteAlpha.900">
                    What Happens Next
                  </Text>
                  <Heading fontSize={{ base: '2xl', md: '3xl' }} color="white" lineHeight="1.12">
                    Your inquiry should lead to a concrete next step.
                  </Heading>

                  <VStack align="stretch" spacing={3}>
                    {supportSteps.map((item) => (
                      <HStack key={item} align="flex-start" spacing={3}>
                        <Box
                          w="34px"
                          h="34px"
                          borderRadius="full"
                          bg="rgba(158, 216, 177, 0.12)"
                          color="#9ed8b1"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          flexShrink={0}
                        >
                          <Icon as={FaCheckCircle} boxSize={4} />
                        </Box>
                        <Text color="whiteAlpha.800" lineHeight="1.8">
                          {item}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                </VStack>
              </Box>
            </VStack>
          </Grid>
        </VStack>
      </Box>
    </Box>
  );
};

export default LandDetails;
