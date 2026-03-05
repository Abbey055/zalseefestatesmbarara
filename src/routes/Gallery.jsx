import { useState } from 'react';
import {
  Container,
  Heading,
  Text,
  SimpleGrid,
  Box,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  VStack,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Button,
  AspectRatio,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { FaArrowLeft, FaArrowRight, FaMapMarkerAlt, FaRuler, FaTag } from 'react-icons/fa';

// Import all land images (keep your existing imports)
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
import Land35 from '../assets/images/lands/land35.jpg';
import Land36 from '../assets/images/lands/land36.jpg';
import Land37 from '../assets/images/lands/land37.jpg';
import Land38 from '../assets/images/lands/land38.jpg';
import Land39 from '../assets/images/lands/land39.jpg';
import Land40 from '../assets/images/lands/land40.jpg';
import Land41 from '../assets/images/lands/land41.jpg';
import Land42 from '../assets/images/lands/land42.jpg';
import Land43 from '../assets/images/lands/land43.jpg';
import Land44 from '../assets/images/lands/land44.jpg';
import Land45 from '../assets/images/lands/land45.jpg';
import Land46 from '../assets/images/lands/land46.jpg';
import Land47 from '../assets/images/lands/land47.jpg';
import Land48 from '../assets/images/lands/land48.jpg';

// Import Mbarara specific images
import MbararaLand1 from '../assets/images/lands/mbarara1.jpg';
import MbararaLand2 from '../assets/images/lands/mbarara2.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Combine all images with metadata
  const allImages = [
    // Mbarara specific images first
    { src: MbararaLand1, title: 'Mbarara Prime Land', location: 'Mbarara City', type: 'Featured', size: 'Multiple plots' },
    { src: MbararaLand2, title: 'Mbarara Scenic View', location: 'Mbarara Hills', type: 'Featured', size: 'Various sizes' },
    
    // Add all your 48 land images with appropriate metadata
    { src: Land1, title: 'Igyereka Plot', location: 'Igyereka', type: 'Residential', size: '27x55' },
    { src: Land2, title: 'Ahari Ibiiri Plot', location: 'Ahari Ibiiri', type: 'Residential', size: '25x50' },
    { src: Land3, title: 'Nyarubungo Plot A', location: 'Nyarubungo', type: 'Residential', size: '30x80' },
    { src: Land4, title: 'Nyarubungo Plot B', location: 'Nyarubungo', type: 'Residential', size: '22x85' },
    { src: Land5, title: 'Kiyenze Plot', location: 'Kiyenze', type: 'Residential', size: '25x50' },
    { src: Land6, title: 'Rwendezi Plot', location: 'Rwendezi', type: 'Residential', size: '30x55' },
    { src: Land7, title: 'Rwenshebashaba Plot', location: 'Rwenshebashaba', type: 'Residential', size: '25x55' },
    { src: Land8, title: 'Karubanda Plot A', location: 'Karubanda', type: 'Residential', size: '25x55' },
    { src: Land9, title: 'Karubanda Plot B', location: 'Karubanda', type: 'Residential', size: '35x50' },
    { src: Land10, title: 'Karubanda Plot C', location: 'Karubanda', type: 'Residential', size: '25x50' },
    { src: Land11, title: 'Igyereka Plot B', location: 'Igyereka', type: 'Residential', size: '30x60' },
    { src: Land12, title: 'Igyereka Plot C', location: 'Igyereka', type: 'Residential', size: '30x105' },
    { src: Land13, title: 'Igyereka Plot D', location: 'Igyereka', type: 'Residential', size: '35x105' },
    { src: Land14, title: 'Rubeho Plot A', location: 'Rubeho', type: 'Residential', size: '30x50' },
    { src: Land15, title: 'Rubeho Plot B', location: 'Rubeho', type: 'Residential', size: '25x100' },
    { src: Land16, title: 'Ahari Ibiiri Large', location: 'Ahari Ibiiri', type: 'Residential', size: '50x100' },
    { src: Land17, title: 'Kabaare Kihogo', location: 'Kabaare Kihogo', type: 'Residential', size: '30x50' },
    { src: Land18, title: 'Omukabira Plot', location: 'Omukabira', type: 'Residential', size: '25x50' },
    { src: Land19, title: 'Rukuba Plot', location: 'Rukuba', type: 'Residential', size: '25x50' },
    { src: Land20, title: 'Rwenshebashaba Large', location: 'Rwenshebashaba', type: 'Residential', size: '25x80' },
    { src: Land21, title: 'Rweiziringiro', location: 'Rweiziringiro', type: 'Residential', size: '30x60' },
    { src: Land22, title: 'Omukabira Kangyeya', location: 'Omukabira Kangyeya', type: 'Residential', size: '30x80' },
    { src: Land23, title: 'Karubanda Large', location: 'Karubanda', type: 'Residential', size: '25x75' },
    { src: Land24, title: 'Masha Mile 1', location: 'Masha Mile 1', type: 'Residential', size: '50x100' },
    { src: Land25, title: 'Masha Mile 2', location: 'Masha Mile 2', type: 'Residential', size: '50x100' },
    { src: Land26, title: 'Aharyemu', location: 'Aharyemu', type: 'Residential', size: '50x100' },
    { src: Land27, title: 'Kaberere Town', location: 'Kaberere Town', type: 'Commercial', size: '50x100' },
    { src: Land28, title: 'Nyarubungo Executive', location: 'Nyarubungo', type: 'Executive', size: '55x100' },
    { src: Land29, title: 'Omukafunda', location: 'Omukafunda', type: 'Executive', size: '50x100' },
    { src: Land30, title: 'Makenke', location: 'Makenke', type: 'Executive', size: '60x100' },
    { src: Land31, title: 'Karubanda Executive', location: 'Karubanda', type: 'Executive', size: '50x100' },
    { src: Land32, title: 'Kiyenze Executive', location: 'Kiyenze', type: 'Executive', size: '60x100' },
    { src: Land33, title: 'Kaberebere', location: 'Kaberebere', type: 'Executive', size: '50x100' },
    { src: Land34, title: 'Karubanda-Rubeho', location: 'Karubanda/Rubeho', type: 'Executive', size: '25x100' },
  ];

  // Filter images based on search and filter
  const filteredImages = allImages.filter(img => {
    const matchesSearch = img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         img.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || img.type === filter;
    return matchesSearch && matchesFilter;
  });

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setSelectedImage(filteredImages[index]);
    onOpen();
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <Container maxW="container.xl" py={8}>
      {/* Header */}
      <VStack spacing={4} mb={8} textAlign="center">
        <Heading 
          color="green.700" 
          size="2xl"
          bgGradient="linear(to-r, green.700, green.500)"
          bgClip="text"
        >
          Photo Gallery
        </Heading>
        <Text fontSize="lg" color="gray.600" maxW="600px">
          Explore our collection of prime land in Mbarara. Click any image to view in full size.
        </Text>
      </VStack>

      {/* Search and Filter Bar */}
      <VStack spacing={4} mb={8}>
        <HStack w="100%" spacing={4} flexWrap="wrap">
          <InputGroup maxW="400px" flex={1}>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="green.500" />
            </InputLeftElement>
            <Input
              placeholder="Search by location or title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              focusBorderColor="green.500"
              bg="white"
              borderRadius="full"
            />
          </InputGroup>
          
          <Select
            maxW="200px"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            focusBorderColor="green.500"
            bg="white"
            borderRadius="full"
          >
            <option value="all">All Types</option>
            <option value="Featured">Featured</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Executive">Executive</option>
          </Select>
        </HStack>
        
        <Text alignSelf="flex-start" color="gray.600" fontSize="sm">
          Showing {filteredImages.length} {filteredImages.length === 1 ? 'image' : 'images'}
        </Text>
      </VStack>

      {/* Gallery Grid - Clean Layout */}
      <SimpleGrid 
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }} 
        spacing={6}
      >
        {filteredImages.map((image, index) => (
          <Box
            key={index}
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            cursor="pointer"
            onClick={() => handleImageClick(index)}
            transition="all 0.3s"
            _hover={{
              transform: 'scale(1.02)',
              boxShadow: 'xl',
            }}
            bg="white"
          >
            <AspectRatio ratio={4/3}>
              <Image
                src={image.src}
                alt={image.title}
                objectFit="cover"
              />
            </AspectRatio>
            
            {/* Clean Image Info - No Badges */}
            <VStack p={3} align="start" spacing={1} bg="white">
              <Text fontWeight="bold" fontSize="md" color="green.700" noOfLines={1}>
                {image.title}
              </Text>
              <HStack spacing={3} color="gray.600" fontSize="sm">
                <HStack spacing={1}>
                  <FaMapMarkerAlt size={12} />
                  <Text>{image.location}</Text>
                </HStack>
                <HStack spacing={1}>
                  <FaRuler size={12} />
                  <Text>{image.size}</Text>
                </HStack>
              </HStack>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>

      {/* No Results */}
      {filteredImages.length === 0 && (
        <Box textAlign="center" py={20}>
          <Text fontSize="xl" color="gray.500">No images found matching your criteria</Text>
          <Button
            mt={4}
            colorScheme="green"
            onClick={() => {
              setSearchTerm('');
              setFilter('all');
            }}
            borderRadius="full"
          >
            Clear Filters
          </Button>
        </Box>
      )}

      {/* Lightbox Modal - Clean Design */}
      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay bg="blackAlpha.900" />
        <ModalContent bg="transparent" boxShadow="none">
          <ModalCloseButton color="white" size="lg" zIndex={20} />
          <ModalBody p={0}>
            {selectedImage && (
              <VStack spacing={4}>
                <Box position="relative" w="100%">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    w="100%"
                    maxH="80vh"
                    objectFit="contain"
                  />
                  
                  {/* Navigation Buttons */}
                  <IconButton
                    icon={<FaArrowLeft />}
                    position="absolute"
                    left={4}
                    top="50%"
                    transform="translateY(-50%)"
                    onClick={handlePrev}
                    colorScheme="whiteAlpha"
                    borderRadius="full"
                    size="lg"
                    _hover={{ bg: 'whiteAlpha.400' }}
                  />
                  <IconButton
                    icon={<FaArrowRight />}
                    position="absolute"
                    right={4}
                    top="50%"
                    transform="translateY(-50%)"
                    onClick={handleNext}
                    colorScheme="whiteAlpha"
                    borderRadius="full"
                    size="lg"
                    _hover={{ bg: 'whiteAlpha.400' }}
                  />
                </Box>

                {/* Image Details - Clean Card */}
                <Box bg="white" p={6} borderRadius="lg" w="100%" maxW="800px" mx="auto">
                  <VStack align="start" spacing={3}>
                    <Heading size="lg" color="green.700">{selectedImage.title}</Heading>
                    
                    <SimpleGrid columns={2} spacing={4} w="full">
                      <HStack>
                        <FaMapMarkerAlt color="#38A169" />
                        <Text><strong>Location:</strong> {selectedImage.location}</Text>
                      </HStack>
                      <HStack>
                        <FaTag color="#38A169" />
                        <Text><strong>Type:</strong> {selectedImage.type}</Text>
                      </HStack>
                      <HStack>
                        <FaRuler color="#38A169" />
                        <Text><strong>Size:</strong> {selectedImage.size}</Text>
                      </HStack>
                    </SimpleGrid>
                    
                    <Button
                      as="a"
                      href="/contact"
                      colorScheme="green"
                      size="lg"
                      w="full"
                      mt={4}
                      borderRadius="full"
                    >
                      Inquire About This Plot
                    </Button>
                  </VStack>
                </Box>
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Gallery;