import React from 'react';
import TweenOne from "rc-tween-one";
import BannerAnim, { Element } from "rc-banner-anim";
import "rc-banner-anim/assets/index.css";
import './Banner.css'
import { Box, Typography } from '@mui/material';
const BgElement = Element.BgElement;
const bannerData = [
    {
        key: '1',
        bannerBg: 'https://i.ibb.co/MyvncMG/pexels-terje-sollie-312029.jpg',
        title: 'STAY WITH US FEEL LIKE HOME',
        desc: 'Redefine your expectations.A hotel experience, unlike the rest'
    },
    {
        key: '2',
        bannerBg: 'https://i.ibb.co/C5pq032/pexels-homelane-com-1776574.jpg',
        title: 'B&B',
        desc: 'Beautiful Apartment and Cozy Atmosphere '
    }
]

const Banner = () => {
  return (
    <BannerAnim prefixCls="banner-user" 
      autoPlay
      autoPlaySpeed={1000}
      arrow= {false}
      thumb ={false}
      duration={700}
      delay={4000}
      autoPlayEffect={false}
    >
        {
            bannerData.map(singleBanner=> (
                <Element prefixCls="banner-user-elem" className='banner-user' key={singleBanner.key}>
                    <BgElement
                        key="bg"
                        className="bg"
                        style={{
                        backgroundImage: `url(${singleBanner.bannerBg})`
                        }}
                    />
                    <TweenOne
                        className="banner-details"
                        animation={{ y: 30, opacity: 0, type: "from" }}
                    >
                        
                        <Box sx={{maxWidth: '840px', mx: 'auto', display: 'flex', flexDirection: 'column', height: '100%',justifyContent:'center', alignItems: 'center'}}>
                            <Typography sx={{fontSize: '16px', fontFamily: 'Nunito'}}>{singleBanner.title}</Typography>
                            
                            <Typography variant='h2' sx={{fontFamily: 'Nunito',px:1, fontSize:{xs:'2rem', md: '4rem'}}}>{singleBanner.desc}</Typography>
                        
                        </Box>
                    </TweenOne>
                    
                    </Element>
            ))
        }
    
    
  </BannerAnim>
  );
};

export default Banner;