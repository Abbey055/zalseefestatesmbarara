import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Icon,
  IconButton,
  Text,
  VStack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  FaChevronRight,
  FaHome,
  FaImages,
  FaInfoCircle,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPlusCircle,
  FaWallet,
} from 'react-icons/fa';

import BrandLogo from './BrandLogo';
import ColorModeToggle from './ColorModeToggle';

const navItems = [
  { label: 'Home', to: '/', icon: FaHome, hint: 'Start here' },
  { label: 'Land for Sale', to: '/land-for-sale', icon: FaMapMarkedAlt, hint: 'Browse listings' },
  { label: 'Gallery', to: '/gallery', icon: FaImages, hint: 'View property photos' },
  { label: 'Location', to: '/location', icon: FaMapMarkerAlt, hint: 'Find our office' },
  { label: 'Payment', to: '/payment-methods', icon: FaWallet, hint: 'Payment options' },
  { label: 'About', to: '/about', icon: FaInfoCircle, hint: 'About Zalseef' },
  { label: 'Contact', to: '/contact', icon: FaPhoneAlt, hint: 'Talk to us' },
];

const NavMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const location = useLocation();

  const iconColor = useColorModeValue('#ffffff', '#edf5f3');
  const borderColor = useColorModeValue('rgba(255,255,255,0.10)', 'rgba(255,255,255,0.08)');
  const activeColor = useColorModeValue('#f5c27a', '#f5c27a');
  const drawerBg = useColorModeValue('#0b151c', '#071015');
  const sectionLabelColor = useColorModeValue('rgba(255,255,255,0.52)', 'rgba(237,245,243,0.52)');
  const subtlePanel = useColorModeValue('rgba(255,255,255,0.04)', 'rgba(255,255,255,0.03)');
  const navCardBg = useColorModeValue('rgba(255,255,255,0.02)', 'rgba(255,255,255,0.02)');
  const activeBg = useColorModeValue('rgba(245,194,122,0.08)', 'rgba(245,194,122,0.08)');

  return (
    <>
      <HStack spacing={2} align="center">
        <ColorModeToggle compact />
        <IconButton
          ref={btnRef}
          aria-label="Open menu"
          onClick={onOpen}
          variant="ghost"
          color={iconColor}
          border="1px solid"
          borderColor={borderColor}
          bg="rgba(255,255,255,0.04)"
          icon={
            <VStack spacing="4px" align="stretch" w="20px">
              <Box h="2px" bg="currentColor" />
              <Box h="2px" bg="currentColor" />
              <Box h="2px" bg="currentColor" />
            </VStack>
          }
          _hover={{ bg: 'rgba(255,255,255,0.08)' }}
        />
      </HStack>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay bg="blackAlpha.700" backdropFilter="blur(6px)" />
        <DrawerContent bg={drawerBg} color="white" borderLeft="1px solid" borderColor={borderColor}>
          <DrawerCloseButton
            mt={3}
            mr={1}
            color="white"
            borderRadius="full"
            _hover={{ bg: 'rgba(255,255,255,0.08)' }}
          />
          <DrawerHeader borderBottom="1px solid" borderColor={borderColor} py={5}>
            <VStack align="stretch" spacing={4}>
              <Box
                bg={subtlePanel}
                border="1px solid"
                borderColor={borderColor}
                px={4}
                py={4}
              >
                <VStack align="stretch" spacing={4}>
                  <BrandLogo light markSize={60} />
                  <Text fontSize="sm" color="whiteAlpha.700" lineHeight="1.8">
                    Open the section you need, or jump straight into listing your land or calling the office.
                  </Text>
                  <ColorModeToggle fullWidth />
                </VStack>
              </Box>
            </VStack>
          </DrawerHeader>

          <DrawerBody py={5}>
            <VStack align="stretch" spacing={5}>
              <VStack align="stretch" spacing={3}>
                <Text
                  fontSize="xs"
                  fontWeight="700"
                  letterSpacing="0.16em"
                  textTransform="uppercase"
                  color={sectionLabelColor}
                >
                  Navigation
                </Text>

              {navItems.map((item) => {
                const isActive = location.pathname === item.to;

                return (
                  <Button
                    key={item.to}
                    as={Link}
                    to={item.to}
                    onClick={onClose}
                    variant="ghost"
                    h="auto"
                    minH="72px"
                    px={3}
                    py={3}
                    justifyContent="flex-start"
                    color="white"
                    bg={isActive ? activeBg : navCardBg}
                    border="1px solid"
                    borderColor={isActive ? 'rgba(245,194,122,0.32)' : borderColor}
                    borderLeftWidth={isActive ? '3px' : '1px'}
                    borderLeftColor={isActive ? activeColor : undefined}
                    _hover={{ bg: 'rgba(255,255,255,0.08)' }}
                  >
                    <HStack justify="space-between" w="100%" spacing={3}>
                      <HStack spacing={3} minW={0} align="center">
                        <Box
                          w="40px"
                          h="40px"
                          borderRadius="full"
                          bg={isActive ? 'rgba(245,194,122,0.14)' : 'rgba(255,255,255,0.06)'}
                          color={isActive ? activeColor : 'whiteAlpha.900'}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          flexShrink={0}
                        >
                          <Icon as={item.icon} boxSize={4} />
                        </Box>

                        <VStack align="flex-start" spacing={0} minW={0}>
                          <Text
                            color={isActive ? activeColor : 'white'}
                            fontWeight="700"
                            fontSize="lg"
                            lineHeight="1.1"
                            textAlign="left"
                            whiteSpace="normal"
                          >
                            {item.label}
                          </Text>
                          <Text
                            color={isActive ? 'rgba(245,194,122,0.72)' : 'whiteAlpha.600'}
                            fontSize="xs"
                            textTransform="uppercase"
                            letterSpacing="0.08em"
                          >
                            {item.hint}
                          </Text>
                        </VStack>
                      </HStack>

                      <Icon as={FaChevronRight} color={isActive ? activeColor : 'whiteAlpha.400'} boxSize={3.5} />
                    </HStack>
                  </Button>
                );
              })}
              </VStack>

              <Divider borderColor={borderColor} />

              <VStack align="stretch" spacing={3}>
                <Text
                  fontSize="xs"
                  fontWeight="700"
                  letterSpacing="0.16em"
                  textTransform="uppercase"
                  color={sectionLabelColor}
                >
                  Quick Actions
                </Text>

                <Button
                  as={Link}
                  to="/list-land"
                  onClick={onClose}
                  leftIcon={<FaPlusCircle />}
                  bg="#2f9f79"
                  color="white"
                  h="54px"
                  _hover={{ bg: '#257b5f' }}
                >
                  List Land
                </Button>

                <Button
                  as="a"
                  href="tel:+256708124902"
                  leftIcon={<FaPhoneAlt />}
                  variant="outline"
                  borderColor={borderColor}
                  color="white"
                  h="54px"
                  _hover={{ bg: 'rgba(255,255,255,0.06)' }}
                >
                  Call The Office
                </Button>
              </VStack>

              <Box
                bg={subtlePanel}
                border="1px solid"
                borderColor={borderColor}
                px={4}
                py={4}
              >
                <VStack align="flex-start" spacing={2}>
                  <HStack spacing={2} color={activeColor}>
                    <Icon as={FaPhoneAlt} boxSize={3.5} />
                    <Text fontSize="xs" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase">
                      Quick Contact
                    </Text>
                  </HStack>
                  <Text fontSize="sm" color="whiteAlpha.800" lineHeight="1.8">
                    Trusted land dealers in Mbarara helping clients move from inquiry to ownership with clearer guidance.
                  </Text>
                  <Box as="a" href="tel:+256708124902">
                    <Text fontSize="sm" color="white" fontWeight="600" _hover={{ color: activeColor }}>
                      +256 708 124902
                    </Text>
                  </Box>
                </VStack>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavMobile;
