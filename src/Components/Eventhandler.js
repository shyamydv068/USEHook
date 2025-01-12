
import React ,{Component} from 'react';

class Eventhandler extends Component {
    
    constructor(props){
        super(props);
        this.state = {name :"shyam",
            age:21,
            college:"svcet",
            city:"Chittoor"
        };
    }
    ButtonFumction = () =>{
        this.setState({name:"yadav" ,age:2+1,college:"lahan",city:"bathnaha"});
    
    }
    render(){
  return (
    <div>
        <h1>This is the name :{this.state.name} </h1>
        <h1>This is the name :{this.state.age} </h1>
        <h1>This is the name :{this.state.college} </h1>
        <h1>This is the name :{this.state.city} </h1>
      <button onClick={() => this.ButtonFumction()}>click me</button>
    </div>
  )
  }
}
export default Eventhandler;
