import { useState } from 'react';
import {
  Box,
  Button,
  Input,
  VStack,
  Heading,
  Text,
  InputGroup,
  InputLeftElement,
  Icon,
  useToast,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { FaEnvelope, FaLock, FaUserShield } from 'react-icons/fa';
import { useAdmin } from '../../context/AdminContext';

const AdminLogin = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { loginAsAdmin } = useAdmin();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await loginAsAdmin({ email, password });
      toast({
        title: 'Login Successful',
        description: 'Welcome back, Admin!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      onClose?.();
    } catch (loginError) {
      setError(loginError.message || 'Unable to log in');
      toast({
        title: 'Login Failed',
        description: loginError.message || 'Incorrect admin credentials',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box p={8}>
      <VStack spacing={6}>
        <Icon as={FaUserShield} boxSize={16} color="green.500" />
        
        <VStack spacing={1}>
          <Heading size="lg" color="green.700">Admin Access</Heading>
          <Text color="gray.500" fontSize="sm">Enter password to manage lands</Text>
        </VStack>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <VStack spacing={4} w="100%">
            <FormControl isInvalid={!!error}>
              <InputGroup size="lg" mb={4}>
                <InputLeftElement>
                  <Icon as={FaEnvelope} color="green.500" />
                </InputLeftElement>
                <Input
                  type="email"
                  placeholder="Admin email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  focusBorderColor="green.500"
                  borderRadius="full"
                  bg="gray.50"
                />
              </InputGroup>

              <InputGroup size="lg">
                <InputLeftElement>
                  <Icon as={FaLock} color="green.500" />
                </InputLeftElement>
                <Input
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError('');
                  }}
                  focusBorderColor="green.500"
                  borderRadius="full"
                  bg="gray.50"
                />
              </InputGroup>
              {error && <FormErrorMessage>{error}</FormErrorMessage>}
            </FormControl>

            <Button
              type="submit"
              colorScheme="green"
              size="lg"
              w="100%"
              borderRadius="full"
              isLoading={isLoading}
              loadingText="Verifying..."
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
            >
              Login as Admin
            </Button>
          </VStack>
        </form>

        <Text fontSize="xs" color="gray.400" textAlign="center">
          This area is restricted to authorized personnel only
        </Text>
      </VStack>
    </Box>
  );
};

export default AdminLogin;
