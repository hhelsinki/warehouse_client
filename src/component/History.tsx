import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const History = () => {
    const [historyList, setHistoryList] = useState<string[]>([]);
    const [search, setSearch] = useState<string>('');
    let { typeId } = useParams();

    const handleHistory = async () => {
        const config = {
            method: 'GET',
            url: `${process.env.REACT_APP_API}/${typeId}`
        }

        axios(config)
            .then((res) => {
                switch (res.data.data[0]) {
                    case null: case undefined:
                        break;
                    default:
                        let newHistory: string[] = [];
                        res.data.data.forEach((item: any, index: number) => newHistory.push(item));
                        setHistoryList(newHistory);
                        break;
                }

            })
            .catch((err) => {
                console.log('err API: /typeId');
            })
    }


    useEffect(() => {
        handleHistory();

        if (typeId === 'history-gr') {
            setSearch('search-gr?id=');
            return;
        }
        if (typeId === 'history-is') {
            setSearch('search-is?id=');
            return;
        }


    }, []);

    return (
        <div>
            <h1>History</h1>
            <div className="dp-flex">
                <section className="width-seven-vw" style={{ border: '1px solid black' }}>No data to Display
                </section>

                <section className="width-three-vw" style={{ border: '1px solid black' }}>
                    <h2>History List</h2>
                    <div className="dp-flex">
                        <div className="width-five">Doc no.</div>
                        <div className="width-five">Date</div>
                    </div>

                    {historyList.map((item: any, index: number) => {
                        return <div key={index} className="dp-flex">
                            <div className="width-five"><Link to={search + item.doc_no}>{item.doc_no}</Link></div>
                            <div className="width-five">{item.date}</div>
                        </div>
                    })}
                </section>
            </div>
        </div >
    );
}

export default History;