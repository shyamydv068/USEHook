import React,{ Component } from "react";

class ClassComp extends Component{
    constructor(){
        super();
        this.state = {
            name :"shyam",
            age :21,
            city:"lahan"
        };
    }
   Apple() {
        alert("Hello This is my Name");
        
    }
   Mango (){
    this.setState({age:this.state.age+1})
   }
    render()
    {
        return(
            <div>
                <h1>Hello From Class Compnent function</h1>
                <button onClick={() => this.Apple()}>click me</button>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age}</h1>
                <h1>{this.state.city}</h1>
                <button onClick={() =>this.Mango()}>click to Update</button>
            </div>
        );

    }

}
export default ClassComp;

