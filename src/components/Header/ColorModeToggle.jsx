import { Button, Icon, IconButton, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeToggle = ({ compact = false, fullWidth = false }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const label = colorMode === 'light' ? 'Dark mode' : 'Light mode';
  const icon = colorMode === 'light' ? FaMoon : FaSun;
  const bg = useColorModeValue('rgba(255,255,255,0.84)', 'rgba(11, 28, 35, 0.88)');
  const hoverBg = useColorModeValue('rgba(255,255,255,0.98)', 'rgba(16, 38, 47, 0.98)');
  const color = useColorModeValue('#14353d', '#eef5f3');
  const borderColor = useColorModeValue('rgba(20, 53, 61, 0.10)', 'rgba(255,255,255,0.10)');

  if (compact) {
    return (
      <IconButton
        aria-label={label}
        icon={<Icon as={icon} />}
        onClick={toggleColorMode}
        borderRadius="full"
        bg={bg}
        color={color}
        border="1px solid"
        borderColor={borderColor}
        _hover={{ bg: hoverBg, transform: 'translateY(-1px)' }}
        boxShadow="0 10px 24px rgba(15, 23, 42, 0.10)"
      />
    );
  }

  return (
    <Button
      onClick={toggleColorMode}
      leftIcon={<Icon as={icon} />}
      w={fullWidth ? '100%' : 'auto'}
      justifyContent="center"
      bg={bg}
      color={color}
      border="1px solid"
      borderColor={borderColor}
      _hover={{ bg: hoverBg, transform: 'translateY(-1px)' }}
      boxShadow="0 10px 24px rgba(15, 23, 42, 0.10)"
    >
      <Text>{label}</Text>
    </Button>
  );
};

export default ColorModeToggle;
