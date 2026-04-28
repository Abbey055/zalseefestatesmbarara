import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Button,
  Circle,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  FaBuilding,
  FaCcAmex,
  FaCcMastercard,
  FaCcVisa,
  FaCheckCircle,
  FaMobileAlt,
  FaLock,
  FaMoneyCheckAlt,
  FaPhone,
  FaShieldAlt,
  FaUniversity,
  FaWhatsapp,
} from 'react-icons/fa';
import { MdOutlineCreditCard } from 'react-icons/md';

const paymentMethods = [
  {
    icon: FaMobileAlt,
    title: 'Mobile Money',
    description: 'Use our verified mobile money channels for quick and secure payments.',
    providers: [
      {
        name: 'MTN Mobile Money',
        brand: 'mtn',
        label: 'Pay Line',
        value: '+256 708 124902',
      },
      {
        name: 'Airtel Money',
        brand: 'airtel',
        label: 'Merchant ID',
        value: '6474446',
      },
    ],
  },
  {
    icon: FaUniversity,
    title: 'Bank Transfer',
    description: 'Send larger payments directly to our verified bank accounts.',
    providers: [
      {
        name: 'Centenary Bank',
        icon: FaBuilding,
        color: '#2F855A',
        logoBg: '#F0FFF4',
        label: 'Account Number',
        value: '3203856814',
      },
      {
        name: 'Equity Bank',
        icon: FaUniversity,
        color: '#7E22CE',
        logoBg: '#FAF5FF',
        label: 'Account Number',
        value: '1031103238750',
      },
    ],
  },
  {
    icon: MdOutlineCreditCard,
    title: 'Card Payments',
    description: 'Major international cards are supported for eligible transactions.',
    providers: [
      {
        name: 'Visa',
        icon: FaCcVisa,
        color: '#1A1F71',
        logoBg: '#EEF2FF',
      },
      {
        name: 'Mastercard',
        icon: FaCcMastercard,
        color: '#EB001B',
        logoBg: '#FFF7ED',
      },
      {
        name: 'American Express',
        icon: FaCcAmex,
        color: '#2E77BB',
        logoBg: '#EFF6FF',
      },
    ],
  },
  {
    icon: FaMoneyCheckAlt,
    title: 'Installment Plans',
    description: 'Choose a payment schedule that matches your budget and timeline.',
    plans: [
      { duration: '3 months', deposit: '30%', interest: '0%' },
      { duration: '6 months', deposit: '25%', interest: '5%' },
      { duration: '12 months', deposit: '20%', interest: '8%' },
    ],
  },
];

const securityFeatures = [
  { icon: FaLock, text: '256-bit SSL encryption' },
  { icon: FaCheckCircle, text: 'Verified bank accounts' },
  { icon: FaShieldAlt, text: 'Secure mobile money payments' },
];

const faqs = [
  {
    question: 'Is it safe to pay via mobile money?',
    answer: 'Yes, all payments are processed through verified numbers and merchant channels with instant confirmation.',
  },
  {
    question: 'Can I pay in installments?',
    answer: 'Yes. We offer flexible installment plans from 3 to 12 months depending on the property agreement.',
  },
  {
    question: 'What about international payments?',
    answer: 'International buyers can pay through verified bank transfer channels or approved card options.',
  },
];

const methodCardStyles = {
  bg: 'white',
  borderRadius: '2xl',
  border: '1px solid',
  borderColor: 'green.100',
  boxShadow: '0 16px 32px rgba(15, 23, 42, 0.08)',
  overflow: 'hidden',
  h: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.2s ease',
  _hover: {
    transform: 'translateY(-4px)',
    boxShadow: '0 22px 40px rgba(15, 23, 42, 0.12)',
  },
};

const providerCardStyles = {
  p: 4,
  borderRadius: 'xl',
  border: '1px solid',
  borderColor: 'gray.100',
  bg: 'linear-gradient(180deg, #ffffff 0%, #f8fffb 100%)',
  boxShadow: 'sm',
  transition: 'all 0.2s ease',
  _hover: {
    transform: 'translateY(-2px)',
    borderColor: 'green.100',
    boxShadow: '0 14px 28px rgba(15, 23, 42, 0.08)',
  },
};

const ProviderLogo = ({ provider }) => {
  if (provider.brand === 'mtn') {
    return (
      <Circle size="42px" bg="#FFCB05" boxShadow="sm">
        <Text fontSize="xs" fontWeight="black" color="#111827" letterSpacing="0.04em">
          MTN
        </Text>
      </Circle>
    );
  }

  if (provider.brand === 'airtel') {
    return (
      <Circle size="42px" bg="#E31B23" boxShadow="sm">
        <Text fontSize="lg" fontWeight="black" fontStyle="italic" color="white" lineHeight="1">
          a
        </Text>
      </Circle>
    );
  }

  return (
    <Circle size="42px" bg={provider.logoBg || 'green.50'} color={provider.color || 'green.600'} boxShadow="sm">
      <Icon as={provider.icon} boxSize={5} />
    </Circle>
  );
};

const PaymentMethods = () => {
  return (
    <Box w="100%" minH="100vh" bg="linear-gradient(180deg, #f4fff8 0%, #ecfff4 100%)" overflowX="hidden">
      <Box w="100%" maxW="1820px" mx="auto" px={{ base: 3, md: 4, lg: 5 }} py={{ base: 4, md: 6 }}>
        <VStack spacing={8} align="stretch">
          <VStack spacing={3} textAlign="center">
            <Badge colorScheme="green" px={3} py={1} borderRadius="full">
              Secure Payments
            </Badge>
            <Heading size="2xl" color="green.700">
              Payment Methods
            </Heading>
            <Text color="gray.600" maxW="720px">
              Choose the payment option that works best for you, from mobile money and bank transfer to card payments and structured installment plans.
            </Text>
          </VStack>

          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fit, minmax(min(100%, 340px), 1fr))"
            gap={{ base: 4, md: 5 }}
          >
            {paymentMethods.map((method) => (
              <Box key={method.title} {...methodCardStyles}>
                <HStack
                  p={5}
                  spacing={3}
                  align="start"
                  bg="linear-gradient(135deg, #f0fff4 0%, #e6fffa 100%)"
                  borderBottom="1px solid"
                  borderColor="green.100"
                >
                  <Circle size="44px" bg="white" boxShadow="sm">
                    <Icon as={method.icon} boxSize={5} color="green.600" />
                  </Circle>
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="bold" color="gray.800">
                      {method.title}
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      {method.description}
                    </Text>
                  </VStack>
                </HStack>

                <VStack align="stretch" p={5} spacing={3} flex="1">
                  {method.providers ? (
                    method.providers.map((provider) => (
                      <Box key={provider.name} {...providerCardStyles}>
                        <Box
                          display="flex"
                          flexDirection={{ base: 'column', sm: 'row' }}
                          justifyContent="space-between"
                          alignItems={{ base: 'flex-start', sm: 'center' }}
                          gap={3}
                        >
                          <HStack spacing={3} align="center">
                            <ProviderLogo provider={provider} />
                            <VStack align="start" spacing={0.5}>
                              <Text fontSize="sm" fontWeight="bold" color="gray.800">
                                {provider.name}
                              </Text>
                            </VStack>
                          </HStack>

                          {provider.value && (
                            <VStack align={{ base: 'start', sm: 'end' }} spacing={0}>
                              <Text
                                fontSize="2xs"
                                fontWeight="bold"
                                letterSpacing="0.08em"
                                textTransform="uppercase"
                                color="gray.500"
                              >
                                {provider.label}
                              </Text>
                              <Text fontSize="sm" fontWeight="semibold" color="gray.800">
                                {provider.value}
                              </Text>
                            </VStack>
                          )}
                        </Box>
                      </Box>
                    ))
                  ) : (
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={3}>
                      {method.plans.map((plan) => (
                        <Box
                          key={plan.duration}
                          p={4}
                          borderRadius="xl"
                          textAlign="center"
                          border="1px solid"
                          borderColor="green.100"
                          bg="linear-gradient(180deg, #f4fff8 0%, #ecfff4 100%)"
                          boxShadow="sm"
                        >
                          <Text fontSize="sm" fontWeight="bold" color="gray.800">
                            {plan.duration}
                          </Text>
                          <Text fontSize="xs" color="gray.600" mt={1}>
                            {plan.deposit} deposit
                          </Text>
                          <Text
                            fontSize="xs"
                            fontWeight="semibold"
                            color={plan.interest === '0%' ? 'green.600' : 'orange.500'}
                            mt={1}
                          >
                            {plan.interest} interest
                          </Text>
                        </Box>
                      ))}
                    </SimpleGrid>
                  )}
                </VStack>
              </Box>
            ))}
          </Box>

          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fit, minmax(min(100%, 220px), 1fr))"
            gap={3}
          >
            {securityFeatures.map((feature) => (
              <HStack
                key={feature.text}
                bg="white"
                border="1px solid"
                borderColor="green.100"
                borderRadius="full"
                px={5}
                py={3}
                justify="center"
                boxShadow="sm"
              >
                <Icon as={feature.icon} color="green.600" boxSize={4} />
                <Text fontSize="sm" color="gray.700">
                  {feature.text}
                </Text>
              </HStack>
            ))}
          </Box>

          <Box
            bg="white"
            borderRadius="2xl"
            border="1px solid"
            borderColor="green.100"
            boxShadow="0 16px 32px rgba(15, 23, 42, 0.08)"
            p={{ base: 4, md: 5 }}
          >
            <Text fontWeight="bold" mb={4} fontSize="md" color="gray.800">
              Frequently Asked Questions
            </Text>
            <Accordion allowToggle>
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} border="none" mb={2}>
                  <AccordionButton
                    bg="gray.50"
                    borderRadius="xl"
                    p={4}
                    _hover={{ bg: 'green.50' }}
                  >
                    <Text flex="1" textAlign="left" fontSize="sm" fontWeight="medium">
                      {faq.question}
                    </Text>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={3} pt={4} fontSize="sm" color="gray.600">
                    {faq.answer}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>

          <Box
            color="gray.800"
            p={{ base: 2, md: 3 }}
          >
            <VStack spacing={4}>
              <Text fontSize="sm" fontWeight="semibold">
                Need help with a payment?
              </Text>
              <HStack spacing={3} justify="center" flexWrap="wrap">
                <Button
                  as="a"
                  href="https://wa.me/256708124902"
                  leftIcon={<FaWhatsapp />}
                  variant="ghost"
                  bg="transparent"
                  color="green.700"
                  size="sm"
                  _hover={{ bg: 'transparent', color: 'green.800', transform: 'translateY(-1px)' }}
                >
                  WhatsApp
                </Button>
                <Button
                  as="a"
                  href="tel:+256708124902"
                  leftIcon={<FaPhone />}
                  variant="ghost"
                  bg="transparent"
                  color="gray.700"
                  size="sm"
                  _hover={{ bg: 'transparent', color: 'gray.900', transform: 'translateY(-1px)' }}
                >
                  Call
                </Button>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default PaymentMethods;
