import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { Title, Verified } from '@mui/icons-material';

import { Video } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetail = () => {

  const [videoDetail, setVideoDetail] = useState(null)

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))
  }, [id]);

  if (!videoDetail?.snippet) return 'Loading...';
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight='95vh'>
      <Stack
        direction={{ xs: 'column', md: 'row'}}
      >
      {/* Main Video Screen */}
        <Box flex={1}>
          <Box
            sx={{ width: '100%', position: 'sticky', top: '86px' }}
          >
            <ReactPlayer 
              url={`https://www.youtube.com/watch?v=${id}`}
              className='react-player'
              controls
            />
            <Typography 
              color='#fff'
              variant='h5'
              fontWeight='bold'
              p={2}
            >
              {title}
            </Typography>
            <Stack
              direction='row'
              justifyContent='space-between'
              sx={{ color: '#fff'}}
              p={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: 'subtitle1', md: 'h6'}}
                  color='#fff'
                >
                  {channelTitle}
                  <Verified 
                    sx={{ fontSize: '12px', color: 'skyblue', ml: '5px' }}
                  />
                </Typography>
              </Link>
            {/* Views and Likes Count */}
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography
                  variant='body1'
                  sx={{ opacity: 0.7 }}
                >
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography
                  variant='body1'
                  sx={{ opacity: 0.7 }}
                >
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail