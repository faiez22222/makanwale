import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel ,  Box, Heading, Text, UnorderedList, ListItem , List  , Flex, VStack, HStack , Image, Spacer, Button  ,  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText, 
  Input , 
  Select , 
  Checkbox , 
} from '@chakra-ui/react';
import architectural_service from './Images/architectural_service.jpg';
import '@fortawesome/fontawesome-free/css/all.css';


const Contact_us = () => {
  // State to track active tabs
 
  return (
     <Flex
     alignItems="center"
     justifyContent="center"
     minheight="100vh"
     flexDirection="column"
   >
       <Heading as = 'h1'>Contact Form</Heading>
       <Box  borderRadius='42px'    bgColor =  '#fff1eb91'  w='1200px' marginTop='80px'    >
       <FormControl >
        <VStack spacing='7' marginTop='80px'  marginBottom='50px'  >
        <HStack   w='850px'  spacing={7}  >
        <Input  bgColor='white'      isRequired='true' placeholder='Name *'  />
        <Input  bgColor='white'    isRequired='true' placeholder='Mobile *' />
        </HStack  >
        <HStack   w='850px'  spacing={7} >
        <Input  bgColor='white'    isRequired='true' placeholder='Email *' />
        <Input  bgColor='white'    isRequired='true' placeholder='Location *' />
        </HStack>
        <HStack  w='850px'  spacing={7} >
        <Input  bgColor='white'    isRequired='true' placeholder='City *' />
        <Input  bgColor='white'    isRequired='true' placeholder='State *' />
        </HStack>
        <Select  bgColor='white' placeholder='Services' width='850px'>
        <option>Construction</option>
        <option>Interior Design</option>
        <option>Renovation</option>
        <option>Architecture</option>
        </Select>
        <Input  bgColor='white'  width='850px'  height='150px'  borderRadius='30px'   isRequired='true' placeholder='Enter message' />
        <HStack  width='850px'  mt='10px'  >
        <Checkbox defaultChecked></Checkbox>
        <Box  >
        <Text>
              I accept the T&C of Buildhood. I am aware and understand that I will be contacted by representative of Buildhood company listed on the website via Calls, SMS OR Email with respected to marketing of its products & Services.
        </Text>
        </Box>
        </HStack>
        <Button type="submit" bgColor="orange" color="white">Submit</Button>
        </VStack>
      </FormControl>
       </Box>

       <Box mt='100px'  mb='100px'    w='1200px'  >  
          <Heading  as= 'h1' fontSize = 'x-large'   >Hire Our Trusted Service</Heading>
          <HStack mt='20px'   height='130px'  >
               <div style={{ display: 'block', alignItems: 'center'   , height:'115px'  }}>
                    <i className="fas fa-phone" style={{ fontSize: "25px", color: 'orange' }}></i>
                    <span style={{ marginLeft: '35px', fontWeight: 'Italic' , fontSize : '25px',  marginBottom :'10px' }}>Call Us</span>
                    <Text  ml='55px'  >45789754433</Text>
                          
               </div>
               <div style={{ display: 'block', alignItems: 'center' ,  marginLeft : '180px'  , height:'115px'  }}>
                    <i className="fas fa-envelope" style={{ fontSize: "25px", color: 'orange' }}></i>
                    <span style={{marginLeft: '35px'   ,  marginBottom :'10px' ,fontWeight: 'Italic' , fontSize:'25px'   }}>Email</span>
                    
                  
                    <Text ml='55px' >enquiry@buildhood.com</Text>
                    <Text ml='55px' >sales@buildhood.com</Text>
                    <Text ml='55px' >careers@buildhood.com</Text>
                      
                    
                    {/* Your other components or content */}
               </div>
               <div style={{ display: 'block', alignItems: 'center'  , height:'115px' , marginLeft : '120px'  }}>
                    <i className="fas fa-map-marker" style={{ fontSize: "25px", color: 'orange' , marginLeft : '80px'  }}></i>
                    <span style={{ marginLeft: '35px'   ,  marginBottom :'10px'  ,fontWeight: 'Italic' , fontSize : '25px' }}>Location</span>
                    <Text  ml='130px' >#107, First Floor, Brigade Arcade</Text>
                    <Text  ml='130px' >building, Brigade Metropolis,</Text>
                    <Text  ml='130px'>Garudacharpalya, Whitefield Road,</Text>
                    <Text  ml='130px' >Bengaluru, Pincode- 560048</Text>
                    {/* Your other components or content */}
               </div>
          </HStack>     
          <Button color='orange'>Build</Button>
     </Box>


   </Flex>
  );
};

export default Contact_us;
