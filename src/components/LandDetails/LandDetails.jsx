import { Stack, VStack, Heading, Text, Box, HStack, Image, Badge } from "@chakra-ui/react"
import { BiMap, BiRuler, BiLandscape, BiCertification } from "react-icons/bi";

import { useContext } from "react";
import { useParams } from "react-router-dom";

import { LandContext } from "../../context/LandContext";
import ContactForm from "./ContactForm";

const LandDetails = () => {

  const {landId} = useParams();
  const { lands } = useContext(LandContext);

  const selectedLand = lands.find(land=> land.id == landId)

  return (
    <>
      <Stack direction={{base: 'column', md: 'row'}} justify='space-between' align={{md: 'center'}}  my='28px'>
        <Box>
          <Heading fontSize='22px'>{selectedLand.name}</Heading>
          <Text fontSize='15px'>{selectedLand.location}</Text>
        </Box>
        
        <HStack>
          <Badge px='3' py='1' borderRadius='full' bg='green.100' color='green.800'>{selectedLand.landUse}</Badge>
          <Badge px='3' py='1' borderRadius='full' bg='blue.100' color='blue.800'>{selectedLand.district}</Badge>
          {selectedLand.hasTitle && 
            <Badge px='3' py='1' borderRadius='full' bg='purple.100' color='purple.800'>Title Available</Badge>
          }
        </HStack>

        <Text fontWeight="extrabold" fontSize="20px" color="green.600">UGX {selectedLand.price.toLocaleString()}</Text>
      </Stack>

      <Stack direction={{base:'column', lg: 'row'}} gap='6' align='flex-start'>
        <VStack align='left' maxW='640px'>
          <Image src={selectedLand.imageLg} alt='land' borderRadius='lg' />

          <Stack py='10px' spacing={{sm: '3', md: '5'}} direction={{base: 'column', md: 'row'}}>
            <HStack>
                <BiMap style={{ color: "#38A169" }} />
                <Text fontSize="14px">District: {selectedLand.district}</Text>
            </HStack>

            <HStack>
                <BiRuler style={{ color: "#38A169" }} />
                <Text fontSize="14px">Size: {selectedLand.size}</Text>
            </HStack>

            <HStack>
                <BiLandscape style={{ color: "#38A169" }} />
                <Text fontSize="14px">Zoning: {selectedLand.landUse}</Text>
            </HStack>
          </Stack>
          
          <VStack align='left' spacing='3'>
            <Heading size='md'>Property Details</Heading>
            <Text fontSize='15px'>{selectedLand.description}</Text>
            
            <HStack>
              <BiCertification color="#38A169" />
              <Text fontSize='14px' fontWeight='bold'>Title Status: {selectedLand.hasTitle ? 'Registered Title Available' : 'Title Processing'}</Text>
            </HStack>
            
            {selectedLand.features && (
              <Box>
                <Text fontWeight='bold' mb='2'>Key Features:</Text>
                <HStack flexWrap='wrap' gap='2'>
                  {selectedLand.features.map((feature, index) => (
                    <Badge key={index} colorScheme='green' variant='outline' p='1'>{feature}</Badge>
                  ))}
                </HStack>
              </Box>
            )}
          </VStack>
      
        </VStack>
        
        <ContactForm selectedLand={selectedLand} />
      </Stack>
    </>
  )
}

export default LandDetails;