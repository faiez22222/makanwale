import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel ,  Box, Heading, Text, UnorderedList, ListItem , List  , Image } from '@chakra-ui/react';
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
    <Tabs isLazy   variant='unstyled' >  
    <TabList style={{ marginLeft: '100px' }} >
      {/* X-axis Tabs */}
      <Tab   _selected={{ color:'white', backgroundColor : 'orange' }}  bgColor='#DCDCDC'   style={{ width: '200px', height : '50px'    , marginLeft : '5px'   ,  }}  >Silver</Tab>
      <Tab _selected={{ color: 'white', bgColor : 'orange' }}   bgColor='#DCDCDC'   style={{ width: '200px', height : '50px' ,  marginLeft : '5px'   }} >Gold</Tab>
      <Tab _selected={{ color: 'white', bgColor : 'orange' }}  bgColor='#DCDCDC'   style={{ width: '200px', height : '50px' ,  marginLeft : '5px'   }} >Diomond</Tab>
      <Tab _selected={{ color: 'white', bgColor : 'orange' }}  bgColor='#DCDCDC'   style={{ width: '200px', height : '50px'   , marginLeft : '5px'  }} >Platinum</Tab>
    </TabList>

    <TabPanels>
      {/* Y-axis Tabs */}
      <TabPanel>
        <Tabs isLazy orientation="vertical" variant='unstyled' >
          <TabList>
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
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                Content for X1 and Y3
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </TabPanel>

      <TabPanel>
      <Tabs isLazy orientation="vertical">
          <TabList>
            <Tab>Y1</Tab>
            <Tab>Y2</Tab>
            <Tab>Y3</Tab>
          </TabList>
          <TabPanels>
               <TabPanel>
                  content for X2 and Y1
               </TabPanel>
               <TabPanel>
                  content for X2 and Y2
               </TabPanel>
               <TabPanel>
                  content for X2 and Y3
               </TabPanel>
          </TabPanels>
       </Tabs>   
      </TabPanel>

      <TabPanel>
      <Tabs isLazy orientation="vertical">
          <TabList>
            <Tab>Y1</Tab>
            <Tab>Y2</Tab>
            <Tab>Y3</Tab>
          </TabList>
          <TabPanels>
               <TabPanel>
                  content for X3 and Y1
               </TabPanel>
               <TabPanel>
                  content for X3 and Y2
               </TabPanel>
               <TabPanel>
                  content for X3 and Y3
               </TabPanel>
          </TabPanels>
       </Tabs>   
      </TabPanel>
    </TabPanels>
  </Tabs>
  );
};

export default Glow;
