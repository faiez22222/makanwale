import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel ,  Box, Heading, Text, UnorderedList, ListItem , List  , Flex, Container , SimpleGrid , Image, HStack , VStack ,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import diamond from './Images/diamond.jpg'
import gold  from './Images/platinum.jpeg'
import silver from './Images/silver.jpeg'
import platinum from './Images/platinum.jpeg'
import '@fortawesome/fontawesome-free/css/all.css';

const Construction = () => {
  // State to track active tabs

 


  return (
 
    <Flex
    alignItems="center"
    justifyContent="center"
    minheight="100vh"
    flexDirection="column"
    bgColor='#F0F0F0'
    >
              <Heading mt='80px' > Construction Packages</Heading>

           <SimpleGrid columns={4} spacingX='200px'   w='1000px'  mt='70px'  >
                <VStack   spacing={0} >
                <Box bgColor='orangered' w='270px'  height='40px'  
                   display='flex'
                   alignItems='center'
                   justifyContent='center'
                 >
                   <Text fontWeight={700} fontSize='20px'  color='white'  >Silver</Text> 
                </Box>
                <Box  w='270px' >
                <Image src={silver} alt='Dan Abramov' />
                </Box>
                <Box w='270px'  borderWidth='1px' borderColor='f9f9f9'  height='350px' >
                <Table variant='simple'>
                      <Thead>
                        <Tr>
                          <Th>
                          Package Includes
              
                            </Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>
                    
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>  Floor plans + Structural</span>
                            </Td>
                          
                        </Tr>
                        <Tr>
                          <Td>
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Standard Elevation</span>
                            </Td>
                          
                        </Tr>
                        <Tr>
                          <Td>
                            
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Vitrified Tiles Flooring</span>
                            </Td>
                        </Tr>
                        <Tr>
                          <Td>
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Modern Bathroom and Kitchen</span>
                            </Td>
                        </Tr>
                        <Tr>
                          <Td>
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Main door</span>
                            </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                </Box>
                </VStack>    
                <VStack   spacing={0} >
                <Box bgColor='orangered' w='270px'  height='40px'  
                   display='flex'
                   alignItems='center'
                   justifyContent='center'
                 >
                   <Text fontWeight={700} fontSize='20px'  color='white'  >Gold</Text> 
                </Box>
                <Box  w='270px' >
                <Image src={gold} alt='Dan Abramov' />
                </Box>
                <Box w='270px'  borderWidth='1px' borderColor='f9f9f9'  height='350px' >
                <Table variant='simple'>
                      <Thead>
                        <Tr>
                          <Th>
                          Package Includes
              
                            </Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>
                    
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>  Floor plans + Structural</span>
                            </Td>
                          
                        </Tr>
                        <Tr>
                          <Td>
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Classic Elevation</span>
                            </Td>
                          
                        </Tr>
                        <Tr>
                          <Td>
                            
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Premium Vitrified Tiles Flooring</span>
                            </Td>
                        </Tr>
                        <Tr>
                          <Td>
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Modern Bathroom and Kitchen</span>
                            </Td>
                        </Tr>
                        <Tr>
                          <Td>
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Teak main door</span>
                            </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                </Box>
                </VStack>    
                <VStack   spacing={0} >
                <Box bgColor='orangered' w='270px'  height='40px'  
                   display='flex'
                   alignItems='center'
                   justifyContent='center'
                 >
                   <Text fontWeight={700} fontSize='20px'  color='white'  >Diamond</Text> 
                </Box>
                <Box  w='270px' >
                <Image src={diamond} alt='Dan Abramov' />
                </Box>
                <Box w='270px'  borderWidth='1px' borderColor='f9f9f9' height='350px' >
                <Table variant='simple'>
                      <Thead>
                        <Tr>
                          <Th>
                          Package Includes
              
                            </Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>
                    
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>  Floor plans + Structural</span>
                            </Td>
                          
                        </Tr>
                        <Tr>
                          <Td>
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Elegant elevation</span>
                            </Td>
                          
                        </Tr>
                        <Tr>
                          <Td>
                            
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Granite Flooring</span>
                            </Td>
                        </Tr>
                        <Tr>
                          <Td>
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}> Premium Bathroom and Kitchen</span>
                            </Td>
                        </Tr>
                        <Tr>
                          <Td>
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Premium Teak</span>
                            </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                </Box>
                </VStack>      
                <VStack   spacing={0} >
                <Box bgColor='orangered' w='270px'  height='40px'  
                   display='flex'
                   alignItems='center'
                   justifyContent='center'
                 >
                   <Text fontWeight={700} fontSize='20px'  color='white'  >Platinum</Text> 
                </Box>
                <Box  w='270px' >
                <Image src={platinum} alt='Dan Abramov' />
                </Box>
                <Box w='270px'  borderWidth='1px' borderColor='f9f9f9'height='350px'  >
                <Table variant='simple'>
                      <Thead>
                        <Tr>
                          <Th>
                          Package Includes
              
                            </Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>
                    
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}> Floor plans + Structural, Electrical and Plumbing</span>
                            </Td>
                          
                        </Tr>
                        <Tr>
                          <Td>
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}> Contemporary Elevation</span>
                            </Td>
                          
                        </Tr>
                        <Tr>
                          <Td>
                            
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Premium Granite Flooring</span>
                            </Td>
                        </Tr>
                        <Tr>
                          <Td>
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Premium Bathroom and Kitchen</span>
                            </Td>
                        </Tr>
                        <Tr>
                          <Td>
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Burma Teak</span>
                            </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                </Box>
                </VStack>    
               
           </SimpleGrid>
          
    </Flex>    
           

  );
};

export default Construction;
