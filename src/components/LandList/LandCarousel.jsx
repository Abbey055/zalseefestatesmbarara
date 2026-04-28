import { useState, useEffect, useRef } from 'react';
import {
  Box,
  HStack,
  IconButton,
  Text,
  Heading,
  VStack,
  Image,
  Button,
  Badge,
  Icon,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { BiMap, BiRuler, BiLandscape, BiHeart } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';

const LandCarousel = ({ lands }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  const formatPrice = (price) => {
    return price ? price.toLocaleString() : '0';
  };

  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 4;
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
    }
    return 1;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, lands.length - itemsPerView);

  useEffect(() => {
    if (!isHovered && lands.length > itemsPerView) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, 4000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, maxIndex, lands.length, itemsPerView]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const visibleLands = lands.slice(currentIndex, currentIndex + itemsPerView);
  if (visibleLands.length < itemsPerView) {
    const remaining = itemsPerView - visibleLands.length;
    visibleLands.push(...lands.slice(0, remaining));
  }

  return (
    <Box
      position="relative"
      w="100%"
      onMouseEnter={() => {
        setIsHovered(true);
        setShowControls(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowControls(false);
      }}
      px={{ base: 0, md: 8 }}
      py={4}
    >
      {/* Navigation Buttons */}
      <IconButton
        icon={<ChevronLeftIcon boxSize={6} />}
        position="absolute"
        left={{ base: 0, md: 2 }}
        top="50%"
        transform="translateY(-50%)"
        zIndex={10}
        onClick={handlePrev}
        opacity={showControls ? 1 : 0}
        transition="opacity 0.3s"
        colorScheme="green"
        borderRadius="full"
        size="md"
        boxShadow="lg"
        _hover={{ transform: 'translateY(-50%) scale(1.1)' }}
        aria-label="Previous properties"
      />

      <IconButton
        icon={<ChevronRightIcon boxSize={6} />}
        position="absolute"
        right={{ base: 0, md: 2 }}
        top="50%"
        transform="translateY(-50%)"
        zIndex={10}
        onClick={handleNext}
        opacity={showControls ? 1 : 0}
        transition="opacity 0.3s"
        colorScheme="green"
        borderRadius="full"
        size="md"
        boxShadow="lg"
        _hover={{ transform: 'translateY(-50%) scale(1.1)' }}
        aria-label="Next properties"
      />

      {/* Carousel Container */}
      <Box ref={carouselRef} overflow="hidden" borderRadius="xl">
        <HStack
          spacing={4}
          transition="transform 0.5s ease-in-out"
          transform={`translateX(0)`}
          w="100%"
        >
          {visibleLands.map((land, index) => (
            <Box
              key={`${land.id}-${index}`}
              flex={`0 0 calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 4 / itemsPerView}px)`}
              minW="0"
            >
              <Link to={`/land-details/${land.id}`} style={{ textDecoration: 'none' }}>
                <Box
                  bg="white"
                  borderRadius="xl"
                  overflow="hidden"
                  boxShadow="lg"
                  transition="all 0.3s"
                  _hover={{
                    transform: 'translateY(-8px)',
                    boxShadow: '2xl',
                  }}
                  position="relative"
                  role="group"
                >
                  {/* Image Container */}
                  <Box position="relative" h="200px" overflow="hidden">
                    {/* Status Badges */}
                    <HStack position="absolute" top={3} left={3} zIndex={2} spacing={1}>
                      {land.isSold && (
                        <Badge colorScheme="red" variant="solid" fontSize="xs" px={2} py={1}>
                          SOLD
                        </Badge>
                      )}
                      {land.isOfferOfDay && (
                        <Badge colorScheme="orange" variant="solid" fontSize="xs" px={2} py={1}>
                          🔥 OFFER
                        </Badge>
                      )}
                    </HStack>

                    {/* Favorite Icon */}
                    <Icon
                      as={BiHeart}
                      position="absolute"
                      top={3}
                      right={3}
                      color="white"
                      boxSize={5}
                      zIndex={2}
                      opacity={0.9}
                      cursor="pointer"
                      _hover={{ color: 'red.500', transform: 'scale(1.1)' }}
                    />

                    {/* Image */}
                    <Image
                      src={land.imageLg}
                      alt={land.name}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      transition="transform 0.5s"
                      _groupHover={{ transform: 'scale(1.1)' }}
                    />
                  </Box>

                  {/* Content */}
                  <VStack p={3} align="start" spacing={1}>
                    <Heading size="sm" noOfLines={1} color="gray.800">
                      {land.name}
                    </Heading>

                    <HStack color="gray.600" fontSize="xs">
                      <Icon as={BiMap} />
                      <Text noOfLines={1}>{land.location}</Text>
                    </HStack>

                    {/* Rating */}
                    <HStack spacing={1}>
                      {[1,2,3,4,5].map((star) => (
                        <Icon key={star} as={FaStar} color={star <= 4 ? "yellow.400" : "gray.300"} boxSize={2} />
                      ))}
                    </HStack>

                    {/* Features */}
                    <HStack spacing={2} fontSize="xs" color="gray.500">
                      <HStack spacing={1}>
                        <Icon as={BiRuler} />
                        <Text>{land.size}</Text>
                      </HStack>
                      <Text>•</Text>
                      <HStack spacing={1}>
                        <Icon as={BiLandscape} />
                        <Text>{land.landUse}</Text>
                      </HStack>
                    </HStack>

                    {/* Price */}
                    {land.isOfferOfDay && land.offerPrice ? (
                      <Box>
                        <HStack spacing={1}>
                          <Text fontWeight="bold" fontSize="md" color="orange.500">
                            UGX {formatPrice(land.offerPrice)}
                          </Text>
                          <Text fontSize="xs" color="gray.400" textDecoration="line-through">
                            UGX {formatPrice(land.price)}
                          </Text>
                        </HStack>
                      </Box>
                    ) : (
                      <Text fontWeight="bold" fontSize="md" color={land.isSold ? 'gray.400' : 'green.600'}>
                        UGX {formatPrice(land.price)}
                      </Text>
                    )}

                    {/* Quick View Button */}
                    <Button
                      size="xs"
                      colorScheme="green"
                      w="full"
                      mt={2}
                      _groupHover={{ bg: 'green.600' }}
                    >
                      View Details
                    </Button>
                  </VStack>
                </Box>
              </Link>
            </Box>
          ))}
        </HStack>
      </Box>

      {/* Dots Indicator */}
      <HStack spacing={2} justify="center" mt={4}>
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <Box
            key={index}
            w={index === currentIndex ? '20px' : '6px'}
            h="6px"
            borderRadius="full"
            bg={index === currentIndex ? 'green.500' : 'green.200'}
            cursor="pointer"
            onClick={() => setCurrentIndex(index)}
            transition="all 0.3s"
            _hover={{ bg: 'green.400', transform: 'scale(1.2)' }}
          />
        ))}
      </HStack>
    </Box>
  );
};

export default LandCarousel;