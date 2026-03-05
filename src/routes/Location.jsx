import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    HStack,
    Icon,
    Badge,
    Divider,
    SimpleGrid,
    Button,
    Avatar
} from '@chakra-ui/react';
import {
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaClock,
    FaDirections,
    FaParking,
    FaWheelchair,
    FaShieldAlt,
    FaBuilding
} from 'react-icons/fa';

const Location = () => {
    // Coordinates for St Paul Shopping Mall, Mbarara
    const latitude = -0.61;
    const longitude = 30.66;

    // Google Maps embed URL with marker pin
    const googleMapsSrc = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=St+Paul+Shopping+Mall+Mbarara+Uganda&center=${latitude},${longitude}&zoom=18&maptype=roadmap`;

    return (
        <Container maxW="container.xl" py={{ base: 6, md: 10 }}>
            <VStack spacing={8} align="stretch">
                {/* Header */}
                <VStack spacing={3} textAlign="center">
                    <Badge colorScheme="green" fontSize="md" px={4} py={1} borderRadius="full" textTransform="uppercase">
                        Visit Us Today
                    </Badge>
                    <Heading
                        size={{ base: "lg", md: "xl" }}
                        bgGradient="linear(to-r, green.700, green.500)"
                        bgClip="text"
                    >
                        Our Office Location
                    </Heading>
                    <Text fontSize={{ base: "sm", md: "md" }} color="gray.600" maxW="600px">
                        Come see us at St Paul Shopping Mall in the heart of Mbarara city. We're here to help you find your perfect land.
                    </Text>
                </VStack>

                {/* Map and Info Grid - Equal height */}
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
                    {/* Map Container - Same height as info side */}
                    <Box
                        borderRadius="xl"
                        overflow="hidden"
                        boxShadow="lg"
                        border="1px solid"
                        borderColor="green.100"
                        height={{ base: "350px", lg: "550px" }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7536!2d30.66!3d-0.61!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19ddf6b7b8b8b8b%3A0x8b8b8b8b8b8b8b!2sSt%20Paul%20Shopping%20Mall!5e0!3m2!1sen!2sug!4v1234567890!5m2!1sen!2sug"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Zalseef Estates Office Location - St Paul Shopping Mall, Mbarara"
                        />
                    </Box>

                    {/* Office Info - Same height as map */}
                    <Box
                        bg="white"
                        borderRadius="xl"
                        boxShadow="lg"
                        border="1px solid"
                        borderColor="green.100"
                        overflow="hidden"
                        height={{ base: "auto", lg: "550px" }}
                        display="flex"
                        flexDirection="column"
                    >
                        {/* Header with building icon */}
                        <HStack bg="green.50" p={4} borderBottom="1px solid" borderColor="green.100">
                            <Avatar icon={<FaBuilding />} bg="green.500" color="white" size="sm" />
                            <VStack align="start" spacing={0}>
                                <Text fontWeight="bold" fontSize="lg">Zalseef Estates</Text>
                                <Text fontSize="sm" color="gray.600">Head Office · Mbarara CBD</Text>
                            </VStack>
                        </HStack>

                        {/* Info Sections - Scrollable if needed */}
                        <VStack align="stretch" p={6} spacing={5} overflowY="auto" flex="1">

                            {/* Address Card */}
                            <Box
                                p={4}
                                bg="gray.50"
                                borderRadius="lg"
                                border="1px solid"
                                borderColor="green.100"
                            >
                                <HStack mb={2} color="green.600">
                                    <Icon as={FaMapMarkerAlt} boxSize={5} />
                                    <Text fontWeight="bold" fontSize="md">Address</Text>
                                </HStack>
                                <VStack align="start" pl={7} spacing={0}>
                                    <Text fontWeight="medium">St Paul Shopping Mall, Room C10</Text>
                                    <Text color="gray.600">Mbarara City, Uganda</Text>
                                    <HStack mt={1}>
                                        <Badge colorScheme="green" variant="outline">Room C10</Badge>
                                    </HStack>
                                </VStack>
                            </Box>

                            {/* Contact Card - Two columns */}
                            <Box
                                p={4}
                                bg="gray.50"
                                borderRadius="lg"
                                border="1px solid"
                                borderColor="green.100"
                            >
                                <HStack mb={3} color="green.600">
                                    <Icon as={FaPhone} boxSize={5} />
                                    <Text fontWeight="bold" fontSize="md">Contact</Text>
                                </HStack>
                                <SimpleGrid columns={2} spacing={4} pl={7}>
                                    <VStack align="start" spacing={1}>
                                        <Text fontWeight="medium" fontSize="sm">Phone</Text>
                                        <Text fontSize="sm" fontWeight="bold">+256 708 124902</Text>
                                        <Text fontSize="xs" color="gray.500">Mon-Sun: 8AM-6PM</Text>
                                    </VStack>
                                    <VStack align="start" spacing={1}>
                                        <Text fontWeight="medium" fontSize="sm">Email</Text>
                                        <Text fontSize="sm" fontWeight="bold">zalseefmhd256</Text>
                                        <Text fontSize="xs" color="gray.600">@gmail.com</Text>
                                    </VStack>
                                </SimpleGrid>
                            </Box>

                            {/* Hours Card */}
                            <Box
                                p={4}
                                bg="gray.50"
                                borderRadius="lg"
                                border="1px solid"
                                borderColor="green.100"
                            >
                                <HStack mb={3} color="green.600">
                                    <Icon as={FaClock} boxSize={5} />
                                    <Text fontWeight="bold" fontSize="md">Office Hours</Text>
                                </HStack>
                                <VStack align="stretch" pl={7} spacing={2}>
                                    <HStack justify="space-between">
                                        <Text fontSize="sm">Monday - Friday</Text>
                                        <Badge colorScheme="green" fontSize="sm" px={3}>24/7</Badge>
                                    </HStack>
                                    <HStack justify="space-between">
                                        <Text fontSize="sm">Saturday</Text>
                                        <Text fontSize="sm" fontWeight="medium">8:00 AM - 6:00 PM</Text>
                                    </HStack>
                                    <HStack justify="space-between">
                                        <Text fontSize="sm">Sunday</Text>
                                        <Text fontSize="sm" fontWeight="medium" color="green.600">10:00 AM - 4:00 PM</Text>
                                    </HStack>
                                </VStack>
                            </Box>


                            {/* Get Directions Button - Smaller Width */}
                            <Button
                                as="a"
                                href="https://www.google.com/maps/dir/?api=1&destination=St+Paul+Shopping+Mall+Mbarara+Uganda"
                                target="_blank"
                                size="md"
                                w="auto"
                                minW="200px"
                                px={8}
                                py={4}
                                leftIcon={<FaDirections size={16} />}
                                bgGradient="linear(to-r, green.500, green.600)"
                                color="white"
                                fontSize="sm"
                                fontWeight="bold"
                                letterSpacing="0.3px"
                                borderRadius="12px"
                                border="none"
                                boxShadow="0 2px 10px rgba(56, 161, 105, 0.3)"
                                transition="all 0.3s"
                                position="relative"
                                overflow="hidden"
                                mx="auto"
                                display="flex"
                                _before={{
                                    content: '""',
                                    position: 'absolute',
                                    top: '0',
                                    left: '-100%',
                                    width: '100%',
                                    height: '100%',
                                    bg: 'whiteAlpha.300',
                                    transition: 'all 0.5s',
                                }}
                                _hover={{
                                    transform: 'translateY(-2px)',
                                    bgGradient: 'linear(to-r, green.600, green.700)',
                                    boxShadow: '0 4px 15px rgba(56, 161, 105, 0.4)',
                                    _before: {
                                        left: '100%',
                                    },
                                }}
                                _active={{
                                    transform: 'translateY(-1px)',
                                    bgGradient: 'linear(to-r, green.700, green.800)',
                                }}
                            >
                                <HStack spacing={2} justify="center" w="full">
                                    <Text>Get Directions</Text>
                                    <Box
                                        as="span"
                                        fontSize="2xs"
                                        bg="whiteAlpha.300"
                                        px={1.5}
                                        py={0.5}
                                        borderRadius="full"
                                    >
                                        Maps
                                    </Box>
                                </HStack>
                            </Button>
                        </VStack>
                    </Box>
                </SimpleGrid>

                {/* Amenities Bar */}
                <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={4} mt={4}>
                    <HStack spacing={3} p={4} bg="green.50" borderRadius="lg" justify="center">
                        <Icon as={FaParking} color="green.600" boxSize={5} />
                        <VStack align="start" spacing={0}>
                            <Text fontWeight="bold" fontSize="sm">Free Parking</Text>
                            <Text fontSize="xs" color="gray.600">Available</Text>
                        </VStack>
                    </HStack>

                    <HStack spacing={3} p={4} bg="green.50" borderRadius="lg" justify="center">
                        <Icon as={FaWheelchair} color="green.600" boxSize={5} />
                        <VStack align="start" spacing={0}>
                            <Text fontWeight="bold" fontSize="sm">Wheelchair Access</Text>
                            <Text fontSize="xs" color="gray.600">Fully accessible</Text>
                        </VStack>
                    </HStack>

                    <HStack spacing={3} p={4} bg="green.50" borderRadius="lg" justify="center">
                        <Icon as={FaShieldAlt} color="green.600" boxSize={5} />
                        <VStack align="start" spacing={0}>
                            <Text fontWeight="bold" fontSize="sm">Secure Location</Text>
                            <Text fontSize="xs" color="gray.600">24/7 security</Text>
                        </VStack>
                    </HStack>
                </SimpleGrid>
                {/* Quick Info Bar - Reduced Width */}
                <HStack
                    spacing={4}
                    justify="center"
                    flexWrap="wrap"
                    p={4}
                    bg="green.600"
                    color="white"
                    borderRadius="lg"
                    mt={4}
                    mx="auto"
                    maxW="800px"
                    w="fit-content"
                >
                    <HStack>
                        <Icon as={FaMapMarkerAlt} />
                        <Text fontSize="sm"><strong>Coordinates:</strong> 0.61° S, 30.66° E</Text>
                    </HStack>
                    <HStack>
                        <Icon as={FaPhone} />
                        <Text fontSize="sm"><strong>Call:</strong> +256 708 124902</Text>
                    </HStack>
                    <HStack>
                        <Icon as={FaClock} />
                        <Text fontSize="sm"><strong>Open:</strong> 24/7 Weekdays</Text>
                    </HStack>
                </HStack>
            </VStack>
        </Container>
    );
};

export default Location;