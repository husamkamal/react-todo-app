import { Component } from "react";
import "./App.css";
import Item from "./Components/Item";
import Button from "./Components/Button";
class App extends Component {
  state = {
    value: "",
    item: [],
  };
  handelChang = (e) => {
    let newValue = e.target.value;
    this.setState({
      value: newValue,
    });
  };
  handelClick = (e) => {
    e.preventDefault();
    if (this.state.value.length !== 0) {
      this.setState({
        item: [{ id: Date.now(), title: this.state.value }, ...this.state.item],
        value: "",
      });
    }
  };
  handelDelete = (id) => {
    let deleteItem = this.state.item.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      item: [...deleteItem],
    });
  };
  handelEdit = (id) => {
    let itemEdit = this.state.item.map((item) => {
      if (item.id === id && this.state.value.length !== 0) {
        let itemValue = this.state.value;
        item.title = itemValue;
        return item;
      } else {
        return item;
      }
    });
    this.setState({
      item: [...itemEdit],
      value: "",
    });
  };
  render() {
    return (
      <div className="App flex">
          <h1>ToDO List </h1>
        <div className="flex inputHeader">
          <input
            onChange={this.handelChang}
            type="text"
            placeholder="write the task"
            value={this.state.value}
          />
        <Button onClick={this.handelClick}>Add </Button>
        </div>
        <Item
          deleteItem={this.handelDelete}
          editItem={this.handelEdit}
          item={this.state.item}
        />
      </div>
    );
  }
}

export default App;
