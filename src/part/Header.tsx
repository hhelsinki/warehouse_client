import { Link } from "react-router-dom";
import '../css/color.css';
import { useEffect, useState } from "react";

interface Path {
    gr: boolean, is: boolean, as: boolean
}

const Header = () => {
    const [isPathActive, setPathActive] = useState<Path>({
        gr: false, is: false, as: false
    });

    useEffect(() => {
        let pathname: string = window.location.pathname;
        if (pathname === '/goods-receive') {
            setPathActive({
                gr: true,
                is: false,
                as: false
            });
            return;
        }
        if (pathname === '/issue-stock') {
            setPathActive({
                gr: false,
                is: true,
                as: false
            });
            return;
        }
        if (pathname === '/all-stock') {
            setPathActive({
                gr: false,
                is: false,
                as: true
            });
            return;
        }


    }, []);

    return (
        <header className="header">Menu:
            <button className={isPathActive.gr ? "butt-green border-0 opacity-100" : "butt-green border-0 opacity-80"}><Link to='/goods-receive'>รับสินค้า</Link></button>
            <button className={isPathActive.is ? "butt-red border-0 opacity-100" : "butt-red border-0 opacity-80"}><Link to='/issue-stock'>จ่ายสินค้า</Link></button>
            <button className={isPathActive.as ? "butt-blue border-0 opacity-100" : "butt-blue border-0 opacity-80"}><Link to='/all-stock'>สินค้าทั้งหมด</Link></button>
        </header>
    );
}

export default Header;