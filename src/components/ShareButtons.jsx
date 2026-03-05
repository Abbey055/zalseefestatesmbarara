import {
  HStack,
  IconButton,
  Tooltip,
  useToast,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import {
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
  FaLink,
  FaShare,
} from 'react-icons/fa';
import { useState } from 'react';

// Real brand colors
const brandColors = {
  whatsapp: "#25D366",
  facebook: "#1877F2",
  twitter: "#1DA1F2",
  email: "#EA4335",
};

const ShareButtons = ({ property, size = 'sm', variant = 'solid' }) => {
  const toast = useToast();
  const [isCopied, setIsCopied] = useState(false);

  // Get current URL
  const getCurrentUrl = () => {
    return window.location.href;
  };

  // Get property details for sharing
  const getShareText = () => {
    const price = property.price?.toLocaleString() || '';
    const location = property.location || '';
    const size = property.size || '';
    
    return `🏡 Check out this land at Zalseef Estates:\n\n📍 ${property.name}\n📌 Location: ${location}\n💰 UGX ${price}\n📏 Size: ${size}\n\nView details: `;
  };

  // WhatsApp share
  const shareWhatsApp = () => {
    const text = encodeURIComponent(getShareText() + getCurrentUrl());
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  // Facebook share
  const shareFacebook = () => {
    const url = encodeURIComponent(getCurrentUrl());
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  // Twitter share
  const shareTwitter = () => {
    const text = encodeURIComponent(`Check out this land: ${property.name} - Zalseef Estates`);
    const url = encodeURIComponent(getCurrentUrl());
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  // Email share
  const shareEmail = () => {
    const subject = encodeURIComponent(`Land for Sale: ${property.name} - Zalseef Estates`);
    const body = encodeURIComponent(getShareText() + getCurrentUrl());
    window.open(`mailto:?subject=${subject}&body=${body}`, '_blank');
  };

  // Copy link
  const copyLink = () => {
    navigator.clipboard.writeText(getCurrentUrl()).then(() => {
      setIsCopied(true);
      toast({
        title: 'Link copied!',
        description: 'Property link copied to clipboard',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top',
      });
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  // Main share button with dropdown (for mobile)
  if (size === 'xs') {
    return (
      <Menu>
        <MenuButton
          as={Button}
          leftIcon={<FaShare />}
          colorScheme="green"
          variant="outline"
          size="xs"
        >
          Share
        </MenuButton>
        <MenuList>
          <MenuItem icon={<FaWhatsapp color={brandColors.whatsapp} />} onClick={shareWhatsApp}>
            WhatsApp
          </MenuItem>
          <MenuItem icon={<FaFacebook color={brandColors.facebook} />} onClick={shareFacebook}>
            Facebook
          </MenuItem>
          <MenuItem icon={<FaTwitter color={brandColors.twitter} />} onClick={shareTwitter}>
            Twitter
          </MenuItem>
          <MenuItem icon={<FaEnvelope color={brandColors.email} />} onClick={shareEmail}>
            Email
          </MenuItem>
          <MenuItem icon={<FaLink />} onClick={copyLink}>
            {isCopied ? 'Copied!' : 'Copy Link'}
          </MenuItem>
        </MenuList>
      </Menu>
    );
  }

  // Horizontal buttons with circular shape
  return (
    <HStack spacing={1.5}>
      <Tooltip label="Share on WhatsApp" hasArrow placement="top">
        <IconButton
          icon={<FaWhatsapp size={14} />}
          size="xs"
          onClick={shareWhatsApp}
          aria-label="Share on WhatsApp"
          bg={brandColors.whatsapp}
          color="white"
          _hover={{ bg: "#128C7E", transform: 'scale(1.1)' }}
          _active={{ bg: "#075E54" }}
          transition="all 0.2s"
          borderRadius="full"
          minW="32px"
          h="32px"
        />
      </Tooltip>

      <Tooltip label="Share on Facebook" hasArrow placement="top">
        <IconButton
          icon={<FaFacebook size={14} />}
          size="xs"
          onClick={shareFacebook}
          aria-label="Share on Facebook"
          bg={brandColors.facebook}
          color="white"
          _hover={{ bg: "#166FE5", transform: 'scale(1.1)' }}
          _active={{ bg: "#0E5A9E" }}
          transition="all 0.2s"
          borderRadius="full"
          minW="32px"
          h="32px"
        />
      </Tooltip>

      <Tooltip label="Share on Twitter" hasArrow placement="top">
        <IconButton
          icon={<FaTwitter size={14} />}
          size="xs"
          onClick={shareTwitter}
          aria-label="Share on Twitter"
          bg={brandColors.twitter}
          color="white"
          _hover={{ bg: "#1A8CD8", transform: 'scale(1.1)' }}
          _active={{ bg: "#0F7AB3" }}
          transition="all 0.2s"
          borderRadius="full"
          minW="32px"
          h="32px"
        />
      </Tooltip>

      <Tooltip label="Share via Email" hasArrow placement="top">
        <IconButton
          icon={<FaEnvelope size={14} />}
          size="xs"
          onClick={shareEmail}
          aria-label="Share via Email"
          bg={brandColors.email}
          color="white"
          _hover={{ bg: "#D53E2F", transform: 'scale(1.1)' }}
          _active={{ bg: "#B23123" }}
          transition="all 0.2s"
          borderRadius="full"
          minW="32px"
          h="32px"
        />
      </Tooltip>

      <Tooltip label="Copy link" hasArrow placement="top">
        <IconButton
          icon={<FaLink size={14} />}
          size="xs"
          onClick={copyLink}
          aria-label="Copy link"
          bg={isCopied ? "green.500" : "gray.600"}
          color="white"
          isLoading={isCopied}
          _hover={{ bg: isCopied ? "green.600" : "gray.700", transform: 'scale(1.1)' }}
          _active={{ bg: isCopied ? "green.700" : "gray.800" }}
          transition="all 0.2s"
          borderRadius="full"
          minW="32px"
          h="32px"
        />
      </Tooltip>
    </HStack>
  );
};

export default ShareButtons;