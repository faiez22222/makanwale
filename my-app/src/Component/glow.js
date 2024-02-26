import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel ,  Box, Heading, Text, UnorderedList, ListItem , List  , Image , Flex, Center } from '@chakra-ui/react';
import icon1 from './Images/icon1.png'
import icon2 from './Images/icon2.png'
import icon3 from './Images/icon3.png'
import icon4 from './Images/icon4.png'
import icon5 from './Images/icon5.png'
import icon6 from './Images/icon6.png'
import icon7 from './Images/icon7.png'
import icon8 from './Images/icon8.png'
import icon9 from './Images/icon1.png'
import icon10 from './Images/icon10.png'
import icon11 from './Images/icon11.png'
import icon12 from './Images/icon12.png'
import icon13 from './Images/icon13.png'
import Tabpanel11 from './Tabpanle11';
import Tabpanel12 from './Tabpanel12';
import Tabpanel13 from './Tabpanel13';
import Tabpanel14 from './Tabpanel14';
import Tabpanel15 from './Tabpanel15';
import Tabpanel16 from './Tabpanel16';
import Tabpanel17 from './Tabpanel17';
import Tabpanel18 from './Tabpanel18';
import Tabpanel19 from './Tabpanel19';
import Tabpanel110 from './Tabpanel110';
import Tabpanel111 from './Tabpanel111';
import Tabpanel112 from './Tabpanel112';
import Tabpanel113 from './Tabpanel113';
import Tabpane21 from './Tabpane21';
import Tabpane22 from './Tabpane22';
import Tabpane23 from './Tabpane23';
import Tabpane24 from './Tabpane24';
import Tabpane25 from './Tabpane25';
import Tabpane26 from './Tabpane26';
import Tabpane27 from './Tabpane27';
import Tabpane28 from './Tabpane28';
import Tabpane29 from './Tabpane29';
import Tabpane210 from './Tabpane210';
import Tabpane211 from './Tabpane211';
import Tabpane212 from './Tabpane212';
import Tabpane213 from './Tabpane213';
import Tabpane31 from './Tabpane31';
import Tabpane33 from './Tabpane33';
import Tabpane34 from './Tabpane34';
import Tabpane35 from './Tabpane35';
import Tabpane36 from './Tabpane36';
import Tabpane37 from './Tabpane37';
import Tabpane38 from './Tabpane38';
import Tabpane39 from './Tabpane39';
import Tabpane310 from './Tabpane310';
import Tabpane311 from './Tabpane311';
import Tabpane312 from './Tabpane312';
import Tabpane313 from './Tabpane313';
import Tabpane41 from './Tabpane41';
import Tabpane42 from './Tabpane42';
import Tabpane43 from './Tabpane43';
import Tabpane44 from './Tabpane44';
import Tabpane45 from './Tabpane45'; 
import Tabpane46 from './Tabpane46';
import Tabpane47 from './Tabpane47';
import Tabpane48 from './Tabpane48';
import Tabpane49 from './Tabpane49';
import Tabpane410 from './Tabpane410';
import Tabpane411 from './Tabpane411';
import Tabpane412 from './Tabpane412';
import Tabpane413 from './Tabpane413';
import './animation.css'

const Glow = () => {
  // State to track active tabs
  const [activeTabX, setActiveTabX] = useState(0);
  const [activeTabY, setActiveTabY] = useState(0);

  // Data for tabs
  const tabsX = ['TabX1', 'TabX2', 'TabX3'];
  const tabsY = ['TabY1', 'TabY2', 'TabY3'];

  // Content for each tab
  const tabContent = [
    ['Content 1,1', 'Content 1,2', 'Content 1,3'],
    ['Content 2,1', 'Content 2,2', 'Content 2,3'],
    ['Content 3,1', 'Content 3,2', 'Content 3,3'],
  ];

  return (
    <Flex   direction='column'  align='center'    >
          <div class="wrapper"  style={{display:'flex' ,alignItems : 'center' ,  flexDirection: 'column' , marginTop : '200px' }}  >
            <h1>Home Construction Packages</h1>
            <h1>End-to-End Construction</h1>
          </div>
        <div style={{borderWidth : '2px' , color : 'black' , width : '72%',  position:'absolute', top:'1215px' , left : "231px" }} ></div>
        <div style={{borderWidth : '2px' , color : 'black' , height : '63.5%',  position:'absolute', top:'415px' , left : '1318.5px' }} ></div>
    <Tabs isLazy   variant='unstyled' style={{width :  '75%'   ,marginTop:'100px', height:'900px'  }  }   >  
    <TabList style={{ marginLeft: '100px' }} >
      {/* X-axis Tabs */}
      <Tab   _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='#DCDCDC'   style={{ width: '350px', height : '50px'        }}  >Silver</Tab>
      <Tab _selected={{ color: 'white', bgColor : 'orange' }}   bgColor='#DCDCDC'   style={{ width: '350px', height : '50px' ,  marginLeft : '5px'   }} >Gold</Tab>
      <Tab _selected={{ color: 'white', bgColor : 'orange' }}  bgColor='#DCDCDC'   style={{ width: '350px', height : '50px' ,  marginLeft : '5px'   }} >Diomond</Tab>
      <Tab _selected={{ color: 'white', bgColor : 'orange' }}  bgColor='#DCDCDC'   style={{ width: '350px', height : '50px'   , marginLeft : '5px'  }} >Platinum</Tab>
    </TabList>

    <TabPanels>
      {/* Y-axis Tabs */}
      <TabPanel >
        <Tabs isLazy orientation="vertical" variant='unstyled'  height='800px'  style={{position: 'absolute' , top: '50px' ,  left: '30px' }} >
          <TabList  bgColor='grey'  >
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon1}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon2}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon3}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon4}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon5}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon6}
              alt='Dan Abramov'
            />
              </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon7}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon8}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon9}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon10}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon11}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon12}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} ><Image
              boxSize='25px'
              objectFit='cover'
              src= {icon13}
              alt='Dan Abramov'
            /></Tab>
          </TabList>

          {/* Content in the middle */}
          <TabPanels>
            <TabPanel>
                  <Tabpanel11/>
            </TabPanel>
            <TabPanel>
              <Tabpanel12/>
            </TabPanel>
            <TabPanel>
               <Tabpanel13/>
            </TabPanel>
            <TabPanel>
               <Tabpanel14/>
            </TabPanel>
            <TabPanel>
               <Tabpanel15/>
            </TabPanel>
            <TabPanel>
               <Tabpanel16/>
            </TabPanel>
            <TabPanel>
               <Tabpanel17/>
            </TabPanel>
            <TabPanel>
               <Tabpanel18/>
            </TabPanel>
            <TabPanel>
               <Tabpanel19/>
            </TabPanel>
            <TabPanel>
               <Tabpanel110/>
            </TabPanel>
            <TabPanel>
               <Tabpanel111/>
            </TabPanel>
            <TabPanel>
               <Tabpanel112/>
            </TabPanel>
            <TabPanel>
               <Tabpanel113/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </TabPanel>

      <TabPanel>
        <Tabs isLazy orientation="vertical" variant='unstyled'  height='800px' >
          <TabList bgColor='grey' >
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon1}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon2}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon3}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon4}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon5}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon6}
              alt='Dan Abramov'
            />
              </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon7}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon8}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon9}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon10}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon11}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon12}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} ><Image
              boxSize='25px'
              objectFit='cover'
              src= {icon13}
              alt='Dan Abramov'
            /></Tab>
          </TabList>

          {/* Content in the middle */}
          <TabPanels>
            <TabPanel>
                  <Tabpanel11/>
            </TabPanel>
            <TabPanel>
              <Tabpanel12/>
            </TabPanel>
            <TabPanel>
               <Tabpanel13/>
            </TabPanel>
            <TabPanel>
               <Tabpanel14/>
            </TabPanel>
            <TabPanel>
               <Tabpanel15/>
            </TabPanel>
            <TabPanel>
               <Tabpanel16/>
            </TabPanel>
            <TabPanel>
               <Tabpanel17/>
            </TabPanel>
            <TabPanel>
               <Tabpanel18/>
            </TabPanel>
            <TabPanel>
               <Tabpanel19/>
            </TabPanel>
            <TabPanel>
               <Tabpanel110/>
            </TabPanel>
            <TabPanel>
               <Tabpanel111/>
            </TabPanel>
            <TabPanel>
               <Tabpanel112/>
            </TabPanel>
            <TabPanel>
               <Tabpanel113/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </TabPanel>


      <TabPanel>
        <Tabs isLazy orientation="vertical" variant='unstyled'  height='800px' >
          <TabList bgColor='grey' >
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon1}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon2}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon3}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon4}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon5}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon6}
              alt='Dan Abramov'
            />
              </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon7}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon8}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon9}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon10}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon11}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon12}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} ><Image
              boxSize='25px'
              objectFit='cover'
              src= {icon13}
              alt='Dan Abramov'
            /></Tab>
          </TabList>

          {/* Content in the middle */}
          <TabPanels>
            <TabPanel>
                  <Tabpanel11/>
            </TabPanel>
            <TabPanel>
              <Tabpanel12/>
            </TabPanel>
            <TabPanel>
               <Tabpanel13/>
            </TabPanel>
            <TabPanel>
               <Tabpanel14/>
            </TabPanel>
            <TabPanel>
               <Tabpanel15/>
            </TabPanel>
            <TabPanel>
               <Tabpanel16/>
            </TabPanel>
            <TabPanel>
               <Tabpanel17/>
            </TabPanel>
            <TabPanel>
               <Tabpanel18/>
            </TabPanel>
            <TabPanel>
               <Tabpanel19/>
            </TabPanel>
            <TabPanel>
               <Tabpanel110/>
            </TabPanel>
            <TabPanel>
               <Tabpanel111/>
            </TabPanel>
            <TabPanel>
               <Tabpanel112/>
            </TabPanel>
            <TabPanel>
               <Tabpanel113/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </TabPanel>

      <TabPanel>
        <Tabs isLazy orientation="vertical" variant='unstyled'  height='800px' >
          <TabList bgColor='grey' >
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon1}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon2}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon3}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon4}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon5}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon6}
              alt='Dan Abramov'
            />
              </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon7}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon8}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon9}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon10}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon11}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} >
            <Image
              boxSize='25px'
              objectFit='cover'
              src= {icon12}
              alt='Dan Abramov'
            />
            </Tab>
            <Tab _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='grey'   style={{ width: '70px', height : '50px'     ,  }} ><Image
              boxSize='25px'
              objectFit='cover'
              src= {icon13}
              alt='Dan Abramov'
            /></Tab>
          </TabList>

          {/* Content in the middle */}
          <TabPanels>
            <TabPanel>
                  <Tabpanel11/>
            </TabPanel>
            <TabPanel>
              <Tabpanel12/>
            </TabPanel>
            <TabPanel>
               <Tabpanel13/>
            </TabPanel>
            <TabPanel>
               <Tabpanel14/>
            </TabPanel>
            <TabPanel>
               <Tabpanel15/>
            </TabPanel>
            <TabPanel>
               <Tabpanel16/>
            </TabPanel>
            <TabPanel>
               <Tabpanel17/>
            </TabPanel>
            <TabPanel>
               <Tabpanel18/>
            </TabPanel>
            <TabPanel>
               <Tabpanel19/>
            </TabPanel>
            <TabPanel>
               <Tabpanel110/>
            </TabPanel>
            <TabPanel>
               <Tabpanel111/>
            </TabPanel>
            <TabPanel>
               <Tabpanel112/>
            </TabPanel>
            <TabPanel>
               <Tabpanel113/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </TabPanel>

    </TabPanels>
  </Tabs>
  </Flex>
  );
};

export default Glow;
