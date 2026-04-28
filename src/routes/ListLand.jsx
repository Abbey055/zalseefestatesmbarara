import {
  Button,
  Container,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';

import { submitSellerLead } from '../lib/supabaseData';

const ListLand = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    try {
      await submitSellerLead({
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        landLocation: formData.get('landLocation'),
        landType: formData.get('landType'),
        size: formData.get('size'),
        expectedPrice: formData.get('expectedPrice'),
        details: formData.get('details'),
      });

      event.currentTarget.reset();
      toast({
        title: 'Listing Request Sent',
        description: 'Your land details are now stored in Supabase for review.',
        status: 'success',
        duration: 3500,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Unable to Submit',
        description: error.message || 'Please try again in a moment.',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container maxW='container.md' py='8'>
      <Heading color="green.700" mb="6">List Your Land</Heading>
      <Text mb="6">Fill in the details below and our agent will contact you.</Text>
      
      <VStack as="form" spacing={4} align="stretch" onSubmit={handleSubmit}>
        <Input name="name" placeholder="Your Full Name" required />
        <Input name="email" placeholder="Email Address" type="email" required />
        <Input name="phone" placeholder="Phone Number" required />
        <Input name="landLocation" placeholder="Land Location" required />
        <Select name="landType" placeholder="Land Type" required>
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
          <option value="agricultural">Agricultural</option>
        </Select>
        <Input name="size" placeholder="Size (e.g., 20 decimals, 5 acres)" required />
        <Input name="expectedPrice" placeholder="Expected Price (UGX)" type="number" />
        <Textarea name="details" placeholder="Additional Details about your land" rows={4} />
        <Button colorScheme="green" size="lg" type="submit" isLoading={isSubmitting} loadingText="Submitting...">
          Submit Listing
        </Button>
      </VStack>
    </Container>
  );
};

export default ListLand;
