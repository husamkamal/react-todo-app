import "./style.css";
import { Component } from "react";

class Button extends Component {
  render() {
    return <button className="button" onClick={this.props.onClick}>{this.props.children}</button>;
  }
}

export default Button;
