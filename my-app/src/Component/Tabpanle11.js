import React, { useState , useEffect  , useRef} from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel ,  Box, Heading, Text, UnorderedList, ListItem , List  , Image, Flex , Grid, GridItem } from '@chakra-ui/react';

import icon1 from './Images/Buildhood_Floor_plans.jpeg'
import icon2 from './Images/silver1.jpg' 
import "./ImageSlider.css";

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
                     <Text  fontWeight='600' fontSize='20px' >Design & Drawings</Text>
                     <div style={{borderWidth : '1px' , color : 'darkgray' , marginTop : '10px', width : '100%'}} ></div>
                     <Heading as="h5" size="sm" fontWeight="bold" color="black" mt='10px' >
                        Package Includes:
                     </Heading>
                     <Box ml='20px' >
                     <Text>
                            <Text display="inline" fontWeight="600" color="black">{'< '}</Text>
                              2D floor plans will be provided.
                     </Text>
                          <Text>
                            <Text display="inline" fontWeight="600" color="black">Note:</Text>
                            {" This Floor plan is just for your reference only, Floor plan for each project will be designed as per client’s requirements."}
                     </Text>
                     <div style={{borderWidth : '1px' , color : 'darkgray' , marginTop : '10px', width : '100%'}} ></div>
                     <Text fontWeight='700'>Building Elevation :</Text>
                     <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                               2D Preliminary elevation view.
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            3D Elevation rendered view.
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            2D elevation working drawings.
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="600" color="black">Note:</Text>
                            {" This elevation image is just for your reference only, Elevation for each project will be designed as per client’s taste and requirement."}
                     </Text>
                     <div style={{borderWidth : '1px' , color : 'darkgray' , marginTop : '10px', width : '100%'}} ></div>
                     <Text fontWeight='700'>Structural Drawings :</Text>
                     <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            Center line marking drawings
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            Excavation drawings
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            Sump drawings
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            Footings and Columns drawings
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            Plinth beam drawings
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            Roof slab shuttering drawings
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            Roof slab reinforcement drawings
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            Roof slab and Beam drawings for each level
                     </Text>
                     <Text>
                            <Text display="inline" fontWeight="700" color="black">{'< '}</Text>
                            Staircase drawings
                     </Text>
                     </Box>
                      
                </Box>
                </GridItem>
                <GridItem>
                <Box    >
                    <Text fontWeight='600' fontSize='20px' ml='10px'  >Sample Design</Text>
                    <div style={{borderWidth : '1px' , color : 'darkgray' , marginTop : '10px', width : '100%' , marginLeft:'10px' }} ></div>
                    <div className="slideshow" style={{marginTop: '20px'}} >
                      <div
                         className="slideshowSlider"
                         style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                       >
                     {colors.map((backgroundColor, index) => (
                     <div className="slide" key={index} >
                                  <img
                                   key={index}
                                   src={backgroundColor}
                                   alt={`Slide ${index + 1}`}
                                   
                                   />
                     </div>
                      ))}
                      </div>
                    
                   </div>

                </Box> 
                </GridItem>
            </Grid>   
           </Flex>
  );
};

export default Tabpanel11;
