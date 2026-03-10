import React from "react";

class AboutClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count : 1,
            theme: false
        }
    }
render(){
    const {name,age} = this.props
    return (
        <div>
            <h1>Raja</h1>
            <h2>{this.state.count}</h2>
            <button onClick={()=>this.setState({count: this.state.count + 1})}>addItems</button>
        </div>
    )
}
}

export default AboutClass;
