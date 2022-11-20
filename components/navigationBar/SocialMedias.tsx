import React from 'react'
import { AiOutlineInstagram,AiOutlineWeibo,AiFillWechat } from "react-icons/ai"
import { SlSocialTwitter } from "react-icons/sl"
import { FaFacebook } from "react-icons/fa"
import { Box, Circle, Flex, Icon, Text } from '@chakra-ui/react'

const SocialMedias = () => {
  return (
    <Flex gap={3} paddingBottom="2rem">
        <Circle border="2px" padding="5px">
          <Icon as= {AiOutlineInstagram}/>
        </Circle>
        <Circle border="2px" padding="5px">
          <Icon as= {SlSocialTwitter}/>
        </Circle>
        <Circle border="2px" padding="5px">
          <Icon as= {FaFacebook}/>
        </Circle>
        <Circle border="2px" padding="5px">
          <Icon as= {AiOutlineWeibo }/>
        </Circle>
        <Circle border="2px" padding="5px">
          <Icon as= {AiFillWechat }/>
        </Circle>
      </Flex>
  )
}

export default SocialMedias
