import { Text, Center, HStack, Link as ChakraLink, Box } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { useState, useEffect } from 'react';

// Falling animation
const fallAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100px) rotate(-5deg);
  }
  70% {
    opacity: 0.9;
    transform: translateY(10px) rotate(2deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotate(0);
  }
`;

const Footer = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  return (
    <Box
      as="footer"
      width="100%"
      mt="8"
      animation={hasAnimated ? `${fallAnimation} 0.6s ease-out` : 'none'}
      _hover={{
        transform: 'translateY(-3px)',
        transition: 'transform 0.3s',
      }}
    >
      <Center
        borderTopEndRadius="50%"
        py={{ base: 6, md: '20px' }}
        bg="green.700"
        color="white"
        flexDirection="column"
        px={4}
        boxShadow="0 -5px 20px rgba(56, 161, 105, 0.3)"
        transition="all 0.3s"
        _hover={{
          boxShadow: '0 -10px 30px rgba(56, 161, 105, 0.5)',
        }}
      >
        <Text fontSize={{ base: '16px', sm: '15px' }} textAlign="center" fontWeight="bold">
          ZALSEEF ESTATES
        </Text>
        <Text fontSize={{ base: '14px', sm: '13px' }} textAlign="center" opacity={0.9} mb={2}>
          Your Trusted Land Dealers in Mbarara
        </Text>
        
        <HStack spacing={{ base: 3, sm: 4 }} mt={2} fontSize={{ base: '14px', sm: '13px' }} flexWrap="wrap" justify="center">
          <ChakraLink href="/about" _hover={{ textDecoration: 'underline', color: 'green.200' }} py={2}>
            About Us
          </ChakraLink>
          <ChakraLink href="/contact" _hover={{ textDecoration: 'underline', color: 'green.200' }} py={2}>
            Contact
          </ChakraLink>
          <ChakraLink href="tel:+256708124902" _hover={{ textDecoration: 'underline', color: 'green.200' }} py={2}>
            Call Us
          </ChakraLink>
          <ChakraLink href="mailto:zalseefmhd256@gmail.com" _hover={{ textDecoration: 'underline', color: 'green.200' }} py={2}>
            Email
          </ChakraLink>
        </HStack>
        
        <Text fontSize='12px' mt={4} opacity={0.8}>
          Copyright &copy; {new Date().getFullYear()} ZALSEEF ESTATES. All rights reserved.
        </Text>
      </Center>
    </Box>
  );
};

export default Footer;