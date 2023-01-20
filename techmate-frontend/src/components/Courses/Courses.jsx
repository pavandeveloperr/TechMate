import React from 'react';
import { useState } from 'react';

// ChakraUI components
import { Container, Heading, Input, Text, HStack, Button } from '@chakra-ui/react';

const Courses = () => {
  const [keyword, setKeyword] = useState('');

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
      <HStack>
        <Button minW={'60'}>
          <Text children="Category1" />
        </Button>
      </HStack>
    </Container>
  );
};

export default Courses;
