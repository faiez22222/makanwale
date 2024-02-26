import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel ,  Box, Heading, Text , Flex, Container , SimpleGrid , Image, HStack , VStack ,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,

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
                <Box w='270px'  borderWidth='1px' borderColor='f9f9f9'  height='350px'  >
                  <Box height='270px'   >   
                <Table variant='simple'  >
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
                          <List spacing={3}>
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>  Floor plans + Structural</span>
                            </ListItem>
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Standard Elevation</span>
                            </ListItem>
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}> Vitrified Tiles Flooring</span>
                            </ListItem>
                            {/* You can also use custom icons from react-icons */}
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Modern Bathroom and Kitchen</span>
                            </ListItem>
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Main door</span>
                              </ListItem>
                          </List>
                           
                          </Td>
                          
                        </Tr>
                      </Tbody>
                    </Table>
                    </Box>
                    <Box    height='75px'  display='flex' 
                   alignItems='center'
                   justifyContent='center' >
                    <Button bgColor='orangered' width='65%'   ><Text>View More</Text></Button>
                    </Box>
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
                <Box w='270px'  borderWidth='1px' borderColor='f9f9f9'  height='350px'  >
                  <Box height='270px'>
                <Table variant='simple'  >
                      <Thead>
                        <Tr>
                          <Th>
                              Package Includes
              
                            </Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td height='40px' >
                          <List spacing={3}>
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>  Floor plans + Structural</span>
                            </ListItem>
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Classic Elevation</span>
                            </ListItem>
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Premium Vitrified Tiles Flooring</span>
                            </ListItem>
                            {/* You can also use custom icons from react-icons */}
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Modern Bathroom and Kitchen</span>
                            </ListItem>
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Teak main door</span>
                              </ListItem>
                          </List>
                            </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                    </Box>
                    <Box    height='75px'  display='flex' 
                   alignItems='center'
                   justifyContent='center' >
                    <Button bgColor='orangered' width='65%'   ><Text>View More</Text></Button>
                    </Box>
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
                <Box w='270px'  borderWidth='1px' borderColor='f9f9f9' height='350px'  >
                  <Box height='270px'>
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
                          <List spacing={3}>
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Floor plans + Structural</span>
                            </ListItem>
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Elegant elevation</span>
                            </ListItem>
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}> Granite Flooring</span>
                            </ListItem>
                            {/* You can also use custom icons from react-icons */}
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}> Premium Bathroom and Kitchen</span>
                            </ListItem>
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}> Premium Teak</span>
                              </ListItem>
                          </List>
                            </Td>
                          
                        </Tr>
                      </Tbody>
                    </Table>
                    </Box>
                    <Box    height='75px'  display='flex' 
                   alignItems='center'
                   justifyContent='center' >
                    <Button bgColor='orangered' width='65%'   ><Text>View More</Text></Button>
                    </Box>
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
                  <Box height='270px' >
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
                          <List spacing={3}>
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>  Floor plans + Structural, Electrical and Plumbing</span>
                            </ListItem>
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Contemporary Elevation</span>
                            </ListItem>
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}> Premium Granite Flooring</span>
                            </ListItem>
                            {/* You can also use custom icons from react-icons */}
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}>Premium Bathroom and Kitchen</span>
                            </ListItem>
                            <ListItem>
                              
                            <i className="fas fa-check" style={{ fontSize: "30", color: 'orange' }}></i>
                           <span style={{ marginLeft: '10px' }}> Burma Teak</span>
                              </ListItem>
                          </List>
                            </Td>
                          
                       </Tr>
                      </Tbody>
                    </Table>
                    </Box>
                    <Box    height='75px'  display='flex' 
                   alignItems='center'
                   justifyContent='center' >
                    <Button bgColor='orangered' width='65%'   ><Text>View More</Text></Button>
                    </Box>
                </Box>
                </VStack>    
               
           </SimpleGrid>
          
    </Flex>    
           

  );
};

export default Construction;
