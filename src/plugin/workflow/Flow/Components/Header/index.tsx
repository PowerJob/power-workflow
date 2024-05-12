import React, { Component } from 'react';

import './index.less';

interface IProps {
  xiooFlow: any;
}

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
  }
  render() {
    return (
      <div className="xioo-work-header">
        <div className="xioo-work-header-group">
          <div className="xioo-work-header-group-icon" data-command="undo">
            <span className="operate fa fa-mail-reply"></span>
            <span className="icon-text">撤销</span>
          </div>
          <div className="xioo-work-header-group-icon" data-command="redo">
            <span className="operate fa fa-mail-forward"></span>
            <span className="icon-text">恢复</span>
          </div>
        </div>
        <div className="xioo-work-header-group">
          <div className="xioo-work-header-group-icon" data-command="copy">
            <span className="operate fa fa-clone"></span>
            <span className="icon-text">复制</span>
          </div>
          <div className="xioo-work-header-group-icon" data-command="delete">
            <span className="operate fa fa-trash-o"></span>
            <span className="icon-text">删除</span>
          </div>
        </div>
        <div className="xioo-work-header-group">
          <div className="xioo-work-header-group-icon actionable" data-command="blow" data-params={`${JSON.stringify({value: 0.1})}`}>
            <span className="operate fa fa-search-plus"></span>
            <span className="icon-text">放大</span>
          </div>
          <div className="xioo-work-header-group-icon actionable" data-command="blow" data-params={`${JSON.stringify({value: -0.1})}`}>
            <span className="operate fa fa-search-minus"></span>
            <span className="icon-text">缩小</span>
          </div>
          <div className="xioo-work-header-group-icon actionable" data-command="fitView">
            <span className="operate fa fa-laptop"></span>
            <span className="icon-text">适应画布</span>
          </div>
          <div className="xioo-work-header-group-icon actionable" data-command="originSize">
            <span className="operate fa fa-calendar-check-o"></span>
            <span className="icon-text">实际大小</span>
          </div>
          <div className="xioo-work-header-group-icon actionable" data-command="layout">
            <span className="operate fa fa-cube"></span>
            <span className="icon-text">重新布局</span>
          </div>
        </div>
        <div className="xioo-work-header-group">
          <div className="xioo-work-header-group-icon actionable" data-command="fullScreen" data-params={`${JSON.stringify({domId: 'xioo-flow'})}`}> 
            <span className="operate fa fa-window-maximize"></span>
            <span className="icon-text">全屏</span>
          </div>
        </div>
        {
          React.Children.map(this.props.children, (child, index) => {
            const childProps = (child as any).props;
            return React.cloneElement(child as any, childProps);
          })
        }
      </div>
    );
  }
}

// data-command="fullScreen" data-params={`${JSON.stringify({domId: 'xioo-flow'})}`}

export default index;
