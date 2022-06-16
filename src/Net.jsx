import React from "react";
import Mdata from "./Mdata";
import Card from "./Card";

function Net(){
    return(
        <Card
            key = {Mdata[1].id}
            imgsrc={Mdata[1].imgsrc}
            dres={Mdata[1].dres}
            title={Mdata[1].title}
            link={Mdata[1].link}
        />
    )
}
export default Net;