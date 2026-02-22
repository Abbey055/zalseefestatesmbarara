import { Container, Heading, Text, VStack, Box, SimpleGrid, Image } from '@chakra-ui/react';
import CEOImage from '../assets/images/lands/CEO.jpg';

const About = () => {
  return (
    <Container maxW='container.lg' py='8'>
      <VStack spacing={8} align="stretch">
        {/* Header */}
        <Box>
          <Heading color="green.700" mb="4">About Zalseef Estates</Heading>
          <Text fontSize="lg">
            Zalseef Estates is your trusted partner in land acquisition and sales. We specialize in providing affordable prices, prime locations, and a completely transparent process to make your land ownership dreams a reality. With years of experience in the real estate market, we ensure every transaction is secure and beneficial for our clients.
          </Text>
        </Box>

        {/* CEO Section */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} bg="green.50" p={8} borderRadius="xl">
          <Box>
            <Image 
              src={CEOImage} 
              alt="Muhammad Muhumuza - CEO of Zalseef Estates" 
              borderRadius="lg"
              boxSize="300px"
              objectFit="cover"
              mx="auto"
            />
            <Text fontWeight="bold" fontSize="lg" textAlign="center" mt={4}>
              Muhammad Muhumuza
            </Text>
            <Text color="green.600" textAlign="center">CEO, Zalseef Estates</Text>
          </Box>
          <VStack align="start" justify="center" spacing={4}>
            <Heading size="lg" color="green.700">Message from our CEO</Heading>
            <Text fontStyle="italic" fontSize="md">
              "At Zalseef Estates, we believe everyone deserves access to quality land at fair prices. Our mission is to make land ownership simple, secure, and rewarding for all our clients."
            </Text>
          </VStack>
        </SimpleGrid>

        {/* Mission & Vision */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box bg="green.50" p={6} borderRadius="lg">
            <Heading size="md" mb={3} color="green.700">Our Mission</Heading>
            <Text>To provide authentic, verified land with clear titles to our clients while maintaining the highest standards of integrity and professionalism in every transaction.</Text>
          </Box>
          <Box bg="green.50" p={6} borderRadius="lg">
            <Heading size="md" mb={3} color="green.700">Our Vision</Heading>
            <Text>To be the most trusted and preferred land dealership in Western Uganda, known for transparency, reliability, and exceptional customer service.</Text>
          </Box>
        </SimpleGrid>

        {/* Company Story */}
        <Box p={6} borderWidth="1px" borderRadius="lg">
          <Heading size="md" mb={3} color="green.700">Our Story</Heading>
          <Text>
            Founded by Muhammad Muhumuza, Zalseef Estates started with a simple mission: 
            to make land buying in Mbarara transparent and hassle-free. What began as a small 
            operation has grown into one of the region's most trusted land dealerships, having 
            helped hundreds of clients secure their dream properties through affordable prices 
            and prime locations.
          </Text>
        </Box>

        {/* Why Choose Us */}
        <Box>
          <Heading size="md" mb={3} color="green.700">Why Choose Us</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
            <Box p={4} borderWidth="1px" borderRadius="md" _hover={{ shadow: 'md', borderColor: 'green.500' }}>
              <Text fontWeight="bold" color="green.600">✓ Affordable Prices</Text>
              <Text fontSize="sm">We offer competitive and fair pricing on all land parcels</Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="md" _hover={{ shadow: 'md', borderColor: 'green.500' }}>
              <Text fontWeight="bold" color="green.600">✓ Prime Locations</Text>
              <Text fontSize="sm">The best locations across Mbarara and Western Uganda</Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="md" _hover={{ shadow: 'md', borderColor: 'green.500' }}>
              <Text fontWeight="bold" color="green.600">✓ Transparent Process</Text>
              <Text fontSize="sm">Clear and honest dealings from start to finish</Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Stats Section */}
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6} py={4}>
          <VStack>
            <Text fontSize="3xl" fontWeight="bold" color="green.600">500+</Text>
            <Text fontSize="sm">Plots Sold</Text>
          </VStack>
          <VStack>
            <Text fontSize="3xl" fontWeight="bold" color="green.600">1000+</Text>
            <Text fontSize="sm">Happy Clients</Text>
          </VStack>
          <VStack>
            <Text fontSize="3xl" fontWeight="bold" color="green.600">10+</Text>
            <Text fontSize="sm">Years Experience</Text>
          </VStack>
          <VStack>
            <Text fontSize="3xl" fontWeight="bold" color="green.600">12</Text>
            <Text fontSize="sm">Districts Covered</Text>
          </VStack>
        </SimpleGrid>

        {/* Values */}
        <Box>
          <Heading size="md" mb={3} color="green.700">Our Core Values</Heading>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4}>
            {[
              { title: 'Integrity', desc: 'Honest and transparent dealings' },
              { title: 'Affordability', desc: 'Fair prices for everyone' },
              { title: 'Community', desc: 'Building Mbarara together' },
              { title: 'Trust', desc: 'Your confidence is our priority' }
            ].map((value) => (
              <Box key={value.title} textAlign="center" p={4}>
                <Text fontWeight="bold" color="green.600">{value.title}</Text>
                <Text fontSize="sm">{value.desc}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default About;