import { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Button,
  Text,
  Image,
  Icon,
  Input,
  FormControl,
  FormLabel,
  SimpleGrid,
  useToast,
} from '@chakra-ui/react';
import { FaUpload, FaTrash, FaImage } from 'react-icons/fa';

const ImageUpload = ({ onImagesChange, existingImages = [] }) => {
  const [images, setImages] = useState(existingImages);
  const [uploading, setUploading] = useState(false);
  const toast = useToast();

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploading(true);

    // Simulate upload (in production, you'd upload to server)
    setTimeout(() => {
      const newImages = files.map(file => ({
        url: URL.createObjectURL(file),
        file: file,
        name: file.name
      }));

      const updatedImages = [...images, ...newImages];
      setImages(updatedImages);
      onImagesChange(updatedImages);
      setUploading(false);

      toast({
        title: 'Images added',
        description: `${files.length} image(s) uploaded successfully`,
        status: 'success',
        duration: 2000,
      });
    }, 500);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    onImagesChange(updatedImages);
  };

  return (
    <Box>
      <FormControl mb={4}>
        <FormLabel>Land Images</FormLabel>
        <HStack spacing={4}>
          <Button
            as="label"
            htmlFor="image-upload"
            leftIcon={<FaUpload />}
            colorScheme="green"
            variant="outline"
            cursor="pointer"
            isLoading={uploading}
            size="sm"
          >
            Upload Images
          </Button>
          <Input
            id="image-upload"
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            display="none"
          />
          <Text fontSize="sm" color="gray.500">
            {images.length} image(s) selected
          </Text>
        </HStack>
      </FormControl>

      {images.length > 0 && (
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={3} mt={4}>
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
              {!img.url && (
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  bg="green.500"
                  color="white"
                  fontSize="2xs"
                  textAlign="center"
                  py={0.5}
                >
                  Existing
                </Box>
              )}
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default ImageUpload;