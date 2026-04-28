import {
  Box,
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
  FaArrowRight,
  FaHandHoldingUsd,
  FaWhatsapp,
} from 'react-icons/fa';
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
      icon: FaHandHoldingUsd,
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
    <Box w="100%" bg="white">
      {/* Header */}
      <VStack spacing={2} mb={4} textAlign="center">
        <Heading size="lg" color="green.700">
          Why Choose Zalseef Estates?
        </Heading>
        <Text fontSize="sm" color="gray.600" maxW="600px" px={2}>
          We make land ownership simple, secure, and stress-free. Here's why hundreds of clients trust us.
        </Text>
      </VStack>

      {/* Benefits Grid */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={3} mb={4}>
        {benefits.map((benefit, index) => (
          <Box
            key={index}
            p={4}
            bg="white"
            borderRadius="lg"
            boxShadow="sm"
            border="1px solid"
            borderColor="gray.100"
            _hover={{ transform: 'translateY(-2px)', boxShadow: 'md', borderColor: 'green.300' }}
            transition="all 0.2s"
            position="relative"
            overflow="hidden"
          >
            {/* Decorative background element */}
            <Box
              position="absolute"
              top="-20px"
              right="-20px"
              w="80px"
              h="80px"
              bg={benefit.color}
              opacity={0.05}
              borderRadius="full"
            />

            <VStack align="start" spacing={2}>
              {/* Icon */}
              <Box p={2} bg={`${benefit.color}10`} borderRadius="md" color={benefit.color}>
                <Icon as={benefit.icon} boxSize={5} />
              </Box>

              {/* Title */}
              <Heading size="sm" color="gray.800">
                {benefit.title}
              </Heading>

              {/* Description */}
              <Text fontSize="xs" color="gray.600" lineHeight="short">
                {benefit.description}
              </Text>

              {/* Checkmark */}
              <HStack spacing={1} color="green.600" fontSize="2xs">
                <FaCheckCircle size={10} />
                <Text>Included in every purchase</Text>
              </HStack>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>

      {/* Stats Bar */}
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={2} p={4} bg="green.50" borderRadius="lg" mb={4}>
        <VStack spacing={0}>
          <Text fontSize="xl" fontWeight="bold" color="green.600">2000+</Text>
          <Text fontSize="2xs" color="gray.600">Plots Sold</Text>
        </VStack>
        <VStack spacing={0}>
          <Text fontSize="xl" fontWeight="bold" color="green.600">1000+</Text>
          <Text fontSize="2xs" color="gray.600">Happy Clients</Text>
        </VStack>
        <VStack spacing={0}>
          <Text fontSize="xl" fontWeight="bold" color="green.600">10+</Text>
          <Text fontSize="2xs" color="gray.600">Years Exp</Text>
        </VStack>
        <VStack spacing={0}>
          <Text fontSize="xl" fontWeight="bold" color="green.600">24/7</Text>
          <Text fontSize="2xs" color="gray.600">Support</Text>
        </VStack>
      </SimpleGrid>

      {/* Call to Action */}
      <VStack spacing={2}>
        <Text fontSize="sm" color="gray.600" textAlign="center">
          Ready to find your perfect piece of paradise?
        </Text>
        
        <VStack spacing={2} w="100%" maxW="300px" mx="auto">
          {/* Contact Us Button */}
          <Link to="/contact" style={{ width: "100%" }}>
            <Button
              size="sm"
              colorScheme="green"
              w="full"
              rightIcon={<FaArrowRight size={12} />}
              _hover={{ transform: 'translateY(-1px)', boxShadow: 'md' }}
            >
              Contact Us
            </Button>
          </Link>
          
          {/* Browse Plots Button */}
          <Link to="/land-for-sale" style={{ width: "100%" }}>
            <Button
              size="sm"
              variant="outline"
              colorScheme="green"
              w="full"
              rightIcon={<FaArrowRight size={12} />}
              _hover={{ bg: 'green.50' }}
            >
              Browse Plots
            </Button>
          </Link>

          {/* WhatsApp Link */}
          <Link to="https://wa.me/256708124902" target="_blank" style={{ width: "100%" }}>
            <HStack spacing={1} justify="center" py={1}>
              <FaWhatsapp size={14} color="#25D366" />
              <Text fontSize="xs" color="gray.500">Chat on WhatsApp</Text>
            </HStack>
          </Link>
        </VStack>
        
        {/* Trust badges */}
        <HStack spacing={2} justify="center" flexWrap="wrap">
          {['No obligations', 'Free consultation', '24/7 support'].map((item, i) => (
            <HStack key={i} spacing={1}>
              <FaCheckCircle size={8} color="green.400" />
              <Text fontSize="2xs" color="gray.400">{item}</Text>
            </HStack>
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

export default WhyChooseUs;
