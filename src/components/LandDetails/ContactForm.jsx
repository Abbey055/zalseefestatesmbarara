import { Textarea, Image, VStack, HStack, Box, Text, Input, Button, Link as ChakraLink } from '@chakra-ui/react'

const ContactForm = ({selectedLand}) => {
  return (
    <VStack border='1px' borderColor='green.100' boxShadow='md' p={{ base: 4, md: 5 }} py={6} borderRadius="lg" w="full">
        <HStack spacing={4} w="full" flexDirection={{ base: "column", sm: "row" }} textAlign={{ base: "center", sm: "left" }}>
            <Image borderRadius='full' boxSize={{ base: "100px", sm: "75px" }} src={selectedLand.agent.image} />
            <Box>
                <Text mb='-3px' fontWeight='extrabold' fontSize={{ base: "lg", sm: "15px" }}>{selectedLand.agent.name}</Text>
                <ChakraLink 
                  href={`tel:+${selectedLand.agent.phone.replace(/\s/g, '')}`} 
                  fontSize={{ base: "14px", sm: "12px" }}
                  color="green.600"
                  _hover={{ textDecoration: 'underline' }}
                >
                  +{selectedLand.agent.phone}
                </ChakraLink>
                <Text fontSize={{ base: "12px", sm: "11px" }} color='green.600'>{selectedLand.agent.company}</Text>
            </Box>
        </HStack>

        <VStack my='3px' spacing='2px' w="full">
            <form style={{ width: '100%' }}>
                <Input mt='3' mb='2' placeholder="Full Name*" size={{ base: "lg", md: "md" }} />
                <Input placeholder="Email*" type="email" size={{ base: "lg", md: "md" }} />
                <Input my='2' placeholder="Phone Number*" type="tel" size={{ base: "lg", md: "md" }} />
                <Textarea my='2' placeholder='Message*' size='md' rows={4} defaultValue={`I'm interested in ${selectedLand.name}. Please provide more details.`} />
                <VStack my='2' spacing={3}>
                    <Button w='full' px='4' colorScheme='green' size={{ base: "lg", md: "md" }}>Send Inquiry</Button>
                    <ChakraLink href={`tel:+${selectedLand.agent.phone.replace(/\s/g, '')}`} w='full'>
                      <Button w='full' variant='outline' colorScheme='green' size={{ base: "lg", md: "md" }}>Call Agent</Button>
                    </ChakraLink>
                </VStack>
            </form>
        </VStack>
    </VStack>
  )
}

export default ContactForm;