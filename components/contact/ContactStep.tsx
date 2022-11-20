import { Circle, Flex,Text } from '@chakra-ui/react'
import React from 'react'
import { FaWpforms } from "react-icons/fa"
import { AiOutlinePhone } from "react-icons/ai"
import { GiAmpleDress } from "react-icons/gi"

const ContactStep = () => {
  return (
    <Flex justifyContent="space-around" width="65vw">
      <Flex flexDirection="column" justifyContent="center" alignItems="center" gap={5}>
        <Text>Step 1</Text>
        <Circle size='160px' bg='tomato' color='white'>
          <FaWpforms size={80}/>
        </Circle>
        <Text>Filling Form</Text>
      </Flex>
      <Flex flexDirection="column" justifyContent="center" alignItems="center" gap={5}>
        <Text>Step 2</Text>
        <Circle size='160px' bg='tomato' color='white'>
          <AiOutlinePhone size={80}/>
        </Circle>
        <Text>Phone Confirmation</Text>
      </Flex>
      <Flex flexDirection="column" justifyContent="center" alignItems="center" gap={5}>
        <Text>Step 3</Text>
        <Circle size='160px' bg='tomato' color='white'>
          <GiAmpleDress size={80}/>
        </Circle>
        <Text>Store fitting</Text>
      </Flex>
      
    </Flex>
  )
}

export default ContactStep