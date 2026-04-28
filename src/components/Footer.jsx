import {
  Box,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

import BrandLogo from './Header/BrandLogo';
import AbbeyImage from '../assets/images/agents/abbey.jpg';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Land For Sale', to: '/land-for-sale' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const Footer = () => {
  return (
    <Box as="footer" width="100%" bg="#081117" color="white">
      <Box maxW="1720px" mx="auto" px={{ base: 4, md: 6, xl: 8 }} py={{ base: 12, md: 14 }}>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={{ base: 8, xl: 10 }}>
          <VStack align="flex-start" spacing={4}>
            <BrandLogo light />
            <Text color="rgba(255,255,255,0.76)" lineHeight="1.9" maxW="34ch">
              Zalseef Estates helps buyers in Mbarara explore verified plots, compare locations,
              and move into land ownership with a clearer process.
            </Text>
          </VStack>

          <VStack align="flex-start" spacing={3}>
            <Text fontSize="sm" fontWeight="800" letterSpacing="0.16em" textTransform="uppercase">
              Navigation
            </Text>
            {quickLinks.map((item) => (
              <RouterLink key={item.to} to={item.to}>
                <Text color="rgba(255,255,255,0.76)" _hover={{ color: 'white' }}>
                  {item.label}
                </Text>
              </RouterLink>
            ))}
          </VStack>

          <VStack align="flex-start" spacing={3}>
            <Text fontSize="sm" fontWeight="800" letterSpacing="0.16em" textTransform="uppercase">
              Contact
            </Text>
            <HStack align="flex-start" spacing={3}>
              <Icon as={FaPhoneAlt} mt={1} color="#f5c27a" />
              <Box as="a" href="tel:+256708124902">
                <Text color="rgba(255,255,255,0.76)" _hover={{ color: 'white' }}>
                  +256 708 124902
                </Text>
              </Box>
            </HStack>
            <HStack align="flex-start" spacing={3}>
              <Icon as={FaEnvelope} mt={1} color="#f5c27a" />
              <Box as="a" href="mailto:zalseefmhd256@gmail.com">
                <Text color="rgba(255,255,255,0.76)" _hover={{ color: 'white' }}>
                  zalseefmhd256@gmail.com
                </Text>
              </Box>
            </HStack>
            <HStack align="flex-start" spacing={3}>
              <Icon as={FaMapMarkerAlt} mt={1} color="#f5c27a" />
              <Text color="rgba(255,255,255,0.76)">St Paul Shopping Mall, Room C10, Mbarara</Text>
            </HStack>
          </VStack>

          <VStack align="flex-start" spacing={3}>
            <Text fontSize="sm" fontWeight="800" letterSpacing="0.16em" textTransform="uppercase">
              Why People Choose Us
            </Text>
            <Text color="rgba(255,255,255,0.76)" lineHeight="1.9">
              Verified opportunities
            </Text>
            <Text color="rgba(255,255,255,0.76)" lineHeight="1.9">
              Guided site visits
            </Text>
            <Text color="rgba(255,255,255,0.76)" lineHeight="1.9">
              Clearer buying support
            </Text>
            <Text color="rgba(255,255,255,0.76)" lineHeight="1.9">
              Practical local guidance
            </Text>
          </VStack>
        </SimpleGrid>

        <HStack
          mt={{ base: 10, md: 12 }}
          pt={{ base: 6, md: 7 }}
          borderTop="1px solid rgba(255,255,255,0.10)"
          justify="space-between"
          flexWrap="wrap"
          spacing={4}
          align={{ base: 'flex-start', md: 'center' }}
        >
          <Text fontSize="sm" color="whiteAlpha.700">
            Copyright &copy; {new Date().getFullYear()} Zalseef Estates. All rights reserved.
          </Text>
          <HStack spacing={3} align="center">
            <Image
              src={AbbeyImage}
              alt="Ssenkubuge Abbey"
              boxSize="42px"
              objectFit="cover"
              borderRadius="full"
              border="2px solid rgba(255,255,255,0.12)"
              flexShrink={0}
            />
            <VStack align="flex-start" spacing={0.5}>
              <Text fontSize="sm" color="whiteAlpha.700">
                Developed by Ssenkubuge Abbey
              </Text>
              <Box as="a" href="mailto:ssenkubugeabbey055@gmail.com">
                <Text fontSize="xs" color="whiteAlpha.600" _hover={{ color: 'white' }}>
                  ssenkubugeabbey055@gmail.com
                </Text>
              </Box>
              <Box as="a" href="tel:0705149399">
                <Text fontSize="xs" color="whiteAlpha.600" _hover={{ color: 'white' }}>
                  0705149399
                </Text>
              </Box>
            </VStack>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default Footer;
