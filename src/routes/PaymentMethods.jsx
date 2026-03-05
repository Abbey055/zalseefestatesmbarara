import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  SimpleGrid,
  Badge,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaLock,
  FaCheckCircle,
  FaShieldAlt,
  FaUniversity,
  FaBuilding,
  FaMoneyBillWave,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaMobileAlt,
  FaWallet,
} from 'react-icons/fa';
import {
  GiPayMoney,
  GiBank,
  GiSmartphone,
} from 'react-icons/gi';
import {
  MdPhoneIphone,
  MdOutlineCreditCard,
} from 'react-icons/md';
import { Link } from 'react-router-dom';

const PaymentMethods = () => {
  const paymentMethods = [
    {
      icon: GiSmartphone,
      title: 'Mobile Money',
      description: 'Fast and secure payments via mobile money',
      providers: [
        { 
          name: 'MTN Mobile Money', 
          number: '+256 708 124902', 
          icon: FaMobileAlt, 
          color: '#FFC107',
        },
        { 
          name: 'Airtel Money', 
          number: '+256 708 124902', 
          icon: FaMobileAlt, 
          color: '#E53935',
        },
      ],
    },
    {
      icon: GiBank,
      title: 'Bank Transfer',
      description: 'Direct bank transfers for larger transactions',
      providers: [
        { name: 'Centenary Bank', number: '1234567890', icon: FaBuilding, color: '#4CAF50' },
        { name: 'Stanbic Bank', number: '0987654321', icon: FaUniversity, color: '#2196F3' },
        { name: 'Equity Bank', number: '1122334455', icon: GiBank, color: '#9C27B0' },
      ],
    },
    {
      icon: MdOutlineCreditCard,
      title: 'Card Payments',
      description: 'Visa, Mastercard, and other cards accepted',
      providers: [
        { name: 'Visa', icon: FaCcVisa, color: '#1A1F71' },
        { name: 'Mastercard', icon: FaCcMastercard, color: '#F79E1B' },
        { name: 'American Express', icon: FaCcAmex, color: '#2E77BB' },
      ],
    },
    {
      icon: GiPayMoney,
      title: 'Installment Plans',
      description: 'Flexible payment plans tailored to your budget',
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
      answer: 'Yes, all payments are processed through verified numbers with instant confirmation.',
    },
    {
      question: 'Can I pay in installments?',
      answer: 'Yes! We offer flexible installment plans from 3 to 12 months.',
    },
    {
      question: 'What about international payments?',
      answer: 'International buyers can pay via bank transfer (SWIFT) or credit card.',
    },
  ];

  return (
    <Container maxW="container.xl" py={{ base: 6, md: 12 }}>
      <VStack spacing={8} align="stretch">
        {/* Header */}
        <VStack spacing={3} textAlign="center">
          <Badge colorScheme="green" px={3} py={1} borderRadius="full">Secure Payments</Badge>
          <Heading size="2xl" color="green.700">Payment Methods</Heading>
          <Text color="gray.600" maxW="600px">
            Multiple secure payment options for your convenience
          </Text>
        </VStack>

        {/* Payment Methods Grid */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {paymentMethods.map((method, index) => (
            <Box
              key={index}
              bg="white"
              borderRadius="xl"
              boxShadow="md"
              border="1px solid"
              borderColor="gray.200"
              overflow="hidden"
            >
              {/* Header */}
              <HStack bg="gray.50" p={4} borderBottom="1px solid" borderColor="gray.200">
                <Icon as={method.icon} boxSize={5} color="green.600" />
                <Text fontWeight="bold">{method.title}</Text>
              </HStack>

              {/* Content */}
              <VStack align="stretch" p={4} spacing={3}>
                {method.providers ? (
                  method.providers.map((provider, idx) => (
                    <HStack key={idx} justify="space-between" p={2} bg="gray.50" borderRadius="md">
                      <HStack>
                        <Icon as={provider.icon} color={provider.color} boxSize={5} />
                        <Text fontWeight="medium" fontSize="sm">{provider.name}</Text>
                      </HStack>
                      {provider.number && <Text fontSize="xs" fontWeight="medium">{provider.number}</Text>}
                    </HStack>
                  ))
                ) : (
                  <SimpleGrid columns={3} spacing={2}>
                    {method.plans.map((plan, idx) => (
                      <Box key={idx} p={2} bg="green.50" borderRadius="md" textAlign="center">
                        <Text fontSize="xs" fontWeight="bold">{plan.duration}</Text>
                        <Text fontSize="2xs">{plan.deposit} deposit</Text>
                        <Text fontSize="2xs" color={plan.interest === '0%' ? 'green.600' : 'orange.500'}>
                          {plan.interest}
                        </Text>
                      </Box>
                    ))}
                  </SimpleGrid>
                )}
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        {/* Security Features */}
        <HStack spacing={4} justify="center" flexWrap="wrap">
          {securityFeatures.map((feature, index) => (
            <HStack key={index} bg="green.50" p={2} borderRadius="full" px={4}>
              <Icon as={feature.icon} color="green.600" boxSize={4} />
              <Text fontSize="xs">{feature.text}</Text>
            </HStack>
          ))}
        </HStack>

        {/* FAQ */}
        <Box bg="gray.50" borderRadius="xl" p={6}>
          <Text fontWeight="bold" mb={4} fontSize="sm">Frequently Asked Questions</Text>
          <Accordion allowToggle>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} border="none" mb={2}>
                <AccordionButton bg="white" borderRadius="md" p={3}>
                  <Text flex="1" textAlign="left" fontSize="sm">{faq.question}</Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={3} fontSize="xs" color="gray.600">
                  {faq.answer}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>

        {/* Contact */}
        <HStack spacing={4} justify="center" p={4} bg="green.600" borderRadius="xl" color="white">
          <Text fontSize="sm" fontWeight="medium">Need help?</Text>
          <HStack spacing={2}>
            <Button as="a" href="https://wa.me/256708124902" size="xs" colorScheme="whiteAlpha" leftIcon={<FaWhatsapp />}>
              WhatsApp
            </Button>
            <Button as="a" href="tel:+256708124902" size="xs" colorScheme="whiteAlpha" leftIcon={<FaPhone />}>
              Call
            </Button>
          </HStack>
        </HStack>
      </VStack>
    </Container>
  );
};

export default PaymentMethods;