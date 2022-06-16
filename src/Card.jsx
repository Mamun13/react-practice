import React from "react";

function Card(props) {

    return (
        <>
            <div className="col-lg-4 p-0">
                <div className="list">
                    <img src={props.imgsrc}  alt="" /><br />
                    <span className="des">{props.dres}</span>
                    <h3 className="title">{props.title}</h3>
                    <a href={props.link} className="watch" target="_blank">Watch live</a>
                </div>
            </div>
        </>
    )
}
export default Card;