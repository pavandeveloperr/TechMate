import { Box, Button, Grid, HStack, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import cursor from '../../../assets/images/cursor.png'
import Sidebar from '../Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import CourseModal from './CourseModal'
import ReactCourseImage from '../../../assets/CourseImages/ecomm.png'

const AdminCourses = () => {

  const courses = [{
    _id: "shfliojrio2jsklfnlsf",
    title: "React Course",
    Category: "Web Development",
    poster: {
      url: ReactCourseImage,
    },
    createdBy: "Pavan Kulkarni",
    views: 123,
    numOfVideos: 12,
  }]

  const { isOpen, onClose, onOpen } = useDisclosure();

  const CourseDetailsHandler = (userId) => {
    onOpen();
  }

  const deleteButtonHandler = (userId) => {
    console.log(userId);
  }

  const deleteLectureButtonHandler = (courseId, lectureId) => {
    console.log(courseId)
    console.log(lectureId)
  }

  const addLectureHandler = (e, courseId, title, description, video) => {
    e.preventDefault();
  };

  return (
    <Grid
      css={{ cursor: `url(${cursor}), default` }}
      minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>

      <Box p={['0', '8']} overflowX='auto'>
        <Heading textTransform={'uppercase'} children='All Courses' my='16' textAlign={['cetner', 'left']} />

        {/* ChakraUi table component */}
        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size='lg'>
            <TableCaption>All Available Courses in the Database</TableCaption>

            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>

            <Tbody>
              {courses.map(item => (
                <Row CourseDetailsHandler={CourseDetailsHandler} deleteButtonHandler={deleteButtonHandler} key={item._id} item={item} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        <CourseModal id={"igjwsliknglanla"} course="React Course" isOpen={isOpen} onClose={onClose} deleteButtonHandler={deleteLectureButtonHandler}
          addLectureHandler={addLectureHandler} />
      </Box>

      <Sidebar />
    </Grid>
  )
}

function Row({ item, CourseDetailsHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url} alt='courseImage' />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>


      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>

          <Button onClick={() => CourseDetailsHandler(item._id)} variant={'outline'} color='purple.500'>View Lectures</Button>

          <Button onClick={() => deleteButtonHandler(item._id)} color='purple.600'>
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  )
}

export default AdminCourses
