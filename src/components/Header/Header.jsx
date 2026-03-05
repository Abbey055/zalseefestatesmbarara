import { 
  Flex, 
  Heading, 
  Button, 
  HStack, 
  chakra, 
  ButtonGroup, 
  useBreakpointValue, 
  Box,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import NavMobile from './NavMobile';
import { useState } from 'react';
import { keyframes } from '@emotion/react';

// Animation for the click effect
const fadeWhite = keyframes`
  0% { opacity: 0; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.1); background-color: rgba(255, 255, 255, 0.8); }
  100% { opacity: 0; transform: scale(1.5); background-color: rgba(255, 255, 255, 0); }
`;

const Header = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const [clickedItem, setClickedItem] = useState(null);

  const handleNavClick = (item) => {
    setClickedItem(item);
    setTimeout(() => setClickedItem(null), 500);
  };

  return (
    <chakra.header id="header" borderBottom='1px solid rgb(0,0,0,0.3)'>
      <Flex w='100%' py='5' align='center' justify='space-between'>
        <Link to='/'>
          <Heading 
            fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }} 
            color='green.700'
            bgGradient="linear(to-r, green.700, green.500)"
            bgClip="text"
            _hover={{ transform: 'scale(1.05)' }}
            transition="all 0.2s"
          >
            Zalseef Estates
          </Heading>
        </Link>
        
        {isDesktop ? (
          <>
            <ButtonGroup as='nav' variant='link' spacing={{ md: '3', lg: '5' }}>
              <Box position="relative" display="inline-block">
                <Link to="/" onClick={() => handleNavClick('home')}>
                  <Button 
                    fontSize={{ md: '14px', lg: '16px' }} 
                    fontWeight="medium"
                    _hover={{ color: 'green.600', transform: 'translateY(-2px)' }}
                    transition="all 0.2s"
                  >
                    Home
                  </Button>
                </Link>
                {clickedItem === 'home' && (
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    w="100%"
                    h="100%"
                    borderRadius="full"
                    bg="white"
                    animation={`${fadeWhite} 0.5s ease-out forwards`}
                    pointerEvents="none"
                    zIndex={10}
                  />
                )}
              </Box>

              <Box position="relative" display="inline-block">
                <Link to="/land-for-sale" onClick={() => handleNavClick('land')}>
                  <Button 
                    fontSize={{ md: '14px', lg: '16px' }}
                    fontWeight="medium"
                    _hover={{ color: 'green.600', transform: 'translateY(-2px)' }}
                    transition="all 0.2s"
                  >
                    Land for Sale
                  </Button>
                </Link>
                {clickedItem === 'land' && (
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    w="100%"
                    h="100%"
                    borderRadius="full"
                    bg="white"
                    animation={`${fadeWhite} 0.5s ease-out forwards`}
                    pointerEvents="none"
                    zIndex={10}
                  />
                )}
              </Box>

              <Box position="relative" display="inline-block">
                <Link to="/gallery" onClick={() => handleNavClick('gallery')}>
                  <Button 
                    fontSize={{ md: '14px', lg: '16px' }}
                    fontWeight="medium"
                    _hover={{ color: 'green.600', transform: 'translateY(-2px)' }}
                    transition="all 0.2s"
                  >
                    Gallery
                  </Button>
                </Link>
                {clickedItem === 'gallery' && (
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    w="100%"
                    h="100%"
                    borderRadius="full"
                    bg="white"
                    animation={`${fadeWhite} 0.5s ease-out forwards`}
                    pointerEvents="none"
                    zIndex={10}
                  />
                )}
              </Box>

              <Box position="relative" display="inline-block">
                <Link to="/location" onClick={() => handleNavClick('location')}>
                  <Button 
                    fontSize={{ md: '14px', lg: '16px' }}
                    fontWeight="medium"
                    _hover={{ color: 'green.600', transform: 'translateY(-2px)' }}
                    transition="all 0.2s"
                  >
                    Location
                  </Button>
                </Link>
                {clickedItem === 'location' && (
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    w="100%"
                    h="100%"
                    borderRadius="full"
                    bg="white"
                    animation={`${fadeWhite} 0.5s ease-out forwards`}
                    pointerEvents="none"
                    zIndex={10}
                  />
                )}
              </Box>

              <Box position="relative" display="inline-block">
                <Link to="/payment-methods" onClick={() => handleNavClick('payment')}>
                  <Button 
                    fontSize={{ md: '14px', lg: '16px' }}
                    fontWeight="medium"
                    _hover={{ color: 'green.600', transform: 'translateY(-2px)' }}
                    transition="all 0.2s"
                  >
                    Payment
                  </Button>
                </Link>
                {clickedItem === 'payment' && (
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    w="100%"
                    h="100%"
                    borderRadius="full"
                    bg="white"
                    animation={`${fadeWhite} 0.5s ease-out forwards`}
                    pointerEvents="none"
                    zIndex={10}
                  />
                )}
              </Box>

              <Box position="relative" display="inline-block">
                <Link to="/about" onClick={() => handleNavClick('about')}>
                  <Button 
                    fontSize={{ md: '14px', lg: '16px' }}
                    fontWeight="medium"
                    _hover={{ color: 'green.600', transform: 'translateY(-2px)' }}
                    transition="all 0.2s"
                  >
                    About Us
                  </Button>
                </Link>
                {clickedItem === 'about' && (
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    w="100%"
                    h="100%"
                    borderRadius="full"
                    bg="white"
                    animation={`${fadeWhite} 0.5s ease-out forwards`}
                    pointerEvents="none"
                    zIndex={10}
                  />
                )}
              </Box>
            </ButtonGroup>

            <HStack spacing={{ md: '2', lg: '4' }}>
              <Box position="relative" display="inline-block">
                <Link to="/contact" onClick={() => handleNavClick('contact')}>
                  <Button 
                    size={{ md: 'xs', lg: 'sm' }} 
                    variant='solid'
                    colorScheme="green"
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: '0 5px 15px rgba(56,161,105,0.3)'
                    }}
                    transition="all 0.2s"
                  >
                    Contact Us
                  </Button>
                </Link>
                {clickedItem === 'contact' && (
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    w="100%"
                    h="100%"
                    borderRadius="md"
                    bg="white"
                    animation={`${fadeWhite} 0.5s ease-out forwards`}
                    pointerEvents="none"
                    zIndex={10}
                  />
                )}
              </Box>

              <Box position="relative" display="inline-block">
                <Link to="/list-land" onClick={() => handleNavClick('list')}>
                  <Button 
                    size={{ md: 'xs', lg: 'sm' }} 
                    variant='outline'
                    colorScheme="green"
                    _hover={{
                      bg: 'green.50',
                      transform: 'translateY(-2px)',
                      borderColor: 'green.600'
                    }}
                    transition="all 0.2s"
                  >
                    List Land
                  </Button>
                </Link>
                {clickedItem === 'list' && (
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    w="100%"
                    h="100%"
                    borderRadius="md"
                    bg="white"
                    animation={`${fadeWhite} 0.5s ease-out forwards`}
                    pointerEvents="none"
                    zIndex={10}
                  />
                )}
              </Box>
            </HStack>
          </>
        ) : (
          <NavMobile />
        )}
      </Flex>
    </chakra.header>
  );
};

export default Header;