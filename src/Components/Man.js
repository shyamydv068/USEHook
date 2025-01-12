import React from "react";
import Footer from "./Footer";

function Man(){
    function Update(){
        alert("This Is your React Page");
    }

    return(
        <div>
            <button onClick={Update}><h1>like This Page</h1></button>
            <Footer></Footer>
        </div>
    );
}
export default Man;