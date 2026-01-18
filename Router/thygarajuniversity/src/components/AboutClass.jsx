import React from "react";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      theme: true,
    };
    
  }

  render() {
    const { name, detail } = this.props;
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({count : this.state.count + 1});
          }}
        >
          Increment
        </button>
        <h1>about class based</h1>
      </div>
    );
  }
}

export default AboutClass;
