import React from 'react';
import { useState } from 'react';

// ChakraUI components
import {
  Container,
  Heading,
  Input,
  Text,
  HStack,
  Button,
  Stack,
  VStack,
  Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Course = ({
  views,
  title,
  ImageSrc,
  id,
  addToPlaylistHandler,
  creator,
  discription,
  lecture,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={ImageSrc} boxSize="60" objectFit={'contain'} marginY="7" />
      <Heading
        textAlign={['ceneter', 'left']}
        maxW="200px"
        size={'sm'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />

      <Text children={discription} />

      <HStack>
        <Text
          fontWeight={'bold'}
          textTransform="uppercase"
          children={creator}
        />

        <Text
          fontWeight={'body'}
          textTransform="uppercase"
          children={creator}
        />
      </HStack>

      <Heading
        textAlign={'center'}
        size="xs"
        children={`Lectures - ${lectureCount}`}
        textTransform="uppercase"
      />

      <Heading
        size="xs"
        children={`Views - ${views}`}
        textTransform="uppercase"
      />

      <Stack direction={['column', 'row']} alignItems="center">
        <Link to={`/courses/${id}`}>
          <Button colorScheme={'yellow'}>Watch Now</Button>
        </Link>
        <Button
          // isLoading={loading}
          variant={'ghost'}
          colorScheme={'yellow'}
          onClick={() => addToPlaylistHandler(id)}
        >
          Add to playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const addToPlaylistHandler = () => {
    console.log("Added to Playlist")
  }

  const categories = [
    'Web Development',
    'Artificial Intelligence',
    'Data Structures & Algorithms',
    'App Development',
    'Game Development',
  ];

  return (
    <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
      <Heading children="All Courses" m={'8'} />

      {/* search input */}
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a course..."
        type={'text'}
        focusBorderColor="yellow.500"
      />

      {/* categories button */}
      <HStack
        overflowX={'auto'}
        paddingY="8"
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            width: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#D3D3D3',
            borderRadius: '24px',
          },
        }}
      >
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>
      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Course
          title={'Sample'}
          discription={'sample'}
          views={23}
          imageSrc={'https://pixabay.com/images/id-1076536/'}
          id={'sample'}
          creator={'sample'}
          lectureCount={4}
          addToPlaylistHandler = {addToPlaylistHandler}
        />
      </Stack>
    </Container>
  );
};

export default Courses;
