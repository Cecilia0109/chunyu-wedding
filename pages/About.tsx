import { Box, Flex,Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../components/navigationBar/Navbar'
import SocialMedias from '../components/navigationBar/SocialMedias'
import Image from 'next/image'
import icon from "../public/icon.png"
import aboutme from "../public/aboutme.jpg"
import { WhatWeHave } from '../components/About/WhatWeHave'

const About = () => {
  return (
    <Flex flexDirection="column" max-width="100vw" alignItems="center">
    <Image src={icon} alt="icon" width={150}/>
    <Navbar/>
    <Flex justifyContent="center" gap="4rem" alignItems="center" marginY={20}>
      <Image src={aboutme} alt="about Me" height={400}></Image>
      <Box maxWidth="30%"> 
        <Text fontSize="3rem">About Me</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, illum reprehenderit! Suscipit optio architecto voluptatum rem recusandae ea maiores ut, illo pariatur. Voluptas voluptatibus voluptate dolorem commodi ullam nobis maiores?</Text>
        </Box>
    </Flex>
    <WhatWeHave />


    <SocialMedias />   
      </Flex>
  )
}

export default About
