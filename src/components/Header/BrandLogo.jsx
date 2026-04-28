import { Box, HStack, Text, VStack, useColorModeValue } from '@chakra-ui/react';

const LogoMark = ({ size = 48 }) => {
  return (
    <Box
      w={`${size}px`}
      h={`${size}px`}
      borderRadius="18px"
      bg="linear-gradient(145deg, #2f9f79 0%, #195b45 100%)"
      boxShadow="0 14px 28px rgba(47, 159, 121, 0.24)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
      flexShrink={0}
    >
      <Box
        as="svg"
        viewBox="0 0 64 64"
        w={`${Math.round(size * 0.72)}px`}
        h={`${Math.round(size * 0.72)}px`}
        fill="none"
      >
        <path
          d="M14 35.5L32 20L50 35.5"
          stroke="white"
          strokeWidth="4.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 33.5V47C20 48.1 20.9 49 22 49H42C43.1 49 44 48.1 44 47V33.5"
          stroke="white"
          strokeWidth="4.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27 49V39H37V49"
          stroke="#D8F3E7"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 52C22 47.8 27.5 46 32 46C36.5 46 42 47.8 48 52"
          stroke="#F7C97B"
          strokeWidth="3.8"
          strokeLinecap="round"
        />
        <circle cx="46.5" cy="18.5" r="4.5" fill="#F7C97B" />
      </Box>
      <Box
        position="absolute"
        top="-10px"
        right="-8px"
        w={`${Math.round(size * 0.38)}px`}
        h={`${Math.round(size * 0.38)}px`}
        borderRadius="full"
        bg="rgba(255,255,255,0.12)"
      />
    </Box>
  );
};

const BrandLogo = ({ compact = false, light = false, markSize }) => {
  const titleColor = useColorModeValue(light ? '#ffffff' : '#14353d', '#edf5f3');
  const subtitleColor = useColorModeValue(light ? 'rgba(255,255,255,0.72)' : '#5f7780', '#b7cad0');

  if (compact) {
    return <LogoMark size={markSize ?? 44} />;
  }

  return (
    <HStack spacing={3} align="center">
      <LogoMark size={markSize ?? 48} />
      <VStack align="flex-start" spacing={0}>
        <Text
          fontSize={{ base: 'lg', md: 'xl' }}
          fontWeight="800"
          letterSpacing="-0.03em"
          color={titleColor}
          lineHeight="1"
        >
          Zalseef Estates
        </Text>
        <Text fontSize="xs" color={subtitleColor} textTransform="uppercase" letterSpacing="0.16em">
          Trusted Land Dealers In Mbarara
        </Text>
      </VStack>
    </HStack>
  );
};

export default BrandLogo;
