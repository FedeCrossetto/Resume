import React from 'react'
import { HStack, Box, Image, VStack, Text, Divider } from '@chakra-ui/react'
const Experience = (props) => {
    const {job,color,company,position,date} = props;
    return (
        <>
            <Box boxShadow="xs" h='8.2rem' w='26rem' borderRadius="md" outline="1px solid rgba(178,178,178, .25)">
                <HStack p="1rem">
                    <Image src={job} boxSize="4rem" borderRadius="full" bg={color} objectFit="contain" p="0.5rem" />
                    <VStack alignItems="start" fontSize="md">
                        <Text fontWeight="bold">{company}</Text>
                        <Text color="brand.tertiary" >{position}</Text>
                        <Text color="brand.tertiary">{date}</Text>
                    </VStack>
                </HStack>
                <Divider opacity={0.1}/>
            </Box>
        </>
    )
}

export default Experience