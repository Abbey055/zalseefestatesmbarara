import {
  VStack,
  Divider,
  Heading,
  HStack,
  Image,
  Text,
  Box,
  Link as ChakraLink
} from "@chakra-ui/react";
import { BiMap, BiRuler, BiLandscape } from "react-icons/bi";

const LandItem = ({ land }) => {
  return (
    <Box 
      width="100%" 
      bg="white" 
      boxShadow="xl" 
      borderRadius="xl"
      overflow="hidden"
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box height={{ base: "200px", sm: "170px" }} overflow="hidden">
        <Image 
          src={land.imageLg} 
          h="100%" 
          w="100%" 
          alt='land' 
          objectFit='cover'
        />
      </Box>

      <VStack 
        p={{ base: 5, sm: 4 }} 
        align='stretch' 
        spacing={4}
        flex="1"
        justify="space-between"
      >
        <Box>
          <Text fontWeight="extrabold" fontSize={{ base: "20px", sm: "18px" }} color="green.500">
            UGX {land.price.toLocaleString()}
            <span style={{ fontSize: 14, color: "grey", fontWeight: "normal" }}>
              {land.priceType === 'total' ? ' total' : ' per sqm'}
            </span>
          </Text>

          <Heading fontSize={{ base: "22px", sm: "20px" }} mt={1} noOfLines={1}>
            {land.name}
          </Heading>

          <Text fontSize="14px" color="grey" mt={1} noOfLines={1}>
            {land.location}
          </Text>
        </Box>

        <Divider />

        <HStack spacing={4} justify="space-between" flexWrap="wrap">
          <HStack spacing={2}>
            <BiMap size={16} style={{ color: "#38A169" }} />
            <Text fontSize="13px" noOfLines={1}>{land.district}</Text>
          </HStack>

          <HStack spacing={2}>
            <BiRuler size={16} style={{ color: "#38A169" }} />
            <Text fontSize="13px">{land.size}</Text>
          </HStack>

          <HStack spacing={2}>
            <BiLandscape size={16} style={{ color: "#38A169" }} />
            <Text fontSize="13px" noOfLines={1}>{land.landUse}</Text>
          </HStack>
        </HStack>

        <HStack justify="space-between" mt="auto" pt={3}>
          <ChakraLink 
            href={`tel:+${land.agent.phone.replace(/\s/g, '')}`}
            fontSize="16px"
            color="green.600"
            fontWeight="medium"
            p={2}
          >
            📞 Call Agent
          </ChakraLink>
          <Text fontSize="14px" color="gray.500" noOfLines={1}>
            {land.agent.name}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default LandItem;