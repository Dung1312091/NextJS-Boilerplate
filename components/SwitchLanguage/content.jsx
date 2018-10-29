import React from "react";
import DetectReponsive from "../Hoc/Reponsive";
const languageList = [
  {
    name: "Việt Nam",
    local: "vi"
  },
  {
    name: "English",
    local: "en"
  },
  {
    name: "日本",
    local: "ja"
  }
];

const Content = React.memo(function Content(props) {
  return !props.isMobile ? (
    <ul>
      {languageList.map((item, index) => {
        return (
          <li key={index} onClick={() => this.setlectItem()}>
            {item.name}
          </li>
        );
      })}
    </ul>
  ) : (
    <ul>
      <li>img 1</li>
      <li>img 2</li>
      <li>img 3</li>
    </ul>
  );
});
export default DetectReponsive(Content);
