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
  InputRightElement,
  Icon,
  useToast,
  FormControl,
  FormErrorMessage,
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
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tooltip,
  Progress,
  Card,
  CardBody,
  Divider,
  Spinner,
} from '@chakra-ui/react';
import { 
  FaEnvelope,
  FaMoneyCheckAlt,
  FaLock, 
  FaUserShield, 
  FaPlus, 
  FaEdit, 
  FaTrash, 
  FaSignOutAlt, 
  FaImage,
  FaEye,
  FaEyeSlash,
  FaCrown,
  FaChartLine,
  FaMapMarkerAlt,
  FaTractor,
  FaTag,
  FaHome,
  FaBuilding,
  FaStar,
} from 'react-icons/fa';
import { useAdmin } from '../context/AdminContext';
import LandForm from '../components/Admin/LandForm';
import { keyframes } from '@emotion/react';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(56, 161, 105, 0.2); }
  50% { box-shadow: 0 0 20px rgba(56, 161, 105, 0.4); }
  100% { box-shadow: 0 0 5px rgba(56, 161, 105, 0.2); }
`;

const AdminPanel = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [editingLand, setEditingLand] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const { 
    isAdminAuthenticated, 
    loginAsAdmin, 
    logoutAdmin, 
    lands, 
    deleteLand,
    isAuthLoading,
    isSupabaseConfigured,
  } = useAdmin();
  
  const toast = useToast();

  // Hide the main navbar when admin panel is open
  useEffect(() => {
    const header = document.getElementById('header');
    const footer = document.querySelector('footer');
    const whatsapp = document.querySelector('[class*="WhatsAppButton"]');
    
    [header, footer, whatsapp].forEach(el => {
      if (el) el.style.display = 'none';
    });
    
    return () => {
      [header, footer, whatsapp].forEach(el => {
        if (el) el.style.display = el === header ? 'flex' : 'block';
      });
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await loginAsAdmin({ email, password });
      toast({
        title: 'Welcome Back!',
        description: 'Successfully logged in to Supabase admin',
        status: 'success',
        duration: 3000,
        position: 'top-right',
      });
    } catch (loginError) {
      setError(loginError.message || 'Unable to log in');
      toast({
        title: 'Access Denied',
        description: loginError.message || 'Incorrect admin credentials',
        status: 'error',
        duration: 3000,
        position: 'top-right',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (land) => {
    setEditingLand(land);
    onOpen();
  };

  const handleAdd = () => {
    setEditingLand(null);
    onOpen();
  };

  const handleDelete = async (id, name) => {
    if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
      try {
        await deleteLand(id);
        toast({
          title: 'Land Deleted',
          description: `${name} has been removed successfully`,
          status: 'success',
          duration: 3000,
          position: 'top-right',
        });
      } catch (deleteError) {
        toast({
          title: 'Delete Failed',
          description: deleteError.message || 'Unable to delete this property right now.',
          status: 'error',
          duration: 3000,
          position: 'top-right',
        });
      }
    }
  };

  const handleLogout = async () => {
    try {
      await logoutAdmin();
      setEmail('');
      setPassword('');
      toast({
        title: 'Logged Out',
        description: 'You have been logged out successfully',
        status: 'info',
        duration: 3000,
        position: 'top-right',
      });
    } catch (logoutError) {
      toast({
        title: 'Logout Failed',
        description: logoutError.message || 'Unable to log out right now.',
        status: 'error',
        duration: 3000,
        position: 'top-right',
      });
    }
  };

  const getLandTypeIcon = (type) => {
    switch(type) {
      case 'Residential': return FaHome;
      case 'Commercial': return FaBuilding;
      case 'Agricultural': return FaTractor;
      case 'Executive': return FaStar;
      default: return FaTag;
    }
  };

  const totalValue = lands.reduce((sum, land) => sum + land.price, 0);
  const soldCount = lands.filter(l => l.isSold).length;
  const offerCount = lands.filter(l => l.isOfferOfDay).length;

  if (isAuthLoading) {
    return (
      <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" bg="gray.50">
        <VStack spacing={4}>
          <Spinner size="xl" color="green.500" thickness="4px" />
          <Text color="gray.600">Checking your Supabase admin session...</Text>
        </VStack>
      </Box>
    );
  }

  if (!isAdminAuthenticated) {
    return (
      <Box 
        minH="100vh" 
        display="flex" 
        alignItems="center" 
        justifyContent="center" 
        bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        position="relative"
        overflow="hidden"
      >
        {/* Animated background elements */}
        <Box
          position="absolute"
          top="-10%"
          right="-5%"
          w="300px"
          h="300px"
          borderRadius="full"
          bg="whiteAlpha.100"
          filter="blur(60px)"
          animation={`${glow} 4s infinite`}
        />
        <Box
          position="absolute"
          bottom="-10%"
          left="-5%"
          w="400px"
          h="400px"
          borderRadius="full"
          bg="green.200"
          filter="blur(80px)"
          opacity={0.3}
          animation={`${glow} 6s infinite`}
        />

        <Container maxW="md" position="relative" zIndex={1}>
          <Card
            bg="white"
            p={8}
            borderRadius="3xl"
            boxShadow="2xl"
            border="1px solid"
            borderColor="whiteAlpha.200"
            backdropFilter="blur(10px)"
            animation={`${fadeIn} 0.6s ease-out`}
          >
            <CardBody>
              <VStack spacing={6}>
                {/* Logo Section */}
                <Box textAlign="center" mb={4}>
                  <Icon as={FaCrown} boxSize={16} color="green.500" />
                  <Heading size="2xl" color="green.700" mt={4}>
                    Zalseef
                  </Heading>
                  <Text color="gray.500" fontSize="md" fontWeight="medium">
                    Admin Portal
                  </Text>
                </Box>

                {/* Welcome Text */}
                <VStack spacing={1} textAlign="center">
                  <Text fontSize="lg" color="gray.700" fontWeight="bold">
                    Welcome Back!
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    Enter your credentials to access the dashboard
                  </Text>
                </VStack>

                <form onSubmit={handleLogin} style={{ width: '100%' }}>
                  <VStack spacing={5}>
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
                          borderRadius="2xl"
                          bg="gray.50"
                          _hover={{ bg: 'gray.100' }}
                        />
                      </InputGroup>

                      <InputGroup size="lg">
                        <InputLeftElement>
                          <Icon as={FaLock} color="green.500" />
                        </InputLeftElement>
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Admin password"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                            setError('');
                          }}
                          focusBorderColor="green.500"
                          borderRadius="2xl"
                          bg="gray.50"
                          pr="4.5rem"
                          _hover={{ bg: 'gray.100' }}
                        />
                        <InputRightElement width="3rem">
                          <IconButton
                            h="1.75rem"
                            size="sm"
                            variant="ghost"
                            onClick={() => setShowPassword(!showPassword)}
                            icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                            color="green.500"
                            _hover={{ bg: 'transparent' }}
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                          />
                        </InputRightElement>
                      </InputGroup>
                      {error && <FormErrorMessage>{error}</FormErrorMessage>}
                    </FormControl>

                    <Button
                      type="submit"
                      size="lg"
                      w="100%"
                      borderRadius="2xl"
                      isLoading={isLoading}
                      loadingText="Connecting..."
                      bgGradient="linear(to-r, green.500, green.600)"
                      color="white"
                      _hover={{
                        bgGradient: 'linear(to-r, green.600, green.700)',
                        transform: 'translateY(-2px)',
                        boxShadow: 'xl',
                      }}
                      _active={{
                        transform: 'translateY(0)',
                      }}
                      transition="all 0.3s"
                      leftIcon={<FaUserShield />}
                      isDisabled={!isSupabaseConfigured}
                    >
                      Access Dashboard
                    </Button>

                    {!isSupabaseConfigured && (
                      <Text fontSize="sm" color="orange.500" textAlign="center">
                        Add your Supabase URL and anon key in `.env` before using the admin portal.
                      </Text>
                    )}
                  </VStack>
                </form>

                {/* Security Note */}
                <Text fontSize="xs" color="gray.400" textAlign="center">
                  ⚡ This area is restricted to authorized personnel only
                </Text>
              </VStack>
            </CardBody>
          </Card>
        </Container>
      </Box>
    );
  }

  return (
    <Box minH="100vh" bg="gray.50">
      {/* Header */}
      <Box 
        bg="white" 
        borderBottom="1px solid" 
        borderColor="gray.200" 
        position="sticky" 
        top={0} 
        zIndex={10}
        boxShadow="sm"
      >
        <Container maxW="container.xl" py={4}>
          <Flex justify="space-between" align="center">
            <HStack spacing={4}>
              <Avatar
                icon={<FaCrown />}
                bg="green.500"
                color="white"
                size="md"
              />
              <VStack align="start" spacing={0}>
                <Heading size="lg" color="green.700">Zalseef Admin</Heading>
                <Text color="gray.500" fontSize="sm">Land Management Dashboard</Text>
              </VStack>
            </HStack>
            
            <HStack spacing={3}>
              <Badge colorScheme="green" px={3} py={1} borderRadius="full">
                {new Date().toLocaleDateString()}
              </Badge>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<FaUserShield />}
                  variant="ghost"
                  colorScheme="green"
                >
                  Admin
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={handleLogout} icon={<FaSignOutAlt />} color="red.500">
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          {/* Stats Cards */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
            <StatCard
              label="Total Lands"
              value={lands.length}
              icon={FaHome}
              color="blue"
              trend="+12%"
            />
            <StatCard
              label="Total Value"
              value={`UGX ${(totalValue / 1000000).toFixed(1)}M`}
              icon={FaMoneyCheckAlt}
              color="green"
            />
            <StatCard
              label="Sold Properties"
              value={soldCount}
              icon={FaTag}
              color="red"
              subtext={lands.length ? `${((soldCount / lands.length) * 100).toFixed(1)}% of total` : '0.0% of total'}
            />
            <StatCard
              label="Active Offers"
              value={offerCount}
              icon={FaStar}
              color="orange"
              subtext={`${offerCount} properties on sale`}
            />
          </SimpleGrid>

          {/* Quick Actions */}
          <Flex justify="space-between" align="center">
            <Heading size="md" color="gray.700">Property Management</Heading>
            <Button
              leftIcon={<FaPlus />}
              colorScheme="green"
              onClick={handleAdd}
              size="lg"
              borderRadius="2xl"
              boxShadow="md"
              _hover={{ transform: 'translateY(-2px)', boxShadow: 'xl' }}
            >
              Add New Property
            </Button>
          </Flex>

          {/* Progress Bar */}
          <Progress 
            value={(lands.length / 50) * 100} 
            colorScheme="green" 
            size="sm" 
            borderRadius="full"
            hasStripe
            isAnimated
          />
          <Text fontSize="sm" color="gray.500">
            {lands.length} of 50 properties listed ({Math.round((lands.length / 50) * 100)}% capacity)
          </Text>

          {/* Lands Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {lands.map((land) => (
              <Card
                key={land.id}
                overflow="hidden"
                borderRadius="2xl"
                boxShadow="lg"
                _hover={{ transform: 'translateY(-4px)', boxShadow: '2xl' }}
                transition="all 0.3s"
                position="relative"
              >
                <Box position="relative">
                  <Image
                    src={land.image}
                    alt={land.name}
                    h="200px"
                    w="100%"
                    objectFit="cover"
                  />
                  {land.isSold && (
                    <Badge
                      position="absolute"
                      top={4}
                      left={4}
                      colorScheme="red"
                      variant="solid"
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontSize="sm"
                    >
                      SOLD
                    </Badge>
                  )}
                  {land.isOfferOfDay && (
                    <Badge
                      position="absolute"
                      top={4}
                      right={4}
                      colorScheme="orange"
                      variant="solid"
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontSize="sm"
                    >
                      🔥 OFFER
                    </Badge>
                  )}
                </Box>

                <CardBody>
                  <VStack align="stretch" spacing={3}>
                    <Flex justify="space-between" align="center">
                      <Heading size="md" noOfLines={1}>
                        {land.name}
                      </Heading>
                      <Tooltip label={land.landUse}>
                        <Icon
                          as={getLandTypeIcon(land.landUse)}
                          color="green.500"
                          boxSize={5}
                        />
                      </Tooltip>
                    </Flex>

                    <HStack color="gray.600" fontSize="sm">
                      <Icon as={FaMapMarkerAlt} />
                      <Text noOfLines={1}>{land.location}</Text>
                    </HStack>

                    <Flex justify="space-between" align="center">
                      <Box>
                        <Text fontSize="xs" color="gray.500">Price</Text>
                        <Text fontSize="xl" fontWeight="bold" color="green.600">
                          UGX {(land.price / 1000000).toFixed(1)}M
                        </Text>
                      </Box>
                      <Box>
                        <Text fontSize="xs" color="gray.500">Size</Text>
                        <Text fontSize="sm" fontWeight="medium">{land.size}</Text>
                      </Box>
                    </Flex>

                    <Divider />

                    <HStack justify="flex-end" spacing={2}>
                      <Tooltip label="Edit Property">
                        <IconButton
                          icon={<FaEdit />}
                          size="sm"
                          colorScheme="blue"
                          variant="ghost"
                          onClick={() => handleEdit(land)}
                          borderRadius="full"
                        />
                      </Tooltip>
                      <Tooltip label="Delete Property">
                        <IconButton
                          icon={<FaTrash />}
                          size="sm"
                          colorScheme="red"
                          variant="ghost"
                          onClick={() => handleDelete(land.id, land.name)}
                          borderRadius="full"
                        />
                      </Tooltip>
                    </HStack>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      {/* Add/Edit Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="3xl" motionPreset="slideInBottom">
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent borderRadius="2xl">
          <ModalHeader bg="green.50" borderTopRadius="2xl">
            <HStack spacing={3}>
              <Icon as={editingLand ? FaEdit : FaPlus} color="green.500" boxSize={6} />
              <Heading size="md" color="green.700">
                {editingLand ? 'Edit Property' : 'Add New Property'}
              </Heading>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody py={6}>
            <LandForm 
              land={editingLand} 
              onClose={onClose}
              isEditing={!!editingLand}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

// Stat Card Component
const StatCard = ({ label, value, icon: Icon, color, trend, subtext }) => (
  <Card bg="white" borderRadius="2xl" boxShadow="lg">
    <CardBody>
      <Flex justify="space-between" align="center" mb={3}>
        <Box
          p={3}
          borderRadius="xl"
          bg={`${color}.50`}
          color={`${color}.500`}
        >
          <Icon size={24} />
        </Box>
        {trend && (
          <Badge colorScheme="green" variant="subtle" borderRadius="full">
            {trend}
          </Badge>
        )}
      </Flex>
      <Text fontSize="sm" color="gray.500" fontWeight="medium">
        {label}
      </Text>
      <Text fontSize="2xl" fontWeight="bold" color="gray.800">
        {value}
      </Text>
      {subtext && (
        <Text fontSize="xs" color="gray.500" mt={1}>
          {subtext}
        </Text>
      )}
    </CardBody>
  </Card>
);

export default AdminPanel;
