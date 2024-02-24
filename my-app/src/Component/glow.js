import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel ,  Box, Heading, Text, UnorderedList, ListItem , List  } from '@chakra-ui/react';

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
    <Tabs isLazy>
    <TabList style={{ marginLeft: '50px' }} >
      {/* X-axis Tabs */}
      <Tab>X1</Tab>
      <Tab>X2</Tab>
      <Tab>X3</Tab>
    </TabList>

    <TabPanels>
      {/* Y-axis Tabs */}
      <TabPanel>
        <Tabs isLazy orientation="vertical">
          <TabList>
            <Tab>Y1</Tab>
            <Tab>Y2</Tab>
            <Tab>Y3</Tab>
          </TabList>

          {/* Content in the middle */}
          <TabPanels>
            <TabPanel>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '800px' , backgroundColor : '#fffafa ' }}>
              <Box>
      <Heading as="h4" size="md" color="black">
        Design & Drawings
      </Heading>
      <Box>
        <Heading as="h5" size="sm" fontWeight="bold" color="black">
          Package Includes:
        </Heading>
        <UnorderedList listStyleType="none" margin={0} marginBottom={4}>
          <ListItem>
            <Text>
              <Text size="md" fontWeight="bold" color="black">
                2D Floor Plans:
              </Text>
              <Text color="black">
                This floor plan is just for your reference only. Floor plan for each project will be designed as per client's requirements.
              </Text>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <Text size="md" fontWeight="bold" color="black">
                Building Elevation:
              </Text>
              <Text color="black">
                - 2D Preliminary elevation view
                <br />
                - 3D Elevation rendered view
                <br />
                - 2D elevation working drawings
              </Text>
              <Text as="span" color="black">
                This elevation image is just for your reference only. Elevation for each project will be designed as per client's taste and requirement.
              </Text>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <Text size="md" fontWeight="bold" color="black">
                Structural Drawings:
              </Text>
              <Text color="black">
                - Center line marking drawings
                <br />
                - Excavation drawings
                <br/>
                - Sump drawings
                <br/>
                - Footings and Columns drawings
                <br/>
                - Plinth beam drawings
                <br/>
                - Roof slab shuttering drawings
                <br/>
                - Roof slab reinforcement drawings 
                <br/>
                - Roof slab and Beam drawings for each level
                <br/>
                - Staircase drawings
                {/* ... (continue with the rest of the list items) */}
              </Text>
            </Text>
          </ListItem>
        </UnorderedList>
      </Box>
      <Box>
        {/* Warranty content goes here */}
      </Box>
    </Box>
              </div>
            </TabPanel>
            <TabPanel>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                Content for X1 and Y2
              </div>
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
        {/* Similar structure for X2 */}
        {/* ... */}
      </TabPanel>

      <TabPanel>
        {/* Similar structure for X3 */}
        {/* ... */}
      </TabPanel>
    </TabPanels>
  </Tabs>
  );
};

export default Glow;
