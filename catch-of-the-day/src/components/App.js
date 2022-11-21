import React from "react";
import sampleFishes from "../sample-fishes";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import Fish from "./Fish";
import base from '../base';

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  componentDidMount() {
    const { params } = this.props.match
    const localStorageRef = localStorage.getItem(params.storeID);
    if(localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef)})
    }
    this.ref = base.syncState(`${params.storeID}/fishes`, {
      context: this,
      state: 'fishes'
    })
  };

  componentWillUnmount() {
    base.removeBinding(this.ref);
  };

  componentDidUpdate() {
    const { params } = this.props.match
    localStorage.setItem(params.storeID, JSON.stringify(this.state.order))
  };

  addFish = (fish) => {
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({
      fishes: fishes,
    });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = (key) => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({
      order: order,
    });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map((key) => (
              <Fish key={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} index={key} />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          loadSampleFishes={this.loadSampleFishes}
          addFish={this.addFish}
          fishes={this.state.fishes}
        />
      </div>
    );
  }
}

export default App;
