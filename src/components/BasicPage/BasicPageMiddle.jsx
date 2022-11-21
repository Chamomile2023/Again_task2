import React, { useEffect, useState } from "react";
import './BasicPage.scss'
import Card from "../Card/Card";

const BasicPageMiddle = () => {
    const [data, setData] = useState([])
    const getData = async () => {
        const request = await fetch("http://localhost:3004/data")
        const response = await request.json()
        setData(response)
    }
    useEffect(() => {
        getData()
    }, [])
    console.log(data);
    return <>
        <div className="basic_middle">
            <div className="container">
                <div className="basic_middle__hero">
                    {
                        data.slice(0, 8).map((card) => {
                            return <Card card={card} key={card.id} />
                        })
                    }
                </div>
            </div>
        </div>
    </>;
};

export default BasicPageMiddle;
