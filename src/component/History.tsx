import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../part/Header";

const History = () => {
    const [historyList, setHistoryList] = useState<string[]>([]);
    const [search, setSearch] = useState<string>('');
    const [cate, setCate] = useState<string>('');
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
            setCate('รับสินค้า');
            return;
        }
        if (typeId === 'history-is') {
            setSearch('search-is?id=');
            setCate('จ่ายสินค้า');
            return;
        }


    }, []);

    return (
        <div className="width-l m-auto p-df">
            <Header />
            <h1 className="text-center">ประวัติ{cate}</h1>
            <div className="flex">
                <section className="width-seven-vw height-seven-vh">
                    <div className="relative">
                        <div className="text-center m-auto" style={{width:'200px', paddingTop:'25%'}}>No data to Display</div>
                    </div>

                </section>

                <section className="width-three-vw height-seven-vh p-df history__list-option">
                    <h2 className="text-center">รายการ{cate}</h2>
                    <div className="flex history__list bg-prim">
                        <div className="width-five">เลขที่เอกสาร</div>
                        <div className="width-five">วันที่</div>
                    </div>

                    {historyList.map((item: any, index: number) => {
                        return <div key={index} className="flex history__list">
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