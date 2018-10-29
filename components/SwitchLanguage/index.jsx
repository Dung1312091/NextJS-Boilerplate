import { Component } from "react";
import CollapseTransistion from "../CollapseTransistion";
import MenuButton from "./button";
import Content from "./content";
export default class SwitchLanguage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToogle: false
    };
  }
  handleToggle = () => {
    this.setState({
      isToogle: !this.state.isToogle
    });
  };
  render() {
    const { isToogle } = this.state;
    return (
      <div>
        <MenuButton handleToggle={this.handleToggle} />
        <CollapseTransistion isToogle={isToogle}>
          <Content />
        </CollapseTransistion>
      </div>
    );
  }
}
