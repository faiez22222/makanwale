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
import './Dropdown.css'
import buiildhood from './Images/buildhood-logo.png'



const MainLayout = () => {
  // State to track active tabs
 
  return (
     <Flex
     alignItems="center"
     justifyContent="center"
     flexDirection="row"
     height='80px'
   >
    <Flex     ml='300px'  >
          <Image
          boxSize='60px'
          width='250px'
          src= {buiildhood}
          alt='Dan Abramov'
        />
    </Flex> 
    <Spacer/>
    <Flex flexDirection='row'  marginRight='300px'   >
    <div class="dropdown">
  <button class="dropbtn"><Text fontSize='15px' fontWeight='650' >HOME</Text></button>
  <div class="dropdown-content">
  </div>
</div>
<div class="dropdown">
  <button class="dropbtn">
  <Text fontSize='15px' fontWeight='650' >PACKAGES <i class="fas fa-angle-down"></i></Text>
 
  </button>
  
  <div class="dropdown-content">
       <a href="/construction-packages"><Text fontSize='15px' fontWeight='550' >Construction Packages</Text></a>
  </div>
</div>
<div class="dropdown">
<button class="dropbtn">
<Text fontSize='15px' fontWeight='650' >PROJECT <i class="fas fa-angle-down"></i></Text>
  </button>
  <div class="dropdown-content">
       <a href="#"><Text fontSize='15px' fontWeight='550' >Construction Projects</Text></a>
       <div  style={{borderWidth : '1px' , borderColor : 'dark'}} ></div>
       <a href="#"><Text fontSize='15px' fontWeight='550' >Architecture Portfolio</Text></a>
       <div  style={{borderWidth : '1px' , borderColor : 'dark'}} ></div>
  </div>
</div>
<div class="dropdown">
  <button class="dropbtn">
  <Text fontSize='15px' fontWeight='650' >MORE  <i class="fas fa-angle-down"></i></Text>
  </button>
  <div class="dropdown-content">
       <a href="/cost-plus-contract-house-construction"><Text fontSize='15px' fontWeight='550' >Cost-Plus Model</Text></a>
       <div  style={{borderWidth : '1px' , borderColor : 'dark'}} ></div>
       <a href="/about-us"><Text fontSize='15px' fontWeight='550' >About Us</Text></a>
       <div  style={{borderWidth : '1px' , borderColor : 'dark'}} ></div>
       <a href="#"><Text fontSize='15px' fontWeight='550' >Careers</Text></a>
       <div  style={{borderWidth : '1px' , borderColor : 'dark'}} ></div>
       <a href="/contact-us"><Text fontSize='15px' fontWeight='550' >Contact-us</Text></a>
  </div>
</div>
    </Flex>
   
   </Flex>
  );
};

export default MainLayout;
