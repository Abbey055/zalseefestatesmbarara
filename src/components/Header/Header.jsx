import { Flex, Heading, Button, HStack, chakra, ButtonGroup, useBreakpointValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import NavMobile from './NavMobile';

const Header = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })

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
        {
          isDesktop ? (
          <>
            <ButtonGroup as='nav' variant='link' spacing={{ md: '3', lg: '5' }}>
                <Link to="/">
                  <Button 
                    fontSize={{ md: '14px', lg: '16px' }} 
                    fontWeight="medium"
                    _hover={{ color: 'green.600', transform: 'translateY(-2px)' }}
                    transition="all 0.2s"
                  >
                    Home
                  </Button>
                </Link>
                <Link to="/land-for-sale">
                  <Button 
                    fontSize={{ md: '14px', lg: '16px' }}
                    fontWeight="medium"
                    _hover={{ color: 'green.600', transform: 'translateY(-2px)' }}
                    transition="all 0.2s"
                  >
                    Land for Sale
                  </Button>
                </Link>
                <Link to="/gallery">
                  <Button 
                    fontSize={{ md: '14px', lg: '16px' }}
                    fontWeight="medium"
                    _hover={{ color: 'green.600', transform: 'translateY(-2px)' }}
                    transition="all 0.2s"
                  >
                    Gallery
                  </Button>
                </Link>
                <Link to="/about">
                  <Button 
                    fontSize={{ md: '14px', lg: '16px' }}
                    fontWeight="medium"
                    _hover={{ color: 'green.600', transform: 'translateY(-2px)' }}
                    transition="all 0.2s"
                  >
                    About Us
                  </Button>
                </Link>
            </ButtonGroup>

            <HStack spacing={{ md: '2', lg: '4' }}>
              <Link to="/contact">
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
              <Link to="/list-land">
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
            </HStack>
          </>
          ) : (
            <NavMobile />
          )
        }
      </Flex>
    </chakra.header>
  )
}

export default Header;