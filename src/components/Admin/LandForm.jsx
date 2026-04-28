import { useEffect, useState } from 'react';
import {
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Switch,
  SimpleGrid,
  useToast,
  Checkbox,
  Box,
  Divider,
  Tag,
  TagLabel,
  TagCloseButton,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { useAdmin } from '../../context/AdminContext';
import ImageUpload from './ImageUpload';

const LandForm = ({ land, onClose, isEditing }) => {
  const { addLand, updateLand } = useAdmin();
  const toast = useToast();

  const getDefaultFormData = () => ({
    name: '',
    landUse: 'Residential',
    description: '',
    district: 'Mbarara',
    location: '',
    size: '',
    price: '',
    hasTitle: true,
    features: [],
    isSold: false,
    isOfferOfDay: false,
    offerPrice: '',
    offerEndDate: '',
    images: [],
  });
  const [formData, setFormData] = useState(getDefaultFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [featureInput, setFeatureInput] = useState('');

  useEffect(() => {
    if (land) {
      setFormData({
        name: land.name || '',
        landUse: land.landUse || 'Residential',
        description: land.description || '',
        district: land.district || 'Mbarara',
        location: land.location || '',
        size: land.size || '',
        price: land.price || '',
        hasTitle: land.hasTitle ?? true,
        features: land.features || [],
        isSold: land.isSold ?? false,
        isOfferOfDay: land.isOfferOfDay ?? false,
        offerPrice: land.offerPrice || '',
        offerEndDate: land.offerEndDate || '',
        images: land.images || (land.image ? [land.image] : []),
      });
      return;
    }

    setFormData(getDefaultFormData());
    setFeatureInput('');
  }, [land]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNumberChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddFeature = () => {
    if (featureInput.trim()) {
      setFormData(prev => ({
        ...prev,
        features: [...prev.features, featureInput.trim()]
      }));
      setFeatureInput('');
    }
  };

  const handleRemoveFeature = (index) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && featureInput.trim()) {
      e.preventDefault();
      handleAddFeature();
    }
  };

  const handleImagesChange = (newImages) => {
    setFormData(prev => ({
      ...prev,
      images: newImages
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.location || !formData.size || !formData.price) {
      toast({
        title: 'Missing Fields',
        description: 'Please fill in all required fields',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsSubmitting(true);

    // Prepare data for saving
    const landData = {
      ...formData,
      price: parseInt(formData.price) || 0,
      offerPrice: formData.offerPrice ? parseInt(formData.offerPrice) : null,
    };

    // Use first uploaded image as main image
    if (formData.images.length > 0) {
      const firstImage = formData.images[0];
      landData.image = firstImage.url || firstImage;
      landData.imageLg = firstImage.url || firstImage;
    } else if (!isEditing) {
      // No image uploaded for new land
      toast({
        title: 'Image Required',
        description: 'Please upload at least one image for the land',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      setIsSubmitting(false);
      return;
    }

    try {
      if (isEditing) {
        await updateLand(land.id, landData);
        toast({
          title: 'Land Updated',
          description: 'The land has been updated successfully',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } else {
        await addLand(landData);
        toast({
          title: 'Land Added',
          description: 'New land has been added successfully',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      }

      onClose();
    } catch (error) {
      toast({
        title: 'Save Failed',
        description: error.message || 'Unable to save this land right now.',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <SimpleGrid columns={2} spacing={4} w="100%">
          <FormControl isRequired>
            <FormLabel fontSize="sm">Plot Name</FormLabel>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Igyereka Plot A"
              size="sm"
              focusBorderColor="green.500"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel fontSize="sm">Land Type</FormLabel>
            <Select
              name="landUse"
              value={formData.landUse}
              onChange={handleChange}
              size="sm"
              focusBorderColor="green.500"
            >
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Agricultural">Agricultural</option>
              <option value="Executive">Executive</option>
            </Select>
          </FormControl>
        </SimpleGrid>

        <FormControl isRequired>
          <FormLabel fontSize="sm">Description</FormLabel>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the plot..."
            size="sm"
            rows={3}
            focusBorderColor="green.500"
          />
        </FormControl>

        <SimpleGrid columns={2} spacing={4} w="100%">
          <FormControl isRequired>
            <FormLabel fontSize="sm">Location</FormLabel>
            <Input
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g., Kakoba, Mbarara"
              size="sm"
              focusBorderColor="green.500"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel fontSize="sm">District</FormLabel>
            <Select
              name="district"
              value={formData.district}
              onChange={handleChange}
              size="sm"
              focusBorderColor="green.500"
            >
              <option value="Mbarara">Mbarara</option>
              <option value="Bushenyi">Bushenyi</option>
              <option value="Sheema">Sheema</option>
              <option value="Ntungamo">Ntungamo</option>
              <option value="Kiruhura">Kiruhura</option>
            </Select>
          </FormControl>
        </SimpleGrid>

        <SimpleGrid columns={2} spacing={4} w="100%">
          <FormControl isRequired>
            <FormLabel fontSize="sm">Size</FormLabel>
            <Input
              name="size"
              value={formData.size}
              onChange={handleChange}
              placeholder="e.g., 30x60, 5 acres"
              size="sm"
              focusBorderColor="green.500"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel fontSize="sm">Price (UGX)</FormLabel>
            <NumberInput
              value={formData.price}
              onChange={(value) => handleNumberChange('price', value)}
              min={1000000}
              step={500000}
              size="sm"
              focusBorderColor="green.500"
            >
              <NumberInputField placeholder="e.g., 3500000" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        </SimpleGrid>

        {/* Features Input */}
        <FormControl>
          <FormLabel fontSize="sm">Features</FormLabel>
          <HStack>
            <Input
              value={featureInput}
              onChange={(e) => setFeatureInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Add a feature (e.g., Surveyed, Road Access)"
              size="sm"
              focusBorderColor="green.500"
            />
            <Button onClick={handleAddFeature} size="sm" colorScheme="green">
              Add
            </Button>
          </HStack>
          <Wrap mt={2}>
            {formData.features.map((feature, index) => (
              <WrapItem key={index}>
                <Tag
                  size="sm"
                  borderRadius="full"
                  variant="solid"
                  colorScheme="green"
                >
                  <TagLabel>{feature}</TagLabel>
                  <TagCloseButton onClick={() => handleRemoveFeature(index)} />
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </FormControl>

        <Divider />

        {/* Status Section */}
        <Box w="100%" p={3} bg="gray.50" borderRadius="md">
          <FormLabel fontSize="sm" fontWeight="bold">Status</FormLabel>
          <SimpleGrid columns={2} spacing={4}>
            <FormControl display="flex" alignItems="center">
              <Checkbox
                name="isSold"
                isChecked={formData.isSold}
                onChange={handleChange}
                colorScheme="red"
                size="md"
              >
                Sold Out
              </Checkbox>
            </FormControl>

            <FormControl display="flex" alignItems="center">
              <Checkbox
                name="isOfferOfDay"
                isChecked={formData.isOfferOfDay}
                onChange={handleChange}
                colorScheme="orange"
                size="md"
              >
                Offer of the Day
              </Checkbox>
            </FormControl>
          </SimpleGrid>
        </Box>

        {/* Offer Details */}
        {formData.isOfferOfDay && (
          <SimpleGrid columns={2} spacing={4} w="100%">
            <FormControl>
              <FormLabel fontSize="sm">Offer Price (UGX)</FormLabel>
              <NumberInput
                value={formData.offerPrice}
                onChange={(value) => handleNumberChange('offerPrice', value)}
                min={1000000}
                step={500000}
                size="sm"
                focusBorderColor="orange.500"
              >
                <NumberInputField placeholder="Discounted price" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl>
              <FormLabel fontSize="sm">Offer End Date</FormLabel>
              <Input
                name="offerEndDate"
                type="date"
                value={formData.offerEndDate}
                onChange={handleChange}
                size="sm"
                focusBorderColor="orange.500"
              />
            </FormControl>
          </SimpleGrid>
        )}

        <Divider />

        {/* Image Upload Section */}
        <ImageUpload 
          onImagesChange={handleImagesChange}
          existingImages={formData.images}
        />

        <SimpleGrid columns={2} spacing={4} w="100%" pt={4}>
          <FormControl display="flex" alignItems="center">
            <FormLabel fontSize="sm" mb="0">
              Has Title?
            </FormLabel>
            <Switch
              name="hasTitle"
              isChecked={formData.hasTitle}
              onChange={handleChange}
              colorScheme="green"
            />
          </FormControl>
        </SimpleGrid>

        <HStack spacing={3} pt={4} w="100%">
          <Button
            type="submit"
            colorScheme="green"
            size="md"
            flex={1}
            borderRadius="full"
            isLoading={isSubmitting}
            loadingText={isEditing ? 'Updating...' : 'Saving...'}
          >
            {isEditing ? 'Update Land' : 'Add Land'}
          </Button>
          <Button
            onClick={onClose}
            variant="ghost"
            size="md"
            flex={1}
            borderRadius="full"
          >
            Cancel
          </Button>
        </HStack>
      </VStack>
    </form>
  );
};

export default LandForm;
