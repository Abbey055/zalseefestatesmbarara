import {
  HStack,
  VStack,
  Button,
  Text,
  Heading,
  Stack,
  Box,
  Image,
  Icon,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { BiPlus, BiCheckShield, BiTrendingUp } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { bannerData } from "../data";
import MbararaLand1 from "../assets/images/lands/mbarara1.jpg";
import MbararaLand2 from "../assets/images/lands/mbarara2.jpg";

// Animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Counter Component
const AnimatedCounter = ({ value, suffix = "" }) => {
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
    <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color="green.600">
      {count}{suffix}
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
    <Box position="relative" my={{ base: 4, md: 6, lg: 8 }}>
      {/* Background gradient effect */}
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

      <Stack
        direction={{ base: "column", lg: "row" }}
        position="relative"
        zIndex={1}
        bg="linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%)"
        borderRadius="3xl"
        overflow="hidden"
        boxShadow="0 20px 40px -15px rgba(0,100,0,0.3)"
        border="1px solid rgba(72, 187, 120, 0.2)"
        backdropFilter="blur(10px)"
        animation={`${fadeIn} 0.8s ease-out`}
      >
        {/* Left Content */}
        <VStack
          flex={{ base: "1", lg: "1.2" }}
          px={{ base: 4, sm: 6, md: 8, lg: 10 }}
          py={{ base: 6, sm: 8, md: 12, lg: 16 }}
          align="stretch"
          spacing={{ base: 4, md: 5, lg: 6 }}
          bg="linear-gradient(145deg, #ffffff 0%, #f0fff4 100%)"
        >
          {/* Badge */}
          <HStack spacing={2} animation={`${fadeIn} 0.8s ease-out 0.2s both`}>
            <Box
              bg="green.500"
              w={{ base: "6px", md: "8px" }}
              h={{ base: "6px", md: "8px" }}
              borderRadius="full"
              boxShadow="0 0 10px #38A169"
            />
            <Text
              color="green.700"
              fontWeight="semibold"
              fontSize={{ base: "xs", md: "sm" }}
              letterSpacing="wider"
              textTransform="uppercase"
            >
              ZALSEEF ESTATES
            </Text>
          </HStack>

          {/* Main Heading */}
          <Box animation={`${fadeIn} 0.8s ease-out 0.3s both`}>
            <Heading
              fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl", xl: "5xl" }}
              lineHeight="1.2"
              fontWeight="extrabold"
              bgGradient="linear(to-r, green.700, green.500, blue.500)"
              bgClip="text"
              letterSpacing="tight"
            >
              Find Your Perfect
              <Text as="span" display="block" color="green.700">
                Piece of Paradise
              </Text>
            </Heading>
          </Box>

          {/* Description */}
          <Text
            fontSize={{ base: "xs", sm: "sm", md: "md", lg: "lg" }}
            color="gray.700"
            maxW="500px"
            lineHeight="1.8"
            animation={`${fadeIn} 0.8s ease-out 0.4s both`}
          >
            <Text as="span" fontWeight="bold" color="green.700">Zalseef Estates – Mbarara's most trusted land dealer</Text> We offer the <Text as="span" fontWeight="semibold">lowest prices • best locations • clear titles</Text>. From 2M, own your dream plot in prime areas like Kakoba, Nyamitanga, Nyarubungo & more!
            <Text as="div" mt={2} fontSize={{ base: "2xs", sm: "xs", md: "sm" }} color="gray.600">
              ⭐ 1000+ Happy Clients • ⭐ 500+ Plots Sold • ⭐ 10+ Years Experience
            </Text>
          </Text>

          {/* Features Pills */}
          <HStack spacing={3} flexWrap="wrap" animation={`${fadeIn} 0.8s ease-out 0.5s both`}>
            {['Agricultural', 'Commercial', 'Residential'].map((type) => (
              <Box
                key={type}
                px={{ base: 3, md: 4 }}
                py={{ base: 1, md: 2 }}
                bg="white"
                borderRadius="full"
                boxShadow="md"
                border="1px solid"
                borderColor="green.100"
                _hover={{ bg: 'green.50', transform: 'scale(1.05)' }}
                transition="all 0.2s"
              >
                <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="medium" color="green.700">
                  {type}
                </Text>
              </Box>
            ))}
          </HStack>

          {/* CTA Buttons */}
          <HStack spacing={4} pt={4} animation={`${fadeIn} 0.8s ease-out 0.6s both`}>
            <Link to="/land-for-sale">
              <Button
                size={{ base: "sm", sm: "md", md: "lg" }}
                colorScheme="green"
                px={{ base: 4, sm: 6, md: 8 }}
                py={{ base: 4, md: 6 }}
                fontSize={{ base: "xs", sm: "sm", md: "md" }}
                borderRadius="full"
                bgGradient="linear(to-r, green.500, green.600)"
                _hover={{
                  bgGradient: "linear(to-r, green.600, green.700)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 20px -5px rgba(56,161,105,0.4)"
                }}
                transition="all 0.2s"
              >
                View Listings
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size={{ base: "sm", sm: "md", md: "lg" }}
                variant="outline"
                colorScheme="green"
                px={{ base: 4, sm: 6, md: 8 }}
                py={{ base: 4, md: 6 }}
                fontSize={{ base: "xs", sm: "sm", md: "md" }}
                borderRadius="full"
                borderWidth="2px"
                _hover={{
                  bg: 'green.50',
                  transform: "translateY(-2px)",
                  borderColor: 'green.600'
                }}
                transition="all 0.2s"
              >
                Schedule Visit
              </Button>
            </Link>
          </HStack>

          {/* Stats with animated counters */}
          <HStack
            spacing={{ base: 2, sm: 3, md: 4, lg: 8 }}
            pt={6}
            mt={2}
            borderTop="2px solid"
            borderColor="green.100"
            animation={`${fadeIn} 0.8s ease-out 0.7s both`}
            flexWrap="wrap"
          >
            {stats.map((stat, index) => (
              <VStack key={index} align="start" spacing={0} flex="1" minW="70px">
                <HStack spacing={1}>
                  <AnimatedCounter value={stat.numeric} suffix={stat.value.replace(/\d/g, '')} />
                  <Icon as={BiPlus} color="green.400" boxSize={{ base: 3, md: 4, lg: 5 }} />
                </HStack>
                <Text fontSize={{ base: "2xs", sm: "xs", md: "sm" }} color="gray.600" fontWeight="medium">
                  {stat.label}
                </Text>
              </VStack>
            ))}
          </HStack>

          {/* Trust badges */}
          <HStack spacing={{ base: 2, sm: 3, md: 4 }} pt={4} opacity={0.8} flexWrap="wrap">
            <HStack spacing={1}>
              <Icon as={BiCheckShield} color="green.500" boxSize={{ base: 3, md: 4 }} />
              <Text fontSize={{ base: "2xs", sm: "xs", md: "xs" }} color="gray.600">Verified Titles</Text>
            </HStack>
            <HStack spacing={1}>
              <Icon as={BiTrendingUp} color="green.500" boxSize={{ base: 3, md: 4 }} />
              <Text fontSize={{ base: "2xs", sm: "xs", md: "xs" }} color="gray.600">Prime Locations</Text>
            </HStack>
            <HStack spacing={1}>
              <Icon as={FaHome} color="green.500" boxSize={{ base: 3, md: 4 }} />
              <Text fontSize={{ base: "2xs", sm: "xs", md: "xs" }} color="gray.600">Ready to Build</Text>
            </HStack>
          </HStack>
        </VStack>

        {/* Right Images - EXACTLY your original layout, now responsive */}
        <VStack 
          justify='center' 
          flex="1"
          spacing={0}
          minH={{ base: "300px", sm: "350px", md: "400px", lg: "450px", xl: "500px" }}
        >
          {/* First Image - Full height on desktop, adjusted for mobile */}
          <Box 
            h={{ base: "60%", lg: "100%" }} 
            w="100%"
            display="block"
          >
            <Image
              src={MbararaLand1}
              alt="Mbarara land"
              h="100%"
              w="100%"
              objectFit="cover"
              borderRadius="md"
            />
          </Box>

          {/* Second Image - Half height, positioned to overlap */}
          <Box 
            h={{ base: "45%", lg: "50%" }}
            w={{ base: "90%", lg: "100%" }}
            mt={{ base: "-15%", lg: "0" }}
            alignSelf={{ base: "flex-end", lg: "auto" }}
            display="block"
          >
            <Image
              src={MbararaLand2}
              alt="Mbarara land"
              h="100%"
              w="100%"
              objectFit="cover"
              borderRadius="md"
              boxShadow="dark-lg"
            />
          </Box>
        </VStack>
      </Stack>

      {/* Bottom fade effect */}
      <Box
        position="absolute"
        bottom="-40px"
        left={0}
        right={0}
        h="80px"
        bgGradient="linear(to-t, green.50, transparent)"
        zIndex={0}
        pointerEvents="none"
      />
    </Box>
  );
};

export default Banner;