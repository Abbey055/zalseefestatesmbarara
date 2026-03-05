import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  VStack,
  HStack,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  useToast,
  FormControl,
  FormErrorMessage,
  Divider,
  Text,
  SimpleGrid,
  Image,
  Badge,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from '@chakra-ui/react';
import { FaLock, FaUserShield, FaPlus, FaEdit, FaTrash, FaSignOutAlt, FaImage } from 'react-icons/fa';
import { useAdmin } from '../context/AdminContext';
import LandForm from '../components/Admin/LandForm';

const AdminPanel = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [editingLand, setEditingLand] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const { 
    isAdminAuthenticated, 
    loginAsAdmin, 
    logoutAdmin, 
    lands, 
    deleteLand 
  } = useAdmin();
  
  const toast = useToast();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      // Pass the password to loginAsAdmin function
      const success = loginAsAdmin(password);
      
      if (success) {
        toast({
          title: 'Access Granted',
          description: 'Welcome to admin panel',
          status: 'success',
          duration: 3000,
        });
      } else {
        setError('Invalid password');
        toast({
          title: 'Access Denied',
          description: 'Incorrect password',
          status: 'error',
          duration: 3000,
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleEdit = (land) => {
    setEditingLand(land);
    onOpen();
  };

  const handleAdd = () => {
    setEditingLand(null);
    onOpen();
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete "${name}"?`)) {
      deleteLand(id);
      toast({
        title: 'Deleted',
        description: 'Land removed successfully',
        status: 'success',
        duration: 3000,
      });
    }
  };

  const handleLogout = () => {
    logoutAdmin();
    setPassword('');
  };

  // Calculate stats
  const totalValue = lands.reduce((sum, land) => sum + land.price, 0);

  if (!isAdminAuthenticated) {
    return (
      <Container maxW="md" py={20}>
        <Box
          bg="white"
          p={8}
          borderRadius="2xl"
          boxShadow="xl"
          border="1px solid"
          borderColor="gray.100"
        >
          <VStack spacing={6}>
            <Icon as={FaUserShield} boxSize={16} color="green.500" />
            
            <VStack spacing={1}>
              <Heading size="lg" color="gray.800">Admin Access</Heading>
              <Text color="gray.500" fontSize="sm">Enter secret password</Text>
            </VStack>

            <form onSubmit={handleLogin} style={{ width: '100%' }}>
              <VStack spacing={4}>
                <FormControl isInvalid={!!error}>
                  <InputGroup size="lg">
                    <InputLeftElement>
                      <Icon as={FaLock} color="green.500" />
                    </InputLeftElement>
                    <Input
                      type="password"
                      placeholder="Enter password"
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
                >
                  Access Panel
                </Button>
              </VStack>
            </form>
          </VStack>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={6} align="stretch">
        {/* Header */}
        <Flex justify="space-between" align="center">
          <VStack align="start" spacing={0}>
            <Heading size="lg" color="green.700">Admin Panel</Heading>
            <Text color="gray.500" fontSize="sm">Manage your land listings</Text>
          </VStack>
          <Button
            leftIcon={<FaSignOutAlt />}
            variant="ghost"
            colorScheme="red"
            onClick={handleLogout}
            size="sm"
          >
            Logout
          </Button>
        </Flex>

        {/* Stats */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          <Stat bg="white" p={4} borderRadius="lg" boxShadow="sm">
            <StatLabel>Total Lands</StatLabel>
            <StatNumber fontSize="3xl" color="green.600">{lands.length}</StatNumber>
            <StatHelpText>Active listings</StatHelpText>
          </Stat>
          <Stat bg="white" p={4} borderRadius="lg" boxShadow="sm">
            <StatLabel>Total Value</StatLabel>
            <StatNumber fontSize="3xl" color="blue.600">
              UGX {(totalValue / 1000000).toFixed(1)}M
            </StatNumber>
            <StatHelpText>Portfolio value</StatHelpText>
          </Stat>
          <Stat bg="white" p={4} borderRadius="lg" boxShadow="sm">
            <StatLabel>Images</StatLabel>
            <StatNumber fontSize="3xl" color="purple.600">48</StatNumber>
            <StatHelpText>Available in gallery</StatHelpText>
          </Stat>
        </SimpleGrid>

        {/* Add Button */}
        <Button
          leftIcon={<FaPlus />}
          colorScheme="green"
          onClick={handleAdd}
          alignSelf="flex-start"
          size="md"
          borderRadius="full"
        >
          Add New Land
        </Button>

        {/* Lands Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
          {lands.map((land) => (
            <Box
              key={land.id}
              bg="white"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              border="1px solid"
              borderColor="gray.100"
            >
              <Image
                src={land.image}
                alt={land.name}
                h="140px"
                w="100%"
                objectFit="cover"
              />
              
              <VStack p={3} align="stretch" spacing={2}>
                <HStack justify="space-between">
                  <Text fontWeight="bold" fontSize="md" noOfLines={1}>
                    {land.name}
                  </Text>
                  <Badge colorScheme={land.landUse === 'Residential' ? 'green' : 'blue'}>
                    {land.landUse}
                  </Badge>
                </HStack>

                <Text fontSize="sm" color="gray.600" noOfLines={1}>
                  {land.location}
                </Text>

                <Text fontSize="lg" fontWeight="bold" color="green.600">
                  UGX {(land.price / 1000000).toFixed(1)}M
                </Text>

                <HStack justify="flex-end" spacing={2} pt={2}>
                  <IconButton
                    icon={<FaEdit />}
                    size="sm"
                    colorScheme="blue"
                    variant="ghost"
                    onClick={() => handleEdit(land)}
                  />
                  <IconButton
                    icon={<FaTrash />}
                    size="sm"
                    colorScheme="red"
                    variant="ghost"
                    onClick={() => handleDelete(land.id, land.name)}
                  />
                </HStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        {/* Image Management Section */}
        <Box bg="white" p={6} borderRadius="lg" boxShadow="sm" mt={4}>
          <HStack spacing={3} mb={4}>
            <Icon as={FaImage} color="green.500" boxSize={5} />
            <Heading size="md">Image Management</Heading>
          </HStack>
          <Text color="gray.600" mb={4}>
            When adding lands, images are automatically assigned from the gallery.
            To use custom images, name them: land1.jpg, land2.jpg, etc. and place in /src/assets/images/lands/
          </Text>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={2}>
            {[1,2,3,4].map((num) => (
              <Box key={num} p={2} bg="gray.50" borderRadius="md">
                <Text fontSize="xs" fontFamily="mono">land{num}.jpg</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>

      {/* Add/Edit Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {editingLand ? 'Edit Land' : 'Add New Land'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <LandForm 
              land={editingLand} 
              onClose={onClose}
              isEditing={!!editingLand}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default AdminPanel;