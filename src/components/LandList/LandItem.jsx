import {
  VStack,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
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
      {/* Fixed height image */}
      <Box height="170px" overflow="hidden">
        <Image 
          src={land.imageLg} 
          h="170px" 
          w="100%" 
          alt='land' 
          objectFit='cover'
        />
      </Box>

      {/* Flexible content area with consistent spacing */}
      <VStack 
        p='4' 
        align='stretch' 
        spacing={3}
        flex="1"
        justify="space-between"
      >
        {/* Top section - always at top */}
        <Box>
          <Text fontWeight="extrabold" fontSize="18px" color="green.500">
            UGX {land.price.toLocaleString()}
            <span style={{ fontSize: 12, color: "grey", fontWeight: "normal" }}>
              {land.priceType === 'total' ? ' total' : ' per sqm'}
            </span>
          </Text>

          <Heading fontSize="20px" mt={1} noOfLines={1}>
            {land.name}
          </Heading>

          <Text fontSize="13px" color="grey" mt={1} noOfLines={1}>
            {land.location}
          </Text>
        </Box>

        {/* Divider */}
        <Divider />

        {/* Middle section - features */}
        <HStack spacing={4} justify="space-between" flexWrap="wrap">
          <HStack spacing={1}>
            <BiMap style={{ color: "#38A169" }} />
            <Text fontSize="12px" noOfLines={1}>{land.district}</Text>
          </HStack>

          <HStack spacing={1}>
            <BiRuler style={{ color: "#38A169" }} />
            <Text fontSize="12px">{land.size}</Text>
          </HStack>

          <HStack spacing={1}>
            <BiLandscape style={{ color: "#38A169" }} />
            <Text fontSize="12px" noOfLines={1}>{land.landUse}</Text>
          </HStack>
        </HStack>

        {/* Bottom section - always at bottom */}
        <HStack justify="space-between" mt="auto" pt={2}>
          <ChakraLink 
            href={`tel:+${land.agent.phone.replace(/\s/g, '')}`}
            fontSize="sm"
            color="green.600"
            fontWeight="medium"
          >
            📞 Call Agent
          </ChakraLink>
          <Text fontSize="xs" color="gray.500" noOfLines={1}>
            {land.agent.name}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default LandItem;