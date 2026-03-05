import { Stack, VStack, Heading, Text, Box, HStack, Image, Badge } from "@chakra-ui/react";
import { BiMap, BiRuler, BiLandscape, BiCertification } from "react-icons/bi";
import { useContext } from "react";
import { useParams } from "react-router-dom";

import { LandContext } from "../../context/LandContext";
import ContactForm from "./ContactForm";
import ShareButtons from "../ShareButtons";

const LandDetails = () => {
  const { landId } = useParams();
  const { lands } = useContext(LandContext);
  
  const selectedLand = lands.find(land => land.id == landId);

  if (!selectedLand) {
    return (
      <Box textAlign="center" py={20}>
        <Heading size="lg" color="gray.600">Property Not Found</Heading>
        <Text mt={4}>The land you're looking for doesn't exist or has been sold.</Text>
      </Box>
    );
  }

  return (
    <>
      {/* Header Section */}
      <Stack
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ md: "center" }}
        my="28px"
      >
        <Box>
          {/* Status Badges */}
          <HStack spacing={2} mb={2}>
            {selectedLand.isSold && (
              <Badge colorScheme="red" fontSize="md" px={3} py={1} borderRadius="full">
                SOLD OUT
              </Badge>
            )}
            {selectedLand.isOfferOfDay && (
              <Badge colorScheme="orange" fontSize="md" px={3} py={1} borderRadius="full">
                🔥 OFFER OF THE DAY
              </Badge>
            )}
          </HStack>
          <Heading fontSize="22px">{selectedLand.name}</Heading>
          <Text fontSize="15px">{selectedLand.location}</Text>
        </Box>

        <HStack>
          <Badge px="3" py="1" borderRadius="full" bg="green.100" color="green.800">
            {selectedLand.landUse}
          </Badge>
          <Badge px="3" py="1" borderRadius="full" bg="blue.100" color="blue.800">
            {selectedLand.district}
          </Badge>
          {selectedLand.hasTitle && (
            <Badge px="3" py="1" borderRadius="full" bg="purple.100" color="purple.800">
              Title Available
            </Badge>
          )}
        </HStack>

        {/* Price with Offer Handling */}
        {selectedLand.isOfferOfDay && selectedLand.offerPrice ? (
          <Box>
            <HStack spacing={3} align="baseline">
              <Text fontWeight="extrabold" fontSize="20px" color="orange.500">
                UGX {selectedLand.offerPrice.toLocaleString()}
              </Text>
              <Text fontSize="16px" color="gray.400" textDecoration="line-through">
                UGX {selectedLand.price.toLocaleString()}
              </Text>
            </HStack>
            {selectedLand.offerEndDate && (
              <Text fontSize="sm" color="orange.500">
                ⏰ Offer valid until {new Date(selectedLand.offerEndDate).toLocaleDateString()}
              </Text>
            )}
          </Box>
        ) : (
          <Text fontWeight="extrabold" fontSize="20px" color={selectedLand.isSold ? 'gray.500' : 'green.600'}>
            UGX {selectedLand.price.toLocaleString()}
          </Text>
        )}
      </Stack>

      {/* Main Content */}
      <Stack direction={{ base: "column", lg: "row" }} gap="8" align="stretch">
        {/* Left Column - Details */}
        <VStack align="stretch" flex="1.5" spacing="6">
          <Box position="relative">
            <Image src={selectedLand.imageLg} alt={selectedLand.name} borderRadius="lg" />
            {selectedLand.isSold && (
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%) rotate(-15deg)"
                bg="red.500"
                color="white"
                fontWeight="bold"
                fontSize="3xl"
                px={6}
                py={3}
                borderRadius="lg"
                opacity={0.9}
              >
                SOLD
              </Box>
            )}
          </Box>

          <HStack spacing="4" flexWrap="wrap">
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
          </HStack>

          <VStack align="stretch" spacing="3">
            <HStack justify="space-between" align="center" w="full">
              <Heading size="md">Property Details</Heading>
              <ShareButtons property={selectedLand} size="md" />
            </HStack>

            <Text fontSize="15px" lineHeight="tall">
              {selectedLand.description}
            </Text>

            <HStack>
              <BiCertification color="#38A169" />
              <Text fontSize="14px" fontWeight="bold">
                Title Status: {selectedLand.hasTitle ? "Registered Title Available" : "Title Processing"}
              </Text>
            </HStack>

            {selectedLand.features && selectedLand.features.length > 0 && (
              <Box>
                <Text fontWeight="bold" mb="2">Key Features:</Text>
                <HStack flexWrap="wrap" gap="2">
                  {selectedLand.features.map((feature, index) => (
                    <Badge key={index} colorScheme="green" variant="outline" p="1">
                      {feature}
                    </Badge>
                  ))}
                </HStack>
              </Box>
            )}
          </VStack>
        </VStack>

        {/* Right Column - Contact Form */}
        <Box flex="1">
          <ContactForm selectedLand={selectedLand} />
        </Box>
      </Stack>
    </>
  );
};

export default LandDetails;