import { Text, Center, HStack, Link as ChakraLink } from '@chakra-ui/react';

const Footer = () => {
  return (
    <>
      <Center borderTopEndRadius='50%' mt='8' py='20px' bg='green.700' color='white' flexDirection='column'>
        <Text fontSize='15px'>ZALSEEF ESTATES - Your Trusted Land Dealers in Mbarara</Text>
        <HStack spacing='4' mt='2' fontSize='13px' flexWrap="wrap" justify="center">
          <ChakraLink href="/about" _hover={{ textDecoration: 'underline' }}>About Us</ChakraLink>
          <ChakraLink href="/contact" _hover={{ textDecoration: 'underline' }}>Contact</ChakraLink>
          <ChakraLink href="tel:+256708124902" _hover={{ textDecoration: 'underline' }}>Call Us</ChakraLink>
          <ChakraLink href="mailto:zalseefmhd256@gmail.com" _hover={{ textDecoration: 'underline' }}>Email</ChakraLink>
        </HStack>
        <Text fontSize='12px' mt='2'>Copyright &copy; 2024 ZALSEEF ESTATES. All rights reserved.</Text>
      </Center>
    </>
  )
}

export default Footer;