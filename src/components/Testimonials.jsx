import {
  Avatar,
  Badge,
  Box,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaQuoteLeft,
  FaStar,
} from 'react-icons/fa';

import agent1 from '../assets/images/agents/agent1.jpg';
import agent2 from '../assets/images/agents/abbey.jpg';
import agent4 from '../assets/images/agents/agent4.jpg';
import agent5 from '../assets/images/agents/agent5.jpg';
import agent6 from '../assets/images/agents/agent6.jpg';
import InteractiveCard from './InteractiveCard';

export const testimonialsData = [
  {
    id: 1,
    name: 'Kwesiga Shamirah',
    location: 'Kakoba, Mbarara',
    text: 'Zalseef guided me through the land process clearly, and the title-ready plot gave me confidence before payment.',
    rating: 5,
    image: agent1,
    role: 'Happy Homeowner',
    plotType: 'Residential',
  },
  {
    id: 2,
    name: 'Ahimbisibwe Jackline',
    location: 'Nyamitanga, Mbarara',
    text: 'They arranged a practical site visit, explained the paperwork well, and helped me choose land that fit my budget.',
    rating: 5,
    image: agent2,
    role: 'Farm Owner',
    plotType: 'Agricultural',
  },
  {
    id: 3,
    name: 'Mukeshimana Rabia',
    location: 'Nyarubungo, Mbarara',
    text: 'As a first-time buyer, I appreciated how direct the team was about price, location, and what to confirm before committing.',
    rating: 5,
    image: null,
    role: 'First-time Buyer',
    plotType: 'Residential',
  },
  {
    id: 4,
    name: 'Mwebembezi Akwirino',
    location: 'Igyereka, Mbarara',
    text: 'The process felt organized from shortlist to follow-up, and I never felt rushed into a decision.',
    rating: 5,
    image: agent4,
    role: 'Business Owner',
    plotType: 'Commercial',
  },
  {
    id: 5,
    name: 'Prince Umar Sebalamu',
    location: 'Rwebikona, Mbarara',
    text: 'The executive plot was fairly priced, the details matched what I saw on site, and the transaction stayed smooth.',
    rating: 5,
    image: agent5,
    role: 'Property Investor',
    plotType: 'Executive',
  },
  {
    id: 6,
    name: 'Uwera Shadia',
    location: 'Biharwe, Mbarara',
    text: 'I needed agricultural land with better access, and the team helped me compare options without guesswork.',
    rating: 5,
    image: agent6,
    role: 'Farmer',
    plotType: 'Agricultural',
  },
];

const StarRow = ({ rating }) => (
  <HStack spacing={1}>
    {Array.from({ length: 5 }).map((_, index) => (
      <Icon
        key={index}
        as={FaStar}
        boxSize={3}
        color={index < rating ? '#d49b3d' : 'rgba(107, 124, 134, 0.28)'}
      />
    ))}
  </HStack>
);

const TestimonialCard = ({ testimonial }) => {
  const cardSurface = useColorModeValue('rgba(255,255,255,0.92)', 'rgba(12, 32, 41, 0.94)');
  const borderColor = useColorModeValue('rgba(18, 50, 58, 0.10)', 'rgba(255,255,255,0.08)');
  const headingColor = useColorModeValue('#14363d', '#edf5f3');
  const bodyColor = useColorModeValue('#51656e', '#b3c6cc');
  const mutedColor = useColorModeValue('#6b7f87', '#9cb1b8');
  const quoteColor = useColorModeValue('rgba(47, 159, 121, 0.16)', 'rgba(125, 206, 176, 0.18)');
  const shadow = useColorModeValue(
    '0 14px 30px rgba(15, 23, 42, 0.08)',
    '0 14px 30px rgba(0, 0, 0, 0.24)',
  );
  const hoverShadow = useColorModeValue(
    '0 22px 40px rgba(15, 23, 42, 0.12)',
    '0 22px 40px rgba(0, 0, 0, 0.30)',
  );
  const hoverBorderColor = useColorModeValue('rgba(47, 159, 121, 0.22)', 'rgba(125, 206, 176, 0.22)');

  return (
    <InteractiveCard
      bg={cardSurface}
      border="1px solid"
      borderColor={borderColor}
      boxShadow={shadow}
      hoverShadow={hoverShadow}
      hoverBorderColor={hoverBorderColor}
      hoverLift={6}
      maxTilt={4}
      px={{ base: 4, md: 5 }}
      py={{ base: 4, md: 5 }}
      h="100%"
    >
      <VStack align="stretch" spacing={4} h="100%">
        <HStack justify="space-between" align="flex-start">
          <HStack spacing={3} align="center">
            <Avatar
              src={testimonial.image || undefined}
              name={testimonial.name}
              size="sm"
              bg="rgba(47,159,121,0.14)"
              color="#2f9f79"
            />

            <VStack align="flex-start" spacing={0.5}>
              <Text color={headingColor} fontWeight="700" lineHeight="1.2">
                {testimonial.name}
              </Text>
              <Text color={mutedColor} fontSize="xs" textTransform="uppercase" letterSpacing="0.08em">
                {testimonial.role}
              </Text>
            </VStack>
          </HStack>

          <Box
            w="36px"
            h="36px"
            bg={quoteColor}
            color="#2f9f79"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexShrink={0}
          >
            <Icon as={FaQuoteLeft} boxSize={3.5} />
          </Box>
        </HStack>

        <StarRow rating={testimonial.rating} />

        <Text color={bodyColor} lineHeight="1.8" fontSize="sm">
          {testimonial.text}
        </Text>

        <HStack justify="space-between" align="center" flexWrap="wrap" spacing={3} mt="auto">
          <HStack spacing={2} color={mutedColor}>
            <Icon as={FaMapMarkerAlt} boxSize={3} color="#2f9f79" />
            <Text fontSize="xs">{testimonial.location}</Text>
          </HStack>

          <HStack spacing={2}>
            <Badge bg="rgba(47,159,121,0.12)" color="#2f9f79" px={2.5} py={1} borderRadius="full" textTransform="none">
              {testimonial.plotType}
            </Badge>
            <HStack spacing={1} color={mutedColor}>
              <Icon as={FaCheckCircle} boxSize={3} color="#2f9f79" />
              <Text fontSize="xs">Verified client</Text>
            </HStack>
          </HStack>
        </HStack>
      </VStack>
    </InteractiveCard>
  );
};

const Testimonials = ({
  title = 'Client perspectives',
  description = 'A few quick buyer notes from people who worked with Zalseef Estates.',
  maxItems = 3,
  columns,
  boxed = false,
}) => {
  const sectionSurface = useColorModeValue('rgba(222, 235, 241, 0.96)', 'rgba(12, 32, 41, 0.94)');
  const borderColor = useColorModeValue('rgba(18, 50, 58, 0.10)', 'rgba(255,255,255,0.08)');
  const headingColor = useColorModeValue('#14363d', '#edf5f3');
  const bodyColor = useColorModeValue('#51656e', '#b3c6cc');
  const resolvedColumns = columns || (maxItems <= 2 ? { base: 1, xl: 2 } : { base: 1, md: 2, xl: 3 });
  const displayedTestimonials = testimonialsData.slice(0, maxItems);

  return (
    <Box
      bg={boxed ? sectionSurface : 'transparent'}
      border={boxed ? '1px solid' : 'none'}
      borderColor={boxed ? borderColor : 'transparent'}
      px={boxed ? { base: 5, md: 6 } : 0}
      py={boxed ? { base: 5, md: 6 } : 0}
    >
      <VStack align="stretch" spacing={5}>
        <VStack align="flex-start" spacing={2}>
          <Badge bg="rgba(47,159,121,0.12)" color="#2f9f79" px={3} py={1.5} borderRadius="full" textTransform="none">
            Client Testimonials
          </Badge>
          <Heading fontSize={{ base: '2xl', md: '3xl' }} color={headingColor} lineHeight="1.12">
            {title}
          </Heading>
          <Text color={bodyColor} maxW="62ch" lineHeight="1.85">
            {description}
          </Text>
        </VStack>

        <SimpleGrid columns={resolvedColumns} spacing={4}>
          {displayedTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Testimonials;
