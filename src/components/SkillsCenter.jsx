import React from "react";
import { Box, Image, Text, VStack ,HStack } from "@chakra-ui/react";

const SkillsCenter = (props) => {
  const { key, logo, name } = props;
  return (
    <>
      <VStack>
        <Box
          key={key}
          my="0.2rem"
          h="3rem"
          w="18rem"
          p="0.5rem"
          align="left"
          borderRadius="md"
          outline="1px solid rgba(178,178,178, .25)"
          >
            <HStack>
          <Image src={logo} boxSize="2rem" objectFit="contain" />
          <Text  fontSize="xs" py="0.5rem">
            {name}
          </Text>
        </HStack>
        </Box>
      </VStack>
    </>
  );
};

export default SkillsCenter;
