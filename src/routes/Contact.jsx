import {
  Avatar,
  Badge,
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link as ChakraLink,
  Text,
  Textarea,
  VStack,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import {
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaCommentDots,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaTiktok,
  FaUser,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';

import { teamDirectory } from '../teamData';
import { submitContactInquiry } from '../lib/supabaseData';

const inquirySteps = [
  'We review your message and confirm the most relevant listing or service for your need.',
  'We recommend a next step such as a call, documentation discussion, or guided site visit.',
  'We continue the conversation with practical information instead of vague follow-up.',
];

const contactCards = [
  {
    icon: FaPhone,
    label: 'Call Us',
    value: '+256 708 124902',
    href: 'tel:+256708124902',
  },
  {
    icon: FaEnvelope,
    label: 'Email Us',
    value: 'zalseefmhd256@gmail.com',
    href: 'mailto:zalseefmhd256@gmail.com',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Visit Office',
    value: 'St Paul Shopping Mall, Room C10, Mbarara',
    href: null,
  },
];

const socialLinks = [
  { icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/256708124902', color: '#25D366' },
  { icon: FaTiktok, label: 'TikTok', href: 'https://www.tiktok.com/@zalseef_estates', color: '#111111' },
  { icon: FaYoutube, label: 'YouTube', href: 'https://www.youtube.com/@ZalseefEstates', color: '#FF0000' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/zalseef_estates', color: '#E4405F' },
];

const Contact = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const pageBackground = useColorModeValue(
    'linear-gradient(180deg, #f7f1e7 0%, #efe7db 100%)',
    'linear-gradient(180deg, #06141a 0%, #0b1f28 100%)',
  );
  const heroSurface = useColorModeValue('rgba(222, 235, 241, 0.96)', 'rgba(12, 32, 41, 0.94)');
  const cardSurface = useColorModeValue('rgba(255,255,255,0.88)', 'rgba(12, 32, 41, 0.92)');
  const detailSurface = useColorModeValue('rgba(247, 250, 248, 0.92)', 'rgba(8, 24, 31, 0.70)');
  const mutedSurface = useColorModeValue('rgba(255,255,255,0.52)', 'rgba(8, 24, 31, 0.68)');
  const borderColor = useColorModeValue('rgba(18, 50, 58, 0.10)', 'rgba(255,255,255,0.08)');
  const headingColor = useColorModeValue('#14363d', '#edf5f3');
  const bodyColor = useColorModeValue('#51656e', '#b3c6cc');
  const mutedColor = useColorModeValue('#6b7f87', '#9cb1b8');
  const quietHoverBg = useColorModeValue('white', 'rgba(18, 42, 51, 0.92)');
  const softShadow = useColorModeValue(
    '0 14px 36px rgba(15, 23, 42, 0.08)',
    '0 14px 36px rgba(0, 0, 0, 0.28)',
  );

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
        name,
        email,
        phone,
        message,
      });

      event.currentTarget.reset();
      toast({
        title: 'Message Sent',
        description: 'Your inquiry has been stored in Supabase for follow-up.',
        status: 'success',
        duration: 3500,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Unable to Send Message',
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
    <Box w="100%" minH="100vh" bg={pageBackground} overflowX="hidden">
      <Box maxW="1720px" mx="auto" px={{ base: 4, md: 6, xl: 8 }} py={{ base: 6, md: 8, xl: 10 }}>
        <VStack spacing={{ base: 7, md: 8 }} align="stretch">
          <Box
            bg={heroSurface}
            border="1px solid"
            borderColor={borderColor}
            boxShadow={softShadow}
            overflow="hidden"
          >
            <Grid templateColumns={{ base: '1fr', xl: 'minmax(0, 1.04fr) minmax(380px, 0.96fr)' }} gap={0}>
              <VStack align="flex-start" spacing={5} px={{ base: 5, md: 7, xl: 8 }} py={{ base: 6, md: 7, xl: 8 }}>
                <Badge
                  bg={mutedSurface}
                  color={headingColor}
                  px={3}
                  py={1.5}
                  borderRadius="0"
                  textTransform="none"
                >
                  Contact And Inquiries
                </Badge>

                <Heading
                  color={headingColor}
                  fontSize={{ base: '3xl', md: '5xl', xl: '6xl' }}
                  lineHeight={{ base: 1.08, md: 1.02 }}
                  letterSpacing="-0.04em"
                  maxW={{ base: '100%', md: '14ch', xl: '15ch' }}
                >
                  Contact Zalseef Estates with a clearer next-step flow.
                </Heading>

                <Text color={bodyColor} fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.9" maxW="64ch">
                  Reach out for listing questions, guided site visits, documentation support, or
                  general property advice. The page is organized so you know what to do, who to
                  contact, and what should happen after you send your message.
                </Text>

                <HStack spacing={3} flexWrap="wrap">
                  <Button
                    as="a"
                    href="#contact-form"
                    bg="linear-gradient(135deg, #2f9f79 0%, #195b45 100%)"
                    color="white"
                    rightIcon={<FaArrowRight />}
                    borderRadius="0"
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: '0 18px 38px rgba(47, 159, 121, 0.24)',
                    }}
                  >
                    Send A Message
                  </Button>

                  <Button
                    as="a"
                    href="tel:+256708124902"
                    variant="outline"
                    borderColor={borderColor}
                    bg={cardSurface}
                    color={headingColor}
                    leftIcon={<FaPhone />}
                    borderRadius="0"
                    _hover={{
                      bg: quietHoverBg,
                      transform: 'translateY(-2px)',
                    }}
                  >
                    Call Now
                  </Button>
                </HStack>
              </VStack>

              <Grid
                templateColumns={{
                  base: '1fr',
                  md: 'repeat(2, minmax(0, 1fr))',
                  lg: 'repeat(3, minmax(0, 1fr))',
                  xl: '1fr',
                }}
                gap="1px"
                bg={borderColor}
              >
                {contactCards.map((item) => (
                  <Box
                    key={item.label}
                    px={{ base: 5, md: 6 }}
                    py={{ base: 5, md: 6 }}
                    bg={cardSurface}
                  >
                    <VStack align="flex-start" spacing={3}>
                      <Icon as={item.icon} boxSize={5} color="#2f9f79" />
                      <Text color={headingColor} fontWeight="700">
                        {item.label}
                      </Text>
                      {item.href ? (
                        <ChakraLink href={item.href} color={bodyColor} lineHeight="1.8">
                          {item.value}
                        </ChakraLink>
                      ) : (
                        <Text color={bodyColor} lineHeight="1.8">
                          {item.value}
                        </Text>
                      )}
                    </VStack>
                  </Box>
                ))}
              </Grid>
            </Grid>
          </Box>

          <Grid templateColumns={{ base: '1fr', xl: 'minmax(0, 1.02fr) minmax(360px, 0.98fr)' }} gap={6} alignItems="start">
            <Box
              id="contact-form"
              bg={cardSurface}
              border="1px solid"
              borderColor={borderColor}
              boxShadow={softShadow}
              px={{ base: 5, md: 6 }}
              py={{ base: 5, md: 6 }}
            >
              <VStack as="form" ref={formRef} spacing={4} align="stretch" onSubmit={handleSubmit}>
                <VStack align="flex-start" spacing={2}>
                  <Text fontSize="sm" fontWeight="600" color={headingColor}>
                    Inquiry Form
                  </Text>
                  <Heading fontSize={{ base: '2xl', md: '3xl' }} color={headingColor}>
                    Tell us what you need, and we will guide the next practical step.
                  </Heading>
                  <Text color={bodyColor} lineHeight="1.85" maxW="60ch">
                    Use this form for property questions, site-visit scheduling, documentation
                    clarifications, or general investment guidance.
                  </Text>
                </VStack>

                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Icon as={FaUser} color="brand.500" />
                  </InputLeftElement>
                  <Input name="name" placeholder="Full Name" bg={detailSurface} borderRadius="0" required />
                </InputGroup>

                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Icon as={FaEnvelope} color="brand.500" />
                  </InputLeftElement>
                  <Input name="email" placeholder="Email Address" type="email" bg={detailSurface} borderRadius="0" required />
                </InputGroup>

                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Icon as={FaPhone} color="brand.500" />
                  </InputLeftElement>
                  <Input name="phone" placeholder="Phone Number" type="tel" bg={detailSurface} borderRadius="0" required />
                </InputGroup>

                <InputGroup>
                  <InputLeftElement pointerEvents="none" top="14px">
                    <Icon as={FaCommentDots} color="brand.500" />
                  </InputLeftElement>
                  <Textarea
                    name="message"
                    placeholder="How can we help you?"
                    rows={6}
                    pl="40px"
                    bg={detailSurface}
                    borderRadius="0"
                    defaultValue="I would like to learn more about your available listings and the next steps for a guided property discussion."
                    required
                  />
                </InputGroup>

                <Button
                  type="submit"
                  bg="linear-gradient(135deg, #2f9f79 0%, #195b45 100%)"
                  color="white"
                  borderRadius="0"
                  isLoading={isSubmitting}
                  loadingText="Sending..."
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: '0 18px 38px rgba(47, 159, 121, 0.24)',
                  }}
                >
                  Send Message
                </Button>
              </VStack>
            </Box>

            <VStack align="stretch" spacing={6}>
              <Box
                bg={cardSurface}
                border="1px solid"
                borderColor={borderColor}
                boxShadow={softShadow}
                px={{ base: 5, md: 6 }}
                py={{ base: 5, md: 6 }}
              >
                <VStack align="stretch" spacing={4}>
                  <Text fontSize="sm" fontWeight="600" color={headingColor}>
                    Office And Support
                  </Text>
                  <Grid templateColumns="1fr" gap={3}>
                    <Box bg={detailSurface} border="1px solid" borderColor={borderColor} px={4} py={4}>
                      <HStack spacing={3} align="flex-start">
                        <Icon as={FaMapMarkerAlt} color="#2f9f79" boxSize={4.5} mt={1} />
                        <VStack align="flex-start" spacing={1}>
                          <Text color={headingColor} fontWeight="700">
                            Office Location
                          </Text>
                          <Text color={bodyColor} lineHeight="1.8">
                            St Paul Shopping Mall, Room C10, Mbarara
                          </Text>
                        </VStack>
                      </HStack>
                    </Box>

                    <Box bg={detailSurface} border="1px solid" borderColor={borderColor} px={4} py={4}>
                      <HStack spacing={3} align="flex-start">
                        <Icon as={FaClock} color="#2f9f79" boxSize={4.5} mt={1} />
                        <VStack align="flex-start" spacing={1}>
                          <Text color={headingColor} fontWeight="700">
                            Availability
                          </Text>
                          <Text color={bodyColor} lineHeight="1.8">
                            Mon-Fri: 24/7 | Sat: 8AM-6PM | Sun: 10AM-4PM
                          </Text>
                        </VStack>
                      </HStack>
                    </Box>
                  </Grid>
                </VStack>
              </Box>

              <Box
                bg={cardSurface}
                border="1px solid"
                borderColor={borderColor}
                boxShadow={softShadow}
                px={{ base: 5, md: 6 }}
                py={{ base: 5, md: 6 }}
              >
                <VStack align="stretch" spacing={4}>
                  <Text fontSize="sm" fontWeight="600" color={headingColor}>
                    Team Contacts
                  </Text>
                  <Text color={bodyColor} lineHeight="1.8">
                    Reach the team through the current primary office line shown below.
                  </Text>

                  <Grid templateColumns={{ base: '1fr', md: 'repeat(2, minmax(0, 1fr))', xl: '1fr' }} gap={3}>
                    {teamDirectory.map((member) => (
                      <Box key={member.name} bg={detailSurface} border="1px solid" borderColor={borderColor} px={4} py={4}>
                        <HStack spacing={3} align="flex-start">
                          <Avatar src={member.image} name={member.name} size="sm" />
                          <VStack align="flex-start" spacing={1} minW={0}>
                            <Text color={headingColor} fontWeight="700" lineHeight="1.3">
                              {member.name}
                            </Text>
                            <Text color={mutedColor} fontSize="xs" textTransform="uppercase" letterSpacing="0.08em">
                              {member.role}
                            </Text>
                            <ChakraLink
                              href={`tel:${member.phone.replace(/\s+/g, '')}`}
                              color={bodyColor}
                              fontSize="sm"
                              lineHeight="1.7"
                            >
                              {member.phone}
                            </ChakraLink>
                          </VStack>
                        </HStack>
                      </Box>
                    ))}
                  </Grid>
                </VStack>
              </Box>

              <Box
                bg={cardSurface}
                border="1px solid"
                borderColor={borderColor}
                boxShadow={softShadow}
                px={{ base: 5, md: 6 }}
                py={{ base: 5, md: 6 }}
              >
                <VStack align="stretch" spacing={4}>
                  <Text fontSize="sm" fontWeight="600" color={headingColor}>
                    Inquiry Flow
                  </Text>
                  <Heading fontSize={{ base: '2xl', md: '3xl' }} color={headingColor}>
                    A message should lead to a useful response, not a dead end.
                  </Heading>

                  <VStack align="stretch" spacing={3}>
                    {inquirySteps.map((step) => (
                      <HStack key={step} align="flex-start" spacing={3}>
                        <Icon as={FaCheckCircle} color="#2f9f79" boxSize={4.5} mt={1} />
                        <Text color={bodyColor} lineHeight="1.8">
                          {step}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                </VStack>
              </Box>

              <Box
                bg={cardSurface}
                border="1px solid"
                borderColor={borderColor}
                boxShadow={softShadow}
                px={{ base: 5, md: 6 }}
                py={{ base: 5, md: 6 }}
              >
                <VStack align="stretch" spacing={4}>
                  <Text fontSize="sm" fontWeight="600" color={headingColor}>
                    Social Channels
                  </Text>
                  <Text color={bodyColor} lineHeight="1.8">
                    Use the channel that feels most convenient for you.
                  </Text>

                  <Grid templateColumns="repeat(auto-fit, minmax(min(100%, 180px), 1fr))" gap={3}>
                    {socialLinks.map((item) => (
                      <ChakraLink
                        key={item.label}
                        href={item.href}
                        isExternal
                        _hover={{ textDecoration: 'none' }}
                      >
                        <HStack
                          spacing={3}
                          bg={detailSurface}
                          border="1px solid"
                          borderColor={borderColor}
                          px={4}
                          py={4}
                          transition="transform 0.2s ease"
                          _hover={{ transform: 'translateY(-2px)' }}
                        >
                          <Icon as={item.icon} boxSize={5} color={item.color} />
                          <Text color={headingColor} fontWeight="600">
                            {item.label}
                          </Text>
                        </HStack>
                      </ChakraLink>
                    ))}
                  </Grid>
                </VStack>
              </Box>
            </VStack>
          </Grid>
        </VStack>
      </Box>
    </Box>
  );
};

export default Contact;
