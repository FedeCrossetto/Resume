import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react';

const Skills = (props) => {
  const { key, logo, name } = props;
  return (
    <>    
      <Box key={key} boxShadow="xl" h='6rem' w='7rem' p="0.5rem" align="center" borderRadius="2xl" >
      <Image src={logo} boxSize="2.5rem" objectFit="contain" />
      <Text  fontSize="sm" pt="0.5rem">{name}</Text>
      </Box>
    </>

  )
}

export default Skills