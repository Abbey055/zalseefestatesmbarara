import {
  HStack,
  VStack,
  Button,
  Text,
  Heading,
  Stack,
  Box,
  Image,
  Badge,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { keyframes } from "@emotion/react";

import { bannerData } from "../data";
import MbararaLand1 from "../assets/images/lands/mbarara1.jpg";
import MbararaLand2 from "../assets/images/lands/mbarara2.jpg";

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

// Counter Component
const AnimatedCounter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.toString().replace(/\D/g, ""));
    if (start === end) return;

    const incrementTime = 2000 / end;
    let current = start;
    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color="green.600">
      {count}+
    </Text>
  );
};

const Banner = () => {
  // Parse banner data for counters
  const stats = bannerData.map(item => ({
    value: Object.keys(item)[0],
    label: Object.values(item)[0],
    numeric: parseInt(Object.keys(item)[0].replace(/\D/g, ""))
  }));

  return (
    <Box position="relative" my={6}>
      {/* Full-width background */}
      <Box
        position="absolute"
        top="-20px"
        left="-20px"
        right="-20px"
        bottom="-20px"
        bg="linear-gradient(135deg, #f0fff4 0%, #e6fffa 50%, #f0fff4 100%)"
        borderRadius="3xl"
        filter="blur(60px)"
        opacity={0.6}
        zIndex={0}
      />

      {/* Main content */}
      <Stack
        direction={{ base: "column", lg: "row" }}
        position="relative"
        zIndex={1}
        spacing={0}
        overflow="hidden"
        borderRadius="2xl"
        bg="white"
        boxShadow="0 20px 40px -15px rgba(0,100,0,0.2)"
      >
        {/* Left Content */}
        <VStack
          flex="1"
          px={{ base: 6, md: 10 }}
          py={{ base: 8, md: 12 }}
          align="flex-start"
          spacing={4}
          position="relative"
          bg="white"
        >
          {/* Limited Offer Badge */}
          <Badge
            colorScheme="red"
            variant="solid"
            px={3}
            py={1}
            borderRadius="full"
            fontSize="xs"
            textTransform="uppercase"
            letterSpacing="wider"
            animation={`${pulse} 2s infinite`}
            mb={2}
          >
            Limited Time Offer
          </Badge>

          <Heading 
            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            lineHeight="1.2"
            animation={`${fadeIn} 0.5s ease-out`}
          >
            <Text as="span" color="gray.800">Find Your </Text>
            <Text as="span" color="green.600" fontWeight="extrabold">Dream Land</Text>
            <Text as="span" color="gray.800"> in </Text>
            <Text as="span" bgGradient="linear(to-r, green.600, blue.500)" bgClip="text" fontWeight="extrabold">
              Mbarara City
            </Text>
            <Text as="span" color="gray.800"> & Beyond</Text>
          </Heading>
          
          <Text 
            fontSize={{ base: "sm", md: "md" }} 
            color="gray.700"
            lineHeight="tall"
            animation={`${fadeIn} 0.5s ease-out 0.1s both`}
          >
            <Text as="span" fontWeight="bold" color="green.700" fontSize="lg">Zalseef Estates</Text>
            <Text as="span" display="block" mt={1}>
              Mbarara's most trusted land dealer offering{' '}
              <Text as="span" fontWeight="bold" color="green.600">lowest prices</Text> •{' '}
              <Text as="span" fontWeight="bold" color="blue.600">best locations</Text> •{' '}
              <Text as="span" fontWeight="bold" color="purple.600">clear titles</Text>
            </Text>
          </Text>

          {/* CTA Section */}
          <HStack spacing={3} mt={2} animation={`${fadeIn} 0.5s ease-out 0.2s both`}>
            <Link to="/land-for-sale">
              <Button
                size={{ base: "md", md: "lg" }}
                colorScheme="green"
                px={8}
                py={6}
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="bold"
                borderRadius="full"
                bgGradient="linear(to-r, green.500, green.600)"
                _hover={{
                  bgGradient: "linear(to-r, green.600, green.700)",
                  transform: "scale(1.05)",
                }}
                _active={{
                  transform: "scale(0.95)",
                }}
                transition="all 0.2s"
                boxShadow="0 4px 15px rgba(56, 161, 105, 0.3)"
              >
                View Listings
              </Button>
            </Link>
            <Text fontSize="sm" color="gray.500" fontWeight="medium">
              From 2M UGX
            </Text>
          </HStack>

          {/* Stats with Animated Counters */}
          <HStack 
            spacing={{ base: 6, md: 10 }} 
            pt={4} 
            flexWrap="wrap"
            animation={`${fadeIn} 0.5s ease-out 0.3s both`}
          >
            {stats.map((stat, index) => (
              <VStack 
                key={index} 
                align="flex-start" 
                spacing={0}
                position="relative"
                _after={index < stats.length - 1 ? {
                  content: '""',
                  position: "absolute",
                  right: "-15px",
                  top: "10%",
                  height: "80%",
                  width: "1px",
                  bg: "green.200",
                } : {}}
              >
                <HStack spacing={1}>
                  <AnimatedCounter value={stat.value} />
                  <Text fontSize="sm" color="green.500">↑</Text>
                </HStack>
                <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600" fontWeight="medium">
                  {stat.label}
                </Text>
              </VStack>
            ))}
          </HStack>

          {/* Trust Indicators */}
          <HStack spacing={4} pt={2} opacity={0.8}>
            <HStack spacing={1}>
              <Box w="2px" h="2px" bg="green.400" borderRadius="full" />
              <Text fontSize="xs" color="gray.500">Verified Titles</Text>
            </HStack>
            <HStack spacing={1}>
              <Box w="2px" h="2px" bg="green.400" borderRadius="full" />
              <Text fontSize="xs" color="gray.500">Free Site Visit</Text>
            </HStack>
            <HStack spacing={1}>
              <Box w="2px" h="2px" bg="green.400" borderRadius="full" />
              <Text fontSize="xs" color="gray.500">24/7 Support</Text>
            </HStack>
          </HStack>
        </VStack>

        {/* Right Images - Full height */}
        <Box 
          flex="1" 
          position="relative"
          minH={{ base: "300px", md: "400px", lg: "500px" }}
          bgGradient="linear(to-br, green.800, green.900)"
          overflow="hidden"
        >
          {/* Decorative Elements */}
          <Box
            position="absolute"
            top="-10%"
            right="-10%"
            w="200px"
            h="200px"
            bg="green.400"
            filter="blur(60px)"
            opacity={0.2}
            borderRadius="full"
            animation={`${float} 6s ease-in-out infinite`}
          />
          <Box
            position="absolute"
            bottom="-10%"
            left="-10%"
            w="200px"
            h="200px"
            bg="blue.400"
            filter="blur(60px)"
            opacity={0.2}
            borderRadius="full"
            animation={`${float} 8s ease-in-out infinite`}
          />

          {/* First Image - Full background */}
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
          >
            <Image
              src={MbararaLand1}
              alt="Mbarara land"
              w="100%"
              h="100%"
              objectFit="cover"
              opacity={0.95}
            />
            {/* Gradient Overlay */}
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              bg="linear-gradient(135deg, rgba(0,0,0,0.3) 0%, transparent 50%)"
            />
          </Box>

  

          {/* Second Image - Floating overlay */}
          <Box
            position="absolute"
            bottom={{ base: "5%", md: "8%" }}
            right={{ base: "5%", md: "8%" }}
            w={{ base: "50%", md: "45%" }}
            h={{ base: "35%", md: "40%" }}
            borderRadius="lg"
            overflow="hidden"
            boxShadow="0 20px 30px -10px rgba(0,0,0,0.5)"
            border="3px solid white"
            zIndex={2}
            transition="all 0.3s"
            _hover={{
              transform: "scale(1.05) translateY(-5px)",
              boxShadow: "0 30px 40px -10px rgba(0,0,0,0.6)",
            }}
          >
            <Image
              src={MbararaLand2}
              alt="Mbarara land"
              w="100%"
              h="100%"
              objectFit="cover"
            />
            <Box
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              p={2}
              bg="linear-gradient(to top, rgba(0,0,0,0.7), transparent)"
            >
              <Text color="white" fontSize="xs" fontWeight="bold">
                📍 Prime Location
              </Text>
            </Box>
          </Box>

          {/* Watermark */}
          <Text
            position="absolute"
            bottom="2%"
            left="5%"
            color="whiteAlpha.500"
            fontSize="xs"
            fontWeight="bold"
            textTransform="uppercase"
            letterSpacing="wider"
            zIndex={1}
          >
            ZALSEEF ESTATES
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default Banner;