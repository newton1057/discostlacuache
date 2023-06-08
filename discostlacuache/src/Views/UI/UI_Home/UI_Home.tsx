//Importacion de CSS
import './UI_Home.css'

//Importacion de Packages
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';
import * as FcIcons from 'react-icons/fc'
import * as IoIcons from 'react-icons/io5'
//import Logo from '../../../assets/Logo/Logo.svg';
import NavBar from '../../Components/NavBar/NavBar'
//import { useAuthStore } from '../../store/AuthStore';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import "swiper/css/navigation";
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
SwiperCore.use([Virtual, Navigation, Pagination]);

//Importacion de Controller
//import * as Controller_Autorizacion from '../../../Controllers/Controller_Autorizacion'



function UI_Home() {
    return (

        <div className='Home'>
            <NavBar></NavBar>
            <div className='cont'>
                <h1>Bienvenidos</h1>
            </div>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 30000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}

                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>

                    <img className='Album' src='https://img.freepik.com/vector-premium/festival-musica-diseno-plantilla-cartel-horizontal_5883-1414.jpg'></img>

                </SwiperSlide>
                <SwiperSlide>
                    <img className='Album' src="https://media.istockphoto.com/id/1442352073/es/vector/entretenimiento-musical-de-ilustraci%C3%B3n-vectorial-gente-alrededor-en-el-letrero-de-m%C3%BAsica-y.jpg?s=1024x1024&w=is&k=20&c=eEL5aKpIMUBsFEQkKzmv3jbWz9hiVTSBtIVk_PwxcS4=" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='Album' src='https://img.freepik.com/vector-premium/plantilla-cartel-o-folleto-horizontal-evento-musical-diseno-colorido-degradado_85212-212.jpg'></img>
                </SwiperSlide>

            </Swiper>
            <div className='cont'>
                <h3>Ultimos exitos</h3>
            </div>

            <div className='Listas_Albums'>
                <img className='Listas_Album' src="https://i.scdn.co/image/ab67616d0000b2738d037895f2a04cf286b4f183" alt="" />
                <img className='Listas_Album' src='https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/36/ed/e8/36ede8e5-f413-4805-335b-993a49b2855b/00602557256796.rgb.jpg/1200x1200bf-60.jpg'></img>
            </div>
            <div className='cont'>
                <h3>Musica en Mexico</h3>
            </div>
            <div className='Listas_Albums'>
            <Swiper

                slidesPerView={3.5}
                centeredSlides={false}
                spaceBetween={15}
                
                navigation={false}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img className='Listas_Album' src="https://i.scdn.co/image/ab67616d0000b2738d037895f2a04cf286b4f183" alt="" /></SwiperSlide>
                <SwiperSlide>                
                    <img className='Listas_Album' src='https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/36/ed/e8/36ede8e5-f413-4805-335b-993a49b2855b/00602557256796.rgb.jpg/1200x1200bf-60.jpg'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='Listas_Album' src="https://i.scdn.co/image/ab67616d0000b273798aee313461b5e7a3d4efd8" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='Listas_Album' src="https://lastfm.freetls.fastly.net/i/u/500x500/5a39de49c6de1e5ebc2be9a5d161ab01.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='Listas_Album' src="https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/80/9e/ea/809eeac0-04b2-ca8a-7bf0-c4b5e25dd384/13UAAIM09736.rgb.jpg/1200x1200bb.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='Listas_Album' src="https://www.innewsmusic.com/wp-content/uploads/2023/03/Cantante-compositor-y-productor-mexicano-Leon-Larregui-3.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
            </div>
            <div className='cont'>
                <h3>Musica en Mexico</h3>
            </div>
            
            <div className='Listas_Albums'>
            <Swiper

                slidesPerView={3.5}
                centeredSlides={false}
                spaceBetween={20}
                
                navigation={false}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img className='Listas_Album' src="https://i.scdn.co/image/ab67616d0000b2738d037895f2a04cf286b4f183" alt="" /></SwiperSlide>
                <SwiperSlide>                
                    <img className='Listas_Album' src='https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/36/ed/e8/36ede8e5-f413-4805-335b-993a49b2855b/00602557256796.rgb.jpg/1200x1200bf-60.jpg'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='Listas_Album' src="https://i.scdn.co/image/ab67616d0000b273798aee313461b5e7a3d4efd8" alt="" />
                </SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
            </div>
        </div>

    )
}

export default UI_Home