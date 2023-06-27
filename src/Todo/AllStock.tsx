import axios from "axios";
import Header from "../part/Header";
import { useEffect, useState } from "react";


const AllStock = () => {
    const [stock, setStock] = useState<string[]>([]);
    const handleStockList = async () => {
        const config = {
            method: 'GET',
            url: process.env.REACT_APP_API
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
        <div className="m-3">
            <Header />
            <h1>All Stock</h1>
            <article data-name='goods receive output'>
                <div className='dp-flex'>
                    <div className='text-center'>No.</div>
                    <div className='text-center'>Product No.</div>
                    <div className='text-center'>Product Name</div>
                    <div className='text-center'>Stock</div>
                    <div className='text-center'>Location</div>
                    <div className='text-center'>Unit</div>
                    <div className='text-center'>Amount</div>
                    <div className='text-center'>Price/Unit</div>
                    <div className='text-center'>Total Price</div>
                </div>
                {stock.map((item:any, index:number) => {
                    return <div key={index} className='dp-flex'>
                        <div>{index + 1}</div>
                        <div>{item.code}</div>
                        <div>{item.title}</div>
                        <div>{item.stock}</div>
                        <div>{item.location}</div>
                        <div>{item.unit}</div>
                        <div>{item.amount}</div>
                        <div>{item.price_unit}</div>
                        <div>{item.price_total}</div>
                    </div>
                })}
                
            </article>
        </div>
    );
}

export default AllStock;