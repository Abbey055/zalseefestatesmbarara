import React, { useState } from 'react';
import {
  Badge,
  Box,
  Grid,
  Heading,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  IconButton,
  Flex,
  AspectRatio,
} from '@chakra-ui/react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import {
  FaArrowLeft,
  FaCamera,
  FaExpandAlt,
  FaMapMarkerAlt,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';

import Land1 from '../assets/images/lands/land1.jpg';
import Land2 from '../assets/images/lands/land2.jpg';
import Land3 from '../assets/images/lands/land3.jpg';
import Land4 from '../assets/images/lands/land4.jpg';
import Land5 from '../assets/images/lands/land5.jpg';
import Land6 from '../assets/images/lands/land6.jpg';
import Land7 from '../assets/images/lands/land7.jpg';
import Land8 from '../assets/images/lands/land8.jpg';
import Land9 from '../assets/images/lands/land9.jpg';
import Land10 from '../assets/images/lands/land10.jpg';
import Land11 from '../assets/images/lands/land11.jpg';
import Land12 from '../assets/images/lands/land12.jpg';
import Land13 from '../assets/images/lands/land13.jpg';
import Land14 from '../assets/images/lands/land14.jpg';
import Land15 from '../assets/images/lands/land15.jpg';
import Land16 from '../assets/images/lands/land16.jpg';
import Land17 from '../assets/images/lands/land17.jpg';
import Land18 from '../assets/images/lands/land18.jpg';
import Land19 from '../assets/images/lands/land19.jpg';
import Land20 from '../assets/images/lands/land20.jpg';
import Land21 from '../assets/images/lands/land21.jpg';
import Land22 from '../assets/images/lands/land22.jpg';
import Land23 from '../assets/images/lands/land23.jpg';
import Land24 from '../assets/images/lands/land24.jpg';
import Land25 from '../assets/images/lands/land25.jpg';
import Land26 from '../assets/images/lands/land26.jpg';
import Land27 from '../assets/images/lands/land27.jpg';
import Land28 from '../assets/images/lands/land28.jpg';
import Land29 from '../assets/images/lands/land29.jpg';
import Land30 from '../assets/images/lands/land30.jpg';
import Land31 from '../assets/images/lands/land31.jpg';
import Land32 from '../assets/images/lands/land32.jpg';
import Land33 from '../assets/images/lands/land33.jpg';
import Land34 from '../assets/images/lands/land34.jpg';
import MbararaLand1 from '../assets/images/lands/mbarara1.jpg';
import MbararaLand2 from '../assets/images/lands/mbarara2.jpg';

const allImages = [
  { src: MbararaLand1, title: 'Mbarara Prime Land', location: 'Mbarara City', type: 'Featured' },
  { src: MbararaLand2, title: 'Mbarara Scenic View', location: 'Mbarara Hills', type: 'Featured' },
  { src: Land1, title: 'Igyereka Plot', location: 'Igyereka', type: 'Residential' },
  { src: Land2, title: 'Ahari Ibiiri Plot', location: 'Ahari Ibiiri', type: 'Residential' },
  { src: Land3, title: 'Nyarubungo Plot A', location: 'Nyarubungo', type: 'Residential' },
  { src: Land4, title: 'Nyarubungo Plot B', location: 'Nyarubungo', type: 'Residential' },
  { src: Land5, title: 'Kiyenze Plot', location: 'Kiyenze', type: 'Residential' },
  { src: Land6, title: 'Rwendezi Plot', location: 'Rwendezi', type: 'Residential' },
  { src: Land7, title: 'Rwenshebashaba Plot', location: 'Rwenshebashaba', type: 'Residential' },
  { src: Land8, title: 'Karubanda Plot A', location: 'Karubanda', type: 'Residential' },
  { src: Land9, title: 'Karubanda Plot B', location: 'Karubanda', type: 'Residential' },
  { src: Land10, title: 'Karubanda Plot C', location: 'Karubanda', type: 'Residential' },
  { src: Land11, title: 'Igyereka Plot B', location: 'Igyereka', type: 'Residential' },
  { src: Land12, title: 'Igyereka Plot C', location: 'Igyereka', type: 'Residential' },
  { src: Land13, title: 'Igyereka Plot D', location: 'Igyereka', type: 'Residential' },
  { src: Land14, title: 'Rubeho Plot A', location: 'Rubeho', type: 'Residential' },
  { src: Land15, title: 'Rubeho Plot B', location: 'Rubeho', type: 'Residential' },
  { src: Land16, title: 'Ahari Ibiiri Large', location: 'Ahari Ibiiri', type: 'Residential' },
  { src: Land17, title: 'Kabaare Kihogo', location: 'Kabaare Kihogo', type: 'Residential' },
  { src: Land18, title: 'Omukabira Plot', location: 'Omukabira', type: 'Residential' },
  { src: Land19, title: 'Rukuba Plot', location: 'Rukuba', type: 'Residential' },
  { src: Land20, title: 'Rwenshebashaba Large', location: 'Rwenshebashaba', type: 'Residential' },
  { src: Land21, title: 'Rweiziringiro', location: 'Rweiziringiro', type: 'Residential' },
  { src: Land22, title: 'Omukabira Kangyeya', location: 'Omukabira Kangyeya', type: 'Residential' },
  { src: Land23, title: 'Karubanda Large', location: 'Karubanda', type: 'Residential' },
  { src: Land24, title: 'Masha Mile 1', location: 'Masha Mile 1', type: 'Residential' },
  { src: Land25, title: 'Masha Mile 2', location: 'Masha Mile 2', type: 'Residential' },
  { src: Land26, title: 'Aharyemu', location: 'Aharyemu', type: 'Residential' },
  { src: Land27, title: 'Kaberere Town', location: 'Kaberere Town', type: 'Commercial' },
  { src: Land28, title: 'Nyarubungo Executive', location: 'Nyarubungo', type: 'Executive' },
  { src: Land29, title: 'Omukafunda', location: 'Omukafunda', type: 'Executive' },
  { src: Land30, title: 'Makenke', location: 'Makenke', type: 'Executive' },
  { src: Land31, title: 'Karubanda Executive', location: 'Karubanda', type: 'Executive' },
  { src: Land32, title: 'Kiyenze Executive', location: 'Kiyenze', type: 'Executive' },
  { src: Land33, title: 'Kaberebere', location: 'Kaberebere', type: 'Executive' },
  { src: Land34, title: 'Karubanda-Rubeho', location: 'Karubanda / Rubeho', type: 'Executive' },
];

const galleryAlbums = [
  {
    id: 'featured',
    eyebrow: 'Signature Views',
    title: 'Featured Property Moments',
    summary: 'A visual look at standout land views, scenic plots, and the properties attracting the most attention right now.',
    cover: MbararaLand1,
    photos: allImages.filter((item) => item.type === 'Featured' || ['Karubanda Large', 'Masha Mile 1', 'Karubanda Executive'].includes(item.title)),
  },
  {
    id: 'residential',
    eyebrow: 'Residential Collection',
    title: 'Everyday Residential Land',
    summary: 'Plots suited to buyers looking for practical residential options across trusted neighborhoods and growth areas.',
    cover: Land5,
    photos: allImages.filter((item) => item.type === 'Residential'),
  },
  {
    id: 'executive',
    eyebrow: 'Executive Selection',
    title: 'Executive & Premium Plots',
    summary: 'A collection of premium plots chosen for buyers seeking stronger location appeal and more elevated residential options.',
    cover: Land31,
    photos: allImages.filter((item) => item.type === 'Executive'),
  },
  {
    id: 'commercial',
    eyebrow: 'Growth Opportunities',
    title: 'Commercial & Investment Options',
    summary: 'Properties that stand out for business potential, growth corridors, and future-looking land decisions.',
    cover: Land27,
    photos: allImages.filter((item) => item.type === 'Commercial' || ['Makenke', 'Karubanda Executive'].includes(item.title)),
  },
];

const Gallery = () => {
  const { albumId } = useParams();
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [currentAlbumPhotos, setCurrentAlbumPhotos] = useState([]);

  const pageBg = useColorModeValue('#f3f5f7', '#081117');
  const albumPageBg = useColorModeValue('#f3f5f7', '#081117');
  const heroBg = useColorModeValue('#0b151c', '#091117');
  const albumHeroBg = useColorModeValue('#113038', '#0f2a31');
  const heroText = useColorModeValue('rgba(255,255,255,0.84)', 'rgba(237,245,243,0.82)');
  const albumSurface = useColorModeValue('#ffffff', '#10222b');
  const albumBorder = useColorModeValue('rgba(18, 50, 58, 0.12)', 'rgba(255,255,255,0.08)');
  const mutedBadgeBg = useColorModeValue('rgba(47, 159, 121, 0.12)', 'rgba(47, 159, 121, 0.18)');
  const albumShadow = useColorModeValue(
    '0 18px 42px rgba(15, 23, 42, 0.10)',
    '0 18px 42px rgba(0, 0, 0, 0.32)',
  );
  const headingColor = useColorModeValue('#173a43', '#edf5f3');
  const bodyColor = useColorModeValue('#5d6f76', '#b8ccd0');
  const cardHoverBorder = useColorModeValue('rgba(209, 145, 42, 0.32)', 'rgba(232, 184, 80, 0.26)');
  const cardHoverShadow = useColorModeValue(
    '0 24px 48px rgba(15, 23, 42, 0.16)',
    '0 24px 48px rgba(0, 0, 0, 0.38)',
  );

  const openLightbox = (photos, index) => {
    setCurrentAlbumPhotos(photos);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setCurrentAlbumPhotos([]);
  };

  const navigateLightbox = (direction) => {
    if (lightboxIndex === null || currentAlbumPhotos.length === 0) return;
    let newIndex = direction === 'prev' ? lightboxIndex - 1 : lightboxIndex + 1;
    if (newIndex < 0) newIndex = currentAlbumPhotos.length - 1;
    if (newIndex >= currentAlbumPhotos.length) newIndex = 0;
    setLightboxIndex(newIndex);
  };

  const selectedAlbum = albumId
    ? galleryAlbums.find((album) => album.id === albumId)
    : null;

  if (albumId) {
    if (!selectedAlbum) {
      return (
        <Box w="100%" minH="100vh" bg={albumPageBg}>
          <Box bg={albumHeroBg} color="white">
            <Box maxW="1720px" mx="auto" px={{ base: 5, md: 8, xl: 10 }} py={{ base: 16, md: 20 }}>
              <VStack align="flex-start" spacing={4}>
                <HStack
                  as={RouterLink}
                  to="/gallery"
                  spacing={3}
                  color="whiteAlpha.900"
                  fontWeight="600"
                  transition="opacity 0.2s ease"
                  _hover={{ opacity: 0.82 }}
                >
                  <Icon as={FaArrowLeft} boxSize={3.5} />
                  <Text>Back to Gallery</Text>
                </HStack>

                <Heading
                  fontFamily="'Georgia', 'Times New Roman', serif"
                  fontSize={{ base: '4xl', md: '5xl' }}
                  lineHeight="1.04"
                >
                  Album not found
                </Heading>

                <Text color="whiteAlpha.900" maxW="34ch" lineHeight="1.8">
                  The album you tried to open is not available. Return to the gallery and choose another collection.
                </Text>
              </VStack>
            </Box>
          </Box>
        </Box>
      );
    }

    return (
      <Box w="100%" minH="100vh" bg={albumPageBg}>
        <Box bg={albumHeroBg} color="white">
          <Box maxW="1720px" mx="auto" px={{ base: 5, md: 8, xl: 10 }} py={{ base: 16, md: 20 }}>
            <VStack align="flex-start" spacing={4} maxW="720px">
              <HStack
                as={RouterLink}
                to="/gallery"
                spacing={3}
                color="whiteAlpha.900"
                fontWeight="600"
                transition="opacity 0.2s ease"
                _hover={{ opacity: 0.82 }}
              >
                <Icon as={FaArrowLeft} boxSize={3.5} />
                <Text>Back to Gallery</Text>
              </HStack>

              <Badge
                bg="rgba(255,255,255,0.14)"
                color="white"
                px={3}
                py={1.5}
                borderRadius="0"
                textTransform="none"
              >
                {selectedAlbum.eyebrow}
              </Badge>

              <Heading
                fontFamily="'Georgia', 'Times New Roman', serif"
                fontSize={{ base: '4xl', md: '5xl' }}
                lineHeight="1.02"
                letterSpacing="-0.03em"
              >
                {selectedAlbum.title}
              </Heading>

              <HStack spacing={5} color="whiteAlpha.900" flexWrap="wrap">
                <HStack spacing={2}>
                  <Icon as={FaCamera} />
                  <Text>{selectedAlbum.photos.length} photos</Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={FaMapMarkerAlt} />
                  <Text>Mbarara and surrounding areas</Text>
                </HStack>
              </HStack>

              <Text color="whiteAlpha.900" maxW="50ch" lineHeight="1.85">
                {selectedAlbum.summary}
              </Text>
            </VStack>
          </Box>
        </Box>

        {/* Reduced size image grid */}
        <Box maxW="1720px" mx="auto" px={{ base: 5, md: 8, xl: 10 }} py={{ base: 10, md: 14 }}>
          <SimpleGrid 
            columns={{ base: 2, sm: 3, md: 4, lg: 5, xl: 6 }} 
            spacing={{ base: 3, md: 4 }}
          >
            {selectedAlbum.photos.map((photo, index) => (
              <Box
                key={`${photo.title}-${index}`}
                borderRadius="0"
                overflow="hidden"
                bg={albumSurface}
                boxShadow="sm"
                transition="transform 0.2s ease, box-shadow 0.2s ease"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'md',
                  cursor: 'pointer',
                }}
                onClick={() => openLightbox(selectedAlbum.photos, index)}
              >
                <AspectRatio ratio={4/3}>
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    objectFit="cover"
                    loading="lazy"
                  />
                </AspectRatio>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Lightbox Modal */}
        <Modal isOpen={lightboxIndex !== null} onClose={closeLightbox} size="full" isCentered>
          <ModalOverlay bg="blackAlpha.900" backdropFilter="blur(8px)" />
          <ModalContent bg="transparent" boxShadow="none" m={0}>
            <ModalBody p={0} position="relative" h="100vh" display="flex" alignItems="center" justifyContent="center">
              <IconButton
                aria-label="Close lightbox"
                icon={<FaTimes />}
                position="absolute"
                top={4}
                right={4}
                zIndex={20}
                onClick={closeLightbox}
                variant="ghost"
                color="white"
                fontSize="24px"
                _hover={{ bg: 'whiteAlpha.200', transform: 'scale(1.05)' }}
                borderRadius="full"
              />
              
              {lightboxIndex !== null && currentAlbumPhotos[lightboxIndex] && (
                <Flex
                  direction="column"
                  align="center"
                  justify="center"
                  w="100%"
                  h="100%"
                  px={{ base: 2, md: 8 }}
                  py={{ base: 2, md: 8 }}
                >
                  <Box
                    position="relative"
                    maxW="90vw"
                    maxH="85vh"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <IconButton
                      aria-label="Previous image"
                      icon={<FaChevronLeft />}
                      position="absolute"
                      left={{ base: -2, md: -12 }}
                      top="50%"
                      transform="translateY(-50%)"
                      onClick={() => navigateLightbox('prev')}
                      variant="ghost"
                      color="white"
                      fontSize={{ base: '20px', md: '28px' }}
                      _hover={{ bg: 'whiteAlpha.200', transform: 'translateY(-50%) scale(1.1)' }}
                      borderRadius="full"
                      zIndex={10}
                    />
                    
                    <AspectRatio ratio={16/9} maxW="90vw" maxH="85vh" w="auto" h="auto">
                      <Image
                        src={currentAlbumPhotos[lightboxIndex].src}
                        alt={currentAlbumPhotos[lightboxIndex].title}
                        objectFit="contain"
                        borderRadius="0"
                      />
                    </AspectRatio>
                    
                    <IconButton
                      aria-label="Next image"
                      icon={<FaChevronRight />}
                      position="absolute"
                      right={{ base: -2, md: -12 }}
                      top="50%"
                      transform="translateY(-50%)"
                      onClick={() => navigateLightbox('next')}
                      variant="ghost"
                      color="white"
                      fontSize={{ base: '20px', md: '28px' }}
                      _hover={{ bg: 'whiteAlpha.200', transform: 'translateY(-50%) scale(1.1)' }}
                      borderRadius="full"
                      zIndex={10}
                    />
                  </Box>
                  
                  <VStack mt={6} spacing={2} textAlign="center" color="white">
                    <Text fontWeight="bold" fontSize={{ base: 'md', md: 'lg' }}>
                      {currentAlbumPhotos[lightboxIndex].title}
                    </Text>
                    <Text fontSize="sm" opacity={0.8}>
                      {currentAlbumPhotos[lightboxIndex].location}
                    </Text>
                    <Text fontSize="xs" opacity={0.6}>
                      {lightboxIndex + 1} / {currentAlbumPhotos.length}
                    </Text>
                  </VStack>
                </Flex>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    );
  }

  return (
    <Box w="100%" minH="100vh" bg={pageBg} overflowX="hidden">
      <Box bg={heroBg} color="white">
        <Box maxW="1720px" mx="auto" px={{ base: 5, md: 8, xl: 10 }} py={{ base: 16, md: 20, xl: 24 }}>
          <VStack align="flex-start" spacing={4} maxW="620px">
            <Text
              fontSize="xs"
              fontWeight="700"
              letterSpacing="0.22em"
              textTransform="uppercase"
              color="#d49b3d"
            >
              Collections
            </Text>

            <Heading
              fontFamily="'Georgia', 'Times New Roman', serif"
              fontSize={{ base: '4xl', md: '6xl' }}
              lineHeight={{ base: 1.05, md: 0.98 }}
              letterSpacing="-0.03em"
            >
              Photo Gallery
            </Heading>

            <Text color={heroText} fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.9" maxW="34ch">
              A visual journey through Zalseef Estates properties, land highlights, and the moments shaping our work in Mbarara.
            </Text>
          </VStack>
        </Box>
      </Box>

      <Box maxW="1720px" mx="auto" px={{ base: 5, md: 8, xl: 10 }} py={{ base: 10, md: 14 }}>
        <VStack align="stretch" spacing={8}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
            {galleryAlbums.map((album) => (
              <Box
                as={RouterLink}
                to={`/gallery/${album.id}`}
                key={album.id}
                role="group"
                display="block"
                bg={albumSurface}
                border="1px solid"
                borderColor={albumBorder}
                overflow="hidden"
                boxShadow={albumShadow}
                transition="transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease"
                _hover={{
                  transform: 'translateY(-6px)',
                  boxShadow: cardHoverShadow,
                  borderColor: cardHoverBorder,
                }}
              >
                <Box position="relative" h={{ base: '280px', md: '340px' }}>
                  <Image
                    src={album.cover}
                    alt={album.title}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    transition="transform 0.35s ease"
                    _groupHover={{ transform: 'scale(1.03)' }}
                  />
                  <Box
                    position="absolute"
                    inset={0}
                    bg="linear-gradient(180deg, rgba(8, 22, 28, 0.06) 0%, rgba(8, 22, 28, 0.74) 100%)"
                  />

                  <VStack
                    position="absolute"
                    left={0}
                    right={0}
                    bottom={0}
                    align="flex-start"
                    spacing={2}
                    px={{ base: 5, md: 6 }}
                    py={{ base: 5, md: 6 }}
                  >
                    <Badge
                      bg="rgba(255,255,255,0.16)"
                      color="white"
                      px={3}
                      py={1.5}
                      borderRadius="0"
                      textTransform="none"
                    >
                      {album.eyebrow}
                    </Badge>

                    <Heading
                      fontFamily="'Georgia', 'Times New Roman', serif"
                      fontSize={{ base: '2xl', md: '3xl' }}
                      color="white"
                      lineHeight="1.08"
                      maxW="16ch"
                    >
                      {album.title}
                    </Heading>

                    <Text color="whiteAlpha.900" fontSize="sm">
                      {album.photos.length} photos
                    </Text>
                  </VStack>

                  <HStack
                    position="absolute"
                    top={5}
                    right={5}
                    spacing={2}
                    bg="rgba(255,255,255,0.14)"
                    color="white"
                    px={3}
                    py={2}
                    borderRadius="0"
                    backdropFilter="blur(10px)"
                  >
                    <Icon as={FaExpandAlt} boxSize={3.5} />
                    <Text fontSize="sm" fontWeight="600">
                      Open Album
                    </Text>
                  </HStack>
                </Box>
              </Box>
            ))}
          </SimpleGrid>

          <Box
            bg={albumSurface}
            border="1px solid"
            borderColor={albumBorder}
            boxShadow={albumShadow}
            px={{ base: 5, md: 6 }}
            py={{ base: 5, md: 6 }}
          >
            <Grid templateColumns={{ base: '1fr', xl: 'minmax(0, 1.1fr) auto' }} gap={5} alignItems="center">
              <VStack align="flex-start" spacing={3}>
                <Badge
                  bg={mutedBadgeBg}
                  color={headingColor}
                  px={3}
                  py={1.5}
                  borderRadius="full"
                  textTransform="none"
                >
                  Land Collections
                </Badge>

                <Heading color={headingColor} fontSize={{ base: '2xl', md: '3xl' }} lineHeight="1.12">
                  Browse land photos by location, plot type, and featured property highlights.
                </Heading>

                <Text color={bodyColor} lineHeight="1.85" maxW="66ch">
                  Each album groups real plot images so buyers can compare scenery, access, surroundings,
                  and property options more clearly instead of scrolling through one mixed image wall.
                </Text>
              </VStack>

              <HStack spacing={3} alignSelf={{ base: 'flex-start', xl: 'center' }}>
                <HStack spacing={2} color={bodyColor}>
                  <Icon as={FaCamera} />
                  <Text fontWeight="600">{galleryAlbums.length} collections</Text>
                </HStack>
                <HStack spacing={2} color={bodyColor}>
                  <Icon as={FaMapMarkerAlt} />
                  <Text fontWeight="600">Mbarara and surrounding areas</Text>
                </HStack>
              </HStack>
            </Grid>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Gallery;
