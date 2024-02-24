import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel ,  Box, Heading, Text, UnorderedList, ListItem , List  , Flex, VStack, HStack , Image, Spacer, Button } from '@chakra-ui/react';
import architectural_service from './Images/architectural_service.jpg';
import '@fortawesome/fontawesome-free/css/all.css';


const About = () => {
  // State to track active tabs
 
  return (
     <Flex
     alignItems="center"
     justifyContent="center"
     height="100vh"
     flexDirection="column"
   >
     <Heading as="h1" size="xl" mb="8" mt='250px'>
       Who we are
     </Heading>
     <Box bgColor='whitesmoke'  w='100%'  >
     <Box   width='75%'  ml='250px'   >
       <Text fontSize="lg" mb="4" >
         "The Technology-based, Promising, and Authentic construction and Interior designing service company"
       </Text>
       <Text>
         Buildhood Infratech Private Limited was born to fulfill the range of your home needs like planning and architecture service, house/villa construction, interior design and execution, and home renovation or remodeling.
       </Text>
       <br/>
       <Text>
         We are a team with zeal, motivation, creativity, professionalism, and friendliness. We bring your visionary house into reality with our trendsetting ideas. We are renowned for the finest finishing where we choose premium materials and pay attention to minute details to bring out the state of the artwork.
       </Text>
       <br/>
       <Text>
         Our solid vision and uncompromising mission made us today one of the demanding and fast-growing construction and interior designing companies in Bangalore. As we are an ISO certified company, one can be guaranteed of quality work.
       </Text>
       <br/>
       <Text>
         Amidst COVID-19, we have adopted stringent measures at every step to assure a no-contact safety environment starting from our office premises to every area of your house. You can feel safe to visit us for the discussion and a green zone to move into your dream house.
       </Text>
     </Box>
     </Box>
     <Heading mt='70px' >Architecture</Heading>
     <Box>
      <HStack spacing={8}>
        <Box flex="1"   width='700px' >
          <Text fontWeight="bold" fontSize="xl">
            Planning and Architecture Service
          </Text>
          <Text>
            “We design for the present with the understanding of the past and prediction of the future”
          </Text>
          <Text>
            We are good listeners, we listen and jot down all your requirements. Our architects are professionals in carving designs by turning the concepts into images and plans. We create the overall look of the building and structure design far more than its appearance. Creativity is something a core area we focus on in the designing.
          </Text>
        </Box>
        <Spacer/>
        <Box boxSize="sm" mt='100px' >
          <Image src={architectural_service} alt="Architecture Service" />
        </Box>
      </HStack>
    </Box>

    <Heading mt='70px' >Construction</Heading>
     <Box bgColor='whitesmoke'   w='100%' mt='50px'  >
      <HStack spacing={8}>
      <Box boxSize="sm" mt='100px'  ml='200px'  >
          <Image src={architectural_service} alt="Architecture Service" />
     </Box>
        <Box   width='550px'  ml='80px' >
          <Text fontWeight="bold" fontSize="xl">
              House/Villa Construction
          </Text>
          <Text>
          “A transparent and outstanding construction service with 5 years of warranty”
          </Text>
          <Text>
          Buildhood Infratech feels proud for completing 150+ projects in its journey. We are urged to provide modernized, quality, professional, and transparent service to everyone. Our experts are specialized in turning your dream house into reality. We carefully pick and finalize the best in everything. We are recognized for our world-class finishing that made even a simple house look stylish.
          </Text>
          <Text>
          Every house owner is valued at Buildhood Infratech. We are satisfied and relaxed when our house owner’s expectations are met. Hence, we boldly offer service with 5 years of warranty.
          </Text>
          <Text>
          Through on-time completion of projects, we have earned the trust in the market. Our professional and friendly customer service made us stand out distinctively from the crowd.
          </Text>
        </Box>
       
      </HStack>
    </Box>
    <Heading as="h1" size="xl" mb="8" mt='250px'>
            Vision
     </Heading>
     <Box w='100%'  >
     <Box   width='75%'  ml='250px'   >
       <Text fontSize="lg" mb="4" >
         "“Focused on delivering quality, modish, affordable price, and professional service”"
       </Text>
       <Text>
       Our vision is to build the house for pleasant living. Any good things we construct end up building us. We are urged to render quality and the finest finishing touch for the long-lasting durability of the house.
       </Text>
       <br/>
  
       <Text fontWeight="bold">
          Quality
       </Text>
       <Text>
       What goes into the construction of the house is vital for the company. When it comes to material and design we never make any other choice other than going with the quality. Our Quality work remains forever and ever as it is our habit.
       </Text>
       <br/>
       <Text fontWeight="bold" >Unique and modern</Text>
       <Text>
       To deploy robust strategies in everything we do that make us look unique and modern in the competitive world. We strive to make every house construction value-added and unique in style. We solve complex problems easily and make them look simple.
       </Text>
       <br/>
       <Text fontWeight='bold'>Affordable price</Text>
       <Text>
       To raise the standard of living in our country, we are aimed to construct a luxurious house at an affordable price even for middle-class people.
       </Text>
       <Text fontWeight='bold' >Professional customer service</Text>
       <Text>
       We keep ourselves reachable 24/7 for any queries to solve. For every customer, we offer a construction service that comes with 5 years of warranty. We are satisfied when our customers are happy and peaceful.
       </Text>
     </Box>
     </Box>

     <Box bgColor='whitesmoke'  w='100%'  mt='150px'  >
     <Heading as="h1" size="xl" mb="80px" mt='80px'  ml='700px' >
         Mission
     </Heading>
     <Box   width='75%'  ml='250px'   >
       <Text fontSize="lg" mb="4" >
         We toil to achieve the vision by hard work and friendly service. Buildhood Infratech houses a bunch of talents that bring value and change to the organization. Our experts are go-getters and never stop for anything until they achieve the goal. We go the extra mile and make things happen.
       </Text>
       <Text fontWeight='bold'>Friendly working environment</Text>
       <Text>
       Our company is a great platform to learn and grow in a career. We create a friendly and inspired workplace for them to invent and implement unique ideas into the construction and design areas.
       </Text>
       <br/>
       <Text fontWeight='bold' >Updated with latest technology and ideas</Text>
       <Text>
       We are equipped with the latest technology that makes work easy and faster. Our team is updated with the designs and construction ideas that are trending worldwide. Researching and adopting the latest things has become our daily activity.
       </Text>
       <br/>
       <Text fontWeight='bold' >Time Management</Text>
       <Text>
       As promised to our customers, we ensure the project is completed on time as per the design with the quality intact. On-time project completion builds and enhances the trust between us and customers.
       </Text>
       <br/>
       <Text fontWeight='bold' >Regular check</Text>
       <Text>
       Our dedicated team regularly checks the construction work at every stage to make sure everything is going as per the finalized design. The regular check assure that we are moving in the right direction of project completion.
       </Text>
     </Box>
     </Box>

     <Box mt='100px'  mb='100px'    w='700px'  mr='300px'  >  
          <Heading  as= 'h1' fontSize = 'x-large'   >Hire Our Trusted Service</Heading>
          <HStack mt='20px' >
               <div style={{ display: 'flex', alignItems: 'center' }}>
                    <i className="fas fa-home" style={{ fontSize: "25", color: 'orange' }}></i>
                    <span style={{ marginLeft: '10px' }}>Quality Homes</span>
                    {/* Your other components or content */}
               </div>
               <div style={{ display: 'flex', alignItems: 'center' ,  marginLeft : '80px'  }}>
                    <i className="fas fa-eye" style={{ fontSize: "25", color: 'orange' }}></i>
                    <span style={{ marginLeft: '10px' }}>Transparent Service</span>
                    {/* Your other components or content */}
               </div>
               <div style={{ display: 'flex', alignItems: 'center' }}>
                    <i className="fas fa-inr" style={{ fontSize: "25", color: 'orange' , marginLeft : '80px'  }}></i>
                    <span style={{ marginLeft: '10px' }}>Great Value</span>
                    {/* Your other components or content */}
               </div>
          </HStack>     
          <Button color='orange'>Build</Button>
     </Box>

   </Flex>
  );
};

export default About;
