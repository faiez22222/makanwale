import React, { useState , useEffect  , useRef} from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel ,  Box, Heading, Text, UnorderedList, ListItem , List  , Image, Flex , Grid, GridItem } from '@chakra-ui/react';

import icon1 from './Images/Buildhood_Floor_plans.jpeg'
import icon2 from './Images/silver1.jpg' 
import "./ImageSlider.css";
import Kamdhenu from './Images/Kamdhenu.jpg' 
import IndiaGold from './Images/IndiaGold.jpg' 
import Priya from './Images/Priya.jpg' 
import Maha from './Images/Maha.jpg' 
import Sand from './Images/sand.jpg' 
import Bricks1 from './Images/bricks1.jpg' 
import Bricks2 from './Images/bricks2.jpg' 
import Bricks3 from './Images/bricks3.jpg' 
import truck from './Images/Truck.jpg' 
import aggregates1 from './Images/aggregates1.jpg' 
import aggregates2 from './Images/aggregates2.jpg' 
import Waterproofing from './Images/water-proofing.jpg' 


const Tabpanel11 = () => {
       const [index, setIndex] = useState(0);
    const imagesss = [
        icon1,
        icon2,
     
        // Add more image URLs as needed
      ];
  // State to track active tabs

  useEffect(() => {
       resetTimeout();
       timeoutRef.current = setTimeout(() =>
         setIndex((prevIndex) =>
           prevIndex === colors.length - 1 ? 0 : prevIndex + 1
         ),
         delay
       );
     
       return () => {
         resetTimeout();
       };
     }, [index]);
     const colors = [icon1,
       icon2,];
     const delay = 3000;

     
     const timeoutRef = useRef(null);
     
     function resetTimeout() {
       if (timeoutRef.current) {
         clearTimeout(timeoutRef.current);
       }
     }

  return (
      
           <Flex  width='100%'     >
            <Grid templateColumns='repeat(2, 1fr)' width='59%'    >
                <GridItem   >
                <Box   >
                     <Text  fontWeight='400' fontSize='20px' >Structure & Civil</Text>
                     <div style={{borderWidth : '1px' , color : 'darkgray' , marginTop : '10px', width : '100%'}} ></div>
                     <Box ml='20px' marginTop='30px'  >
                     <Heading as="h5" size="sm" fontWeight="bold" color="black" mt='10px' >
                        Steel :
                     </Heading>
                     <Text mt='5px' >
                            <Text display="inline" fontWeight="600" color="black">{'< '}</Text>
                            ISI standard FE-500/550TMT Steel will be used as per structural requirement.
                     </Text>
                     <Text mt='5px' >
                            <Text display="inline" fontWeight="600" color="black">{'< '}</Text>
                            Steel Rods starting from 6mm upto 20mm will be used according to the structural design and requirement.
                     </Text>
                     <Text mt='5px' >
                            <Text display="inline" fontWeight="600" color="black">{'< '}</Text>
                            ISI standard FE-500/550TMT Steel will be used as per structural requirement.
                     </Text>
                     <Box display='flex' mt='15px' >
                     <Image
                        boxSize='40px'
                        width='150px'
                        objectFit='cover'
                        src= {IndiaGold}
                        alt='Dan Abramov'
                    />
                    <Image
                        boxSize='40px'
                        width='150px'
                        objectFit='cover'
                        src= {Kamdhenu}
                        alt='Dan Abramov'
                    />
                    </Box>
                    <div style={{borderWidth : '1px' , color : 'darkgray' , marginTop : '20px', width : '100%'}} ></div>
                    <Heading as="h5" size="sm" fontWeight="bold" color="black" mt='15px' >
                       Cement :
                    </Heading>
                     <Text mt='5px'>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                             ISI Standard 53 and 43 Grade cement will be used.

                     </Text>
                     <Text mt='5px' >
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            53-Grade will be used for Masonry and 43-Grade will be used for Plastering.
                     </Text>
                     <Text mt='5px' >
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            Maha, Priya or equivalent Brands will be used.
                     </Text>

                     <Box display='flex' mt='15px' >
                     <Image
                        boxSize='60px'
                        width='90px'
                        objectFit='cover'
                        src= {Maha}
                        alt='Dan Abramov'
                    />
                    <Image
                        boxSize='60px'
                        ml='25px'
                        width='60px'
                        objectFit='cover'
                        src= {Priya}
                        alt='Dan Abramov'
                        mt='2px'
                    />
                    </Box>
                    <div style={{borderWidth : '1px' , color : 'darkgray' , marginTop : '20px', width : '100%'}} ></div>
                     <Text mt='10px' >
                            <Text display="inline" fontWeight="700" color="black">{'< sand - '}</Text>
                            M-Sand will used for Masonry and P-Sand will be used for Plastering.
                     </Text>
                     <Image
                        boxSize='40px'
                        width='50px'
                        objectFit='cover'
                        src= {Sand}
                        alt='Dan Abramov'
                    />
                     </Box>
                      
                </Box>
                </GridItem>
                <GridItem>
                <Box    >
                <div style={{borderWidth : '1px' , color : 'darkgray' , marginTop : '40px', width : '100%'}} ></div>
                     <Box ml='20px' marginTop='30px'  >
                     <Heading as="h5" size="sm" fontWeight="bold" color="black" mt='10px' >
                           Blocks/Bricks :
                     </Heading>
                     <Text>
                            <Text display="inline" fontWeight="600" color="black">{'< '}</Text>
                            Standard Solid 6-inch and 4-inch concrete blocks will be used.
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="600" color="black">{'< '}</Text>
                            6-inch blocks for External walls and 4-inch blocks for internal walls.
                            <Box display='flex' mt='25px' mb='10px'  >
                                <Image
                                    boxSize='60px'
                                    width='120px'
                                    objectFit='cover'
                                    src= {Bricks1}
                                    alt='Dan Abramov'
                                />
                                <Image
                                    boxSize='60px'
                                    width='120px'
                                    objectFit='cover'
                                    src= {Bricks2}
                                    alt='Dan Abramov'
                                />
                                <Image
                                    boxSize='60px'
                                    width='120px'
                                    objectFit='cover'
                                    src= {Bricks3}
                                    alt='Dan Abramov'
                                />
                    </Box>
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="600" color="black">Note:</Text>
                            {" Clay-bricks can be used with Extra cost of Rs.90/sqft and Wire-cut bricks for Rs.100/sqft on the package."}
                     </Text>
                     <div style={{borderWidth : '1px' , color : 'darkgray' , marginTop : '40px', width : '100%'}} ></div>
                     <Text>
                            <Text display="inline" fontWeight="600" color="black">{'< Concrete: '}</Text>
                            RCC Design mix will be used as per structural
                     </Text>
                     <Image
                                    boxSize='60px'
                                    width='120px'
                                    objectFit='cover'
                                    src= {truck}
                                    alt='Dan Abramov'
                                />
                    <div style={{borderWidth : '1px' , color : 'darkgray' , marginTop : '20px', width : '100%'}} ></div>
                    <Heading as="h5" size="sm" fontWeight="bold" color="black" mt='10px' >
                    Aggregates : 
                    </Heading>
                     <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            20mm and 40mm will used.

                     </Text>
                     <Box display='flex' mt='25px' mb='10px'  >
                                <Image
                                    boxSize='60px'
                                    width='120px'
                                    objectFit='cover'
                                    src= {aggregates1}
                                    alt='Dan Abramov'
                                />
                                <Image
                                    ml='5px'
                                    boxSize='60px'
                                    width='120px'
                                    objectFit='cover'
                                    src= {aggregates2}
                                    alt='Dan Abramov'
                                />
                    </Box>
                    <div style={{borderWidth : '1px' , color : 'darkgray' , marginTop : '20px', width : '100%'}} ></div>
                     <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< Waterproofing : '}</Text>
                            5 Dr.Fixit Water proofing solution will be used.
                     </Text>
                     <Box display='flex' mt='15px' >
                     <Image
                        boxSize='60px'
                        width='90px'
                        objectFit='cover'
                        src= {Waterproofing}
                        alt='Dan Abramov'
                    />
                    </Box>
                    <div style={{borderWidth : '1px' , color : 'darkgray' , marginTop : '20px', width : '100%'}} ></div>
                     </Box>
                </Box> 
                </GridItem>
            </Grid>   
           </Flex>
  );
};

export default Tabpanel11;
