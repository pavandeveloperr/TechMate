import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import introVideo from '../../assets/videos/intro.mp4'

const CoursePage = () => {
    const [lectureNumber, setLectureNumber] = useState(0);

    const lectures = [{
        _id: "aflanfkan",
        title: "sample",
        description: "sample description",
        video: {
            url: "safafg",
        },
    },
    {
        _id: "aflanfkan2",
        title: "sample2",
        description: "sample description",
        video: {
            url: "safafg",
        },
    },
    {
        _id: "aflanfkan3",
        title: "sample3",
        description: "sample description",
        video: {
            url: "safafg",
        },
    }];
    return (
        <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
            <Box>
                <video
                    width={'100%'}
                    controls
                    controlsList='nodownload noremoteplayback'
                    disablePictureInPicture
                    src={introVideo}>
                </video>

                <Heading m='4' children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}></Heading>

                <Heading m='4' children='Description' />
                <Text m={'4'} children={lectures[lectureNumber].description} />

            </Box>

            <VStack>
                {
                    lectures.map((element, index) => (
                        <button 
                        key={element._id}
                        onClick={()=> setLectureNumber(index)}
                        style={{
                        width: "100%",
                        padding:"1rem",
                        textAlign: "center",
                        margin: 0,
                        borderBottom: "1px solid rgba(0, 0, 0, 0.2)"}}
                        >
                            <Text noOfLines={1}>
                                #{index+1} {element.title}
                            </Text>
                        </button>
                    ))
                }
                
            </VStack>
        </Grid>
    )
}

export default CoursePage