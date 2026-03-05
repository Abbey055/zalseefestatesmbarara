import {
  VStack,
  Divider,
  Heading,
  HStack,
  Image,
  Text,
  Box,
  Link as ChakraLink,
  Badge,
} from "@chakra-ui/react";
import { BiMap, BiRuler, BiLandscape } from "react-icons/bi";

const LandItem = ({ land }) => {
  // Format price safely
  const formatPrice = (price) => {
    return price ? price.toLocaleString() : '0';
  };

  return (
    <Box 
      width="100%" 
      bg="white" 
      boxShadow={{ base: "md", md: "xl" }} 
      borderRadius={{ base: "lg", md: "xl" }}
      overflow="hidden"
      height="100%"
      display="flex"
      flexDirection="column"
      transition="all 0.2s"
      _hover={{ transform: { md: 'translateY(-4px)' }, boxShadow: { md: '2xl' } }}
      position="relative"
    >
      {/* Status Badges - Visible to users */}
      <HStack position="absolute" top={2} left={2} zIndex={2} spacing={1}>
        {land.isSold && (
          <Badge colorScheme="red" variant="solid" fontSize="xs" px={2} py={1}>
            SOLD
          </Badge>
        )}
        {land.isOfferOfDay && (
          <Badge colorScheme="orange" variant="solid" fontSize="xs" px={2} py={1}>
            🔥 OFFER
          </Badge>
        )}
      </HStack>

      {/* Image */}
      <Box height={{ base: "140px", sm: "160px", md: "170px" }} overflow="hidden" position="relative">
        <Image 
          src={land.imageLg} 
          h="100%" 
          w="100%" 
          alt='land' 
          objectFit='cover'
          opacity={land.isSold ? 0.7 : 1}
        />
        {land.isSold && (
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%) rotate(-15deg)"
            bg="red.500"
            color="white"
            fontWeight="bold"
            fontSize="lg"
            px={4}
            py={2}
            borderRadius="md"
          >
            SOLD
          </Box>
        )}
      </Box>

      {/* Content */}
      <VStack 
        p={{ base: 3, sm: 4 }} 
        align='stretch' 
        spacing={{ base: 2, sm: 3 }}
        flex="1"
        justify="space-between"
      >
        {/* Top section */}
        <Box>
          {/* Price with Offer Handling */}
          {land.isOfferOfDay && land.offerPrice ? (
            <Box mb={1}>
              <HStack spacing={2} align="baseline">
                <Text fontWeight="extrabold" fontSize={{ base: "16px", sm: "18px" }} color="orange.500">
                  UGX {formatPrice(land.offerPrice)}
                </Text>
                <Text fontSize={{ base: "12px", sm: "14px" }} color="gray.400" textDecoration="line-through">
                  UGX {formatPrice(land.price)}
                </Text>
              </HStack>
              {land.offerEndDate && (
                <Text fontSize="xs" color="orange.500" mt={1}>
                  ⏰ Offer ends: {new Date(land.offerEndDate).toLocaleDateString()}
                </Text>
              )}
            </Box>
          ) : (
            <Text fontWeight="extrabold" fontSize={{ base: "16px", sm: "18px" }} color={land.isSold ? 'gray.500' : 'green.500'} mb={1}>
              UGX {formatPrice(land.price)}
              <Box as="span" fontSize="11px" color="grey" fontWeight="normal" ml={1}>
                {land.priceType === 'total' ? 'total' : 'per sqm'}
              </Box>
            </Text>
          )}

          <Heading fontSize={{ base: "18px", sm: "20px" }} mt={0.5} noOfLines={1}>
            {land.name}
          </Heading>

          <Text fontSize={{ base: "12px", sm: "13px" }} color="grey" mt={0.5} noOfLines={1}>
            {land.location}
          </Text>
        </Box>

        {/* Features Preview */}
        {land.features && land.features.length > 0 && (
          <HStack spacing={1} flexWrap="wrap">
            {land.features.slice(0, 2).map((feature, idx) => (
              <Badge key={idx} colorScheme="green" variant="outline" fontSize="2xs">
                {feature}
              </Badge>
            ))}
            {land.features.length > 2 && (
              <Text fontSize="2xs" color="gray.500">+{land.features.length - 2}</Text>
            )}
          </HStack>
        )}

        {/* Divider */}
        <Divider my={{ base: 1, sm: 2.5 }} />

        {/* Features */}
        <HStack spacing={{ base: 2, sm: 4 }} justify="space-between" flexWrap="wrap">
          <HStack spacing={1}>
            <Box as={BiMap} size={14} color="green.500" />
            <Text fontSize={{ base: "11px", sm: "12px" }} noOfLines={1}>{land.district}</Text>
          </HStack>

          <HStack spacing={1}>
            <Box as={BiRuler} size={14} color="green.500" />
            <Text fontSize={{ base: "11px", sm: "12px" }}>{land.size}</Text>
          </HStack>

          <HStack spacing={1}>
            <Box as={BiLandscape} size={14} color="green.500" />
            <Text fontSize={{ base: "11px", sm: "12px" }} noOfLines={1}>{land.landUse}</Text>
          </HStack>
        </HStack>

        {/* Bottom section */}
        <HStack justify="space-between" mt="auto" pt={{ base: 1, sm: 2 }}>
          <ChakraLink 
            href={`tel:+${land.agent?.phone?.replace(/\s/g, '') || '256708124902'}`}
            fontSize={{ base: "13px", sm: "14px" }}
            color="green.600"
            fontWeight="medium"
            p={1}
          >
            📞 Call Agent
          </ChakraLink>
          <Text fontSize={{ base: "11px", sm: "12px" }} color="gray.500" noOfLines={1}>
            {land.agent?.name || 'Zalseef Estates'}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default LandItem;