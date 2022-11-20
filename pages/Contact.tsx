import React from 'react'
import { Divider, Flex, Heading, Text } from "@chakra-ui/react";

import Navbar from "../components/navigationBar/Navbar";
import SocialMedias from "../components/navigationBar/SocialMedias";
import Image from "next/image";
import icon from "../public/icon.png";
import ContactContainer from '../components/contact/ContactContainer';


const Contact = () => {
  return (
    <Flex flexDirection="column" max-width="100vw" alignItems="center">
      <Image src={icon} alt="icon" width={150} />
      <Navbar />
      <Heading marginY={5}>Reservation</Heading>
      <ContactContainer />
      <SocialMedias />
    </Flex>
  )
}

export default Contact
