import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Circle, Flex, Icon, Text } from "@chakra-ui/react";
import Navbar from "../components/navigationBar/Navbar";
import icon from "../public/icon.png";
import SocialMedias from "../components/navigationBar/SocialMedias";
import CarouselImage from "../components/navigationBar/Carousel";
import p1 from "../components/navigationBar/image/p1.jpg";
import p2 from "../components/navigationBar/image/p2.jpg";

export default function Home() {
  return (
    <Flex flexDirection="column" max-width="100vw" alignItems="center">
      <Image src={icon} alt="icon" width={150} />
      <Navbar />
      <Text fontSize="3rem">ChunYu Bridal</Text>
      <Text fontSize="2rem">We bring love and happiness</Text>
      {/* <CarouselImage /> */}
      <Flex marginY={20}>
        <Image src={p1} alt="main-picture" height={400}></Image>
        <Image src={p2} alt="main-picture" height={400}></Image>
      </Flex>

      <SocialMedias />
    </Flex>
  );
}
