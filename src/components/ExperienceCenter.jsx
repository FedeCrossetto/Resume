import React from 'react'
import { HStack, Box, Image, VStack, Text, Divider } from '@chakra-ui/react'
const ExperienceCenter = (props) => {
    const {job,color,company,position,date} = props;
    return (
        <>
            <Box boxShadow="md" h='6.5rem' w='24rem' borderRadius="md" outline="1px solid rgba(178,178,178, .25)">
                <HStack p="1rem">
                    <Image src={job} boxSize="4rem" borderRadius="full" bg={color} objectFit="contain" p="0.5rem" />
                    <VStack alignItems="start" fontSize="xs" >
                        <Text  fontSize="sm">{company}</Text>
                        <Text color="brand.tertiary" >{position}</Text>
                        <Text color="brand.tertiary">{date}</Text>
                    </VStack>
                </HStack>
                <Divider opacity={0.1}/>
            </Box>
        </>
    )
}

export default ExperienceCenter