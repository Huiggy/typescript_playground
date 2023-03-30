import { useState } from "react";
import Card from "./Card";

function Product() {

    const [active, setActive] = useState(0);
    const [complete, setComplete] = useState(0);
    return (
        <>
            <div className="product">
                <h2>My FlightPaths</h2>
                <a href="#"><button className="btn btn-default">Active({active})</button></a>
                <a href="#"><button className="btn btn-default">Complete({complete})</button></a>
                <div className="overflow-auto">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    );

}

export default Product;