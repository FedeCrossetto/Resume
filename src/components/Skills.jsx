import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react';

const Skills = (props) => {
  const { key, logo, name } = props;
  return (
    <>    
      <Box key={key} boxShadow="xl" h='5.6rem' w='5.6rem' p="0.5rem" align="center" borderRadius="2xl">
      <Image src={logo} boxSize="2.5rem" objectFit="contain" />
      <Text  fontSize="10px" pt="0.5rem">{name}</Text>
      </Box>
    </>

  )
}

export default Skills