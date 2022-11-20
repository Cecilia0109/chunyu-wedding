import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import p1 from "./image/p1.jpg";
import p2 from "./image/p2.jpg";
import p3 from "./image/p3.jpg";
import { Center, Box } from "@chakra-ui/react";

const CarouselImage = () => {
  return (
    <Box height="20vh" position="relative">
    <Carousel 
    showStatus={false}
    showArrows={false}
    emulateTouch={true}
    autoPlay
    infiniteLoop={true}
    transitionTime={2000}
    
   >
     <Center>
      <Image src={p1} alt="main-photo-1" height={60} objectFit="cover"/>
     </Center>
     <Center>
     <Image src={p2} alt="main-photo-1"  objectFit="cover"/>
     </Center>
     <Center>
     <Image src={p3} alt="main-photo-1" objectFit="cover"/>
     </Center>
    </Carousel>
    </Box>
  );
};

export default CarouselImage;
