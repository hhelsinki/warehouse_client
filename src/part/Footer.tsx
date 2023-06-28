import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const [historyPath, setHistoryPath] = useState<string>('');

    useEffect(() => {
        let currentPath: string = window.location.pathname;
        if (currentPath === '/goods-receive') {
            setHistoryPath('../history/history-gr');
            return;
        }
        if (currentPath === '/issue-stock') {
            setHistoryPath('../history/history-is');
            return;
        }
    }, []);

    return (
        <footer className="footer">
            <Link to={historyPath}><button type="button">History</button></Link>
            <button type="button" onClick={() => window.location.reload()} className="butt-del col-white">X Discard</button>
            <button type="button" className="butt-green">Save</button>
        </footer>
    );
}

export default Footer;