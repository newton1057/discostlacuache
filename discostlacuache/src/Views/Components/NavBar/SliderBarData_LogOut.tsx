import * as MdIcons from "react-icons/md";

export const SideBarData_LogOut = [
    {
        title: 'Acceder',
        path: '/Login',
        icon: <MdIcons.MdLogin />,
        cName: 'nav-text'
    },
    {
        title: 'Home',
        path: '/',
        icon: <MdIcons.MdHome />,
        cName: 'nav-text'
    },
    {
        title: 'Categorias',
        cName: 'nav-text nav_titulo'
    },
    {
        title: 'CD',
        path: '/Home',
        icon: <MdIcons.MdMusicNote />,
        cName: 'nav-text'
    },
    {
        title: 'DVD',
        path: '/Home',
        icon: <MdIcons.MdVideoLibrary />,
        cName: 'nav-text'
    },
    {
        title: 'Vinyl',
        path: '/Home',
        icon: <MdIcons.MdHome />,
        cName: 'nav-text'
    },
    {
        title: 'Reproductor de Musica',
        path: '/ReproductorMusica',
        icon: <MdIcons.MdHeadphones />,
        cName: 'nav-text nav_reproductor'
    }
]