import { Textarea, Image, VStack, HStack, Box, Text, Input, Button, Link as ChakraLink } from '@chakra-ui/react'

const ContactForm = ({selectedLand}) => {
  return (
    <VStack border='1px' borderColor='green.100' boxShadow='md' px='5' py='6'>
        <HStack>
            <Image borderRadius='full' boxSize='75px' src={selectedLand.agent.image} />
            <Box>
                <Text mb='-3px' fontWeight='extrabold' fontSize='15px'>{selectedLand.agent.name}</Text>
                <ChakraLink 
                  href={`tel:+${selectedLand.agent.phone.replace(/\s/g, '')}`} 
                  fontSize='12px'
                  color="green.600"
                  _hover={{ textDecoration: 'underline' }}
                >
                  +{selectedLand.agent.phone}
                </ChakraLink>
                <Text fontSize='11px' color='green.600'>{selectedLand.agent.company}</Text>
            </Box>
        </HStack>

        <VStack my='3px' spacing='2px'>
            <form>
                <Input mt='3' mb='2' placeholder="Full Name*" />
                <Input placeholder="Email*" type="email" />
                <Input my='2' placeholder="Phone Number*" type="tel" />
                <Textarea my='2' placeholder='Message*' size='sm'  defaultValue={`I'm interested in ${selectedLand.name}. Please provide more details.`} />
                <HStack my='2'>
                    <Button w='full' px='4' colorScheme='green'>Send Inquiry</Button>
                    <ChakraLink href={`tel:+${selectedLand.agent.phone.replace(/\s/g, '')}`} w={{base: 'full', md: '50%'}}>
                      <Button w='full' variant='outline' colorScheme='green'>Call Agent</Button>
                    </ChakraLink>
                </HStack>
            </form>
        </VStack>
    </VStack>
  )
}

export default ContactForm;