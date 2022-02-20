import React from 'react'
import {Box,Image,Text} from '@chakra-ui/react';

const Skills = (props) => {
    const {logo,name} = props;
  return (
      <>    <Box boxShadow="xl" h='5rem' w='5rem' p="0.5rem" align="center" borderRadius="2xl">
    <Image src={logo} boxSize="3rem" objectFit="contain"/>
    <Text>{name}</Text>
    </Box>
    </>

  )
}

export default Skills