import React from "react";
import Mdata from "./Mdata";
import Card from "./Card";

function Ama(){
    return(
        <Card
            key = {Mdata[2].id}
            imgsrc={Mdata[2].imgsrc}
            dres={Mdata[2].dres}
            title={Mdata[2].title}
            link={Mdata[2].link}
        />
    )
}
export default Ama;