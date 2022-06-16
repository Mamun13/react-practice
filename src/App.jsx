import React from "react";
import Card from "./Card";
import Mdata from "./Mdata";
import Net from "./Net";
import Ama from "./Ama";



const favS = "amazon";

const FavS = () =>{
    if(favS === "netfliex"){
        <Net />
    }else{
       <Ama />
    }
}



const App = () =>(
    <>
        <h1 className="text-center">Netfliex Movies</h1>
        <section id="navigation">
            <div className="container ">
                <div className="row"> 
                    <FavS />
                </div>
            </div>
        </section>

    </>
);
export default App;