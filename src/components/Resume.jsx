import React from 'react'
import { Center, Heading, Container, Box, Image, Stack, HStack, VStack, Text, Divider, IconButton, Button, Flex, Grid } from "@chakra-ui/react";
import santanderito from '../assets/images/santanderito.png'
import sistran from '../assets/images/sistran.png'
import accenture from '../assets/images/accenture.png'
import istea from '../assets/images/istea.png'
import { CircleFlag } from 'react-circle-flags'
import Experience from './Experience';
import Skills from './Skills';
import icons from '../assets/images';


const Resume = () => {
    console.log('image',icons);
    return (
        <>
            <Container minWidth={["540px", "767px", "992px", "1200px"]}>
                <Box w='100%' h='100px' bgGradient='linear(to-r, green.200, pink.500)' />
                <HStack >
                    <Image
                        borderRadius='full'
                        boxSize='150px'
                        src='https://bit.ly/dan-abramov'
                        alt='Dan Abramov'
                        p="0.2rem"
                        bg="white"
                        pos="relative"
                        top="-4rem"
                        left="2rem"
                        zIndex={1}
                        boxShadow="lg"
                    />
                    <VStack pl="2rem" alignItems="start">
                        <Heading fontSize="xl" >Federico Crossetto</Heading>
                        <Text color="brand.tertiary" fontSize="xs">I'm a Frontend Developer based in Buenos Aires Argentina.</Text>
                    </VStack>
                </HStack>
                <Divider mb="2rem" />
                {/* ----------------------------------------------------------ABOUTME---------------------------------------------------------- */}
                <VStack alignItems="end">
                    <HStack fontSize="xs">
                        <Text left="0" fontWeight="bold" whiteSpace="nowrap">About me</Text>
                        <Text pl="12rem" pr="2rem" >I´m a Product Designer based in Melbourne, Australia. I specialize in UX/UI design, brand stategy,and Webflow development. I´m always striving to grow and learn something new and I don´t take myself too seriously.
                            I´m passionate about helping startups.</Text>
                    </HStack>
                    <Stack pt="2rem" color="brand.secondary" fontSize="xs" pr="2rem" >
                        <Box bg="brand.backLight" align="rigth" h='80px' w='55rem' borderRadius="2xl">
                            <HStack justifyContent="space-between">
                                <VStack py="1rem" px="2rem">
                                    <Text>Location</Text>
                                    <HStack>
                                        <CircleFlag countryCode="ar" height="20rem" width="20rem" /><Text fontWeight="semibold" >Bs As, Argentina</Text>
                                    </HStack>
                                </VStack>
                                <VStack p="1rem">
                                    <Text>Website</Text>
                                    <Text fontWeight="semibold">fcrossetto.vercel.app</Text>
                                </VStack>
                                <VStack p="1rem">
                                    <Text>Location</Text>
                                    <Text fontWeight="semibold"> Melbourne, Australia</Text>
                                </VStack>
                            </HStack>
                        </Box>
                    </Stack>
                </VStack>
                {/* ----------------------------------------------------------!ABOUTME---------------------------------------------------------- */}
                <Divider my="2rem" />
                {/* ----------------------------------------------------------EXPERIENCE---------------------------------------------------------- */}
                <VStack fontSize="xs">
                    <VStack alignSelf="start">
                        <Text fontWeight="bold" whiteSpace="nowrap">Experience</Text>
                    </VStack>
                    <HStack fontWeight="semibold" color="brand.tertiary">
                    <Text pl="14rem">Jobs</Text>
                    <Text pl="26rem">Education</Text>
                    </HStack>
                    <HStack alignSelf="end" spacing="2rem">
                    <Grid templateColumns='repeat(1, 1fr)' gap={4} pt="1rem"  fontSize="xs" alignSelf="end">                
                        <Experience job={accenture} color="rgb(245, 222, 252)" company="Accenture" position="Tech. Architecture Delivery Associate" date="May 2019 - Sep 2020" />
                        {/* <Experience job={palotinas} color="rgb(255, 253, 219)" company="Instituto Apostolado Católico" position="Humanidades y Ciencias Sociales" date="Mar 2001 - Dec 2011" /> */}
                        <Experience job={sistran} color="rgb(222, 235, 252)" company="SISTRAN" position="Full Stack Developer" date="Sep 2020 - Aug 2021" />
                        {/* <Experience job={istea} color="rgb(207, 249, 227)" company="ISTEA" position="Técnico en Desarrollo de Software" date="Mar 2018 - Jul 2021" />       */}
                        <Experience job={santanderito} color="rgb(252, 222, 222)" company="Santander Tecnología" position="Full Stack Developer" date="Aug 2021 - Present" />
                    </Grid>
                    <Grid  templateColumns='repeat(1, 1fr)' gap={4} pt="1rem" pr="2rem" fontSize="xs" alignSelf="start">                
                    {/* <Experience job={palotinas} color="rgb(255, 253, 219)" company="Instituto Apostolado Católico" position="Humanidades y Ciencias Sociales" date="Mar 2001 - Dec 2011" /> */}
                    <Experience job={istea} color="rgb(207, 249, 227)" company="ISTEA" position="Técnico en Desarrollo de Software" date="Mar 2018 - Jul 2021" />
                    </Grid>
                    </HStack>
                </VStack>
                {/* ----------------------------------------------------------!EXPERIENCE---------------------------------------------------------- */}
                <Divider my="2rem" />
                          {/* ----------------------------------------------------------SKILLS---------------------------------------------------------- */}
                <VStack fontSize="xs" >
                    <VStack alignSelf="start">
                        <Text fontWeight="bold" whiteSpace="nowrap">Skills</Text>
                    </VStack>
                        <HStack fontWeight="semibold" color="brand.tertiary">
                        <Text pr="2rem">Soft Skills</Text>
                        <Skills logo={santanderito} name="Node" />
                        <Skills logo={santanderito} name="Node" />
                        <Skills logo={santanderito} name="Node" />
                        <Skills logo={santanderito} name="Node" />
                        <Skills logo={santanderito} name="Node" />
                        <Skills logo={santanderito} name="Node" />
                        <Skills logo={santanderito} name="Node" />
                        </HStack>
                        

                    <HStack fontWeight="semibold" color="brand.tertiary">
                        <Text pr="2rem">Soft Skills</Text>
                        {icons.map((icon) =>{
                            return (   <Skills logo={icon} name="Node" />)
                        })}

                        </HStack>

                </VStack>
                          {/* ----------------------------------------------------------!SKILLS---------------------------------------------------------- */}
                <Divider my="2rem" />
            </Container>
        </>
    )
}

export default Resume