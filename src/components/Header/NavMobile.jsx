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
    onClose();
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
          size="lg"
        />
        <Drawer 
          isOpen={isOpen} 
          placement='right' 
          onClose={onClose} 
          finalFocusRef={btnRef}
          size="full"
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton size="lg" />
                <Center>
                  <DrawerHeader 
                    color="green.700"
                    fontSize="3xl"
                    fontWeight="bold"
                    pt={8}
                  >
                    Menu
                  </DrawerHeader>
                </Center>
                <DrawerBody px={8} mt={4}>
                    <VStack as='nav' spacing={6} alignItems='stretch'>
                        {/* Navigation Links with Icons */}
                        <Link to="/" onClick={handleLinkClick}>
                          <Button 
                            variant='ghost' 
                            w="full" 
                            justifyContent="flex-start"
                            leftIcon={<FaHome size={20} />}
                            _hover={{ bg: 'green.50', color: 'green.700' }}
                            size="lg"
                            fontSize="lg"
                            py={6}
                          >
                            Home
                          </Button>
                        </Link>
                        
                        <Link to="/land-for-sale" onClick={handleLinkClick}>
                          <Button 
                            variant='ghost' 
                            w="full" 
                            justifyContent="flex-start"
                            leftIcon={<GiFarmTractor size={20} />}
                            _hover={{ bg: 'green.50', color: 'green.700' }}
                            size="lg"
                            fontSize="lg"
                            py={6}
                          >
                            Land for Sale
                          </Button>
                        </Link>

                        <Link to="/gallery" onClick={handleLinkClick}>
                          <Button 
                            variant='ghost' 
                            w="full" 
                            justifyContent="flex-start"
                            leftIcon={<FaImage size={20} />}
                            _hover={{ bg: 'green.50', color: 'green.700' }}
                            size="lg"
                            fontSize="lg"
                            py={6}
                          >
                            Gallery
                          </Button>
                        </Link>
                        
                        <Link to="/about" onClick={handleLinkClick}>
                          <Button 
                            variant='ghost' 
                            w="full" 
                            justifyContent="flex-start"
                            leftIcon={<FaInfoCircle size={20} />}
                            _hover={{ bg: 'green.50', color: 'green.700' }}
                            size="lg"
                            fontSize="lg"
                            py={6}
                          >
                            About Us
                          </Button>
                        </Link>
                        
                        <Divider my={4} borderColor='green.200' />
                        
                        {/* Action Buttons with Icons */}
                        <Link to="/contact" onClick={handleLinkClick}>
                          <Button 
                            size="lg"
                            variant='solid' 
                            colorScheme="green"
                            w="full"
                            leftIcon={<FaPhone size={20} />}
                            _hover={{
                              transform: 'translateY(-2px)',
                              boxShadow: '0 5px 15px rgba(56,161,105,0.3)'
                            }}
                            py={6}
                          >
                            Contact Us
                          </Button>
                        </Link>
                        
                        <Link to="/list-land" onClick={handleLinkClick}>
                          <Button 
                            size="lg"
                            variant='outline' 
                            colorScheme="green"
                            w="full"
                            leftIcon={<FaPlusCircle size={20} />}
                            _hover={{
                              bg: 'green.50',
                              transform: 'translateY(-2px)'
                            }}
                            py={6}
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