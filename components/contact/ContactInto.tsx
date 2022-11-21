import React from 'react'
import { Formik, Field } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Center
} from "@chakra-ui/react";

const ContactInto = () => {
  return (

    <Box bg="white" p={6} rounded="md" width="100%" marginY="1rem">
      <Formik
        initialValues={{
          name: "",
          mobile: "",
          email:"",
          message: "",
          preferredTime: "",
          weddingDate:"",
          weddingCity:"",
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 5));
        }}
        
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <Flex justify="space-around">
            <VStack spacing={4} align="flex-start" width="40%">
            <FormControl>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Field
                  as={Input}
                  id="name"
                  name="name"
                  type="name"
                  variant="filled"
                />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>
              
              <FormControl>
                <FormLabel htmlFor="mobile">Mobile</FormLabel>
                <Field
                  as={Input}
                  id="mobile"
                  name="mobile"
                  type="mobile"
                  variant="filled"
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="Email">Email Address</FormLabel>
                <Field
                  as={Input}
                  id="Email"
                  name="Email"
                  type="Email"
                  variant="filled"
                />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>
            </VStack>
            <VStack width="40%" spacing={4} align="flex-start">
            
              <FormControl>
                <FormLabel htmlFor="date">Wedding Date</FormLabel>
                <Field
                  as={Input}
                  id="date"
                  name="date"
                  type="date"
                  variant="filled"
                />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="weddingCity">Wedding Location</FormLabel>
                <Field
                  as={Input}
                  id="weddingCity"
                  name="weddingCity"
                  type="weddingCity"
                  variant="filled"
                />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="date">Preferred Appointment Date</FormLabel>
                <Field
                  as={Input}
                  id="date"
                  name="date"
                  type="date"
                  variant="filled"
                />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>    
            </VStack>
            
            </Flex>
            <Center marginTop={12}> <Button width={48} type="submit" colorScheme="purple">Submit</Button></Center>
           
          </form>
          
        )}
      </Formik>
    </Box>
  
  )
}

export default ContactInto