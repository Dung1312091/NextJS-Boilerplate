import { PureComponent } from "react";

export default class MenuButton extends PureComponent {
  render() {
    const {
      className = "",
      hasIcon = false,
      imgSrc = "",
      imgAlt = "",
      name
    } = this.props;
    return (
      <div className={className}>
        {hasIcon && (
          <div>
            <img src={imgSrc} alt={imgAlt} />
          </div>
        )}
        <p>{name}</p>
      </div>
    );
  }
}
