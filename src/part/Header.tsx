import { Link } from "react-router-dom";

const Header = () => {
    return(
        <p>Menu: <Link to='/goods-receive'>Goods Receive</Link>, <Link to='/issue-stock'>Issue Stock</Link>, <Link to='/all-stock'>All Stock</Link></p>
    );
}

export default Header;