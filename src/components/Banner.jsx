import { useEffect, useMemo, useState } from 'react';
import {
  Badge,
  Box,
  Button,
  Circle,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
} from 'react-icons/fa';

import SecretaryImage from '../assets/images/agents/secretary.jpg';
import { useLandCollection } from '../context/LandContext';

const heroStats = [
  { label: 'Plots Sold', value: '2,000+' },
  { label: 'Happy Clients', value: '1,000+' },
  { label: 'Years Of Trust', value: '10+' },
];

const formatPrice = (price) => `UGX ${(price / 1000000).toFixed(1)}M`;

const slideIds = [31, 24, 9];

const Banner = () => {
  const { allLands } = useLandCollection();
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = useMemo(() => {
    const selectedSlides = slideIds
      .map((id) => allLands.find((land) => land.id === id))
      .filter(Boolean);
    const fallbackSlides = selectedSlides.length > 0 ? selectedSlides : allLands.slice(0, 3);

    return fallbackSlides.map((land, index) => ({
      ...land,
      offerType: index === 0 ? 'Signature Plot' : index === 1 ? 'For Sale' : 'Available Now',
      summary:
        index === 0
          ? 'A premium Karubanda opportunity with pricing, size, and location details ready to review.'
          : index === 1
            ? 'A standout Masha Mile listing for buyers who want more space and stronger long-term value.'
            : 'A practical option for buyers searching for accessible land in one of the most requested areas.',
    }));
  }, [allLands]);

  useEffect(() => {
    if (slides.length <= 1) {
      return undefined;
    }

    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % slides.length);
    }, 6500);

    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    if (currentIndex >= slides.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex, slides.length]);

  if (slides.length === 0) {
    return (
      <Box position="relative" minH={{ base: '72vh', lg: '82vh' }} bg="#0b151c" overflow="hidden">
        <Box position="relative" zIndex={1} maxW="1720px" mx="auto" px={{ base: 4, md: 6, xl: 8 }} py={{ base: 16, md: 20, xl: 24 }}>
          <Grid templateColumns={{ base: '1fr', xl: 'minmax(0, 1.02fr) 320px' }} gap={{ base: 8, xl: 10 }} alignItems="end">
            <VStack align="flex-start" spacing={5} maxW="760px">
              <Badge bg="#2f9f79" color="white" px={3} py={1.5} fontSize="sm">
                Zalseef Estates
              </Badge>
              <Heading
                color="white"
                fontSize={{ base: '4xl', md: '6xl', xl: '7xl' }}
                lineHeight={{ base: 1.02, md: 0.95 }}
                letterSpacing="-0.04em"
                maxW="12ch"
              >
                Land opportunities with a clearer next step.
              </Heading>
              <Text color="whiteAlpha.900" fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.9" maxW="38ch">
                Connect Supabase and seed the listings to turn this hero into live inventory from your database.
              </Text>
              <HStack spacing={3} flexWrap="wrap">
                <Button
                  as={Link}
                  to="/land-for-sale"
                  bg="#2f9f79"
                  color="white"
                  rightIcon={<FaArrowRight />}
                  _hover={{ bg: '#257b5f', transform: 'translateY(-2px)' }}
                >
                  Browse Listings
                </Button>
              </HStack>
            </VStack>

            <Box
              display={{ base: 'none', xl: 'block' }}
              bg="rgba(255,255,255,0.10)"
              border="1px solid rgba(255,255,255,0.12)"
              backdropFilter="blur(14px)"
              overflow="hidden"
            >
              <Image src={SecretaryImage} alt="Zalseef team member" w="100%" h="360px" objectFit="cover" objectPosition="center top" />
              <VStack align="flex-start" spacing={3} p={5}>
                <Text color="whiteAlpha.700" fontSize="sm" textTransform="uppercase" letterSpacing="0.16em">
                  Zalseef Estates
                </Text>
                <Heading color="white" fontSize="2xl" lineHeight="1.15">
                  Helping land buyers move with more confidence.
                </Heading>
              </VStack>
            </Box>
          </Grid>
        </Box>
      </Box>
    );
  }

  const activeSlide = slides[currentIndex];

  const moveSlide = (direction) => {
    setCurrentIndex((current) => {
      if (direction === 'prev') {
        return current === 0 ? slides.length - 1 : current - 1;
      }

      return (current + 1) % slides.length;
    });
  };

  return (
    <Box position="relative" minH={{ base: '72vh', lg: '82vh' }} bg="#0b151c" overflow="hidden">
      {slides.map((slide, index) => (
        <Box
          key={slide.id}
          position="absolute"
          inset={0}
          opacity={index === currentIndex ? 1 : 0}
          transition="opacity 0.7s ease"
        >
          <Image
            src={slide.imageLg || slide.image}
            alt={slide.name}
            w="100%"
            h="100%"
            objectFit="cover"
          />
          <Box
            position="absolute"
            inset={0}
            bg="linear-gradient(90deg, rgba(7,16,21,0.88) 0%, rgba(7,16,21,0.62) 46%, rgba(7,16,21,0.68) 100%)"
          />
        </Box>
      ))}

      <Box position="relative" zIndex={1} maxW="1720px" mx="auto" px={{ base: 4, md: 6, xl: 8 }} py={{ base: 16, md: 20, xl: 24 }}>
        <Grid templateColumns={{ base: '1fr', xl: 'minmax(0, 1.02fr) 320px' }} gap={{ base: 8, xl: 10 }} alignItems="end">
          <VStack align="flex-start" spacing={5} maxW="760px">
            <Badge bg="#2f9f79" color="white" px={3} py={1.5} fontSize="sm">
              {activeSlide.offerType}
            </Badge>

            <Heading
              color="white"
              fontSize={{ base: '4xl', md: '6xl', xl: '7xl' }}
              lineHeight={{ base: 1.02, md: 0.95 }}
              letterSpacing="-0.04em"
              maxW="12ch"
            >
              {activeSlide.name}
            </Heading>

            <HStack spacing={2} color="whiteAlpha.900" flexWrap="wrap">
              <FaMapMarkerAlt />
              <Text fontSize={{ base: 'md', md: 'lg' }}>{activeSlide.location}</Text>
            </HStack>

            <Text color="whiteAlpha.900" fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.9" maxW="38ch">
              {activeSlide.summary}
            </Text>

            <Text color="#9ed8b1" fontSize={{ base: '2xl', md: '3xl' }} fontWeight="800" letterSpacing="-0.03em">
              {formatPrice(activeSlide.price)}
            </Text>

            <HStack spacing={3} flexWrap="wrap">
              <Button
                as={Link}
                to={`/land-details/${activeSlide.id}`}
                bg="#2f9f79"
                color="white"
                rightIcon={<FaArrowRight />}
                _hover={{ bg: '#257b5f', transform: 'translateY(-2px)' }}
              >
                See Details
              </Button>

              <Button
                as={Link}
                to="/land-for-sale"
                variant="outline"
                borderColor="rgba(255,255,255,0.20)"
                color="white"
                _hover={{ bg: 'rgba(255,255,255,0.08)' }}
              >
                Browse Listings
              </Button>
            </HStack>

            <HStack spacing={{ base: 4, md: 8 }} pt={{ base: 2, md: 5 }} flexWrap="wrap">
              {heroStats.map((item) => (
                <VStack key={item.label} align="flex-start" spacing={1}>
                  <Text color="white" fontSize={{ base: '2xl', md: '3xl' }} fontWeight="800" letterSpacing="-0.04em">
                    {item.value}
                  </Text>
                  <Text color="whiteAlpha.700" fontSize="sm" textTransform="uppercase" letterSpacing="0.16em">
                    {item.label}
                  </Text>
                </VStack>
              ))}
            </HStack>
          </VStack>

          <Box
            display={{ base: 'none', xl: 'block' }}
            bg="rgba(255,255,255,0.10)"
            border="1px solid rgba(255,255,255,0.12)"
            backdropFilter="blur(14px)"
            overflow="hidden"
          >
            <Image src={SecretaryImage} alt="Zalseef team member" w="100%" h="360px" objectFit="cover" objectPosition="center top" />
            <VStack align="flex-start" spacing={3} p={5}>
              <Text color="whiteAlpha.700" fontSize="sm" textTransform="uppercase" letterSpacing="0.16em">
                Zalseef Estates
              </Text>
              <Heading color="white" fontSize="2xl" lineHeight="1.15">
                Helping land buyers move with more confidence.
              </Heading>
              <Text color="whiteAlpha.800" lineHeight="1.8">
                Our team supports site visits, property shortlists, and clearer next steps before payment.
              </Text>
            </VStack>
          </Box>
        </Grid>
      </Box>

      {slides.length > 1 && (
        <HStack position="absolute" right={{ base: 4, md: 6, xl: 8 }} bottom={{ base: 4, md: 6 }} zIndex={2} spacing={3}>
          <Circle
            as="button"
            size="44px"
            bg="rgba(255,255,255,0.12)"
            color="white"
            onClick={() => moveSlide('prev')}
            transition="background-color 0.2s ease"
            _hover={{ bg: 'rgba(255,255,255,0.22)' }}
          >
            <FaChevronLeft />
          </Circle>
          <Circle
            as="button"
            size="44px"
            bg="rgba(255,255,255,0.12)"
            color="white"
            onClick={() => moveSlide('next')}
            transition="background-color 0.2s ease"
            _hover={{ bg: 'rgba(255,255,255,0.22)' }}
          >
            <FaChevronRight />
          </Circle>
        </HStack>
      )}
    </Box>
  );
};

export default Banner;
