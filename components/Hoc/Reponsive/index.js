import { PureComponent } from "react";
const DetectReponsive = WrappedComponent => {
  return class Reponsive extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isMobile: false
      };
    }
    componentDidMount() {
      window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
      if (window.innerWidth < 769) {
        this.setState({
          isMobile: true
        });
      } else {
        this.setState({
          isMobile: false
        });
      }
    };
    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  };
};
export default DetectReponsive;
