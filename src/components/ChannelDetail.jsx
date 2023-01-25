import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([])

  const { id } = useParams();

  useEffect(() => {
    // fetch Channel Details 
    fetchFromAPI(`channels?part="snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));
    // fetch Channel Videos
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items))
  }, [id])

  return (
    <Box
      minHeight='95vh'
    >
      {/* Gradient Color Div */}
      <Box>
        <div 
          style={{
            background: 'linear-gradient(180deg, rgba(219,217,12,1) 0%, rgba(165,28,48,1) 100%)',
            zIndex: 10,
            height: '300px'
          }}
        />
        {/* Channel Profile */}
        <ChannelCard  
          channelDetail={channelDetail}
          marginTop='-120px'
        />
      </Box>
      <Box display='flex' p='2'>
        <Box
          sx={{ mr: { sm: '100px' } }}
        />
          <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail