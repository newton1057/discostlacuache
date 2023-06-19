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
    const [Albums_Fisicos, setAlbums_Fisicos] = useState<any[]>([]);
    const [Albums_Digitales, setAlbums_Digitales] = useState<any[]>([]);

    const getAlbums_Digitales = useCallback(async () => {
        const Productos_Digitales = await Controller_Home.ObtenerAlbumsDigital();
        setAlbums_Digitales(Productos_Digitales);
    }, [])

    const getAlbums_Fisicos = useCallback(async () => {
        const Productos_Fisicos = await Controller_Home.ObtenerAlbumsFisico();
        setAlbums_Fisicos(Productos_Fisicos);
    }, [])

    useEffect(() => {
        getAlbums_Digitales();
        getAlbums_Fisicos();
    }, [getAlbums_Digitales, getAlbums_Fisicos])

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
                        <h3>Musica Digital</h3>
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

                            {Albums_Digitales.map((item, index) => {
                                return (
                                    <>
                                        <SwiperSlide>
                                            <Link to={{
                                                pathname: "/Producto",
                                                search: "?Nombre=" + item.Nombre + "&URL_Photo=" + item.URL_Photo + "&Autor=" + item.Autor + "&Genero=" + item.Genero + "&Fecha_Lanzamiento=" + item.Fecha_Lanzamiento + "&Disquera=" + item.Disquera + "&Precio=" + item.Precio
                                            }}>
                                                <img className='Listas_Album' src={item.URL_Photo} alt="" />
                                            </Link>
                                        </SwiperSlide>
                                    </>
                                )
                            })
                            }
                        </Swiper>
                    </div>
                    <div className='cont'>
                        <h3>Musica Fisica</h3>
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
                            {Albums_Fisicos.map((item, index) => {
                                return (
                                    <>
                                        <SwiperSlide>
                                            <Link to="/Producto">
                                                <img className='Listas_Album' src={item.URL_Photo} alt="" />
                                            </Link>
                                        </SwiperSlide>

                                    </>
                                )
                            })
                            }
                        </Swiper>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default UI_Home