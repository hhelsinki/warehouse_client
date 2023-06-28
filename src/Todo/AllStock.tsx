import axios from "axios";
import Header from "../part/Header";
import { useEffect, useState } from "react";
import '../css/stock.scss';

const AllStock = () => {
    const [stock, setStock] = useState<string[]>([]);
    const handleStockList = async () => {
        const config = {
            method: 'GET',
            url: `${process.env.REACT_APP_API}/stock-all`
        }

        axios(config)
            .then((res) => {
                switch (res.data.status) {
                    case true:
                        let newStock: string[] = [];
                        res.data.data.forEach((item: any, index: number) => newStock.push(item))
                        setStock(newStock);
                        break;
                    case false: default:
                        break;
                }
            })
            .catch((err) => {
                console.log('err API: /stock')
            })
    }

    useEffect(() => {
        handleStockList();
    }, []);

    return (
        <div className="width-l m-auto p-df">
            <Header />
            <h1 className="text-center">สินค้าทั้งหมด</h1>
            <article data-name='all stock list'>
                <div className='flex stock__list bg-prim'>
                    <div className='text-center'>No.</div>
                    <div className='text-center'>รหัสสินค้า</div>
                    <div className='text-center'>ชื่อสินค้า</div>
                    <div className='text-center'>คลัง</div>
                    <div className='text-center'>ที่เก็บ</div>
                    <div className='text-center'>หน่วยนับ</div>
                    <div className='text-center'>จำนวน</div>
                    <div className='text-center'>ราคา/หน่วย</div>
                    <div className='text-center'>จำนวนเงิน</div>
                </div>
                {stock.map((item:any, index:number) => {
                    return <div key={index} className='flex stock__list'>
                        <div>{index + 1}</div>
                        <div>{item.code}</div>
                        <div>{item.title}</div>
                        <div>{item.stock}</div>
                        <div>{item.location}</div>
                        <div>{item.unit}</div>
                        <div className="text-right">{item.amount}</div>
                        <div className="text-right">{item.price_unit}</div>
                        <div className="text-right">{item.price_total}</div>
                    </div>
                })}
                
            </article>
        </div>
    );
}

export default AllStock;