import React from 'react';

class App extends React.Component {

  // Constructor 
  constructor(props) {
    super(props);

    this.state = {
        items: [],
        total: 0,
        page: 0,
        totalCount: 0,
        DataisLoaded: false
    };
  }

  // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
          fetch(
            "/o/c/taaks/scopes/henk?sort=verloopDatum&filter=eventDatum%20gt%202020-12-31")
              .then((res) => res.json())
              .then((json) => {
                  this.setState({
                      page: json.page,
                      totalCount: json.totalCount,
                      items: json.items,
                      DataisLoaded: true                      
                  });
              });             
    }

  render() {
    const { DataisLoaded, items, total,page,totalCount } = this.state;

    if (!DataisLoaded) return <div>
        <h1> Please wait some time.... </h1> </div> ;

    return (
    <div className = "App">
        <h1> Agenda ({totalCount})</h1>
        {
          items.map((item) => ( 
          <div key = { item.id } >
              <h2>Event: { item.naam }</h2>
              
              <span className="component-paragraph">{ item.eventDatum }</span>
            </div>
          ))
        }
    </div>);
  }
}
   
export default App;