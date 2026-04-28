import {
  Box,
  Button,
  Flex,
  HStack,
  chakra,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

import NavMobile from './NavMobile';
import ColorModeToggle from './ColorModeToggle';
import BrandLogo from './BrandLogo';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Land for Sale', to: '/land-for-sale' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Location', to: '/location' },
  { label: 'Payment', to: '/payment-methods' },
  { label: 'About', to: '/about' },
];

const Header = () => {
  const isDesktop = useBreakpointValue({ base: false, xl: true });
  const location = useLocation();

  const shellBg = useColorModeValue('rgba(11, 21, 28, 0.94)', 'rgba(5, 13, 17, 0.96)');
  const borderColor = useColorModeValue('rgba(255,255,255,0.10)', 'rgba(255,255,255,0.08)');
  const navColor = useColorModeValue('rgba(255,255,255,0.84)', 'rgba(237,245,243,0.84)');
  const activeColor = useColorModeValue('#f5c27a', '#f5c27a');
  const hoverColor = useColorModeValue('white', 'white');
  const subtleShell = useColorModeValue('rgba(255,255,255,0.06)', 'rgba(255,255,255,0.04)');

  return (
    <chakra.header
      id="header"
      position="sticky"
      top="0"
      zIndex="1200"
      bg={shellBg}
      borderBottom="1px solid"
      borderColor={borderColor}
      backdropFilter="blur(18px)"
      boxShadow="0 20px 48px rgba(0, 0, 0, 0.24)"
    >
      <Flex
        w="100%"
        maxW="1720px"
        mx="auto"
        py={{ base: 3.5, md: 4 }}
        px={{ base: 4, md: 6, xl: 8 }}
        align="center"
        justify="space-between"
        gap={5}
      >
        <Link to="/">
          <Box transition="transform 0.2s ease" _hover={{ transform: 'translateY(-1px)' }}>
            <BrandLogo light />
          </Box>
        </Link>

        {isDesktop ? (
          <HStack spacing={4} flex="1" justify="flex-end">
            <HStack
              as="nav"
              spacing={{ base: 1, xl: 2 }}
              px={2}
              py={1.5}
              bg={subtleShell}
              border="1px solid"
              borderColor={borderColor}
            >
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;

                return (
                  <Button
                    key={item.to}
                    as={Link}
                    to={item.to}
                    variant="ghost"
                    px={{ base: 3, xl: 4 }}
                    h="44px"
                    color={isActive ? activeColor : navColor}
                    _hover={{ color: hoverColor, bg: 'rgba(255,255,255,0.06)' }}
                    _active={{ bg: 'rgba(255,255,255,0.08)' }}
                    fontSize="sm"
                  >
                    {item.label}
                  </Button>
                );
              })}
            </HStack>

            <ColorModeToggle compact />

            <Button
              as={Link}
              to="/contact"
              bg="#2f9f79"
              color="white"
              px={6}
              _hover={{ bg: '#257b5f', transform: 'translateY(-1px)' }}
            >
              Contact
            </Button>

            <Button
              as={Link}
              to="/list-land"
              variant="outline"
              borderColor="rgba(255,255,255,0.18)"
              color="white"
              px={5}
              _hover={{ bg: 'rgba(255,255,255,0.06)' }}
            >
              List Land
            </Button>
          </HStack>
        ) : (
          <NavMobile />
        )}
      </Flex>
    </chakra.header>
  );
};

export default Header;
