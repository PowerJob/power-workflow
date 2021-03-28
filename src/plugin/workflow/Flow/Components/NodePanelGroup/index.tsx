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
  registerNodeList: IRegisterNode[];
  nodePanelGroup: IPanelGroup[];
  groupNodeList: any[];
}


import './index.less';

class NodePanelGroup extends Component<IProps> {

  state = {
    panelVisible: {},
    panelVisibleBlock: {},
    nodePanelGroup: []
  }

  componentDidMount() {
    this.initVisible();
    this.initNodeData();
  }

  /** 初始化显示 */
  initVisible = () => {
    const { nodePanelGroup = [] } = this.props;
    const { panelVisible, panelVisibleBlock } = this.state;
    nodePanelGroup.forEach(item => {
      panelVisible[item.groupKey] = item.defaultOpen ? item.defaultOpen : false;
      panelVisibleBlock[item.groupKey] = item.defaultOpen ? item.defaultOpen : false;
    });
    this.setState({panelVisible, panelVisibleBlock});
  }

  /** 初始化节点数据 */
  initNodeData = () => {
    let { registerNodeList, nodePanelGroup, groupNodeList } = this.props;

    // nodePanelGroup = nodePanelGroup.map(group => {
    //   registerNodeList.forEach(item => {
    //     if(group.groupKey === item.groupKey) {
    //       // 找到主图图形
    //       const keyShape = item.nodeDesc.find(item => item.mainShape) || {};
    //       const keyText = item.nodeDesc.find(item => item.mainText) || {};
    //       const keyIcon = item.nodeDesc.find(item => item.mainIcon) || {};
    //       const attrs = {
    //         ...keyShape,
    //         text: keyText.text,
    //         nodeName: item.nodeName,
    //         img: keyIcon.img,
    //         nodeType: item.nodeType
    //       }
    //       group.nodes ? group.nodes.push(attrs) : group.nodes = [attrs];
    //     }
    //   })
    //   return group;
    // });

    nodePanelGroup = groupNodeList.map(group => {
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

    this.setState({nodePanelGroup});
  }

  /** 分组菜单展开控制 */
  handlePanelHeader = (groupKey) => {
    const { panelVisible, panelVisibleBlock } = this.state;
    panelVisible[groupKey] = !panelVisible[groupKey];
    this.setState({panelVisible});


    if(panelVisible[groupKey]) {
      panelVisibleBlock[groupKey] = !panelVisibleBlock[groupKey];
      this.setState({panelVisibleBlock});
      return;
    }

    let timeout = setTimeout(() => {
      panelVisibleBlock[groupKey] = !panelVisibleBlock[groupKey];
      this.setState({panelVisibleBlock});
      clearTimeout(timeout)
    }, 340);
  }

  /** 分组面板 */
  get NodePanel() {
    const { nodePanelGroup = [] } = this.state;
    // ${this.state.panelVisibleBlock[item.groupKey] ? 'show' : 'hide'}
    return nodePanelGroup.map(item => {
      return (
        <div className="flow-group-panel" key={item.groupKey}>
          <div className="flow-group-panel-header" onClick={() => this.handlePanelHeader(item.groupKey)}>
            <div className="flow-group-panel-header-title">
              <div className="flow-group-panel-header-icon"></div>
              <div className="flow-group-panel-header-name">{item.groupName}</div>
            </div>
            <div className="flow-group-panel-header-drop"></div>
          </div>
          <div 
            className={`flow-group-panel-body ${this.state.panelVisible[item.groupKey] ? 'active' : 'unactive'}`}
            style={{
              height: `${this.state.panelVisible[item.groupKey] ? 84 * item.nodes.length + 'px' : '0px'}`
            }}
          >
            {/* <div draggable="true" className="xioo-panel-item" data-item="flow-node"></div>
            <div draggable="true" className="xioo-panel-item" data-item="flow-node"></div> */}
            {/* <div draggable="true" className="xioo-panel-item" data-item="flow-node"></div> */}

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
