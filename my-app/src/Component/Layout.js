// src/components/Layout.js
import React, { useContext, useState, useEffect , useRef } from "react";
import { Box, Flex, Spacer, Image, Link , Text, Center, Heading , Tab , TabList , Tabs, TabPanels, TabPanel , Menu , MenuButton , MenuList , MenuItem  , Button , MenuItemOption , MenuDivider , useDisclosure, VStack , Card, CardHeader, CardBody, CardFooter ,SimpleGrid  , Tag ,   Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  UnorderedList , 
  ListItem ,
  Container , 
} from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaTwitter } from "@fortawesome/fontawesome-free";
import "@fortawesome/fontawesome-free/css/all.css"; // Import the FontAwesome styles
import './Card.css'
import { motion } from 'framer-motion';

const Layout = () => {
    const [showPackageList, setShowPackageList] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleMouseEnter = () => {
      onOpen();
    };
  
    const handleFocus = () => {
      onOpen();
    };
    const handleOptionSelect = (option) => {
        // Handle selection logic here, e.g., display a message or perform an action
        console.log('Selected option:', option);
        onClose(); // Close the dropdown after selection
      };
    
  
    const handleBlur = () => {
      onClose();
    };
   
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleMouseEnterCard = (index) => {
      setHoveredCard(index);
    };
  
    const handleMouseLeaveCard = () => {
      setHoveredCard(null);
    };
  
    const getHoverStyle = (index) => ({
      transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)',
      transition: 'transform 0.2s ease-in-out',
    });


    const [isFlipped, setFlipped] = useState(false);

    const handleCardFlip = () => {
      setFlipped(!isFlipped);
    };

    const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Set up a timer to switch the active circular box
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 6);
    }, 2000); // Change the duration as needed

    // Clear the timer on component unmount to avoid memory leaks
    return () => clearInterval(intervalId);
  }, []);

  const radius = 50; // Adjust the radius as needed

  const calculatePosition = (index) => {
    const x = -70+ (index * 50); // Adjust the spacing as needed
    const y = 20; // Center vertically
    return { x, y };
  };

  const renderText = () => {
    switch (activeIndex) {
      case 0:
        return 'on +91 7802-80-80-80, our Technical expert will get in touch with you and take all your detailed requirements and provide you the estimation for your requiremen';
      case 1:
        return '2. Review our work Visit our Projects and get to know about our work and quality, come to office, discuss, and close the deal';
      case 2:
        return ' 3. Place the order Find your good day and sign the transparent construction contract. It helps us to proceed further with Design.  ';
      case 3:
        return ' construction work flow image 4. Design Our experienced Architect will provide you the quality Designs and Architecture as per your requirements and inputs. Discuss and finalize the Design.';
      case 4:
        return 'construction work flow image 5. Execution & Tracking Project execution will be started. Our project management team will be updating you the daily work progress in the form of Photos and Videos.';
      case 5:
        return ' 6. Move in We make sure the project completes on time without any hassles. You can Happily move into your Dream Home. ';
      default:
        return '';
    }
  };

  return (
    <>
        <Flex bgColor="orange"  w='100%' h='35px' >
           <Text>Hey</Text>
       </Flex>
       <Flex bgColor="white"  w='100%' h='70px' >
           <Center  ml='200px'  >
           <Heading  fontSize='4xl'  color="black" >MakanWale</Heading>
           <Spacer/>
           <Tabs variant="line"  color='black'  >
          <TabList>
            <Tab>Home</Tab>
            <Tab>
              <Menu>
                <MenuButton as={Button} onFocus={() => {}}>
                  Packages
                </MenuButton>
                <MenuList>
                  <MenuItem>Package 1</MenuItem>
                  <MenuItem>Package 2</MenuItem>
                  {/* Add more package options as needed */}
                </MenuList>
              </Menu>
            </Tab>
            <Tab>Project</Tab>
            <Tab>More</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
                
            </TabPanel>
          </TabPanels>
        </Tabs>
           </Center>
           <Menu isOpen={isOpen} onClose={onClose} >
      <MenuButton
        as={Button}
        onMouseEnter={handleMouseEnter}
        // onFocus={handleFocus}
        onMouseLeave={handleBlur}
      >
       <Text color='black' >Click me</Text> 
      </MenuButton>
      <MenuList>
        <MenuItemOption  onSelect={() => handleOptionSelect('Option 1')}>Option 1</MenuItemOption >
        <MenuItemOption  onSelect={() => handleOptionSelect('Option 1')}>Option 2</MenuItemOption >
        <MenuDivider />
        <MenuItemOption onSelect={() => handleOptionSelect('Option 1')} >More options...</MenuItemOption >
      </MenuList>
    </Menu>
       </Flex>

       <Flex
        justify='center'
        align='center'
        bgColor='white'
        mt='50px'
      >
        <VStack spacing={4}>
          <Text fontSize='2xl' fontWeight='bold' color='black'>
            Get an estimate for your home interiors
          </Text>
          <Text color='black' fontSize='md' noOfLines={2}>
            Calculate the approximate cost of doing up your home with our easy-to-use tool.
          </Text>
        </VStack>
      </Flex>

           
           


      <Box bgColor='white' p={8}>
        <Flex justify='space-between' wrap='wrap' rowGap={8}>
          {/* Repeat Card component for each card */}
          <Card
        onMouseEnter={() => handleMouseEnterCard(1)}
        onMouseLeave={handleMouseLeaveCard}
        style={getHoverStyle(1)}
      >
        <CardHeader>
          <Heading size='md'>Full Home Interior</Heading>
        </CardHeader>
        <CardBody>
          <Text>Know the estimate price for your full home interiors</Text>
        </CardBody>
        <CardFooter>
          <Tag>
             <Link href="https://your-link-target" target="_blank">
                   <Text>Calculate {'>'}</Text> 
             </Link>
          </Tag>
        </CardFooter>
      </Card>

      <Card 
          onMouseEnter={() => handleMouseEnterCard(2)}
          onMouseLeave={handleMouseLeaveCard}
          style={getHoverStyle(2)}
       >  
        <CardHeader>
          <Heading size='md'>Kitchen</Heading>
        </CardHeader>
        <CardBody>
          <Text>get an approximate costing for you kitchen interior</Text>
        </CardBody>
        <CardFooter>
        <Tag>
             <Link href="https://your-link-target" target="_blank">
             <Text>Calculate {'>'}</Text> 
      </Link>
          </Tag>
        </CardFooter>
      </Card>

      <Card  
         onMouseEnter={() => handleMouseEnterCard(3)}
         onMouseLeave={handleMouseLeaveCard}
         style={getHoverStyle(3)}
       >
        <CardHeader>
          <Heading size='md'>Wardrobe</Heading>
        </CardHeader>
        <CardBody>
          <Text>Our rough math for your wardrobe</Text>
        </CardBody>
        <CardFooter>
        <Tag>
             <Link href="https://your-link-target" target="_blank">
             <Text>Calculate {'>'}</Text> 
      </Link>
          </Tag>
        </CardFooter>
      </Card>
          {/* ... other cards ... */}
        </Flex>
      </Box>

     
    <Box  bgColor='white'>
      <Center>
      <Text color='black' >Expertise</Text>
      </Center>
      </Box>
    <Box bgColor='white' p={8}>
        <Flex justify='space-between' wrap='wrap' rowGap={1}>
        <Box
      className={`card ${isFlipped ? 'flipped' : ''}`}
      onClick={handleCardFlip}
    >
      <Box className="card-inner">
        <Box className="card-front">
          <Text  color='black' fontSize="xl">Home Construction</Text>
          {/* Add your image here */}
        </Box>
        <Box className="card-back" backgroundColor="orange" p={4} borderRadius="md">
          <Text color='black'>
            Independent House/Villa Constructions with High standards and Quality material
          </Text>
        </Box>
      </Box>
    </Box>

    <Box
      className={`card ${isFlipped ? 'flipped' : ''}`}
      onClick={handleCardFlip}
    >
      <Box className="card-inner">
        <Box className="card-front">
          <Text  color='black' fontSize="xl">Architecural design</Text>
          {/* Add your image here */}
        </Box>
        <Box className="card-back" backgroundColor="orange" p={4} borderRadius="md">
          <Text color='black' >  
             Best in class Architecture includes Floor plans, 3D Elevations and Structural drawings.
          </Text>
        </Box>
      </Box>
    </Box>


    <Box
      className={`card ${isFlipped ? 'flipped' : ''}`}
      onClick={handleCardFlip}
    >
      <Box className="card-inner">
        <Box className="card-front">
          <Text fontSize="xl" color='black' >interior design</Text>
          {/* Add your image here */}
        </Box>
        <Box className="card-back" backgroundColor="orange" p={4} borderRadius="md">
          <Text color='black' >
                  Best in class Interior designs and Great Value.
          </Text>
        </Box>
      </Box>
    </Box>

    <Box
      className={`card ${isFlipped ? 'flipped' : ''}`}
      onClick={handleCardFlip}
    >
      <Box className="card-inner">
        <Box className="card-front">
          <Text fontSize="xl" color='black' >Planning MAnagement</Text>
          {/* Add your image here */}
        </Box>
        <Box className="card-back" backgroundColor="orange" p={4} borderRadius="md">
          <Text color='black' >
          A good construction plan is the basis for developing the budget and the schedule for work.
          </Text>
        </Box>
      </Box>
    </Box>
        </Flex>
      </Box>

      <Box bgColor= '#ffefea'  h='800px' >
   
        <Heading   paddingTop='100px'  ml='650px'  color='black' >How It Works?</Heading>
      <motion.div
      style={{
        position: 'relative',
        marginTop: '50px',
        width: '300px',
        height: '300px',
        margin: 'auto',
      }}
    >
      {[...Array(6).keys()].map((index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            left: `${calculatePosition(index).x}%`,
            top: `${calculatePosition(index).y}%`,
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            backgroundColor: index === activeIndex ? '#ff8c00' : '#a9a9a9',
           // boxShadow: index === activeIndex ? '0 0 10px 5px rgba(0, 0, 255, 0.7)' : 'none',
          }}
        //   animate={{ scale: index === activeIndex ? 1.2 : 1 }}
        //   transition={{ duration: 0.5 }}
        >
            <Center>
          {index + 1}
          </Center>
        </motion.div>
      ))}
      {[...Array(5).keys()].map((index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            left: `${-55 + (index) * 50}%`, // Adjust the spacing as needed
            top: `${28}%`,
            width: '105px',
            height: '1px',
            backgroundColor: 'black',
          //  transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
      <motion.div
        style={{
          position: 'absolute',
          left: '65%',
          top: '150%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        <Card bgColor='white' w='900px' h='100px'  >
        <Text color='black' >{renderText()}</Text>
        </Card>
      </motion.div>
    </motion.div>

    </Box>

    <Box   bgColor='#f2f2f2'   alignItems="center" justifyContent="center"  >
        <Heading color='black' >Advantages of Cost-Plus Model</Heading>
        <Box overflowX='auto'   width='70%' ml='400px' >
      <Table  size='lg' width='70%' borderWidth="1px" borderColor="gray.300" >
        <Thead>
          <Tr>
            <Th></Th>
            <Th textAlign='center' bgColor='orange' color='white'   >Cost-Plus</Th>
            <Th textAlign='center' color='black' >Turn-Key / Fixed-Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black' >Money Safety</Td>
            <Td bgColor='#ffffff'color='black' >
              <UnorderedList>
                <ListItem>
                  Clients will be making payments only after they receive the material to their site and the specific work is completed. So, here the client's money will be safe with them, and they can pay only when required.
                </ListItem>
              </UnorderedList>
            </Td>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>
              <UnorderedList>
                <ListItem>
                  Clients will be required to make bulk advance payments upfront, irrespective of the progress or completion of specific work, posing a potential risk to their funds without a guarantee of receiving materials or completed work.
                </ListItem>
              </UnorderedList>
            </Td>
          </Tr>
          <Tr>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>Cost saving</Td>
            <Td bgColor='#ffffff'color='black'>
              <UnorderedList>
                <ListItem>
                  Clients will be saving up to 10% of the overall project cost since the payments will be made directly to the vendors.
                </ListItem>
              </UnorderedList>
            </Td>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>
              <UnorderedList>
                <ListItem>
                  No option to save as the project cost is Fixed, and Clients have to pay the agreed amount to the contractor.
                </ListItem>
              </UnorderedList>
            </Td>
          </Tr>
          <Tr>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>High Quality</Td>
            <Td bgColor='#ffffff'color='black'>
              <UnorderedList>
                <ListItem>
                  Contractor prioritizes quality over cost-cutting since their profit isn't directly tied to minimizing expenses, potentially leading to a higher standard of workmanship and usage of quality materials.
                </ListItem>
              </UnorderedList>
            </Td>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>
              <UnorderedList>
                <ListItem>
                  Here, Contractors prioritize cost-cutting over quality, as their profit is directly tied to minimizing expenses, potentially leading to a lower standard of workmanship and usage of subpar materials.
                </ListItem>
              </UnorderedList>
            </Td>
          </Tr>
          <Tr>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>Client Satisfaction</Td>
            <Td bgColor='#ffffff'color='black'>
              <UnorderedList>
                <ListItem>
                  With the ability to adjust project details as needed, Clients are more likely to be satisfied with the final result.
                </ListItem>
              </UnorderedList>
            </Td>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>
              <UnorderedList>
                <ListItem>
                  Due to the inability to modify project details as required, Clients may not be satisfied with the final result, as they have limited flexibility during the construction process.
                </ListItem>
              </UnorderedList>
            </Td>
          </Tr>
          <Tr>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>Transparency</Td>
            <Td bgColor='#ffffff'color='black'>
              <UnorderedList>
                <ListItem>
                  Cost-plus contracts provide transparent pricing with full client visibility into project costs, including materials, labor, contractor fee, and design costs. Detailed cost breakdowns ensure transparency, allowing informed decisions without surprises or hidden expenses.
                </ListItem>
              </UnorderedList>
            </Td>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>
              <UnorderedList>
                <ListItem>
                  Lack of transparency in pricing, as clients may not have full visibility into the project's costs, including detailed breakdowns of materials, labor, contractor fees, and design costs. This limited transparency may lead to uncertainties, potential surprises, and hidden costs, making it challenging for clients to make decisions.
                </ListItem>
              </UnorderedList>
            </Td>
          </Tr>
          <Tr>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>Flexibility</Td>
            <Td bgColor='#ffffff'color='black'>
              <UnorderedList>
                <ListItem>
                  Cost-plus facilitates adjustments and customizations without the need for extensive negotiation. This is particularly advantageous for projects requiring customization, as clients have the flexibility to modify project details, materials, and features as the project progresses, accommodating their evolving preferences.
                </ListItem>
              </UnorderedList>
            </Td>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>
              <UnorderedList>
                <ListItem>
                  Lack of flexibility can be a limitation for projects that require customization, as clients may face challenges in modifying project details, materials, and features during the course of the project, limiting their ability to accommodate evolving preferences.
                </ListItem>
              </UnorderedList>
            </Td>
          </Tr>
          <Tr>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>Control over Project</Td>
            <Td bgColor='#ffffff'color='black'>
              <UnorderedList>
                <ListItem>
                  Cost-plus model provides improved project control, empowering clients with active involvement in decision-making processes for every aspect of their project. This enhances their ability to influence and oversee the desired outcomes.
                </ListItem>
              </UnorderedList>
            </Td>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>
              <UnorderedList>
                <ListItem>
                  Fixed-price models limit client control over project decisions, restricting their involvement in decision-making processes for various aspects of their project. This constrains their ability to influence and oversee outcomes, reducing the level of empowerment in the project.
                </ListItem>
              </UnorderedList>
            </Td>
          </Tr>
          <Tr>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>Project Timeline</Td>
            <Td bgColor='#ffffff'color='black'>
              <UnorderedList>
                <ListItem>
                  In a cost-plus, projects often experience expedited progress due to the flexible nature of the contract. With the ability to make swift decisions and adjustments, clients and contractors collaborate seamlessly, promoting efficiency and ensuring timely completion.
                </ListItem>
              </UnorderedList>
            </Td>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>
              <UnorderedList>
                <ListItem>
                  Projects may encounter slower progress due to the rigid nature of the agreement. Limited flexibility in decision-making and adjustments can lead to potential delays, as clients and contractors face challenges in adapting to changing circumstances, potentially impacting efficiency and the timely completion of the project.
                </ListItem>
              </UnorderedList>
            </Td>
          </Tr>
          <Tr>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>Value Engineering</Td>
            <Td bgColor='#ffffff'color='black'>
              <UnorderedList>
                <ListItem>
                  In cost-plus, contractors are free from the constraints of a fixed budget, fostering a willingness to propose innovative ideas. Unlike fixed-price contracts, this approach allows for greater flexibility and encourages creative solutions. The absence of budget restrictions enables a more dynamic and open approach to project execution.
                </ListItem>
              </UnorderedList>
            </Td>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>
              <UnorderedList>
                <ListItem>
                  In fixed-price contracts, the predetermined budget restricts contractors from proposing innovative ideas, in contrast to the flexibility allowed by cost-plus models. The rigidity of fixed budgets can discourage creative solutions and hinder a dynamic approach to project execution.
                </ListItem>
              </UnorderedList>
            </Td>
          </Tr>
          <Tr>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>Manpower</Td>
            <Td bgColor='#ffffff'color='black'>
              <UnorderedList>
                <ListItem>
                  Contractors can strategically allocate skilled manpower, prioritizing the delivery of high-quality work. This approach allows for a focus on expertise and professionalism, enhancing the overall quality of the project.
                </ListItem>
              </UnorderedList>
            </Td>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>
              <UnorderedList>
                <ListItem>
                  With the constraint of cost minimization, contractors may struggle to strategically allocate skilled manpower, compromising the prioritization of high-quality work. This could impact the overall project quality by limiting the focus on expertise and professionalism.
                </ListItem>
              </UnorderedList>
            </Td>
          </Tr>
        </Tbody>
        <TableCaption textAlign='center'>Imperial to metric conversion factors</TableCaption>
      </Table>
    </Box>
    </Box>

    <Box   bgColor='#ffefea'   alignItems="center" justifyContent="center"  >
        <Heading color='black' >The Buildhood Advantage</Heading>
        <Box overflowX='auto'   width='70%' ml='400px' >
      <Table  size='lg' width='70%' borderWidth="1px" borderColor="gray.300" >
        <Thead>
          <Tr>
            <Th></Th>
            <Th textAlign='center' bgColor='orange' color='white'   >BUILDHOOD</Th>
            <Th textAlign='center' color='black' >	TYPICAL EXPERIENCE</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black' >PRICE</Td>
            <Td bgColor='#ffffff'color='black' >
              <UnorderedList>
                <ListItem>
                Best price guarantee
                </ListItem>
                <ListItem>
                No hidden costs
                </ListItem>
              </UnorderedList>
            </Td>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>
              <UnorderedList>
                <ListItem>
                Comparatively higher prices
                </ListItem>
                <ListItem>
                Price hike between first quote and final cost
                </ListItem>
              </UnorderedList>
            </Td>
          </Tr>
          <Tr>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>Quality</Td>
            <Td bgColor='#ffffff'color='black'>
              <UnorderedList>
                <ListItem>
                Branded material
                </ListItem>
                <ListItem>
                320+ Quality checks
                </ListItem>
                <ListItem>
                ISO Quality standards
                </ListItem>
                <ListItem>
                In-house project management, No sub-contractors
                </ListItem>
                <ListItem>
                Quality Finishing
                </ListItem>
              </UnorderedList>
            </Td>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>
              <UnorderedList>
                <ListItem>
                Inferior materials used to cut the costs
                </ListItem>
                <ListItem>
                No quality checks
                </ListItem>
                <ListItem>
                Poor standards
                </ListItem>
                <ListItem>
                Outsourced to Sub-contractors
                </ListItem>
                <ListItem>
                Poor finishing
                </ListItem>
              </UnorderedList>
            </Td>
          </Tr>
          <Tr>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>SUB-CONTRACTORS</Td>
            <Td bgColor='#ffffff'color='black'>
              <UnorderedList>
                <ListItem>
                No Sub-Contractors
                </ListItem>
                <ListItem>
                In-house project management, No third-party involvement.
                </ListItem>
              </UnorderedList>
            </Td>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>
              <UnorderedList>
                <ListItem>
                YES
                </ListItem>
                <ListItem>
                Mostly outsourced to Sub-contractors
                </ListItem>
              </UnorderedList>
            </Td>
          </Tr>
          <Tr>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>TRANSPARENCY</Td>
            <Td bgColor='#ffffff'color='black'>
              <UnorderedList>
                <ListItem>
                Transparent at every level
                </ListItem>
                <ListItem>
                Pricing, Material specification, Process and Execution
                </ListItem>
              </UnorderedList>
            </Td>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>
              <UnorderedList>
                <ListItem>
                Limited to No transparency
                </ListItem>
              </UnorderedList>
            </Td>
          </Tr>
          <Tr>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>CONVINIENCE</Td>
            <Td bgColor='#ffffff'color='black'>
              <UnorderedList>
                <ListItem>
                One-stop solution
                </ListItem>
                <ListItem>
                We take care from Plan approval to handover the project without any hassles
                </ListItem>
              </UnorderedList>
            </Td>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>
              <UnorderedList>
                <ListItem>
                Hassle experience to No support
                </ListItem>
              </UnorderedList>
            </Td>
          </Tr>
          <Tr>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>DESIGN</Td>
            <Td bgColor='#ffffff'color='black'>
              <UnorderedList>
                <ListItem>
                Personalized Designs and Architecture
                </ListItem>
              </UnorderedList>
            </Td>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>
              <UnorderedList>
                <ListItem>
                Cookie-cutter designs and Architecture
                </ListItem>
              </UnorderedList>
            </Td>
          </Tr>
          <Tr>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>TIMELINES</Td>
            <Td bgColor='#ffffff'color='black'>
              <UnorderedList>
                <ListItem>
                On-Time Project Completion with appropriate Timelines
                </ListItem>
                <ListItem>
                Regular updates with Project tracking
                </ListItem>
              </UnorderedList>
            </Td>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>
              <UnorderedList>
                <ListItem>
                Delays in project completion and unreliable timelines
                </ListItem>
                <ListItem>
                Poor communication on Project updates/delays
                </ListItem>
              </UnorderedList>
            </Td>
          </Tr>
          <Tr>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>WARRANTY</Td>
            <Td bgColor='#ffffff'color='black'>
              <UnorderedList>
                <ListItem>
                5 years warranty for the service
                </ListItem>
                <ListItem>
                We provide after sales service
                </ListItem>
              </UnorderedList>
            </Td>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>
              <UnorderedList>
                <ListItem>
                No warranty or Warranty for namesake
                </ListItem>
                <ListItem>
                No after sales service
                </ListItem>
              </UnorderedList>
            </Td>
          </Tr>
          <Tr>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>Value Engineering</Td>
            <Td bgColor='#ffffff'color='black'>
              <UnorderedList>
                <ListItem>
                  In cost-plus, contractors are free from the constraints of a fixed budget, fostering a willingness to propose innovative ideas. Unlike fixed-price contracts, this approach allows for greater flexibility and encourages creative solutions. The absence of budget restrictions enables a more dynamic and open approach to project execution.
                </ListItem>
              </UnorderedList>
            </Td>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>
              <UnorderedList>
                <ListItem>
                  In fixed-price contracts, the predetermined budget restricts contractors from proposing innovative ideas, in contrast to the flexibility allowed by cost-plus models. The rigidity of fixed budgets can discourage creative solutions and hinder a dynamic approach to project execution.
                </ListItem>
              </UnorderedList>
            </Td>
          </Tr>
          <Tr>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>Manpower</Td>
            <Td bgColor='#ffffff'color='black'>
              <UnorderedList>
                <ListItem>
                  Contractors can strategically allocate skilled manpower, prioritizing the delivery of high-quality work. This approach allows for a focus on expertise and professionalism, enhancing the overall quality of the project.
                </ListItem>
              </UnorderedList>
            </Td>
            <Td fontWeight='bold' bgColor='#f2f2f2' color='black'>
              <UnorderedList>
                <ListItem>
                  With the constraint of cost minimization, contractors may struggle to strategically allocate skilled manpower, compromising the prioritization of high-quality work. This could impact the overall project quality by limiting the focus on expertise and professionalism.
                </ListItem>
              </UnorderedList>
            </Td>
          </Tr>
        </Tbody>
        <TableCaption textAlign='center'>Imperial to metric conversion factors</TableCaption>
      </Table>
    </Box>
    </Box>

    <Flex
       bgColor= '#fffafa'
      direction="column"
      align="center"
    >
      <Heading as="h3" textAlign="center" mb="4" color='black' marginTop='50px'  >
          Why choose Buildhood?
        </Heading>
      <Container   w='500px'  marginLeft='300px' marginTop='50px'  >
        <SimpleGrid columns={4} spacingX="250" spacingY="8"    >
          {/* Card 1 */}
          <Card
            
          
            textAlign="center"
            boxShadow="lg"
            bg="white"
            height='200px'
            w='200px'

          >
        
            <CardBody>
              <Text mt="4" fontWeight="600" textTransform="uppercase" color='black' >
                No subcontractors
              </Text>
            </CardBody>
          </Card>

          {/* Card 2 */}
          <Card
       
       textAlign="center"
       boxShadow="lg"
       bg="white"
       height='200px'
       w='200px'
          
          >
         
            <CardBody>
              <Text mt="4" fontWeight="600" textTransform="uppercase" color='black'>
                Professional Project Management
              </Text>
            </CardBody>
          </Card>

          {/* Card 3 */}
          <Card
            
            textAlign="center"
            boxShadow="lg"
            bg="white"
            height='200px'
            w='200px'
      
          >
          
            <CardBody>
              <Text mt="4" fontWeight="600" textTransform="uppercase" color='black'>
                Unique and modern designs
              </Text>
            </CardBody>
          </Card>

          {/* Card 4 */}
          <Card
              
              textAlign="center"
              boxShadow="lg"
              bg="white"
              height='200px'
              w='200px'
          
          >
           
            <CardBody>
              <Text mt="4" fontWeight="600" textTransform="uppercase" color='black'>
                Quality
              </Text>
            </CardBody>
          </Card>
          <Card
           
           textAlign="center"
           boxShadow="lg"
           bg="white"
           height='200px'
           w='200px'
          >
           
            <CardBody>
              <Text mt="4" fontWeight="600" textTransform="uppercase" color='black'>
                  Transparency
              </Text>
            </CardBody>
          </Card>

          <Card
           
           textAlign="center"
           boxShadow="lg"
           bg="white"
           height='200px'
           w='200px'
          
          >
           
            <CardBody>
              <Text mt="4" fontWeight="600" textTransform="uppercase" color='black'>
                 Brand/Trustworthy
              </Text>
            </CardBody>
          </Card>

          <Card
          
          textAlign="center"
          boxShadow="lg"
          bg="white"
          height='200px'
          w='200px'
          
          >
           
            <CardBody>
              <Text mt="4" fontWeight="600" textTransform="uppercase" color='black'>
              Professional Customer Service
              </Text>
            </CardBody>
          </Card>

          <Card
           
           textAlign="center"
            boxShadow="lg"
            bg="white"
            height='200px'
            w='200px'
          
          >
           
            <CardBody>
              <Text mt="4" fontWeight="600" textTransform="uppercase" color='black'>
                 Hassle-Free Service
              </Text>
            </CardBody>
          </Card>

          {/* Repeat similar structure for other cards */}
        </SimpleGrid>
      </Container>
    </Flex>

    </>
  );
};

export default Layout;
