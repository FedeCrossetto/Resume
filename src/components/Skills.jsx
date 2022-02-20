import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react';

const Skills = (props) => {
  const { key, logo, name } = props;
  return (
    <>    
      <Box key={key} boxShadow="xl" h='5rem' w='5rem' p="0.5rem" align="center" borderRadius="2xl">
      <Image src={logo} boxSize="2.5rem" objectFit="contain" />
      <Text>{name}</Text>
      </Box>
    </>

  )
}

export default Skills