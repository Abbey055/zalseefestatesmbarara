import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiLandscape, BiRuler } from 'react-icons/bi';
import { FaArrowRight, FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa';

import InteractiveCard from '../InteractiveCard';

const FALLBACK_IMAGE = 'https://via.placeholder.com/900x600?text=Property+Image';

export const formatPrice = (price) => `UGX ${(price / 1000000).toFixed(1)}M`;

const getDetailItems = (land) => [
  { icon: BiRuler, label: 'Size', value: land.size },
  { icon: BiLandscape, label: 'Use', value: land.landUse || 'Residential' },
  { icon: FaMapMarkerAlt, label: 'District', value: land.district || 'Mbarara' },
  {
    icon: FaCheckCircle,
    label: 'Title',
    value: land.hasTitle ? 'Available' : 'Processing',
  },
];

const ListingBadges = ({ land }) => (
  <HStack spacing={2} flexWrap="wrap">
    <Badge
      bg="rgba(255, 248, 240, 0.94)"
      color="#14363d"
      px={3}
      py={1.5}
      fontWeight="800"
      letterSpacing="0.04em"
      textTransform="none"
    >
      {land.landUse || 'Residential'}
    </Badge>

    <Badge
      bg="rgba(47, 159, 121, 0.16)"
      color="#195b45"
      px={3}
      py={1.5}
      fontWeight="800"
      letterSpacing="0.04em"
      textTransform="none"
    >
      {land.hasTitle ? 'Title Ready' : 'Available'}
    </Badge>

    {land.isSold && (
      <Badge
        bg="#c53030"
        color="white"
        px={3}
        py={1.5}
        fontWeight="800"
        letterSpacing="0.04em"
        textTransform="none"
      >
        Sold
      </Badge>
    )}
  </HStack>
);

const ListingMetaGrid = ({ land, columns }) => {
  const borderColor = useColorModeValue('rgba(18, 50, 58, 0.10)', 'rgba(255,255,255,0.08)');
  const mutedColor = useColorModeValue('#6b7f87', '#9cb1b8');
  const valueColor = useColorModeValue('#24444a', '#edf5f3');
  const detailSurface = useColorModeValue('rgba(255,255,255,0.86)', 'rgba(10, 28, 36, 0.72)');

  return (
    <SimpleGrid columns={columns} spacing={3}>
      {getDetailItems(land).map((item) => (
        <Box
          key={item.label}
          bg={detailSurface}
          border="1px solid"
          borderColor={borderColor}
          px={3}
          py={3}
          minW={0}
        >
          <HStack spacing={2} mb={1.5} color={mutedColor}>
            <Icon as={item.icon} boxSize={3.5} color="#2f9f79" />
            <Text fontSize="xs" fontWeight="800" textTransform="uppercase" letterSpacing="0.1em">
              {item.label}
            </Text>
          </HStack>

          <Text color={valueColor} fontSize="sm" fontWeight="600" noOfLines={2}>
            {item.value}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};

const ListingHighlights = ({ land }) => {
  const features = (land.features || []).slice(0, 4);
  const featureBg = useColorModeValue('rgba(47, 159, 121, 0.09)', 'rgba(47, 159, 121, 0.16)');
  const featureText = useColorModeValue('#195b45', '#9ed8b1');

  if (!features.length) {
    return null;
  }

  return (
    <Wrap spacing={2}>
      {features.map((feature) => (
        <WrapItem key={feature}>
          <Badge
            bg={featureBg}
            color={featureText}
            px={3}
            py={1.5}
            fontSize="xs"
            fontWeight="700"
            letterSpacing="0.06em"
            textTransform="none"
          >
            {feature}
          </Badge>
        </WrapItem>
      ))}
    </Wrap>
  );
};

const ListingFooter = ({ land }) => {
  const mutedColor = useColorModeValue('#6b7f87', '#9cb1b8');
  const bodyColor = useColorModeValue('#51656e', '#b3c6cc');

  return (
    <Stack
      direction={{ base: 'column', sm: 'row' }}
      justify="space-between"
      align={{ base: 'stretch', sm: 'flex-end' }}
      spacing={4}
    >
      <VStack align="flex-start" spacing={1}>
        <Text fontSize="xs" fontWeight="800" letterSpacing="0.12em" textTransform="uppercase" color={mutedColor}>
          Asking Price
        </Text>
        <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="800" color="#2f9f79" letterSpacing="-0.05em">
          {formatPrice(land.price)}
        </Text>
        <Text fontSize="sm" color={bodyColor}>
          {land.hasTitle ? 'Title status confirmed on listing.' : 'Title process still underway.'}
        </Text>
      </VStack>

      <Button
        as="span"
        bg="linear-gradient(135deg, #2f9f79 0%, #195b45 100%)"
        color="white"
        rightIcon={<FaArrowRight />}
        minW={{ base: '100%', sm: '190px' }}
        justifyContent="center"
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: '0 18px 30px rgba(47, 159, 121, 0.24)',
        }}
      >
        View Details
      </Button>
    </Stack>
  );
};

const ListingImage = ({ imageSrc, land, onError, variant }) => {
  const overlayGradient = useColorModeValue(
    'linear-gradient(180deg, rgba(20, 54, 61, 0.05) 0%, rgba(11, 20, 26, 0.72) 100%)',
    'linear-gradient(180deg, rgba(20, 54, 61, 0.10) 0%, rgba(4, 12, 17, 0.76) 100%)',
  );
  const labelSurface = useColorModeValue('rgba(10, 18, 22, 0.62)', 'rgba(3, 9, 13, 0.76)');

  const media = (
    <Box position="relative" h="100%" overflow="hidden">
      <Image
        src={imageSrc}
        alt={land.name}
        w="100%"
        h="100%"
        objectFit="cover"
        transition="transform 0.55s ease"
        _groupHover={{ transform: 'scale(1.05)' }}
        onError={onError}
        fallbackSrc={FALLBACK_IMAGE}
      />

      <Box position="absolute" inset={0} bg={overlayGradient} />

      <Box position="absolute" top={4} left={4} right={4}>
        <ListingBadges land={land} />
      </Box>

      <HStack
        position="absolute"
        left={4}
        right={4}
        bottom={4}
        justify="space-between"
        align="flex-end"
        spacing={3}
      >
        <Badge
          bg={labelSurface}
          color="white"
          px={3}
          py={1.5}
          fontSize="xs"
          fontWeight="700"
          textTransform="none"
        >
          {land.district || 'Mbarara'}
        </Badge>

        <Text
          bg={labelSurface}
          color="white"
          px={3}
          py={1.5}
          fontSize="xs"
          fontWeight="700"
          letterSpacing="0.08em"
          textTransform="uppercase"
        >
          Listing #{land.id}
        </Text>
      </HStack>
    </Box>
  );

  if (variant === 'list') {
    return <Box h={{ base: '260px', xl: '100%' }}>{media}</Box>;
  }

  return <AspectRatio ratio={4 / 3}>{media}</AspectRatio>;
};

const LandItem = ({ land, variant = 'grid' }) => {
  const [imgError, setImgError] = useState(false);

  const surface = useColorModeValue('rgba(255,255,255,0.94)', 'rgba(12, 32, 41, 0.94)');
  const innerSurface = useColorModeValue('rgba(247, 250, 248, 0.92)', 'rgba(7, 24, 31, 0.68)');
  const borderColor = useColorModeValue('rgba(18, 50, 58, 0.10)', 'rgba(255,255,255,0.08)');
  const headingColor = useColorModeValue('#14363d', '#edf5f3');
  const bodyColor = useColorModeValue('#51656e', '#b3c6cc');
  const mutedColor = useColorModeValue('#6b7f87', '#9cb1b8');
  const baseShadow = useColorModeValue(
    '0 14px 30px rgba(15, 23, 42, 0.08)',
    '0 14px 30px rgba(0, 0, 0, 0.24)',
  );
  const hoverShadow = useColorModeValue(
    '0 22px 40px rgba(15, 23, 42, 0.14)',
    '0 22px 40px rgba(0, 0, 0, 0.32)',
  );
  const hoverBorderColor = useColorModeValue('rgba(47, 159, 121, 0.24)', 'rgba(125, 206, 176, 0.24)');

  const imageSrc = imgError ? FALLBACK_IMAGE : land.imageLg || land.image || FALLBACK_IMAGE;

  const cardProps = {
    as: Link,
    to: `/land-details/${land.id}`,
    bg: surface,
    border: '1px solid',
    borderColor,
    boxShadow: baseShadow,
    hoverShadow,
    hoverBorderColor,
    hoverLift: 6,
    maxTilt: 4,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    h: '100%',
    role: 'group',
  };

  const content = (
    <VStack align="stretch" spacing={5} p={{ base: 4, md: 5 }} flex="1">
      <VStack align="flex-start" spacing={3}>
        <Text fontSize="xs" fontWeight="800" letterSpacing="0.16em" textTransform="uppercase" color={mutedColor}>
          Property Snapshot
        </Text>

        <Heading fontSize={{ base: 'xl', md: '2xl' }} color={headingColor} lineHeight="1.14">
          {land.name}
        </Heading>

        <HStack spacing={2} color={bodyColor}>
          <Icon as={FaMapMarkerAlt} boxSize={3.5} color="#2f9f79" />
          <Text fontSize="sm" fontWeight="600">
            {land.location}
          </Text>
        </HStack>

        <Text color={bodyColor} lineHeight="1.85" fontSize="sm" noOfLines={variant === 'list' ? 2 : 3}>
          {land.description}
        </Text>
      </VStack>

      <ListingHighlights land={land} />

      <Box bg={innerSurface} border="1px solid" borderColor={borderColor} px={{ base: 3, md: 4 }} py={{ base: 3, md: 4 }}>
        <Text
          fontSize="xs"
          fontWeight="800"
          letterSpacing="0.14em"
          textTransform="uppercase"
          color={mutedColor}
          mb={3}
        >
          Quick Facts
        </Text>

        <ListingMetaGrid
          land={land}
          columns={variant === 'list' ? { base: 2, xl: 4 } : { base: 2, md: 2 }}
        />
      </Box>

      <Divider borderColor={borderColor} />

      <ListingFooter land={land} />
    </VStack>
  );

  if (variant === 'list') {
    return (
      <InteractiveCard {...cardProps}>
        <Stack direction={{ base: 'column', xl: 'row' }} spacing={0} flex="1">
          <Box flexBasis={{ xl: '340px' }} minW={{ xl: '340px' }}>
            <ListingImage
              imageSrc={imageSrc}
              land={land}
              onError={() => setImgError(true)}
              variant="list"
            />
          </Box>

          <Box flex="1" minW={0}>
            {content}
          </Box>
        </Stack>
      </InteractiveCard>
    );
  }

  return (
    <InteractiveCard {...cardProps}>
      <ListingImage
        imageSrc={imageSrc}
        land={land}
        onError={() => setImgError(true)}
        variant="grid"
      />
      {content}
    </InteractiveCard>
  );
};

export default LandItem;
