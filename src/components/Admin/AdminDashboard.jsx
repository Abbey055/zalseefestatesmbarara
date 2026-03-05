import { useState } from 'react';
import {
  Box,
  Button,
  VStack,
  HStack,
  Heading,
  Text,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
  Badge,
  Image,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Divider,
  useToast,
} from '@chakra-ui/react';
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaSignOutAlt,
  FaLandmark,
  FaUsers,
  FaDollarSign,
  FaMapMarkerAlt,
  FaEllipsisV,
  FaEye,
} from 'react-icons/fa';
import { useAdmin } from '../../context/AdminContext';
import LandForm from './LandForm';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const { lands, deleteLand, logoutAdmin, isAdminAuthenticated } = useAdmin();
  const [editingLand, setEditingLand] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  // Calculate stats
  const totalValue = lands.reduce((sum, land) => sum + land.price, 0);
  const avgPrice = totalValue / lands.length;
  const residentialCount = lands.filter(l => l.landUse === 'Residential').length;
  const commercialCount = lands.filter(l => l.landUse === 'Commercial').length;

  const handleEdit = (land) => {
    setEditingLand(land);
    onOpen();
  };

  const handleAdd = () => {
    setEditingLand(null);
    onOpen();
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
      deleteLand(id);
      toast({
        title: 'Land Deleted',
        description: 'The land has been removed successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleLogout = () => {
    logoutAdmin();
    toast({
      title: 'Logged Out',
      description: 'You have been logged out successfully',
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
  };

  if (!isAdminAuthenticated) return null;

  return (
    <Box>
      {/* Header */}
      <Flex 
        justify="space-between" 
        align="center" 
        mb={6} 
        p={4} 
        bg="white" 
        borderRadius="lg" 
        boxShadow="sm"
      >
        <HStack spacing={3}>
          <Avatar icon={<FaLandmark />} bg="green.500" color="white" />
          <VStack align="start" spacing={0}>
            <Heading size="md">Land Management Dashboard</Heading>
            <Text fontSize="sm" color="gray.500">Manage your land listings</Text>
          </VStack>
        </HStack>
        
        <HStack spacing={3}>
          <Button
            leftIcon={<FaPlus />}
            colorScheme="green"
            onClick={handleAdd}
            size="sm"
            borderRadius="full"
          >
            Add New Land
          </Button>
          <Button
            leftIcon={<FaSignOutAlt />}
            variant="ghost"
            colorScheme="red"
            onClick={handleLogout}
            size="sm"
          >
            Logout
          </Button>
        </HStack>
      </Flex>

      {/* Stats Cards */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4} mb={6}>
        <Stat px={4} py={3} bg="white" borderRadius="lg" boxShadow="sm">
          <StatLabel color="gray.500">Total Lands</StatLabel>
          <StatNumber fontSize="2xl" color="green.600">{lands.length}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            Active listings
          </StatHelpText>
        </Stat>

        <Stat px={4} py={3} bg="white" borderRadius="lg" boxShadow="sm">
          <StatLabel color="gray.500">Total Value</StatLabel>
          <StatNumber fontSize="2xl" color="blue.600">
            UGX {(totalValue / 1000000).toFixed(1)}M
          </StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            Portfolio value
          </StatHelpText>
        </Stat>

        <Stat px={4} py={3} bg="white" borderRadius="lg" boxShadow="sm">
          <StatLabel color="gray.500">Residential</StatLabel>
          <StatNumber fontSize="2xl" color="purple.600">{residentialCount}</StatNumber>
          <StatHelpText>
            {((residentialCount / lands.length) * 100).toFixed(0)}% of total
          </StatHelpText>
        </Stat>

        <Stat px={4} py={3} bg="white" borderRadius="lg" boxShadow="sm">
          <StatLabel color="gray.500">Avg Price</StatLabel>
          <StatNumber fontSize="2xl" color="orange.600">
            UGX {(avgPrice / 1000000).toFixed(1)}M
          </StatNumber>
          <StatHelpText>
            Per plot average
          </StatHelpText>
        </Stat>
      </SimpleGrid>

      {/* Lands Grid */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        {lands.map((land) => (
          <Box
            key={land.id}
            bg="white"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            transition="all 0.3s"
            _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }}
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

              <HStack color="gray.600" fontSize="xs">
                <FaMapMarkerAlt />
                <Text noOfLines={1}>{land.location}</Text>
              </HStack>

              <Text fontSize="lg" fontWeight="bold" color="green.600">
                UGX {(land.price / 1000000).toFixed(1)}M
              </Text>

              <HStack justify="space-between" pt={2}>
                <Button
                  as={Link}
                  to={`/land-details/${land.id}`}
                  size="xs"
                  variant="ghost"
                  leftIcon={<FaEye />}
                  target="_blank"
                >
                  View
                </Button>
                
                <HStack spacing={2}>
                  <IconButton
                    icon={<FaEdit />}
                    size="xs"
                    colorScheme="blue"
                    variant="ghost"
                    onClick={() => handleEdit(land)}
                  />
                  <IconButton
                    icon={<FaTrash />}
                    size="xs"
                    colorScheme="red"
                    variant="ghost"
                    onClick={() => handleDelete(land.id, land.name)}
                  />
                </HStack>
              </HStack>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>

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
    </Box>
  );
};

export default AdminDashboard;