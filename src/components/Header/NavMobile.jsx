import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  VStack, 
  Drawer, 
  DrawerBody, 
  DrawerCloseButton, 
  DrawerContent, 
  DrawerHeader, 
  DrawerOverlay, 
  Button, 
  IconButton, 
  useDisclosure, 
  Center,
  Divider,
  Box,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { FaHome, FaImage, FaInfoCircle, FaPhone, FaPlusCircle, FaMapMarkerAlt } from 'react-icons/fa';
import { GiFarmTractor, GiPayMoney } from 'react-icons/gi';
import { keyframes } from '@emotion/react';

// Animation for the click effect
const fadeWhite = keyframes`
  0% { opacity: 0; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.1); background-color: rgba(255, 255, 255, 0.8); }
  100% { opacity: 0; transform: scale(1.5); background-color: rgba(255, 255, 255, 0); }
`;

const NavMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [clickedItem, setClickedItem] = useState(null);
  
  const handleLinkClick = (item) => {
    setClickedItem(item);
    setTimeout(() => {
      setClickedItem(null);
      onClose(); // Close the drawer after animation
    }, 300);
  };

  return (
    <>
        <IconButton 
          variant='ghost' 
          icon={<FiMenu fontSize='1.35rem' />}
          aria-label='Open Menu'
          onClick={onOpen} 
          ref={btnRef}
          _hover={{ bg: 'green.50' }}
        />
        <Drawer 
          isOpen={isOpen} 
          placement='right' 
          onClose={onClose} 
          finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <Center>
                  <DrawerHeader 
                    color="green.700"
                    fontSize="2xl"
                    fontWeight="bold"
                  >
                    Menu
                  </DrawerHeader>
                </Center>
                <DrawerBody px='6' mt='2'>
                    <VStack as='nav' spacing='4' alignItems='stretch'>
                        {/* Navigation Links with Icons */}
                        <Box position="relative" onClick={() => handleLinkClick('home')}>
                          <Link to="/">
                            <Button 
                              variant='ghost' 
                              w="full" 
                              justifyContent="flex-start"
                              leftIcon={<FaHome />}
                              _hover={{ bg: 'green.50', color: 'green.700' }}
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
                              borderRadius="md"
                              bg="white"
                              animation={`${fadeWhite} 0.3s ease-out forwards`}
                              pointerEvents="none"
                              zIndex={10}
                            />
                          )}
                        </Box>
                        
                        <Box position="relative" onClick={() => handleLinkClick('land')}>
                          <Link to="/land-for-sale">
                            <Button 
                              variant='ghost' 
                              w="full" 
                              justifyContent="flex-start"
                              leftIcon={<GiFarmTractor />}
                              _hover={{ bg: 'green.50', color: 'green.700' }}
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
                              borderRadius="md"
                              bg="white"
                              animation={`${fadeWhite} 0.3s ease-out forwards`}
                              pointerEvents="none"
                              zIndex={10}
                            />
                          )}
                        </Box>

                        <Box position="relative" onClick={() => handleLinkClick('gallery')}>
                          <Link to="/gallery">
                            <Button 
                              variant='ghost' 
                              w="full" 
                              justifyContent="flex-start"
                              leftIcon={<FaImage />}
                              _hover={{ bg: 'green.50', color: 'green.700' }}
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
                              borderRadius="md"
                              bg="white"
                              animation={`${fadeWhite} 0.3s ease-out forwards`}
                              pointerEvents="none"
                              zIndex={10}
                            />
                          )}
                        </Box>

                        <Box position="relative" onClick={() => handleLinkClick('location')}>
                          <Link to="/location">
                            <Button 
                              variant='ghost' 
                              w="full" 
                              justifyContent="flex-start"
                              leftIcon={<FaMapMarkerAlt />}
                              _hover={{ bg: 'green.50', color: 'green.700' }}
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
                              borderRadius="md"
                              bg="white"
                              animation={`${fadeWhite} 0.3s ease-out forwards`}
                              pointerEvents="none"
                              zIndex={10}
                            />
                          )}
                        </Box>

                        <Box position="relative" onClick={() => handleLinkClick('payment')}>
                          <Link to="/payment-methods">
                            <Button 
                              variant='ghost' 
                              w="full" 
                              justifyContent="flex-start"
                              leftIcon={<GiPayMoney />}
                              _hover={{ bg: 'green.50', color: 'green.700' }}
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
                              borderRadius="md"
                              bg="white"
                              animation={`${fadeWhite} 0.3s ease-out forwards`}
                              pointerEvents="none"
                              zIndex={10}
                            />
                          )}
                        </Box>
                        
                        <Box position="relative" onClick={() => handleLinkClick('about')}>
                          <Link to="/about">
                            <Button 
                              variant='ghost' 
                              w="full" 
                              justifyContent="flex-start"
                              leftIcon={<FaInfoCircle />}
                              _hover={{ bg: 'green.50', color: 'green.700' }}
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
                              borderRadius="md"
                              bg="white"
                              animation={`${fadeWhite} 0.3s ease-out forwards`}
                              pointerEvents="none"
                              zIndex={10}
                            />
                          )}
                        </Box>
                        
                        <Divider my='2' borderColor='green.200' />
                        
                        {/* Action Buttons with Icons */}
                        <Box position="relative" onClick={() => handleLinkClick('contact')}>
                          <Link to="/contact">
                            <Button 
                              size='md' 
                              variant='solid' 
                              colorScheme="green"
                              w="full"
                              leftIcon={<FaPhone />}
                              _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: '0 5px 15px rgba(56,161,105,0.3)'
                              }}
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
                              animation={`${fadeWhite} 0.3s ease-out forwards`}
                              pointerEvents="none"
                              zIndex={10}
                            />
                          )}
                        </Box>
                        
                        <Box position="relative" onClick={() => handleLinkClick('list')}>
                          <Link to="/list-land">
                            <Button 
                              size='md' 
                              variant='outline' 
                              colorScheme="green"
                              w="full"
                              leftIcon={<FaPlusCircle />}
                              _hover={{
                                bg: 'green.50',
                                transform: 'translateY(-2px)'
                              }}
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
                              animation={`${fadeWhite} 0.3s ease-out forwards`}
                              pointerEvents="none"
                              zIndex={10}
                            />
                          )}
                        </Box>
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
  )
}

export default NavMobile;