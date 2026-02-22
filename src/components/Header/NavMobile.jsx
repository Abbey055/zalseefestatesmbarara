import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { VStack, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Button, IconButton, useDisclosure, Center } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';

const NavMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  
  const handleLinkClick = () => {
    onClose(); // Close the drawer when a link is clicked
  };

  return (
    <>
        <IconButton variant='ghost' 
            icon={<FiMenu fontSize='1.35rem' />}
            aria-label='Open Menu'
            onClick={onOpen} 
            ref={btnRef}
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
                  <DrawerHeader>Menu</DrawerHeader>
                </Center>
                <DrawerBody px='14' mt='4'>
                    <VStack as='nav' spacing='8' alignItems='left'>
                        {/* Navigation Links with React Router Links */}
                        <Link to="/" onClick={handleLinkClick}>
                          <Button variant='link' w="full">Home</Button>
                        </Link>
                        
                        <Link to="/land-for-sale" onClick={handleLinkClick}>
                          <Button variant='link' w="full">Land for Sale</Button>
                        </Link>
                        
                        <Link to="/about" onClick={handleLinkClick}>
                          <Button variant='link' w="full">About Us</Button>
                        </Link>
                        
                        {/* Action Buttons */}
                        <Link to="/contact" onClick={handleLinkClick}>
                          <Button size='sm' variant='solid' w="full">Contact Us</Button>
                        </Link>
                        
                        <Link to="/list-land" onClick={handleLinkClick}>
                          <Button size='sm' variant='outline' w="full">List Land</Button>
                        </Link>
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
  )
}

export default NavMobile;