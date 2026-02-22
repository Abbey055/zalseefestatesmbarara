import { Container, Heading, VStack, Box, Text, Input, Textarea, Button, HStack, Icon, SimpleGrid, Link as ChakraLink } from '@chakra-ui/react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaWhatsapp, 
  FaTiktok, 
  FaYoutube, 
  FaInstagram
} from 'react-icons/fa';

const Contact = () => {
  return (
    <Container maxW='container.lg' py='8'>
      <VStack spacing={8} align="stretch">
        {/* Header */}
        <Box textAlign="center">
          <Heading color="green.700" mb="4">Contact Us</Heading>
          <Text fontSize="lg" color="gray.600">
            Reach out to us for inquiries or to schedule a site visit. 
            We're here to help you find your perfect land.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {/* Contact Information */}
          <Box bg="green.50" p={8} borderRadius="lg">
            <VStack align="start" spacing={6}>
              {/* Office Location */}
              <Box w="full">
                <HStack mb={2}>
                  <Icon as={FaMapMarkerAlt} color="green.600" boxSize={5} />
                  <Text fontWeight="bold" fontSize="lg">Office Location</Text>
                </HStack>
                <Text pl={7}>St Paul Shopping Mall, Room C10</Text>
                <Text pl={7}>Mbarara, Uganda</Text>
              </Box>

              {/* Phone - Click to Call */}
              <Box w="full">
                <HStack mb={2}>
                  <Icon as={FaPhone} color="green.600" boxSize={5} />
                  <Text fontWeight="bold" fontSize="lg">Call Us</Text>
                </HStack>
                <ChakraLink 
                  href="tel:+256708124902" 
                  pl={7}
                  color="green.700"
                  fontWeight="medium"
                  _hover={{ color: 'green.500', textDecoration: 'underline' }}
                >
                  +256 708 124902
                </ChakraLink>
                <Text pl={7} color="gray.600" fontSize="sm">Mon-Sat: 8:00 AM - 6:00 PM</Text>
              </Box>

              {/* Email - Click to Email */}
              <Box w="full">
                <HStack mb={2}>
                  <Icon as={FaEnvelope} color="green.600" boxSize={5} />
                  <Text fontWeight="bold" fontSize="lg">Email Us</Text>
                </HStack>
                <ChakraLink 
                  href="mailto:zalseefmhd256@gmail.com" 
                  pl={7}
                  color="green.700"
                  fontWeight="medium"
                  _hover={{ color: 'green.500', textDecoration: 'underline' }}
                >
                  zalseefmhd256@gmail.com
                </ChakraLink>
                <Text pl={7} color="gray.600" fontSize="sm">We respond within 24 hours</Text>
              </Box>

              {/* Office Hours */}
              <Box w="full">
                <HStack mb={2}>
                  <Icon as={FaClock} color="green.600" boxSize={5} />
                  <Text fontWeight="bold" fontSize="lg">Office Hours</Text>
                </HStack>
                <Text pl={7}>Monday - Friday: 24/7</Text>
              </Box>

              {/* Social Media - Icons Only */}
              <Box w="full" mt={4}>
                <Text fontWeight="bold" fontSize="lg" mb={4}>Connect With Us</Text>
                <HStack spacing={4} justify="flex-start">
                  <ChakraLink 
                    href="https://wa.me/256708124902" 
                    isExternal
                    _hover={{ transform: 'scale(1.1)', transition: '0.2s' }}
                  >
                    <Icon as={FaWhatsapp} boxSize={8} color="#25D366" />
                  </ChakraLink>
                  
                  <ChakraLink 
                    href="https://www.tiktok.com/@zalseef_estates" 
                    isExternal
                    _hover={{ transform: 'scale(1.1)', transition: '0.2s' }}
                  >
                    <Icon as={FaTiktok} boxSize={8} color="#000000" />
                  </ChakraLink>
                  
                  <ChakraLink 
                    href="https://www.youtube.com/@ZalseefEstates" 
                    isExternal
                    _hover={{ transform: 'scale(1.1)', transition: '0.2s' }}
                  >
                    <Icon as={FaYoutube} boxSize={8} color="#FF0000" />
                  </ChakraLink>
                  
                  <ChakraLink 
                    href="https://www.instagram.com/zalseef_estates" 
                    isExternal
                    _hover={{ transform: 'scale(1.1)', transition: '0.2s' }}
                  >
                    <Icon as={FaInstagram} boxSize={8} color="#E4405F" />
                  </ChakraLink>
                </HStack>
              </Box>
            </VStack>
          </Box>

          {/* Contact Form */}
          <Box p={8} borderWidth="1px" borderRadius="lg">
            <VStack as="form" spacing={4} align="stretch">
              <Heading size="md" mb={2} color="green.700">Send us a Message</Heading>
              <Input 
                placeholder="Your Full Name" 
                focusBorderColor="green.500"
                _hover={{ borderColor: 'green.500' }}
              />
              <Input 
                placeholder="Your Email" 
                type="email" 
                focusBorderColor="green.500"
                _hover={{ borderColor: 'green.500' }}
              />
              <Input 
                placeholder="Phone Number" 
                type="tel"
                focusBorderColor="green.500"
                _hover={{ borderColor: 'green.500' }}
              />
              <Textarea 
                placeholder="Your Message" 
                rows={4} 
                focusBorderColor="green.500"
                _hover={{ borderColor: 'green.500' }}
              />
              <Button 
                colorScheme="green" 
                size="lg" 
                w="full"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                type="submit"
              >
                Send Message
              </Button>
            </VStack>
          </Box>
        </SimpleGrid>

        {/* Additional Info with Clickable Links */}
        <Box bg="green.100" p={4} borderRadius="md" textAlign="center">
          <HStack justify="center" spacing={4} flexWrap="wrap">
            <HStack>
              <Icon as={FaMapMarkerAlt} color="green.700" />
              <Text fontSize="sm" color="green.800">St Paul Shopping Mall, Room C10, Mbarara</Text>
            </HStack>
            <HStack>
              <Icon as={FaPhone} color="green.700" />
              <ChakraLink 
                href="tel:+256708124902" 
                fontSize="sm" 
                color="green.800"
                fontWeight="medium"
                _hover={{ color: 'green.600', textDecoration: 'underline' }}
              >
                +256 708 124902
              </ChakraLink>
            </HStack>
            <HStack>
              <Icon as={FaEnvelope} color="green.700" />
              <ChakraLink 
                href="mailto:zalseefmhd256@gmail.com" 
                fontSize="sm" 
                color="green.800"
                fontWeight="medium"
                _hover={{ color: 'green.600', textDecoration: 'underline' }}
              >
                zalseefmhd256@gmail.com
              </ChakraLink>
            </HStack>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Contact;