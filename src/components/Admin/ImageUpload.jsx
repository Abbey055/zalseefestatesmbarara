import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Text,
  useToast,
  VStack,
  HStack,
  Image,
  SimpleGrid,
  IconButton,
} from '@chakra-ui/react';
import { FaUpload, FaTrash } from 'react-icons/fa';

import { uploadLandImage } from '../../lib/supabaseData';

const ImageUpload = ({ onImagesChange, existingImages = [] }) => {
  const [images, setImages] = useState(existingImages);
  const [uploading, setUploading] = useState(false);
  const toast = useToast();

  useEffect(() => {
    setImages(existingImages);
  }, [existingImages]);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    setUploading(true);
    
    try {
      const uploadedImage = await uploadLandImage(file);
      const updatedImages = [...images, uploadedImage];
      setImages(updatedImages);
      onImagesChange(updatedImages);

      toast({
        title: 'Success',
        description: 'Image uploaded to Supabase',
        status: 'success',
        duration: 2000,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message || 'Upload failed',
        status: 'error',
        duration: 3000,
      });
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    onImagesChange(updatedImages);
  };

  return (
    <Box>
      <HStack spacing={4} mb={4}>
        <Button
          as="label"
          htmlFor="image-upload"
          leftIcon={<FaUpload />}
          colorScheme="green"
          isLoading={uploading}
          loadingText="Uploading..."
          cursor="pointer"
        >
          Upload Image
        </Button>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: 'none' }}
        />
        <Text fontSize="sm" color="gray.500">
          {images.length} image(s)
        </Text>
      </HStack>

      {images.length > 0 && (
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={3}>
          {images.map((img, index) => (
            <Box
              key={index}
              position="relative"
              borderRadius="md"
              overflow="hidden"
              border="1px solid"
              borderColor="gray.200"
            >
              <Image
                src={img.url || img}
                alt={`Land ${index + 1}`}
                h="80px"
                w="100%"
                objectFit="cover"
              />
              <IconButton
                icon={<FaTrash />}
                size="xs"
                colorScheme="red"
                position="absolute"
                top={1}
                right={1}
                onClick={() => handleRemoveImage(index)}
                borderRadius="full"
              />
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default ImageUpload;
