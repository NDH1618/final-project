import { AiOutlineHome, AiOutlineGithub, AiOutlineLogin,AiOutlineLogout } from "react-icons/ai";
import { MdFavoriteBorder} from "react-icons/md";
import {RiAdminLine} from "react-icons/ri"


export const MenuItem = [
    {
        Title: 'Home',
        Url  : '/',
        cName: <AiOutlineHome className="icon-icon" />,
        class: 'nav-link'

    },
    {
        Title: 'Các tác giả',
        Url  : '/yeuthich',
        cName: <MdFavoriteBorder className="icon-icon"  />,
        class: 'nav-link'

    },
    {
        Title: 'Github',
        Url  : 'https://github.com/NDH1618',
        cName: <AiOutlineGithub className="icon-icon"  />,
        class: 'nav-link'

    },
    {
        Title: 'Admin',
        Url  : '/Admin',
        cName: <RiAdminLine className="icon-icon"  />,
        class: 'nav-link'

    },
    
    {
        Title: 'Đăng xuất',
        Url  : '/dangxuat',
        cName: <AiOutlineLogout className="icon-icon"  />,
        class: 'nav-link_mobile'

    },
    // {
    //     Title: 'Đăng ký',
    //     Url  : '/dangky',
    //     cName: <AiOutlineLogout className="icon-icon"  />,
    //     class: 'nav-link'

    // }
]