import { Circle, Flex,Text } from '@chakra-ui/react'
import React from 'react'
import { FaWpforms } from "react-icons/fa"
import { AiOutlinePhone } from "react-icons/ai"
import { GiAmpleDress } from "react-icons/gi"
import { IoArrowForward } from "react-icons/io5"

const ContactStep = () => {
  return (
    // TODO: need to fix arrow
    <Flex justifyContent="space-around" width="65vw" alignItems="center">
      <Flex flexDirection="column" justifyContent="center" alignItems="center" gap={5}>
        <Text>Step 1</Text>
        <Circle size='160px' bg='#f7f7f7' color='gray'>
          <FaWpforms size={80}/>
        </Circle>
        <Text>Filling Form</Text>
      </Flex>
      <IoArrowForward size={80}/>
      <Flex flexDirection="column" justifyContent="center" alignItems="center" gap={5}>
        <Text>Step 2</Text>
        <Circle size='160px' bg='#f7f7f7' color='gray'>
          <AiOutlinePhone size={80}/>
        </Circle>
        <Text>Phone Confirmation</Text>
      </Flex>
      <IoArrowForward size={80}/>
      <Flex flexDirection="column" justifyContent="center" alignItems="center" gap={5}>
        <Text>Step 3</Text>
        <Circle size='160px' bg='#f7f7f7' color='gray'>
          <GiAmpleDress size={80}/>
        </Circle>
        <Text>Store fitting</Text>
      </Flex>
      
    </Flex>
  )
}

export default ContactStep