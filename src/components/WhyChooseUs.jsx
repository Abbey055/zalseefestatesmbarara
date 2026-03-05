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
  FaArrowRight,
  FaWhatsapp,
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
    <Box py={{ base: 8, md: 16 }} bg="white" borderRadius="xl" my={8} px={{ base: 3, md: 0 }}>
      <Container maxW="container.xl">
        {/* Header */}
        <VStack spacing={4} mb={{ base: 6, md: 12 }} textAlign="center">
          <Heading
            size={{ base: "lg", md: "2xl" }}
            bgGradient="linear(to-r, green.700, green.500)"
            bgClip="text"
          >
            Why Choose Zalseef Estates?
          </Heading>
          <Text fontSize={{ base: "sm", md: "xl" }} color="gray.600" maxW="700px" px={2}>
            We make land ownership simple, secure, and stress-free. Here's why hundreds of clients trust us.
          </Text>
        </VStack>

        {/* Benefits Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 3, md: 6, lg: 8 }}>
          {benefits.map((benefit, index) => (
            <Box
              key={index}
              p={{ base: 4, md: 6 }}
              bg="white"
              borderRadius="xl"
              boxShadow="md"
              border="1px solid"
              borderColor="green.100"
              transition="all 0.3s"
              _hover={{
                transform: { md: 'translateY(-5px)' },
                boxShadow: { md: '2xl' },
                borderColor: { md: 'green.300' },
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

              <VStack align="start" spacing={3}>
                {/* Icon with gradient background */}
                <Box
                  p={2.5}
                  bg={`${benefit.color}10`}
                  borderRadius="lg"
                  color={benefit.color}
                >
                  <Icon as={benefit.icon} boxSize={{ base: 5, md: 8 }} />
                </Box>

                {/* Title */}
                <Heading size={{ base: "sm", md: "md" }} color="gray.800">
                  {benefit.title}
                </Heading>

                {/* Description */}
                <Text fontSize={{ base: "xs", md: "md" }} color="gray.600" lineHeight="tall">
                  {benefit.description}
                </Text>

                {/* Checkmark feature list */}
                <HStack spacing={2} color="green.600" fontSize={{ base: "2xs", md: "sm" }}>
                  <FaCheckCircle size={12} />
                  <Text>Included in every purchase</Text>
                </HStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        {/* Stats Bar */}
        <SimpleGrid
          columns={{ base: 2, md: 4 }}
          spacing={{ base: 3, md: 6 }}
          mt={{ base: 8, md: 16 }}
          p={{ base: 4, md: 8 }}
          bg="green.50"
          borderRadius="xl"
        >
          <VStack spacing={0}>
            <Heading size={{ base: "lg", md: "2xl" }} color="green.600">2000+</Heading>
            <Text fontSize={{ base: "2xs", md: "sm" }} color="gray.600" textAlign="center">Plots Sold</Text>
          </VStack>
          <VStack spacing={0}>
            <Heading size={{ base: "lg", md: "2xl" }} color="green.600">1000+</Heading>
            <Text fontSize={{ base: "2xs", md: "sm" }} color="gray.600" textAlign="center">Happy Clients</Text>
          </VStack>
          <VStack spacing={0}>
            <Heading size={{ base: "lg", md: "2xl" }} color="green.600">10+</Heading>
            <Text fontSize={{ base: "2xs", md: "sm" }} color="gray.600" textAlign="center">Years Experience</Text>
          </VStack>
          <VStack spacing={0}>
            <Heading size={{ base: "lg", md: "2xl" }} color="green.600">24/7</Heading>
            <Text fontSize={{ base: "2xs", md: "sm" }} color="gray.600" textAlign="center">Client Support</Text>
          </VStack>
        </SimpleGrid>

        {/* Call to Action - WITH HOVER EFFECTS */}
        <VStack mt={{ base: 6, md: 12 }} spacing={4}>
          <Text fontSize={{ base: "sm", md: "lg" }} color="gray.600" fontWeight="medium" textAlign="center" px={4}>
            Ready to find your perfect piece of paradise?
          </Text>
          
          <VStack 
            spacing={3} 
            w="100%"
            maxW="320px"
            mx="auto"
          >
            {/* Primary Button - Contact Us - WITH HOVER */}
            <Link to="/contact" style={{ width: "100%" }}>
              <Button
                size="sm"
                colorScheme="green"
                px={4}
                py={5}
                fontSize="sm"
                fontWeight="bold"
                w="100%"
                h="auto"
                minH="44px"
                borderRadius="12px"
                bgGradient="linear(to-r, green.400, green.600)"
                rightIcon={<FaArrowRight size={14} />}
                _hover={{
                  transform: 'translateY(-2px)',
                  bgGradient: 'linear(to-r, green.500, green.700)',
                  boxShadow: '0 8px 15px -3px rgba(56, 161, 105, 0.5)',
                }}
                _active={{
                  transform: 'scale(0.98)',
                }}
                transition="all 0.2s"
                boxShadow="0 2px 8px 0 rgba(56, 161, 105, 0.3)"
              >
                Contact Us Today
              </Button>
            </Link>
            
            {/* Secondary Button - Browse Plots - WITH HOVER */}
            <Link to="/land-for-sale" style={{ width: "100%" }}>
              <Button
                size="sm"
                variant="outline"
                px={4}
                py={5}
                fontSize="sm"
                fontWeight="bold"
                w="100%"
                h="auto"
                minH="44px"
                borderRadius="12px"
                borderWidth="2px"
                borderColor="green.400"
                color="green.600"
                rightIcon={<FaArrowRight size={14} />}
                bg="white"
                _hover={{
                  transform: 'translateY(-2px)',
                  bg: 'green.50',
                  borderColor: 'green.600',
                  color: 'green.700',
                  boxShadow: '0 8px 15px -3px rgba(56, 161, 105, 0.3)',
                }}
                _active={{
                  transform: 'scale(0.98)',
                  bg: 'green.100',
                }}
                transition="all 0.2s"
              >
                Browse Plots
              </Button>
            </Link>

            {/* WhatsApp Link - WITH HOVER */}
            <Link to="https://wa.me/256708124902" target="_blank" style={{ width: "100%" }}>
              <HStack 
                spacing={2} 
                justify="center" 
                py={2}
                _hover={{
                  '& > p': { color: 'green.600' },
                  transform: 'scale(1.02)',
                }}
                transition="all 0.2s"
                cursor="pointer"
              >
                <FaWhatsapp size={16} color="#25D366" />
                <Text fontSize="xs" color="gray.500" fontWeight="medium" transition="color 0.2s">
                  Chat on WhatsApp
                </Text>
              </HStack>
            </Link>
          </VStack>
          
          {/* Trust badges - WITH HOVER */}
          <HStack spacing={2} justify="center" mt={1} flexWrap="wrap">
            {['No obligations', 'Free consultation', '24/7 support'].map((item, i) => (
              <Text 
                key={i}
                fontSize="10px" 
                color="gray.400" 
                display="flex" 
                alignItems="center"
                _hover={{ color: 'green.500', transform: 'scale(1.05)' }}
                transition="all 0.2s"
                cursor="default"
              >
                <Icon as={FaCheckCircle} color="green.400" mr={1} boxSize={2} 
                  _groupHover={{ color: 'green.500' }} 
                />
                {item}
              </Text>
            ))}
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;