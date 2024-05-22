import React, { Component } from "react";

import "./index.less";

interface IProps {
  xiooFlow: any;
  unusedCommands?: any[];
}

function filterHeaderGroups(headerGroups, commandsToRemove) {
  return headerGroups.map(group => ({
    icons: group.icons.filter(icon => !commandsToRemove.includes(icon.command)),
  })).filter(group => group.icons.length > 0);
}

const headerGroups = [
  {
    icons: [
      { command: "undo", iconClass: "fa fa-mail-reply", text: "撤销" },
      { command: "redo", iconClass: "fa fa-mail-forward", text: "恢复" },
    ],
  },
  {
    icons: [
      { command: "copy", iconClass: "fa fa-clone", text: "复制" },
      { command: "delete", iconClass: "fa fa-trash-o", text: "删除" },
    ],
  },
  {
    icons: [
      {
        command: "blow",
        iconClass: "fa fa-search-plus",
        text: "放大",
        params: { value: 0.1 },
      },
      {
        command: "blow",
        iconClass: "fa fa-search-minus",
        text: "缩小",
        params: { value: -0.1 },
      },
      { command: "fitView", iconClass: "fa fa-laptop", text: "适应画布" },
      {
        command: "originSize",
        iconClass: "fa fa-calendar-check-o",
        text: "实际大小",
      },
      { command: "layout", iconClass: "fa fa-cube", text: "重新布局" },
    ],
  },
  {
    icons: [
      {
        command: "fullScreen",
        iconClass: "fa fa-window-maximize",
        text: "全屏",
        params: { domId: "xioo-flow" },
      },
    ],
  },
];


class index extends Component<IProps> {
  handleFullScreen = () => {
    // const el = document.getElementById('xioo-flow') as any;
    const el = this.props.xiooFlow.current;
    const rfs =
      el.requestFullScreen ||
      el.webkitRequestFullScreen ||
      el.mozRequestFullScreen ||
      el.msRequestFullScreen;
    if (typeof rfs != "undefined" && rfs) {
      rfs.call(el);
      // graph.paint();
      return;
    }
  };
  render() {
    const { unusedCommands = [] } = this.props;
    return (
      <div className="xioo-work-header">
        { filterHeaderGroups(headerGroups, unusedCommands).map((group, groupIndex) => (
          <div key={groupIndex} className="xioo-work-header-group">
            {group.icons.map((icon, iconIndex) => (
              <div
                key={iconIndex}
                className={`xioo-work-header-group-icon${
                  icon.params ? " actionable" : ""
                }`}
                data-command={icon.command}
                data-params={
                  icon.params ? `${JSON.stringify(icon.params)}` : undefined
                }
              >
                <span className={`operate ${icon.iconClass}`}></span>
                <span className="icon-text">{icon.text}</span>
              </div>
            ))}
          </div>
        ))}
        {React.Children.map(this.props.children, (child, index) => {
          const childProps = (child as any).props;
          return React.cloneElement(child as any, childProps);
        })}
      </div>
    );
  }
}

// data-command="fullScreen" data-params={`${JSON.stringify({domId: 'xioo-flow'})}`}

export default index;
