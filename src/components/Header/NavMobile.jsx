import { useRef } from 'react';
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
  Divider
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { FaHome, FaImage, FaInfoCircle, FaPhone, FaPlusCircle } from 'react-icons/fa';
import { GiFarmTractor } from 'react-icons/gi';

const NavMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  
  const handleLinkClick = () => {
    onClose(); // Close the drawer when a link is clicked
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
                        <Link to="/" onClick={handleLinkClick}>
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
                        
                        <Link to="/land-for-sale" onClick={handleLinkClick}>
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

                        <Link to="/gallery" onClick={handleLinkClick}>
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
                        
                        <Link to="/about" onClick={handleLinkClick}>
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
                        
                        <Divider my='2' borderColor='green.200' />
                        
                        {/* Action Buttons with Icons */}
                        <Link to="/contact" onClick={handleLinkClick}>
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
                        
                        <Link to="/list-land" onClick={handleLinkClick}>
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
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
  )
}

export default NavMobile;