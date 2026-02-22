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
    <Box py={16} bg="white" borderRadius="xl" my={8}>
      <Container maxW="container.xl">
        {/* Header */}
        <VStack spacing={4} mb={12} textAlign="center">
          <Heading
            size="2xl"
            bgGradient="linear(to-r, green.700, green.500)"
            bgClip="text"
          >
            Why Choose Zalseef Estates?
          </Heading>
          <Text fontSize="xl" color="gray.600" maxW="700px">
            We make land ownership simple, secure, and stress-free. Here's why hundreds of clients trust us.
          </Text>
        </VStack>

        {/* Benefits Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {benefits.map((benefit, index) => (
            <Box
              key={index}
              p={6}
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
                  <Icon as={benefit.icon} boxSize={8} />
                </Box>

                {/* Title */}
                <Heading size="md" color="gray.800">
                  {benefit.title}
                </Heading>

                {/* Description */}
                <Text color="gray.600" lineHeight="tall">
                  {benefit.description}
                </Text>

                {/* Checkmark feature list */}
                <HStack spacing={2} color="green.600" fontSize="sm">
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
          spacing={6}
          mt={16}
          p={8}
          bg="green.50"
          borderRadius="xl"
        >
          <VStack>
            <Heading size="2xl" color="green.600">500+</Heading>
            <Text color="gray.600">Plots Sold</Text>
          </VStack>
          <VStack>
            <Heading size="2xl" color="green.600">1000+</Heading>
            <Text color="gray.600">Happy Clients</Text>
          </VStack>
          <VStack>
            <Heading size="2xl" color="green.600">10+</Heading>
            <Text color="gray.600">Years Experience</Text>
          </VStack>
          <VStack>
            <Heading size="2xl" color="green.600">24/7</Heading>
            <Text color="gray.600">Client Support</Text>
          </VStack>
        </SimpleGrid>

        {/* Call to Action */}
        <VStack mt={12} spacing={4}>
          <Text fontSize="lg" color="gray.600">
            Ready to find your perfect piece of paradise?
          </Text>
          <HStack spacing={4}>
            <Link to="/contact">
              <Button
                size="lg"
                colorScheme="green"
                px={8}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'xl',
                }}
              >
                Contact Us Today
              </Button>
            </Link>
            <Link to="/land-for-sale">
              <Button
                size="lg"
                variant="outline"
                colorScheme="green"
                px={8}
                _hover={{
                  bg: 'green.50',
                  transform: 'translateY(-2px)',
                }}
              >
                Browse Plots
              </Button>
            </Link>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;