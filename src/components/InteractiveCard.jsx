import { Box, useColorModeValue, usePrefersReducedMotion } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

const baseTransform = 'perspective(1400px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';

const InteractiveCard = ({
  children,
  bg,
  borderColor,
  boxShadow,
  hoverBg,
  hoverBorderColor,
  hoverShadow,
  hoverLift = 8,
  hoverScale = 1.01,
  maxTilt = 5,
  enableGlow = true,
  transition = 'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease, background 220ms ease',
  ...rest
}) => {
  const cardRef = useRef(null);
  const frameRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const glowGradient = useColorModeValue(
    'radial-gradient(circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(47, 159, 121, 0.18), transparent 55%)',
    'radial-gradient(circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(125, 206, 176, 0.16), transparent 55%)',
  );

  const setTransform = (transform) => {
    if (!cardRef.current) {
      return;
    }

    cardRef.current.style.transform = transform;
  };

  const resetTransform = () => {
    setTransform(baseTransform);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);

    if (!prefersReducedMotion) {
      setTransform(
        `perspective(1400px) rotateX(0deg) rotateY(0deg) translateY(-${hoverLift}px) scale(${hoverScale})`,
      );
    }
  };

  const handleMouseMove = (event) => {
    if (prefersReducedMotion || !cardRef.current) {
      return;
    }

    const rect = cardRef.current.getBoundingClientRect();

    if (!rect.width || !rect.height) {
      return;
    }

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * maxTilt * 2;
    const rotateX = (0.5 - y) * maxTilt * 1.4;

    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      if (!cardRef.current) {
        return;
      }

      cardRef.current.style.setProperty('--glow-x', `${Math.round(x * 100)}%`);
      cardRef.current.style.setProperty('--glow-y', `${Math.round(y * 100)}%`);
      cardRef.current.style.transform = `perspective(1400px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-${hoverLift}px) scale(${hoverScale})`;
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    cancelAnimationFrame(frameRef.current);
    resetTransform();
  };

  useEffect(() => () => cancelAnimationFrame(frameRef.current), []);

  useEffect(() => {
    if (prefersReducedMotion) {
      resetTransform();
    }
  }, [prefersReducedMotion]);

  return (
    <Box
      ref={cardRef}
      bg={isHovered && hoverBg ? hoverBg : bg}
      borderColor={isHovered && hoverBorderColor ? hoverBorderColor : borderColor}
      boxShadow={isHovered && hoverShadow ? hoverShadow : boxShadow}
      position="relative"
      transformStyle="preserve-3d"
      transition={transition}
      willChange="transform"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {enableGlow && (
        <Box
          position="absolute"
          inset={0}
          pointerEvents="none"
          opacity={isHovered ? 1 : 0}
          transition="opacity 220ms ease"
          bgImage={glowGradient}
        />
      )}

      <Box position="relative" zIndex={1} h="100%">
        {children}
      </Box>
    </Box>
  );
};

export default InteractiveCard;
