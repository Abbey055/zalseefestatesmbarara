import { Container, Heading, VStack, Box, Text, Input, Select, Textarea, Button } from '@chakra-ui/react';

const ListLand = () => {
  return (
    <Container maxW='container.md' py='8'>
      <Heading color="green.700" mb="6">List Your Land</Heading>
      <Text mb="6">Fill in the details below and our agent will contact you.</Text>
      
      <VStack as="form" spacing={4} align="stretch">
        <Input placeholder="Your Full Name" />
        <Input placeholder="Email Address" type="email" />
        <Input placeholder="Phone Number" />
        <Input placeholder="Land Location" />
        <Select placeholder="Land Type">
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
          <option value="agricultural">Agricultural</option>
        </Select>
        <Input placeholder="Size (e.g., 20 decimals, 5 acres)" />
        <Input placeholder="Expected Price (UGX)" type="number" />
        <Textarea placeholder="Additional Details about your land" rows={4} />
        <Button colorScheme="green" size="lg">Submit Listing</Button>
      </VStack>
    </Container>
  );
};

export default ListLand;