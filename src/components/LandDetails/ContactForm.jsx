import {
  Badge,
  Box,
  Button,
  Divider,
  Grid,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link as ChakraLink,
  Text,
  Textarea,
  VStack,
  Wrap,
  WrapItem,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import {
  FaCommentDots,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUser,
} from 'react-icons/fa';
import { BiLandscape, BiRuler } from 'react-icons/bi';

import { submitContactInquiry } from '../../lib/supabaseData';

const formatPrice = (price) => `UGX ${(price / 1000000).toFixed(1)}M`;

const ContactForm = ({ selectedLand }) => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  const agentPhone = selectedLand.agent?.phone || '256 708 124902';
  const normalizedPhone = `+${agentPhone.replace(/\s+/g, '')}`;
  const agentImage = selectedLand.agent?.image || selectedLand.imageLg || selectedLand.image;
  const agentName = selectedLand.agent?.name || 'Zalseef Estates';
  const agentCompany = selectedLand.agent?.company || 'Zalseef Estates';
  const currentPrice = selectedLand.isOfferOfDay && selectedLand.offerPrice
    ? selectedLand.offerPrice
    : selectedLand.price;

  const surface = useColorModeValue(
    'linear-gradient(180deg, rgba(11, 33, 42, 0.98) 0%, rgba(10, 24, 31, 0.98) 100%)',
    'linear-gradient(180deg, rgba(7, 22, 28, 0.98) 0%, rgba(4, 14, 18, 0.98) 100%)',
  );
  const detailSurface = useColorModeValue('rgba(255,255,255,0.08)', 'rgba(255,255,255,0.06)');
  const fieldSurface = useColorModeValue('rgba(255,255,255,0.08)', 'rgba(255,255,255,0.05)');
  const tintSurface = useColorModeValue('rgba(158, 216, 177, 0.14)', 'rgba(158, 216, 177, 0.14)');
  const borderColor = useColorModeValue('rgba(255,255,255,0.12)', 'rgba(255,255,255,0.08)');
  const headingColor = useColorModeValue('#f5fbf8', '#f5fbf8');
  const bodyColor = useColorModeValue('rgba(233, 245, 243, 0.82)', 'rgba(233, 245, 243, 0.82)');
  const mutedColor = useColorModeValue('rgba(233, 245, 243, 0.58)', 'rgba(233, 245, 243, 0.58)');
  const panelShadow = useColorModeValue(
    '0 22px 52px rgba(15, 23, 42, 0.18)',
    '0 22px 52px rgba(0, 0, 0, 0.38)',
  );
  const quietHoverBg = useColorModeValue('rgba(255,255,255,0.08)', 'rgba(255,255,255,0.08)');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    try {
      await submitContactInquiry({
        landId: selectedLand.id,
        landName: selectedLand.name,
        landLocation: selectedLand.location,
        landPrice: currentPrice,
        name,
        email,
        phone,
        message,
      });

      event.currentTarget.reset();
      toast({
        title: 'Inquiry Sent',
        description: 'Your message has been saved and the team can follow up from Supabase.',
        status: 'success',
        duration: 3500,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Unable to Send Inquiry',
        description: error.message || 'Please try again in a moment.',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <VStack
      id="property-inquiry"
      scrollMarginTop="120px"
      align="stretch"
      spacing={5}
      bg={surface}
      border="1px solid"
      borderColor={borderColor}
      borderRadius="30px"
      boxShadow={panelShadow}
      px={{ base: 5, md: 6 }}
      py={{ base: 5, md: 6 }}
    >
      <HStack justify="space-between" align="flex-start" spacing={3} flexWrap="wrap">
        <Badge
          alignSelf="flex-start"
          bg={detailSurface}
          color="white"
          px={4}
          py={2}
          borderRadius="full"
          textTransform="none"
        >
          Direct Inquiry
        </Badge>
        <Text fontSize="sm" color={mutedColor}>
          Fastest route to a site visit
        </Text>
      </HStack>

      <VStack align="flex-start" spacing={2}>
        <Text fontSize="sm" fontWeight="700" color="whiteAlpha.900">
          Contact This Listing
        </Text>
        <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="700" color={headingColor} lineHeight="1.12">
          Speak with the listing agent and move toward a site visit.
        </Text>
        <Text color={bodyColor} lineHeight="1.85">
          Share enough detail for our team to respond clearly, confirm fit, and guide the next practical step.
        </Text>
      </VStack>

      <Grid templateColumns={{ base: '1fr', md: '1fr' }} gap={3}>
        <Box
          bg={detailSurface}
          border="1px solid"
          borderColor={borderColor}
          borderRadius="24px"
          px={{ base: 4, md: 5 }}
          py={{ base: 4, md: 5 }}
        >
          <HStack spacing={4} align="flex-start">
            <Image
              src={agentImage}
              alt={agentName}
              w="82px"
              h="82px"
              objectFit="cover"
              borderRadius="18px"
            />

            <VStack align="flex-start" spacing={1.5} minW={0}>
              <Text fontWeight="700" color={headingColor}>
                {agentName}
              </Text>
              <Text fontSize="sm" color={bodyColor}>
                Listing Agent, {agentCompany}
              </Text>
              <HStack spacing={2} color={mutedColor} flexWrap="wrap">
                <Icon as={FaPhoneAlt} boxSize={3.5} color="#9ed8b1" />
                <ChakraLink href={`tel:${normalizedPhone}`} color="white" _hover={{ textDecoration: 'none', color: '#9ed8b1' }}>
                  +{agentPhone}
                </ChakraLink>
              </HStack>
            </VStack>
          </HStack>
        </Box>

        <Box
          bg={detailSurface}
          border="1px solid"
          borderColor={borderColor}
          borderRadius="24px"
          px={{ base: 4, md: 5 }}
          py={{ base: 4, md: 5 }}
        >
          <VStack align="stretch" spacing={3}>
            <Text fontSize="xs" fontWeight="800" letterSpacing="0.14em" textTransform="uppercase" color={mutedColor}>
              Selected Plot
            </Text>

            <VStack align="flex-start" spacing={1}>
              <Text color={headingColor} fontWeight="700">
                {selectedLand.name}
              </Text>
              <HStack spacing={2} color={bodyColor}>
                <Icon as={FaMapMarkerAlt} boxSize={3.5} color="#9ed8b1" />
                <Text fontSize="sm">{selectedLand.location}</Text>
              </HStack>
            </VStack>

            <Wrap spacing={2}>
              <WrapItem>
                <Box
                  bg={tintSurface}
                  color="#9ed8b1"
                  borderRadius="full"
                  px={4}
                  py={2}
                  fontSize="sm"
                  fontWeight="700"
                >
                  <HStack spacing={1.5}>
                    <Icon as={BiRuler} boxSize={3.5} />
                    <Text>{selectedLand.size}</Text>
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box
                  bg={tintSurface}
                  color="#9ed8b1"
                  borderRadius="full"
                  px={4}
                  py={2}
                  fontSize="sm"
                  fontWeight="700"
                >
                  <HStack spacing={1.5}>
                    <Icon as={BiLandscape} boxSize={3.5} />
                    <Text>{selectedLand.landUse}</Text>
                  </HStack>
                </Box>
              </WrapItem>
            </Wrap>

            <Text color="#9ed8b1" fontSize="2xl" fontWeight="800" letterSpacing="-0.04em">
              {formatPrice(currentPrice)}
            </Text>
          </VStack>
        </Box>
      </Grid>

      <Divider borderColor={borderColor} />

      <VStack as="form" ref={formRef} spacing={3.5} align="stretch" onSubmit={handleSubmit}>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, minmax(0, 1fr))' }} gap={3}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={FaUser} color="#9ed8b1" />
            </InputLeftElement>
            <Input
              name="name"
              placeholder="Full Name"
              bg={fieldSurface}
              color={headingColor}
              borderColor={borderColor}
              borderRadius="18px"
              _placeholder={{ color: mutedColor }}
              _hover={{ borderColor: 'rgba(158, 216, 177, 0.32)' }}
              _focusVisible={{
                borderColor: 'rgba(158, 216, 177, 0.74)',
                boxShadow: '0 0 0 1px rgba(158, 216, 177, 0.42)',
              }}
              required
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={FaPhoneAlt} color="#9ed8b1" />
            </InputLeftElement>
            <Input
              name="phone"
              placeholder="Phone Number"
              type="tel"
              bg={fieldSurface}
              color={headingColor}
              borderColor={borderColor}
              borderRadius="18px"
              _placeholder={{ color: mutedColor }}
              _hover={{ borderColor: 'rgba(158, 216, 177, 0.32)' }}
              _focusVisible={{
                borderColor: 'rgba(158, 216, 177, 0.74)',
                boxShadow: '0 0 0 1px rgba(158, 216, 177, 0.42)',
              }}
              required
            />
          </InputGroup>
        </Grid>

        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={FaEnvelope} color="#9ed8b1" />
          </InputLeftElement>
          <Input
            name="email"
            placeholder="Email Address"
            type="email"
            bg={fieldSurface}
            color={headingColor}
            borderColor={borderColor}
            borderRadius="18px"
            _placeholder={{ color: mutedColor }}
            _hover={{ borderColor: 'rgba(158, 216, 177, 0.32)' }}
            _focusVisible={{
              borderColor: 'rgba(158, 216, 177, 0.74)',
              boxShadow: '0 0 0 1px rgba(158, 216, 177, 0.42)',
            }}
            required
          />
        </InputGroup>

        <InputGroup>
          <InputLeftElement pointerEvents="none" top="14px">
            <Icon as={FaCommentDots} color="#9ed8b1" />
          </InputLeftElement>
          <Textarea
            name="message"
            placeholder="Tell us what you want to know"
            rows={5}
            pl="40px"
            bg={fieldSurface}
            color={headingColor}
            borderColor={borderColor}
            borderRadius="18px"
            _placeholder={{ color: mutedColor }}
            _hover={{ borderColor: 'rgba(158, 216, 177, 0.32)' }}
            _focusVisible={{
              borderColor: 'rgba(158, 216, 177, 0.74)',
              boxShadow: '0 0 0 1px rgba(158, 216, 177, 0.42)',
            }}
            defaultValue={`I am interested in ${selectedLand.name} in ${selectedLand.location}. Please share more details, documentation status, and the next step for arranging a site visit.`}
            required
          />
        </InputGroup>

        <Button
          type="submit"
          size="lg"
          bg="linear-gradient(135deg, #2f9f79 0%, #195b45 100%)"
          color="white"
          borderRadius="18px"
          isLoading={isSubmitting}
          loadingText="Sending..."
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: '0 18px 38px rgba(47, 159, 121, 0.24)',
          }}
        >
          Send Inquiry
        </Button>

        <Button
          as="a"
          href={`tel:${normalizedPhone}`}
          size="lg"
          variant="outline"
          borderColor={borderColor}
          color={headingColor}
          borderRadius="18px"
          leftIcon={<FaPhoneAlt />}
          _hover={{
            bg: quietHoverBg,
          }}
        >
          Call Agent Directly
        </Button>

        <Text fontSize="sm" color={mutedColor} lineHeight="1.7">
          We usually use your message to confirm fit, answer your first questions, and guide the site visit conversation.
        </Text>
      </VStack>
    </VStack>
  );
};

export default ContactForm;
