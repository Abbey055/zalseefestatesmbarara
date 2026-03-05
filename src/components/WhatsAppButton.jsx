import { IconButton, Link, Tooltip, Box } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';
import { keyframes } from '@emotion/react';

// Real WhatsApp colors
const whatsappGreen = '#25D366';
const whatsappDark = '#128C7E';

// Simple pulse animation
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const WhatsAppButton = () => {
  return (
    <Box
      position="fixed"
      bottom="20px"
      right="20px"
      zIndex={999}
    >
      <Tooltip 
        label="Chat with us on WhatsApp" 
        placement="left" 
        hasArrow
        bg={whatsappDark}
        color="white"
        borderRadius="md"
        py={1}
        px={3}
        fontSize="sm"
      >
        <Link
          href="https://wa.me/256708124902?text=Hello%20Zalseef%20Estates%2C%20I'm%20interested%20in%20your%20land%20listings"
          isExternal
          _hover={{ textDecoration: 'none' }}
        >
          <IconButton
            icon={<FaWhatsapp size={24} />}
            aria-label="Chat on WhatsApp"
            borderRadius="full"
            boxSize="50px"
            fontSize="24px"
            bg={whatsappGreen}
            color="white"
            _hover={{
              bg: whatsappDark,
              transform: 'scale(1.1)',
            }}
            _active={{
              bg: whatsappDark,
              transform: 'scale(0.95)',
            }}
            animation={`${pulse} 1.5s infinite`}
            transition="all 0.2s"
            boxShadow={`0 4px 15px ${whatsappGreen}`}
          />
        </Link>
      </Tooltip>
    </Box>
  );
};

export default WhatsAppButton;