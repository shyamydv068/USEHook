
import React ,{ Component } from "react";

class Person extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }

    render(){
        return(
            <div>
                <h1>This is the name of Student: {this.props.name}<br></br> age :-{this.props.age} </h1>
            </div>
        );
    }
}
export default Person;