import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Button,
} from '@chakra-ui/react';
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaGavel,
  FaHeadset,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaHandshake,
} from 'react-icons/fa';
import { GiFarmer, GiReceiveMoney } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: FaMapMarkerAlt,
      title: 'Free Site Visit',
      description: 'We take you to see any plot of interest at no cost. See the land before you buy!',
      color: 'blue.500',
    },
    {
      icon: GiReceiveMoney,
      title: 'Flexible Payment Plans',
      description: 'Affordable installment plans tailored to your budget. From 2.3M only!',
      color: 'green.500',
    },
    {
      icon: FaGavel,
      title: 'Legal Assistance',
      description: 'Expert guidance on title verification, transfer processes, and all legal documentation.',
      color: 'purple.500',
    },
    {
      icon: FaHeadset,
      title: '24/7 After-Sale Support',
      description: 'We don\'t disappear after sale. We\'re here to help with any questions or concerns.',
      color: 'orange.500',
    },
    {
      icon: FaShieldAlt,
      title: 'Verified Titles',
      description: 'Every plot comes with thoroughly verified land titles. No fraud, no stress.',
      color: 'red.500',
    },
    {
      icon: FaHandshake,
      title: 'Trusted Since 2010',
      description: 'Over a decade of experience serving the Mbarara community with integrity.',
      color: 'teal.500',
    },
  ];

  return (
    <Box py={{ base: 10, md: 16 }} bg="white" borderRadius="xl" my={8} px={{ base: 4, md: 0 }}>
      <Container maxW="container.xl">
        {/* Header */}
        <VStack spacing={4} mb={{ base: 8, md: 12 }} textAlign="center">
          <Heading
            size={{ base: "xl", md: "2xl" }}
            bgGradient="linear(to-r, green.700, green.500)"
            bgClip="text"
          >
            Why Choose Zalseef Estates?
          </Heading>
          <Text fontSize={{ base: "md", md: "xl" }} color="gray.600" maxW="700px">
            We make land ownership simple, secure, and stress-free. Here's why hundreds of clients trust us.
          </Text>
        </VStack>

        {/* Benefits Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 4, md: 6, lg: 8 }}>
          {benefits.map((benefit, index) => (
            <Box
              key={index}
              p={{ base: 5, md: 6 }}
              bg="white"
              borderRadius="xl"
              boxShadow="lg"
              border="1px solid"
              borderColor="green.100"
              transition="all 0.3s"
              _hover={{
                transform: 'translateY(-5px)',
                boxShadow: '2xl',
                borderColor: 'green.300',
              }}
              position="relative"
              overflow="hidden"
            >
              {/* Decorative background element */}
              <Box
                position="absolute"
                top="-20px"
                right="-20px"
                w="100px"
                h="100px"
                bg={benefit.color}
                opacity={0.05}
                borderRadius="full"
              />

              <VStack align="start" spacing={4}>
                {/* Icon with gradient background */}
                <Box
                  p={3}
                  bg={`${benefit.color}10`}
                  borderRadius="lg"
                  color={benefit.color}
                >
                  <Icon as={benefit.icon} boxSize={{ base: 6, md: 8 }} />
                </Box>

                {/* Title */}
                <Heading size={{ base: "sm", md: "md" }} color="gray.800">
                  {benefit.title}
                </Heading>

                {/* Description */}
                <Text fontSize={{ base: "sm", md: "md" }} color="gray.600" lineHeight="tall">
                  {benefit.description}
                </Text>

                {/* Checkmark feature list */}
                <HStack spacing={2} color="green.600" fontSize={{ base: "xs", md: "sm" }}>
                  <FaCheckCircle />
                  <Text>Included in every purchase</Text>
                </HStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        {/* Stats Bar */}
        <SimpleGrid
          columns={{ base: 2, md: 4 }}
          spacing={{ base: 4, md: 6 }}
          mt={{ base: 10, md: 16 }}
          p={{ base: 4, md: 8 }}
          bg="green.50"
          borderRadius="xl"
        >
          <VStack>
            <Heading size={{ base: "xl", md: "2xl" }} color="green.600">500+</Heading>
            <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600">Plots Sold</Text>
          </VStack>
          <VStack>
            <Heading size={{ base: "xl", md: "2xl" }} color="green.600">1000+</Heading>
            <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600">Happy Clients</Text>
          </VStack>
          <VStack>
            <Heading size={{ base: "xl", md: "2xl" }} color="green.600">10+</Heading>
            <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600">Years Experience</Text>
          </VStack>
          <VStack>
            <Heading size={{ base: "xl", md: "2xl" }} color="green.600">24/7</Heading>
            <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600">Client Support</Text>
          </VStack>
        </SimpleGrid>

        {/* Call to Action - FIXED: Better mobile buttons */}
        <VStack mt={{ base: 8, md: 12 }} spacing={4}>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
            Ready to find your perfect piece of paradise?
          </Text>
          <VStack 
            spacing={3} 
            w="100%"
          >
            <Link to="/contact" style={{ width: "100%" }}>
              <Button
                size="md"
                colorScheme="green"
                px={6}
                py={6}
                fontSize="md"
                w="100%"
                h="auto"
                whiteSpace="normal"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'xl',
                }}
              >
                Contact Us Today
              </Button>
            </Link>
            <Link to="/land-for-sale" style={{ width: "100%" }}>
              <Button
                size="md"
                variant="outline"
                colorScheme="green"
                px={6}
                py={6}
                fontSize="md"
                w="100%"
                h="auto"
                whiteSpace="normal"
                _hover={{
                  bg: 'green.50',
                  transform: 'translateY(-2px)',
                }}
              >
                Browse Plots
              </Button>
            </Link>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;