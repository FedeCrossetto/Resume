import React from 'react'
import { HStack, Box, Image, VStack, Text, Divider } from '@chakra-ui/react'
const Experience = (props) => {
    const {job,color,company,position,date} = props;
    return (
        <>
            <Box boxShadow="xl" h='8rem' w='26rem' borderColor="black" borderRadius="2xl">
                <HStack p="1rem">
                    <Image src={job} boxSize="4rem" borderRadius="full" bg={color} objectFit="contain" p="0.5rem" />
                    <VStack alignItems="start">
                        <Text fontWeight="bold" fontSize="sm">{company}</Text>
                        <Text color="brand.tertiary">{position}</Text>
                        <Text color="brand.tertiary">{date}</Text>
                    </VStack>
                </HStack>
                <Divider  />
            </Box>
        </>
    )
}

export default Experience