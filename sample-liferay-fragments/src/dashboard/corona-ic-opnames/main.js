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
        "https://data.rivm.nl/covid-19/COVID-19_ic_opnames.json")
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
        <div>{items[items.length - 1].IC_admission}</div>
      </div>
      <a href="https://data.rivm.nl/covid-19/COVID-19_ic_opnames.json" target="_blank">source</a>
    </div>);
  }
}
   
export default App;