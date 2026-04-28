import {
    Avatar,
    Box,
    Button,
    Heading,
    HStack,
    Icon,
    SimpleGrid,
    Text,
    VStack
} from '@chakra-ui/react';
import {
    FaBuilding,
    FaClock,
    FaDirections,
    FaEnvelope,
    FaExternalLinkAlt,
    FaMapMarkerAlt,
    FaParking,
    FaPhone,
    FaShieldAlt,
    FaWheelchair
} from 'react-icons/fa';

const officeLocation = {
    name: 'Zalseef Estates',
    officeLabel: 'Head Office',
    landmark: 'St Paul Shopping Mall',
    place: 'St Paul Shopping Mall, Room C10',
    city: 'Mbarara City, Uganda',
    email: 'zalseefmhd256@gmail.com',
    phone: '+256 708 124902',
    latitude: -0.6081090765287931,
    longitude: 30.66326096083762
};

const mapCenter = `${officeLocation.latitude},${officeLocation.longitude}`;
const mapQuery = `${officeLocation.landmark}, Mbarara, Uganda ${mapCenter}`;
const mapEmbedSrc = `https://maps.google.com/maps?hl=en&q=${encodeURIComponent(officeLocation.landmark)}&ll=${officeLocation.latitude},${officeLocation.longitude}&z=18&output=embed`;
const openInMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapQuery)}`;
const coordinatesLabel = `${Math.abs(officeLocation.latitude).toFixed(6)} deg S, ${officeLocation.longitude.toFixed(6)} deg E`;

const detailCardStyles = {
    p: 4,
    h: '100%',
    borderRadius: 'lg',
    border: '1px solid',
    borderColor: 'gray.200',
    bg: 'linear-gradient(180deg, #ffffff 0%, #f7faf8 100%)',
    boxShadow: '0 8px 18px rgba(15, 23, 42, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'all 0.25s ease',
    _hover: {
        transform: 'translateY(-2px)',
        boxShadow: '0 14px 24px rgba(15, 23, 42, 0.08)',
        borderColor: 'green.100'
    }
};

const utilityCardStyles = {
    px: 5,
    py: 3,
    h: '100%',
    minH: '64px',
    w: '100%',
    maxW: '100%',
    borderRadius: '2xl',
    border: '1px solid',
    borderColor: 'green.100',
    bg: 'linear-gradient(180deg, #f4fff8 0%, #ecfff4 100%)',
    boxShadow: 'sm',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.25s ease',
    _hover: {
        transform: 'translateY(-3px)',
        borderColor: 'green.200',
        boxShadow: '0 14px 24px rgba(56, 161, 105, 0.12)'
    }
};

const summaryCardStyles = {
    w: '100%',
    maxW: '100%',
    minH: '72px',
    px: 5,
    py: 3.5,
    borderRadius: '2xl',
    bg: 'linear-gradient(135deg, #2f855a 0%, #2d9361 100%)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 10px 20px rgba(47, 133, 90, 0.16)',
    transition: 'all 0.25s ease',
    _hover: {
        transform: 'translateY(-3px)',
        boxShadow: '0 16px 28px rgba(47, 133, 90, 0.22)',
        bg: 'linear-gradient(135deg, #276749 0%, #2f855a 100%)'
    }
};

const primaryActionButtonStyles = {
    size: 'sm',
    h: '40px',
    px: 4,
    fontSize: 'sm',
    borderRadius: 'full',
    fontWeight: 'semibold',
    boxShadow: '0 10px 18px rgba(56, 161, 105, 0.16)',
    _hover: {
        transform: 'translateY(-2px)',
        boxShadow: '0 14px 24px rgba(56, 161, 105, 0.22)'
    },
    _active: {
        transform: 'translateY(0)'
    },
    transition: 'all 0.25s ease'
};

const secondaryActionButtonStyles = {
    size: 'sm',
    h: '40px',
    px: 4,
    fontSize: 'sm',
    borderRadius: 'full',
    fontWeight: 'semibold',
    borderWidth: '1px',
    _hover: {
        transform: 'translateY(-2px)'
    },
    _active: {
        transform: 'translateY(0)'
    },
    transition: 'all 0.25s ease'
};

const officeHours = [
    { day: 'Mon - Fri', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Sunday', hours: 'By appointment' }
];

const amenities = [
    { icon: FaParking, label: 'Free Parking' },
    { icon: FaWheelchair, label: 'Wheelchair Access' },
    { icon: FaShieldAlt, label: '24/7 Security' }
];

const Location = () => {
    return (
        <Box w="100%" minH="100vh" bg="white" overflowX="hidden">
            <Box w="100%" maxW="1460px" mx="auto" px={{ base: 3, md: 4, lg: 5 }} py={{ base: 4, md: 6 }}>
                <VStack spacing={5} align="stretch">
                    <VStack spacing={2} textAlign="center">
                        <Text
                            fontSize="xs"
                            fontWeight="bold"
                            letterSpacing="0.18em"
                            textTransform="uppercase"
                            color="green.600"
                        >
                            Visit Our Office
                        </Text>
                        <Heading size="xl" color="green.700">
                            Our Office Location
                        </Heading>
                        <Text fontSize="md" color="gray.600" maxW="700px">
                            Find Zalseef Estates at St Paul Shopping Mall in Mbarara. The map below is pinned to the exact office coordinates you provided.
                        </Text>
                    </VStack>

                    <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={5} alignItems="stretch">
                        <Box
                            bg="white"
                            borderRadius="2xl"
                            overflow="hidden"
                            boxShadow="lg"
                            border="1px solid"
                            borderColor="green.100"
                            display="flex"
                            flexDirection="column"
                            h="100%"
                        >
                            <HStack
                                justify="space-between"
                                align={{ base: 'start', md: 'center' }}
                                flexWrap="wrap"
                                gap={3}
                                p={{ base: 3.5, md: 4 }}
                                bg="linear-gradient(135deg, #f0fff4 0%, #e6fffa 100%)"
                                borderBottom="1px solid"
                                borderColor="green.100"
                            >
                                <VStack align="start" spacing={1}>
                                    <HStack spacing={2} color="green.700">
                                        <Icon as={FaMapMarkerAlt} boxSize={4} />
                                        <Text fontSize="sm" fontWeight="bold" textTransform="uppercase" letterSpacing="0.1em">
                                            Exact Office Pin
                                        </Text>
                                    </HStack>
                                    <Text fontWeight="semibold" color="gray.800">
                                        Marker set to {officeLocation.landmark}
                                    </Text>
                                    <Text fontSize="sm" color="gray.600">
                                        {coordinatesLabel}
                                    </Text>
                                </VStack>
                                <Button
                                    as="a"
                                    href={openInMapsUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    bg="white"
                                    color="green.700"
                                    leftIcon={<FaExternalLinkAlt />}
                                    border="1px solid"
                                    borderColor="whiteAlpha.700"
                                    {...secondaryActionButtonStyles}
                                    boxShadow="0 8px 16px rgba(15, 23, 42, 0.08)"
                                    _hover={{
                                        bg: 'white',
                                        color: 'green.800',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 12px 20px rgba(15, 23, 42, 0.12)'
                                    }}
                                >
                                    Open in Maps
                                </Button>
                            </HStack>

                            <Box flex="1" minH={{ base: '320px', md: '430px', xl: '520px' }}>
                                <iframe
                                    src={mapEmbedSrc}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Zalseef Estates office map"
                                />
                            </Box>

                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3} p={{ base: 3, md: 4 }} bg="gray.50" alignItems="stretch">
                                <Box {...detailCardStyles}>
                                    <HStack mb={2} color="green.600">
                                        <Icon as={FaMapMarkerAlt} />
                                        <Text fontWeight="bold">Coordinates</Text>
                                    </HStack>
                                    <Text fontSize="sm" color="gray.700">
                                        Latitude: {officeLocation.latitude}
                                    </Text>
                                    <Text fontSize="sm" color="gray.700">
                                        Longitude: {officeLocation.longitude}
                                    </Text>
                                </Box>

                                <Box {...detailCardStyles}>
                                    <HStack mb={2} color="green.600">
                                        <Icon as={FaBuilding} />
                                        <Text fontWeight="bold">Landmark</Text>
                                    </HStack>
                                    <Text fontSize="sm" color="gray.800" fontWeight="semibold">
                                        {officeLocation.landmark}
                                    </Text>
                                    <Text fontSize="sm" color="gray.600">
                                        {officeLocation.place}
                                    </Text>
                                    <Text fontSize="sm" color="gray.500">
                                        {officeLocation.city}
                                    </Text>
                                </Box>
                            </SimpleGrid>
                        </Box>

                        <Box
                            bg="white"
                            borderRadius="2xl"
                            boxShadow="lg"
                            border="1px solid"
                            borderColor="green.100"
                            overflow="hidden"
                            h="100%"
                            display="flex"
                            flexDirection="column"
                        >
                            <HStack
                                p={{ base: 3.5, md: 4 }}
                                spacing={3}
                                bg="linear-gradient(135deg, #f0fff4 0%, #e6fffa 100%)"
                                borderBottom="1px solid"
                                borderColor="green.100"
                            >
                                <Avatar icon={<FaBuilding />} bg="green.500" color="white" size="md" />
                                <VStack align="start" spacing={0}>
                                    <Text fontWeight="bold" fontSize="lg">
                                        {officeLocation.name}
                                    </Text>
                                    <Text fontSize="sm" color="gray.600">
                                        {officeLocation.officeLabel} | Mbarara CBD
                                    </Text>
                                </VStack>
                            </HStack>

                            <VStack align="stretch" p={4} spacing={4} flex="1" justify="space-between">
                                <VStack align="stretch" spacing={4}>
                                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} alignItems="stretch">
                                        <Box {...detailCardStyles}>
                                            <HStack mb={3} color="green.600">
                                                <Icon as={FaMapMarkerAlt} />
                                                <Text fontWeight="bold">Office Address</Text>
                                            </HStack>
                                            <VStack align="start" spacing={1}>
                                                <Text fontSize="sm" color="gray.800" fontWeight="semibold">
                                                    {officeLocation.landmark}
                                                </Text>
                                                <Text fontSize="sm" color="gray.700">
                                                    {officeLocation.place}
                                                </Text>
                                                <Text fontSize="sm" color="gray.500">
                                                    {officeLocation.city}
                                                </Text>
                                            </VStack>
                                        </Box>

                                        <Box {...detailCardStyles}>
                                            <HStack mb={3} color="green.600">
                                                <Icon as={FaDirections} />
                                                <Text fontWeight="bold">Navigation</Text>
                                            </HStack>
                                            <VStack align="start" spacing={1}>
                                                <Text fontSize="sm" color="gray.800">
                                                    Google Maps opens directly to St Paul Shopping Mall and centers on your exact office coordinates.
                                                </Text>
                                                <Text fontSize="sm" color="gray.600">
                                                    {coordinatesLabel}
                                                </Text>
                                            </VStack>
                                        </Box>
                                    </SimpleGrid>

                                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} alignItems="stretch">
                                        <Box {...detailCardStyles}>
                                            <HStack mb={3} color="green.600">
                                                <Icon as={FaPhone} />
                                                <Text fontWeight="bold">Contact</Text>
                                            </HStack>
                                            <VStack align="start" spacing={2}>
                                                <Text fontSize="sm" fontWeight="semibold" color="gray.800">
                                                    {officeLocation.phone}
                                                </Text>
                                                <Text fontSize="sm" color="gray.700">
                                                    {officeLocation.email}
                                                </Text>
                                            </VStack>
                                        </Box>

                                        <Box {...detailCardStyles}>
                                            <HStack mb={3} color="green.600">
                                                <Icon as={FaClock} />
                                                <Text fontWeight="bold">Office Hours</Text>
                                            </HStack>
                                            <VStack align="stretch" spacing={2}>
                                                {officeHours.map((item) => (
                                                    <HStack key={item.day} justify="space-between" fontSize="sm">
                                                        <Text color="gray.700">{item.day}</Text>
                                                        <Text color="gray.800" fontWeight="medium">
                                                            {item.hours}
                                                        </Text>
                                                    </HStack>
                                                ))}
                                            </VStack>
                                        </Box>
                                    </SimpleGrid>
                                </VStack>

                                <Box
                                    bg="linear-gradient(180deg, #f8fffb 0%, #effaf4 100%)"
                                    border="1px solid"
                                    borderColor="green.100"
                                    borderRadius="2xl"
                                    p={{ base: 3, md: 3.5 }}
                                    boxShadow="sm"
                                >
                                    <VStack spacing={3}>
                                        <Text
                                            fontSize="xs"
                                            fontWeight="bold"
                                            letterSpacing="0.16em"
                                            textTransform="uppercase"
                                            color="green.600"
                                        >
                                            Quick Actions
                                        </Text>
                                        <Box display="flex" flexWrap="wrap" gap={2.5} alignItems="center" justifyContent="center">
                                            <Button
                                                as="a"
                                                href={directionsUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                leftIcon={<FaDirections />}
                                                justifyContent="center"
                                                bg="green.600"
                                                color="white"
                                                w={{ base: '100%', sm: 'auto' }}
                                                {...primaryActionButtonStyles}
                                                _hover={{
                                                    bg: 'green.700',
                                                    transform: 'translateY(-2px)',
                                                    boxShadow: '0 14px 24px rgba(56, 161, 105, 0.22)'
                                                }}
                                            >
                                                Get Directions
                                            </Button>
                                            <Button
                                                as="a"
                                                href={`mailto:${officeLocation.email}`}
                                                leftIcon={<FaEnvelope />}
                                                justifyContent="center"
                                                bg="white"
                                                color="green.700"
                                                borderColor="green.200"
                                                w={{ base: '100%', sm: 'auto' }}
                                                {...secondaryActionButtonStyles}
                                                _hover={{
                                                    bg: 'green.50',
                                                    borderColor: 'green.300',
                                                    color: 'green.800',
                                                    transform: 'translateY(-2px)'
                                                }}
                                            >
                                                Email Office
                                            </Button>
                                            <Button
                                                as="a"
                                                href={`tel:${officeLocation.phone.replace(/\s+/g, '')}`}
                                                leftIcon={<FaPhone />}
                                                justifyContent="center"
                                                bg="gray.900"
                                                color="white"
                                                w={{ base: '100%', sm: 'auto' }}
                                                {...secondaryActionButtonStyles}
                                                borderColor="gray.900"
                                                _hover={{
                                                    bg: 'gray.800',
                                                    borderColor: 'gray.800',
                                                    transform: 'translateY(-2px)'
                                                }}
                                            >
                                                Call Now
                                            </Button>
                                        </Box>
                                    </VStack>
                                </Box>
                            </VStack>
                        </Box>
                    </SimpleGrid>

                    <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={3} alignItems="stretch">
                        {amenities.map((item) => (
                            <Box
                                key={item.label}
                                {...utilityCardStyles}
                            >
                                <HStack spacing={3}>
                                    <Box
                                        w="36px"
                                        h="36px"
                                        borderRadius="full"
                                        bg="white"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        boxShadow="inset 0 0 0 1px rgba(56, 161, 105, 0.12)"
                                    >
                                        <Icon as={item.icon} color="green.600" boxSize={4} />
                                    </Box>
                                    <Text fontSize="sm" fontWeight="medium" color="gray.800">
                                        {item.label}
                                    </Text>
                                </HStack>
                            </Box>
                        ))}
                    </SimpleGrid>

                    <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={3} alignItems="stretch">
                        <Box {...summaryCardStyles}>
                            <HStack spacing={3}>
                                <Box
                                    w="36px"
                                    h="36px"
                                    borderRadius="full"
                                    bg="whiteAlpha.250"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Icon as={FaMapMarkerAlt} />
                                </Box>
                                <Text fontSize="sm" fontWeight="medium">
                                    {officeLocation.landmark}
                                </Text>
                            </HStack>
                        </Box>
                        <Box {...summaryCardStyles}>
                            <HStack spacing={3}>
                                <Box
                                    w="36px"
                                    h="36px"
                                    borderRadius="full"
                                    bg="whiteAlpha.250"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Icon as={FaPhone} />
                                </Box>
                                <Text fontSize="sm" fontWeight="medium">
                                    {officeLocation.phone}
                                </Text>
                            </HStack>
                        </Box>
                        <Box {...summaryCardStyles}>
                            <HStack spacing={3}>
                                <Box
                                    w="36px"
                                    h="36px"
                                    borderRadius="full"
                                    bg="whiteAlpha.250"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Icon as={FaClock} />
                                </Box>
                                <Text fontSize="sm" fontWeight="medium">
                                    Exact office pin with directions ready
                                </Text>
                            </HStack>
                        </Box>
                    </SimpleGrid>
                </VStack>
            </Box>
        </Box>
    );
};

export default Location;
