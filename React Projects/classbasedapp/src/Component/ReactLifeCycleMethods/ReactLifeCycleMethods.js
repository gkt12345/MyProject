import { Component } from "react";

class ReactLifeCycleMethods extends Component{
    
    constructor(props){
         super(props);
         this.state = {
            count : 0,
            show : true,
         }   
    }

    componentDidMount(){
        console.log("i am cdm");
    }

    componentDidUpdate(){
        console.log("i render on every update");
    }

    componentWillUnmount(){
        console.log("i render on unmounting");
    }
    
    render(){
        return(<div>
              <h1>My value is : {this.state.count}</h1>  
              <button onClick={()=>{this.setState({count : this.state.count+1})}}>Value++</button>
              <br></br>
              <br></br>  
              <button onClick={()=>{this.setState({show : !this.state.show})}}>
                {this.state.show ? "hello Show" : null}
                </button>  
        </div>)
    }
}

export default ReactLifeCycleMethods;