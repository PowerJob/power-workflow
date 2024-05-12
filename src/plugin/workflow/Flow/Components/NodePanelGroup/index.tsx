import React, { Component } from 'react';

import NodeGenerate from './NodeGenerate';

interface IRegisterNode {
  /** 组键值 */
  groupKey?: string;
  /** 节点名称 */
  nodeName?: string;
  /** 节点描述 */
  nodeDesc?: any[];
  /** 节点类型 */
  nodeType?: string;
}

interface IPanelGroup {
  /** 组名称 */
  groupName: string;
  /** 组键值 */
  groupKey: string;
  /** 是否默认展示 */
  defaultOpen: boolean;
  /** 图标 */
  icon?: any;
  /** 节点信息 */
  nodes?: any[];
}

interface IProps {
  groupNodeList: any[];
}


import './index.less';

class NodePanelGroup extends Component<IProps> {

  state = {
    panelVisible: {},
    nodePanelGroup: []
  }

  componentDidMount() {
    this.initNodeData();
  }

  /** 初始化节点数据 */
  initNodeData = () => {
    const { panelVisible } = this.state;
    const {groupNodeList } = this.props;
    const nodePanelGroup = groupNodeList.map(group => {
      panelVisible[group.groupKey] = group.defaultOpen ? group.defaultOpen : false;
      group.nodes = group.nodes.map(item => {
        const attr = {
          ...(item.style || {}),
          img: item.icon,
          text: item.text,
          thumbnail: item.thumbnail,
          position: item.position,
          nodeType: item.nodeType,
          model: item.model || {}
        }
        item.attrs = attr;
        return item;
      })
      return group;
    });

    this.setState({nodePanelGroup, panelVisible});
  }

  /** 分组菜单展开控制 */
  handlePanelHeader = (groupKey) => {
    const { panelVisible } = this.state;
    panelVisible[groupKey] = !panelVisible[groupKey];
    this.setState({panelVisible});
  }

  /** 分组面板 */
  get NodePanel() {
    const { nodePanelGroup = [] } = this.state;
    return nodePanelGroup.map(item => {
      return (
        <div className="flow-group-panel" key={item.groupKey}>
          <div className="flow-group-panel-header" onClick={() => this.handlePanelHeader(item.groupKey)}>
            <div className={`flow-group-panel-header-title ${this.state.panelVisible[item.groupKey] ? 'active' : ''}`}>
              <div className="flow-group-panel-header-icon">
                <span className={`fa ${item.groupIcon}`}></span>
              </div>
              <div className="flow-group-panel-header-name">{item.groupName}</div>
            </div>
            <div className="flow-group-panel-header-drop">
              <span className={`fa fa-chevron-right flow-drop-down ${this.state.panelVisible[item.groupKey] ? 'active' : ''}`} ></span>
            </div>
          </div>
          <div 
            className={`flow-group-panel-body ${this.state.panelVisible[item.groupKey] ? 'active' : 'unactive'}`}
            style={{
              height: `${this.state.panelVisible[item.groupKey] ? 84 * item.nodes.length + 'px' : '0px'}`
            }}
          >
            {
              item.nodes && item.nodes.map((node, index) => {
                return  <NodeGenerate key={node.nodeType + index} node={node} />
              })
            }
          </div>
        </div>
      )
    });
  }

  render() {
    return (
      <div className="flow-group">
        {this.NodePanel}
      </div>
    );
  }
}

export default NodePanelGroup;
