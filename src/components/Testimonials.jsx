import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  VStack, 
  HStack, 
  Avatar, 
  Icon,
  SimpleGrid,
  Divider,
  Button,
  useColorModeValue,
  Circle,
  Flex,
  Badge,
} from '@chakra-ui/react';
import { FaStar, FaQuoteLeft, FaQuoteRight, FaMapMarkerAlt, FaCalendarAlt, FaTag, FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';
import { keyframes } from '@emotion/react';

// Import agent images
import agent1 from '../assets/images/agents/agent1.jpg';
import agent2 from '../assets/images/agents/agent2.jpg';
import agent3 from '../assets/images/agents/agent3.jpg';
import agent4 from '../assets/images/agents/agent4.jpg';
import agent5 from '../assets/images/agents/agent5.jpg';
import agent6 from '../assets/images/agents/agent6.jpg';

// Real testimonial data with agent names and images
const testimonialsData = [
  {
    id: 1,
    name: 'Kwesiga Shamirah',
    location: 'Kakoba, Mbarara',
    text: 'I bought a residential plot in Kakoba through Zalseef Estates. The process was transparent and Muhammad guided me through every step. The title was ready and genuine. Highly recommended!',
    rating: 5,
    image: agent1,
    date: 'February 2026',
    plotType: 'Residential',
    role: 'Happy Homeowner',
  },
  {
    id: 2,
    name: 'Ahimbisibwe Jackline',
    location: 'Nyamitanga, Mbarara',
    text: 'After searching for farmland for months, I finally found the perfect 5-acre plot through Zalseef Estates. They helped with all the documentation and even arranged a site visit. Excellent service!',
    rating: 5,
    image: agent2,
    date: 'January 2026',
    plotType: 'Agricultural',
    role: 'Farm Owner',
  },
  {
    id: 3,
    name: 'Mukeshimana Rabia',
    location: 'Nyarubungo, Mbarara',
    text: 'Zalseef Estates made buying land so easy. From 2.3M, I got a prime plot in Nyarubungo. The payment plan was flexible and the team was always available to answer my questions.',
    rating: 5,
    image: agent3,
    date: 'December 2025',
    plotType: 'Residential',
    role: 'First-time Buyer',
  },
  {
    id: 4,
    name: 'Mwebembezi Akwirino',
    location: 'Igyereka, Mbarara',
    text: 'As a first-time land buyer, I was nervous about the process. The team at Zalseef Estates held my hand throughout, explained everything clearly, and ensured the title was authentic. Thank you!',
    rating: 5,
    image: agent4,
    date: 'March 2026',
    plotType: 'Commercial',
    role: 'Business Owner',
  },
  {
    id: 5,
    name: 'Prince Umar Sebalamu',
    location: 'Rwebikona, Mbarara',
    text: 'I purchased an executive plot in Kamukuzi through Zalseef. The location is prime, the price was fair, and the entire transaction was smooth. I\'ve already referred two friends!',
    rating: 5,
    image: agent5,
    date: 'November 2025',
    plotType: 'Executive',
    role: 'Property Investor',
  },
  {
    id: 6,
    name: 'Uwera Shadia',
    location: 'Biharwe, Mbarara',
    text: 'The team helped me find agricultural land in Biharwe with water access and fertile soil. They even connected me with a local farmer for advice. Going above and beyond!',
    rating: 5,
    image: agent6,
    date: 'February 2026',
    plotType: 'Agricultural',
    role: 'Farmer',
  },
];

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scaleIn = keyframes`
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

const glowPulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1); }
  70% { box-shadow: 0 0 0 8px rgba(0, 0, 0, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); }
`;

// Star rating component
const StarRating = ({ rating }) => {
  return (
    <HStack spacing={0.5}>
      {[...Array(5)].map((_, i) => (
        <Icon 
          key={i} 
          as={FaStar} 
          color={i < rating ? '#FBBF24' : '#E2E8F0'} 
          boxSize={3}
        />
      ))}
    </HStack>
  );
};

// Testimonial Card with enhanced hover effects
const TestimonialCard = ({ testimonial, index }) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  
  return (
    <Box
      bg={cardBg}
      borderRadius="xl"
      boxShadow="md"
      position="relative"
      transition="all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
      _hover={{
        transform: 'translateY(-8px) scale(1.02)',
        boxShadow: 'xl',
        borderColor: 'gray.300',
      }}
      animation={`${fadeIn} 0.5s ease-out ${index * 0.1}s both`}
      role="group"
      border="1px solid"
      borderColor="gray.100"
      overflow="hidden"
      cursor="pointer"
      whileHover={{ animation: `${glowPulse} 1.5s infinite` }}
    >
      {/* Top accent bar with animation */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="3px"
        bg="gray.700"
        transform="scaleX(0)"
        transition="transform 0.4s ease"
        _groupHover={{ transform: 'scaleX(1)' }}
        originX="0"
      />

      {/* Content Container */}
      <VStack spacing={3} align="stretch" p={4}>
        {/* Header Section with hover effects */}
        <HStack spacing={3}>
          <Box position="relative" flexShrink={0}>
            <Avatar 
              src={testimonial.image} 
              name={testimonial.name} 
              size="md"
              border="2px solid"
              borderColor="gray.200"
              transition="all 0.3s"
              _groupHover={{ 
                borderColor: 'gray.500',
                transform: 'scale(1.05) rotate(2deg)',
              }}
            />
            <Circle
              size="10px"
              bg="green.400"
              border="2px solid white"
              position="absolute"
              bottom="0px"
              right="0px"
              transition="transform 0.3s"
              _groupHover={{ transform: 'scale(1.2)' }}
            />
          </Box>

          <VStack spacing={0.5} align="start" flex={1}>
            <Text 
              fontWeight="bold" 
              fontSize="md" 
              color="gray.800"
              transition="color 0.3s"
              _groupHover={{ color: 'gray.900' }}
            >
              {testimonial.name}
            </Text>
            <HStack spacing={1} color="gray.500">
              <Icon as={FaCheckCircle} color="green.400" boxSize={2.5} />
              <Text 
                fontSize="xs"
                transition="color 0.3s"
                _groupHover={{ color: 'gray.700' }}
              >
                {testimonial.role}
              </Text>
            </HStack>
          </VStack>
        </HStack>

        {/* Location and Date with hover effect */}
        <Flex 
          gap={2} 
          color="gray.500" 
          fontSize="xs" 
          flexWrap="wrap"
          transition="all 0.3s"
          _groupHover={{ color: 'gray.600' }}
        >
          <HStack spacing={1}>
            <Icon 
              as={FaMapMarkerAlt} 
              color="gray.400" 
              boxSize={3}
              transition="transform 0.3s"
              _groupHover={{ transform: 'scale(1.1)', color: 'gray.500' }}
            />
            <Text>{testimonial.location}</Text>
          </HStack>
          <Text>•</Text>
          <HStack spacing={1}>
            <Icon 
              as={FaCalendarAlt} 
              color="gray.400" 
              boxSize={3}
              transition="transform 0.3s"
              _groupHover={{ transform: 'scale(1.1)', color: 'gray.500' }}
            />
            <Text>{testimonial.date}</Text>
          </HStack>
        </Flex>

        {/* Rating with hover effect */}
        <Box 
          py={0.5}
          transition="transform 0.3s"
          _groupHover={{ transform: 'scale(1.02)' }}
        >
          <StarRating rating={testimonial.rating} />
        </Box>

        {/* Testimonial Text with enhanced hover */}
        <Box 
          position="relative"
          bg="gray.50"
          borderRadius="md"
          px={3}
          py={2}
          transition="all 0.3s"
          _groupHover={{ 
            bg: 'gray.100',
            boxShadow: 'inner',
          }}
        >
          <Icon 
            as={FaQuoteLeft} 
            color="gray.300"
            boxSize={3}
            position="absolute"
            top={1}
            left={1}
            opacity={0.5}
            transition="all 0.3s"
            _groupHover={{ 
              color: 'gray.400',
              transform: 'scale(1.1)',
            }}
          />
          <Text 
            fontSize="xs"
            color={textColor}
            lineHeight="short"
            pl={4}
            transition="color 0.3s"
            _groupHover={{ color: 'gray.800' }}
          >
            {testimonial.text}
          </Text>
        </Box>

        {/* Footer with hover effects */}
        <Flex justify="space-between" align="center">
          <HStack spacing={1.5}>
            <Icon 
              as={FaTag} 
              color="gray.400" 
              boxSize={3}
              transition="transform 0.3s"
              _groupHover={{ transform: 'scale(1.1) rotate(-5deg)', color: 'gray.500' }}
            />
            <Badge
              variant="subtle"
              bg="gray.100"
              color="gray.600"
              px={2}
              py={0.5}
              borderRadius="full"
              fontSize="2xs"
              fontWeight="normal"
              transition="all 0.3s"
              _groupHover={{ 
                bg: 'gray.200',
                color: 'gray.800',
                transform: 'scale(1.02)',
              }}
            >
              {testimonial.plotType}
            </Badge>
          </HStack>
          
          <Icon 
            as={FaQuoteRight} 
            color="gray.300" 
            boxSize={3}
            transition="all 0.3s"
            _groupHover={{ 
              color: 'gray.500',
              transform: 'scale(1.2) rotate(5deg)',
            }}
          />
        </Flex>
      </VStack>
    </Box>
  );
};

// Main Testimonials Component
const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedTestimonials = showAll ? testimonialsData : testimonialsData.slice(0, 3);

  return (
    <Box 
      py={{ base: 12, md: 16 }} 
      bg="gray.50"
      position="relative"
      id="testimonials"
    >
      {/* Simple background */}
      <Box
        position="absolute"
        top="-20%"
        right="-10%"
        width="300px"
        height="300px"
        borderRadius="full"
        bg="gray.100"
        filter="blur(80px)"
        opacity={0.3}
      />
      <Box
        position="absolute"
        bottom="-20%"
        left="-10%"
        width="300px"
        height="300px"
        borderRadius="full"
        bg="gray.100"
        filter="blur(80px)"
        opacity={0.3}
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        {/* Header Section */}
        <VStack spacing={4} mb={12} textAlign="center">
          <Badge
            variant="subtle"
            bg="gray.200"
            color="gray.700"
            px={3}
            py={1}
            borderRadius="full"
            fontSize="xs"
            fontWeight="medium"
            letterSpacing="wider"
            textTransform="uppercase"
          >
            ★ Testimonials
          </Badge>
          
          <VStack spacing={2} maxW="700px">
            <Heading
              size={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              color="gray.800"
              lineHeight="1.2"
            >
              What Our Happy Clients Say
            </Heading>
            
            <Text fontSize="sm" color="gray.500" px={4}>
              Real stories from real people who found their perfect land through Zalseef Estates
            </Text>
          </VStack>

          {/* Stats Section */}
          <Flex 
            mt={4} 
            justify="center"
            wrap="wrap"
            gap={4}
            p={4}
            bg="white"
            borderRadius="xl"
            boxShadow="sm"
            border="1px solid"
            borderColor="gray.100"
            width="100%"
            maxW="700px"
            mx="auto"
          >
            <VStack spacing={0} flex={1} minW="100px">
              <Text fontSize="2xl" fontWeight="bold" color="gray.800">2000+</Text>
              <Text fontSize="xs" color="gray.500">Plots Sold</Text>
            </VStack>
            
            <Divider orientation="vertical" h="30px" borderColor="gray.200" />
            
            <VStack spacing={0} flex={1} minW="100px">
              <Text fontSize="2xl" fontWeight="bold" color="gray.800">1000+</Text>
              <Text fontSize="xs" color="gray.500">Happy Clients</Text>
            </VStack>
            
            <Divider orientation="vertical" h="30px" borderColor="gray.200" />
            
            <VStack spacing={0} flex={1} minW="100px">
              <Text fontSize="2xl" fontWeight="bold" color="gray.800">{testimonialsData.length}+</Text>
              <Text fontSize="xs" color="gray.500">Testimonials</Text>
            </VStack>
          </Flex>
        </VStack>

        {/* Testimonials Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {displayedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </SimpleGrid>

        {/* Show More/Less Button */}
        {testimonialsData.length > 3 && (
          <VStack mt={8}>
            <Button
              onClick={() => setShowAll(!showAll)}
              size="md"
              px={8}
              py={5}
              fontSize="sm"
              fontWeight="medium"
              borderRadius="full"
              bg="white"
              color="gray.700"
              border="1px solid"
              borderColor="gray.200"
              _hover={{
                bg: 'gray.800',
                color: 'white',
                borderColor: 'gray.800',
                transform: 'translateY(-2px)',
                boxShadow: 'md',
              }}
              transition="all 0.2s"
              rightIcon={<Icon as={showAll ? FaQuoteLeft : FaQuoteRight} boxSize={3} />}
            >
              {showAll ? 'Show Less' : 'View More'}
            </Button>
          </VStack>
        )}

        {/* Trust Indicators */}
        <Flex
          justify="center"
          mt={10}
          gap={4}
          flexWrap="wrap"
        >
          {['Verified Reviews', 'Real Clients', 'Authentic'].map((text, index) => (
            <HStack
              key={index}
              spacing={2}
              color="gray.500"
              bg="white"
              px={3}
              py={1.5}
              borderRadius="full"
              boxShadow="sm"
              border="1px solid"
              borderColor="gray.100"
              fontSize="xs"
              transition="all 0.2s"
              _hover={{
                transform: 'scale(1.05)',
                boxShadow: 'md',
                borderColor: 'gray.300',
                bg: 'gray.50',
              }}
            >
              <Icon as={FaCheckCircle} color="green.400" boxSize={3} />
              <Text>{text}</Text>
            </HStack>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

// Add missing float animation
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

export default Testimonials;