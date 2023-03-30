import { useState } from "react";
import Card from "./Card";
import ResourceCard from "./ResourceCard";

function Resource() {

    const [resource, setResource] = useState(5);

    return (
        <>
            <h2>Resources({resource})</h2>
            <div className="container">
                <div className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <ResourceCard />
                        <ResourceCard />
                        <ResourceCard />
                        <ResourceCard />
                    </div>
                </div>
            </div>
        </>
    );

}

export default Resource;