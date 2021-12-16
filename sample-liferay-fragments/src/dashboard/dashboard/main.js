import React from 'react';

class App extends React.Component {

  // Constructor 
  constructor(props) {
    super(props);

    this.state = {
        items: [],
        DataisLoaded: false
    };
  }

  // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
      fetch(
        "https://gist.githubusercontent.com/jverweijL/525e478f98d0d4fd79f7447651112616/raw/7f49608448b080fb120193affe6af961fdb7df1d/dashboard.json")
          .then((res) => res.json())
          .then((json) => {
              this.setState({
                  items: json,
                  DataisLoaded: true
              });
          })
    }

  render() {
    const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Please wait some time.... </h1> </div> ;

    return (
    <div className = "App">
      <div className="card">
        <div>{items[Math.floor(Math.random() * 5)].value}</div>
      </div>
    </div>);
  }
}
   
export default App;