import React from 'react';
import TweenOne from "rc-tween-one";
import BannerAnim, { Element } from "rc-banner-anim";

import "rc-banner-anim/assets/index.css";

import './Banner.css'
import { Link } from 'react-router-dom';
const BgElement = Element.BgElement;
const bannerData = [
    {
        key: '1',
        bannerBg: 'https://i.ibb.co/rpzPwJK/pexels-fwstudio-172285-1-1.jpg',
        title: 'Welcome to our Restaurante',
        bannerLeftImg: '',
        bannerLeftImg: '',
        desc: 'Here we provided you special type of food, like sea food, kauwa Biriyani etc'
    },
    {
        key: '2',
        bannerBg: 'https://i.ibb.co/rpzPwJK/pexels-fwstudio-172285-1-1.jpg',
        title: 'Eat Drink Visit',
        desc: 'We are focus best food serve thats the client satisfition'
    },
    {
        key: '3',
        bannerBg: 'https://i.ibb.co/rpzPwJK/pexels-fwstudio-172285-1-1.jpg',
        title: 'Indulge Yourself',
        desc: 'The best place to kick off your day or just take a brak and enjoy here.'
    },
]

const Banner = () => {
  return (
    <BannerAnim prefixCls="banner-user" 
      autoPlay
      autoPlaySpeed={1000}
      duration={700}
      delay={3000}
      autoPlayEffect={false}
    >
        {
            bannerData.map(singleBanner=> (
                <Element prefixCls="banner-user-elem items-center" className='banner-user flex items-center' key={singleBanner.key}>
                    <BgElement
                        key="bg"
                        className="bg"
                        style={{
                        backgroundImage: `url(${singleBanner.bannerBg})`
                        }}
                    />
                    <TweenOne
                        className="banner-details w-11/12 mx-auto flex  justify-center items-center gap-5 pt-36"
                        animation={{ y: 30, opacity: 0, type: "from" }}
                    >
                        <div className="banner-left-img -rotate-2">
                        <img src="https://i.ibb.co/wLTpv0j/pexels-julie-aagaard-2097090.jpg" alt="" />
                        </div>
                        <div className="banner-desc">
                        <h2 className="text-6xl font-['Dancing_Script'] font-medium mb-2">{singleBanner.title}</h2>
                        <p className='text-xl text-gray-300 mb-5'>Here we provided you special type of food, like sea food, kauwa Biriyani etc</p>
                        <Link className='' to="/order-table"><button className='bg-[#f42f2c] py-3 px-7 text-xl font-bold'>Take Order</button></Link>
                        </div>
                        <div className="banner-right-img rotate-2">
                        <img src="https://i.ibb.co/LCPTTjG/pexels-dzenina-lukac-1583884.jpg" alt="" />
                        </div>
                    </TweenOne>
                    
                    </Element>
            ))
        }
    
    
  </BannerAnim>
  );
};

export default Banner;