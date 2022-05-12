import React from "react";
import {
  Heading,
  Container,
  Box,
  Image,
  Stack,
  HStack,
  VStack,
  Text,
  Divider,
  Grid,
} from "@chakra-ui/react";
import santanderito from "../assets/images/santanderito.png";
import sistran from "../assets/images/sistran.png";
import udemy from "../assets/images/udemy.png"
import accenture from "../assets/images/accenture.png";
import istea from "../assets/images/istea.png";
import { CircleFlag } from "react-circle-flags";
import ExperienceCenter from "./ExperienceCenter";
import SkillsCenter from "./SkillsCenter";
import { Technical} from "../assets/images";
import fede from "../../src/assets/fede.png";

const ResumeCenter = () => {
  return (
    <>
      <Container minWidth={["540px", "767px", "992px", "1200px"]}>
        <Box
          w="100%"
          h="70px"
          bgGradient="linear(to-b, brand.eighth,brand.seventh,)"
        />
        <HStack>
          <Image
            borderRadius="full"
            boxSize="160px"
            src={fede}
            objectFit="cover"
            alt="Fede Crossetto"
            bg="brand.sixth"
            pos="relative"
            top="-4rem"
            left="32rem"
            zIndex={1}
            boxShadow="xl"
            border="3px solid white"
          />
          <VStack pl="21rem" pt="7rem">
            <Heading fontSize="xl">Federico Crossetto</Heading>
            <Text color="brand.tertiary" fontSize="xs" fontWeight="bold">
              Fullstack Developer
            </Text>
          </VStack>
        </HStack>
        {/* ----------------------------------------------------------ABOUTME---------------------------------------------------------- */}
        <VStack alignItems="start">
          {/* <HStack fontSize="md">
                        <Text left="0" fontWeight="bold" whiteSpace="nowrap" mt="-2rem">About me</Text>
                        <Text pl="12rem" pr="2rem"  color="brand.tertiary" pt="1rem" >Hello! My name and I enjoy creating solid and scalable frontend products with great user experience. I am a Software Developer, I had the privilege of working in a large multinational corporation, a national company with services abroad and in a large institution that provides commercial banking for individuals, SMEs and companies.</Text>
                    </HStack> */}
          <Stack
            pt="2rem"
            color="brand.tertiary"
            fontSize="xs"
            pr="1rem"         
          >
            <Box  h="70px" w="50rem" borderRadius="lg" outline="1px solid rgba(178,178,178, .25)" px="1rem">
              <HStack justifyContent="space-between">
                <VStack px="1rem">
                  <Text>Location</Text>
                  <HStack>
                    <CircleFlag countryCode="ar" height="20rem" width="20rem"/>
                    <Text>Bs As, Argentina</Text>
                  </HStack>
                </VStack>
                <VStack p="1rem">
                  <Text>Website</Text>
                  <Text >fcrossetto.vercel.app</Text>
                </VStack>
                <VStack p="1rem">
                  <Text>Phone Number</Text>
                  <Text >+54 11 590-591-54</Text>
                </VStack>
              </HStack>
            </Box>
          </Stack>
        </VStack>

        <VStack alignItems="end" pos="absolute" right="24rem" top="16.5rem" >
        <Box h="40rem" w="20rem" borderRadius="lg" outline="1px solid rgba(178,178,178, .25)" boxShadow="md">
        <Text align="center" fontSize="xs" pt="0.5rem" >About Me</Text>
        <Text color="brand.tertiary" fontSize="xs" align="start" p="1rem" >Hello! I am a Software Developer, I had the privilege of working in a large multinational corporation, a national company with services abroad and in a large institution that provides commercial banking for individuals, SMEs and companies.</Text>
        <Text align="center" fontSize="xs" pt="0.5rem" >Skills</Text>
        <Divider mb="1rem" />
        {Technical.map((icon) => {
                return <SkillsCenter logo={icon.image} name={icon.name}/>;
              })}
            </Box>
        </VStack>
        {/* ----------------------------------------------------------!ABOUTME---------------------------------------------------------- */}
        {/* ----------------------------------------------------------EXPERIENCE---------------------------------------------------------- */}
        <VStack fontSize="xs" alignSelf="start" mt="3rem">
          <HStack alignSelf="start" spacing="2rem">
            <Grid
              templateColumns="repeat(1, 1fr)"
              gap={4}
              pt="1rem"
              fontSize="xs"
              alignSelf="end"
            >
              <HStack color="brand.tertiary">
                <Text ml="11rem">Jobs</Text>
              </HStack>
              <ExperienceCenter
                job={accenture}
                color="rgb(245, 222, 252)"
                company="Accenture"
                position="Tech. Architecture Delivery Associate"
                date="May 2019 - Sep 2020"
              />
              <ExperienceCenter
                job={sistran}
                color="rgb(222, 235, 252)"
                company="SISTRAN"
                position="Full Stack Developer"
                date="Sep 2020 - Aug 2021"
              />
              <ExperienceCenter
                job={santanderito}
                color="rgb(252, 222, 222)"
                company="Santander Tecnología"
                position="Software Development Engineer"
                date="Aug 2021 - Present"
              />
            </Grid>

            <Grid
              templateColumns="repeat(1, 1fr)"
              gap={4}
              pt="1rem"
              pr="2rem"
              fontSize="xs"
              alignSelf="start"
            >
              <HStack color="brand.tertiary">
                <Text ml="10rem">Education</Text>
              </HStack>
              <ExperienceCenter
                job={istea}
                color="rgb(207, 249, 227)"
                company="ISTEA"
                position="Técnico en Desarrollo de Software"
                date="Mar 2018 - Jul 2021"
              />
                <ExperienceCenter
                job={udemy}
                color="rgb(247, 247, 247)"
                company="UDEMY"
                position="React: De cero a experto ( Hooks y MERN )"
                date="Nov 2020 - Dic 2020"
              />
               <ExperienceCenter
                job={udemy}
                color="rgb(247, 247, 247)"
                company="UDEMY"
                position="Node.js - Creando API con Express y MongoDB"
                date="Ago 2021 - Oct 2021"
              />
            </Grid>
          </HStack>
        </VStack>
        {/* ----------------------------------------------------------!EXPERIENCE---------------------------------------------------------- */}
        {/* ----------------------------------------------------------SKILLS---------------------------------------------------------- */}
        {/* <VStack fontSize="md">
          <VStack alignSelf="start" mt="1rem">
            <Text fontWeight="bold" whiteSpace="nowrap">
              Skills
            </Text>
          </VStack>
          <VStack align="start" pb="4rem">
            <HStack fontWeight="semibold" color="brand.tertiary" pl="16rem">
              {Technical.map((icon) => {
                return <Skills logo={icon.image} name={icon.name} />;
              })}
            </HStack>
          </VStack>
        </VStack> */}
        {/* ----------------------------------------------------------!SKILLS---------------------------------------------------------- */}
        {/* <Divider my="2rem" /> */}
      </Container>
    </>
  );
};

export default ResumeCenter;
