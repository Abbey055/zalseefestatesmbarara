import { Text, Center, HStack, Link as ChakraLink } from '@chakra-ui/react';

const Footer = () => {
  return (
    <>
      <Center borderTopEndRadius='50%' mt='8' py={{ base: 6, md: '20px' }} bg='green.700' color='white' flexDirection='column' px={4}>
        <Text fontSize={{ base: '16px', sm: '15px' }} textAlign="center">ZALSEEF ESTATES - Your Trusted Land Dealers in Mbarara</Text>
        <HStack spacing={{ base: 3, sm: 4 }} mt={4} fontSize={{ base: '14px', sm: '13px' }} flexWrap="wrap" justify="center">
          <ChakraLink href="/about" _hover={{ textDecoration: 'underline' }} py={2}>About Us</ChakraLink>
          <ChakraLink href="/contact" _hover={{ textDecoration: 'underline' }} py={2}>Contact</ChakraLink>
          <ChakraLink href="tel:+256708124902" _hover={{ textDecoration: 'underline' }} py={2}>Call Us</ChakraLink>
          <ChakraLink href="mailto:zalseefmhd256@gmail.com" _hover={{ textDecoration: 'underline' }} py={2}>Email</ChakraLink>
        </HStack>
        <Text fontSize='13px' mt={4}>Copyright &copy; 2024 ZALSEEF ESTATES. All rights reserved.</Text>
      </Center>
    </>
  )
}

export default Footer;