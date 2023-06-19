//Importacion de CSS
import './UI_Home.css'

//Importacion de Packages
import { motion } from "framer-motion"
import NavBar from '../../Components/NavBar/NavBar'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import "swiper/css/navigation";
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Link } from 'react-router-dom';
SwiperCore.use([Virtual, Navigation, Pagination]);

//Importacion de Controller
import * as Controller_Home from '../../../Controllers/Controller_Home';
import { useCallback, useEffect, useState } from 'react';

function UI_Home() {
    const [Albums, setAlbums] = useState<any[]>([])
    
    const getAlbums = useCallback(async () => {
        const Products = await Controller_Home.ObtenerAlbums();
        setAlbums(Products)
    },[])

    useEffect(() => {
        getAlbums()
    }, [getAlbums])

    return (
        <>
            <motion.div
                className="Animated"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <NavBar></NavBar>
                <div className='Home'>
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
                        <Swiper

                            slidesPerView={3.5}
                            centeredSlides={false}
                            spaceBetween={15}

                            navigation={false}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <Link to="/Producto">

                                    <img className='Listas_Album' src="https://i.scdn.co/image/ab67616d0000b2738d037895f2a04cf286b4f183" alt="" />
                                </Link>
                            </SwiperSlide>
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
            </motion.div>
        </>
    )
}

export default UI_Home