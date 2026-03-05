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
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { BiMap, BiRuler, BiLandscape } from 'react-icons/bi';

const LandCarousel = ({ lands }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  // Format price safely
  const formatPrice = (price) => {
    return price ? price.toLocaleString() : '0';
  };

  // Number of items to show based on screen size
  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // desktop
      if (window.innerWidth >= 768) return 2;  // tablet
    }
    return 1; // mobile
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

  // Auto-play functionality
  useEffect(() => {
    if (!isHovered && lands.length > itemsPerView) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, 3000);
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

  const handleMouseEnter = () => {
    setIsHovered(true);
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowControls(false);
  };

  const handleMouseMove = () => {
    setShowControls(true);
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      px={{ base: 0, md: 8 }}
      py={4}
    >
      {/* Navigation Buttons */}
      <IconButton
        icon={<ChevronLeftIcon boxSize={8} />}
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
        size="lg"
        boxShadow="lg"
        _hover={{ transform: 'translateY(-50%) scale(1.1)' }}
        aria-label="Previous properties"
      />

      <IconButton
        icon={<ChevronRightIcon boxSize={8} />}
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
        size="lg"
        boxShadow="lg"
        _hover={{ transform: 'translateY(-50%) scale(1.1)' }}
        aria-label="Next properties"
      />

      {/* Carousel Container */}
      <Box
        ref={carouselRef}
        overflow="hidden"
        borderRadius="xl"
      >
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
                  boxShadow="md"
                  transition="all 0.3s"
                  _hover={{
                    transform: 'translateY(-8px)',
                    boxShadow: 'xl',
                  }}
                  position="relative"
                  role="group"
                >
                  {/* Image with Status Badges */}
                  <Box position="relative" h="200px" overflow="hidden">
                    {/* Status Badges */}
                    <HStack position="absolute" top={2} left={2} zIndex={2} spacing={1}>
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

                    <Image
                      src={land.imageLg}
                      alt={land.name}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      transition="transform 0.5s"
                      _groupHover={{ transform: 'scale(1.1)' }}
                      opacity={land.isSold ? 0.7 : 1}
                    />
                    
                    {land.isSold && (
                      <Box
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%) rotate(-15deg)"
                        bg="red.500"
                        color="white"
                        fontWeight="bold"
                        fontSize="lg"
                        px={3}
                        py={1}
                        borderRadius="md"
                      >
                        SOLD
                      </Box>
                    )}
                  </Box>

                  {/* Content */}
                  <VStack p={4} align="start" spacing={2}>
                    <Heading size="sm" noOfLines={1}>
                      {land.name}
                    </Heading>

                    <HStack color="gray.600" fontSize="xs">
                      <Box as={BiMap} />
                      <Text noOfLines={1}>{land.location}</Text>
                    </HStack>

                    <HStack spacing={3} fontSize="xs" color="gray.500">
                      <HStack>
                        <Box as={BiRuler} />
                        <Text>{land.size}</Text>
                      </HStack>
                      <Text>•</Text>
                      <HStack>
                        <Box as={BiLandscape} />
                        <Text>{land.district}</Text>
                      </HStack>
                    </HStack>

                    {/* Price with Offer Handling */}
                    {land.isOfferOfDay && land.offerPrice ? (
                      <Box mt={1}>
                        <HStack spacing={2}>
                          <Text fontWeight="bold" fontSize="md" color="orange.500">
                            UGX {formatPrice(land.offerPrice)}
                          </Text>
                          <Text fontSize="sm" color="gray.400" textDecoration="line-through">
                            UGX {formatPrice(land.price)}
                          </Text>
                        </HStack>
                        {land.offerEndDate && (
                          <Text fontSize="xs" color="orange.500">
                            Offer ends: {new Date(land.offerEndDate).toLocaleDateString()}
                          </Text>
                        )}
                      </Box>
                    ) : (
                      <Text fontWeight="bold" fontSize="md" color={land.isSold ? 'gray.500' : 'green.600'} mt={1}>
                        UGX {formatPrice(land.price)}
                      </Text>
                    )}

                    {/* Quick Action */}
                    <Button
                      size="xs"
                      colorScheme="green"
                      variant="outline"
                      w="full"
                      mt={2}
                      _groupHover={{
                        bg: 'green.500',
                        color: 'white',
                      }}
                      isDisabled={land.isSold}
                    >
                      {land.isSold ? 'Sold Out' : 'View Details'}
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
            w={index === currentIndex ? '24px' : '8px'}
            h="8px"
            borderRadius="full"
            bg={index === currentIndex ? 'green.500' : 'green.200'}
            cursor="pointer"
            onClick={() => setCurrentIndex(index)}
            transition="all 0.3s"
            _hover={{ bg: 'green.400' }}
          />
        ))}
      </HStack>
    </Box>
  );
};

export default LandCarousel;