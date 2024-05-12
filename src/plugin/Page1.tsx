/*
 * @version: 
 * @Author: dee
 * @Date: 2021-02-02 12:08:08
 * @LastEditors: dee
 * @LastEditTime: 2021-02-03 15:32:37
 */
import React, { Component } from 'react'
// import Workflow, { RegisterNode } from './plugin';
import Flow from './workflow/Flow'

import { ToolGroup, ToolItem } from './workflow/Flow/Components/Toolbar'
// import Flow from 'max-workflow';

// import { default as Flow, Workflow } from '../dist/power-workflow';
// import Flow from 'max-workflow';

import config from './config';

import maxtest1 from './test/edges/test1';

import './index.less';

import 'font-awesome/css/font-awesome.css';


// class MyNode extends RegisterNode {
//   name = 'test-node'
//   constructor(G6) {
//     super(G6);
//     this.register();
//   }
//   draw(cfg, group, inc) {
//     const keyShape = group.addShape('rect', {
//       attrs: {
//         width: 170,
//         height: 70,
//         fill: '#C7E4FF',
// 			  stroke: '#61B3FF',
// 			  opacity: 0.6,
// 			  lineWidth: 2,
// 			  radius: 8,
// 			  cursor: 'move'
//       },
//       name: 'power-rect-node',
//       className: 'base-node'
//     });
//     return keyShape;
//   }
// }

const registerEdges = [maxtest1]

class MyCommand {
  execute({ graph }) {
    console.log(graph);
    console.log('我是测试命令');
  }
}

const commandList = [
  {
    command: 'test',
    CommandObject: MyCommand
  }
]


export default class App extends Component {

  state = {
    registerNodeList: [
      {
        groupKey: 'geteway',
        nodeName: 'flow-aps-node',
        nodeType: 'rect',
        groupName: '网关',
        nodeDesc: [
          {
            name: 'aps-rect',
            type: 'rect',
            width: 120,
            height: 60,
            fill: '#FE9201',
            stroke: '#D45547',
            radius: 10,
            mainShape: true
          },
          {
            x: 10,
            y: 10,
            name: 'aps-rect-text',
            type: 'text',
            text: '测试节点',
            fontSize: 12,
            fill: '#000000',
            mainText: true
          },
          {
            x: 100,
            y: 40,
            type: 'image',
            name: 'aps-rect-icon',
            width: 10,
            height: 10,
            img: 'http://localhost:8080/icon/paihangbang.svg',
            mainIcon: true,
          },
        ]
      },
      // {
      //   groupKey: 'geteway',
      //   nodeName: 'circle-test-node',
      //   nodeType: 'circle',
      //   nodeDesc: [
      //     {
      //       name: 'aps-rect-1',
      //       type: 'rect',
      //       width: 120,
      //       height: 60,
      //       fill: '#028080',
      //       stroke: '#1990FF',
      //       mainShape: true
      //     },
      //     {
      //       x: 10,
      //       y: 10,
      //       name: 'aps-rect-text-2',
      //       type: 'text',
      //       text: '哈哈哈',
      //       fontSize: 12,
      //       fill: '#FFFFFF',
      //       mainText: true
      //     },
      //     {
      //       x: 100,
      //       y: 40,
      //       name: 'aps-rect-icon-1',
      //       width: 10,
      //       height: 10,
      //       img: 'http://localhost:8080/icon/datoucai.svg',
      //       mainIcon: true,
      //     },
      //   ]
      // },
      // {
      //   groupKey: 'geteway',
      //   nodeName: 'simple-node',
      //   nodeType: 'circle',
      //   nodeDesc: [
      //     {
      //       name: 'aps-rect-2',
      //       type: 'rect',
      //       width: 120,
      //       height: 60,
      //       fill: '#028080',
      //       stroke: '#1990FF',
      //       mainShape: true
      //     },
      //     {
      //       x: 10,
      //       y: 10,
      //       name: 'aps-rect-text-3',
      //       type: 'text',
      //       text: '哈哈哈',
      //       fontSize: 12,
      //       fill: '#FFFFFF',
      //       mainText: true
      //     },
      //     {
      //       x: 100,
      //       y: 40,
      //       name: 'aps-rect-icon-3',
      //       width: 10,
      //       height: 10,
      //       img: 'http://localhost:8080/icon/datoucai.svg',
      //       mainIcon: true,
      //     },
      //   ]
      // }
    ],
    groupNodeList: [
      {
        groupName: '网关',
        groupKey: 'geteway',
        defaultOpen: true,
        groupIcon: 'fa-cubes',
        nodes: [
          {
            nodeType: 'flow-node',
            thumbnail: 'rect',
            style: {
              fill: '#FE9201',
              stroke: '#D45547',
              radius: 4
            },
            model: {
              titleText: '获取数据',
              leftText: '大数据',
              icon1: '/icon/paihangbang.svg',
              size: [120, 50]
            },
            text: '图表节点',
            icon: 'http://localhost:8080/icon/paihangbang.svg'
          },
          {
            nodeType: 'flow-node',
            thumbnail: 'rect',
            style: {
              fill: '#05BB2F',
              stroke: '#2E4553',
              radius: 10,
            },
            model: {
              titleText: '攻击网站',
              leftText: 'gogo',
              icon1: '/icon/aite.svg',
            },
            text: '图表节点',
            icon: 'http://localhost:8080/icon/aite.svg'
          },
          {
            nodeType: 'max-circle-node',
            thumbnail: 'circle',
            style: {
              fill: '#D45547',
              stroke: '#660200',
              opacity: 0.6,
              r: 20,
              radius: 10
            },
            model: {
              titleText: '攻击网站',
              leftText: 'gogo',
              icon: '/icon/dianshi.svg',
              r: 20,
              iconWidth: 30,
              iconHeight: 30
            },
            text: '图表节点',
            icon: 'http://localhost:8080/icon/dianshi.svg'
          },
          {
            nodeType: 'max-trigon-node',
            thumbnail: 'trigon',
            position: 'bottom',
            style: {
              fill: '#d45547',
              stroke: '#660200',
              opacity: 0.6,
              radius: 10,
              sideLength: 100
            },
            model: {
              titleText: '攻击网站',
              leftText: 'gogo',
              icon: '/icon/dianshi.svg',
              iconWidth: 30,
              iconHeight: 30
            },
            text: '图表节点',
            icon: 'http://localhost:8080/icon/dianshi.svg'
          },
          {
            nodeType: 'max-trigon-node',
            thumbnail: 'trigon',
            position: 'top',
            style: {
              fill: '#D45547',
              stroke: '#660200',
              opacity: 0.6,
              radius: 10,
              sideLength: 100
            },
            model: {
              titleText: '攻击网站',
              leftText: 'gogo',
              icon: '/icon/dianshi.svg',
              iconWidth: 30,
              iconHeight: 30
            },
            text: '图表节点',
            icon: 'http://localhost:8080/icon/dianshi.svg'
          }
        ]
      },
      {
        groupName: '测试',
        groupKey: 'test',
        defaultOpen: false,
        groupIcon: 'fa-cubes',
        nodes: [
          {
            nodeType: 'flow-node',
            thumbnail: 'rect',
            style: {
              fill: '#FE9201',
              stroke: '#D45547',
              radius: 4
            },
            model: {
              titleText: '获取数据',
              leftText: '大数据',
              icon1: '/icon/paihangbang.svg',
              size: [120, 50]
            },
            text: '图表节点1',
            icon: 'http://localhost:8080/icon/paihangbang.svg'
          },
          {
            nodeType: 'max-trigon-node',
            thumbnail: 'trigon',
            position: 'left',
            style: {
              fill: '#D45547',
              stroke: '#660200',
              opacity: 0.6,
              // r: 30,
              radius: 10,
              sideLength: 100
            },
            model: {
              titleText: '攻击网站',
              leftText: 'gogo',
              icon: '/icon/dianshi.svg',
              iconWidth: 30,
              iconHeight: 30
            },
            text: '图表节点',
            icon: 'http://localhost:8080/icon/dianshi.svg'
          },
          {
            nodeType: 'max-trigon-node',
            thumbnail: 'trigon',
            position: 'right',
            style: {
              fill: '#D45547',
              stroke: '#660200',
              opacity: 0.6,
              // r: 30,
              radius: 10,
              sideLength: 60
            },
            model: {
              titleText: '攻击网站',
              leftText: 'gogo',
              icon: '/icon/dianshi.svg',
              iconWidth: 30,
              iconHeight: 30
            },
            text: '图表节点',
            icon: 'http://localhost:8080/icon/dianshi.svg'
          }
        ]
      },
      {
        groupName: '菱形',
        groupKey: 'diamond',
        defaultOpen: false,
        groupIcon: 'fa-cubes',
        nodes: [
          {
            nodeType: 'max-diamond-node',
            thumbnail: 'diamond',
            style: {
              fill: '#D45547',
              stroke: '#660200',
              opacity: 0.6,
              radius: 10,
              sideLength: 60
            },
            model: {
              text: '好的',
              icon: '/icon/dianshi.svg',
              iconWidth: 30,
              iconHeight: 30
            },
            text: '图表节点',
            icon: 'http://localhost:8080/icon/dianshi.svg'
          },  
        ]
      },
    ],
    initNodes: [
      {
        id: 'node1',
        // type: 'base-node',
        size: [70, 70],
        // x: 400,
        // y: 200
      },
      {
        id: 'node2',
        type: 'flow-node',
        size: [170, 70],
        // x: 600,
        // y: 200,
        leftText: '1234567',
        titleText: 'ajskdskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
        // taskStatus: 'NAME',
        taskStatus: 'name',
        taskStatusValue: 3,
        rightText: 'asjdka'
      },
      // {
      //   id: 'node3',
      //   type: 'flow-node',
      //   size: [170, 70],
      //   // x: 600,
      //   // y: 200,
      //   leftText: '1234567',
      //   titleText: '获取数据',
      //   taskStatus: 'name22sds33',
      //   rightText: 'asjdka'
      // },
      // {
      //   id: 'node4',
      //   type: 'flow-node',
      //   size: [170, 70],
      //   // x: 600,
      //   // y: 200,
      //   leftText: '1234567',
      //   titleText: '获取数据',
      //   taskStatus: '进行中',
      //   rightText: 'asjdka'
      // },
      // {
      //   id: 'node5',
      //   type: 'flow-node',
      //   size: [170, 70],
      //   // x: 600,
      //   // y: 200,
      //   leftText: '1234567',
      //   titleText: '获取数据',
      //   taskStatus: '进行中',
      //   rightText: 'asjdka'
      // },
      // {
      //   id: 'node6',
      //   type: 'flow-node',
      //   size: [170, 70],
      //   // x: 600,
      //   // y: 200,
      //   leftText: '1234567',
      //   titleText: '获取数据',
      //   taskStatus: '进行中',
      //   rightText: 'asjdka'
      // },
      // {
      //   id: 'node7',
      //   type: 'flow-node',
      //   size: [170, 70],
      //   // x: 600,
      //   // y: 200,
      //   leftText: '1234567',
      //   titleText: '获取数据',
      //   taskStatus: '进行中',
      //   rightText: 'asjdka'
      // },
      // {
      //   id: 'node8',
      //   type: 'flow-node',
      //   size: [170, 70],
      //   // x: 600,
      //   // y: 200,
      //   leftText: '1234567',
      //   titleText: '获取数据111',
      //   taskStatus: '进行中',
      //   rightText: 'asjdka',
      //   icon1: '/icon/aite.svg'
      // }
    ],
    initEdges: [
      {
        source: 'node1',
        target: 'node2',
        type: 'cvte-polyline',
        label: 'Y'
      },
      {
        source: 'node1',
        target: 'node3',
        type: 'cvte-polyline',
        // label: 'Y',
        text: 'ssjskjk'
      },
      {
        source: 'node2',
        target: 'node4',
        type: 'cvte-polyline'
      },
      {
        source: 'node3',
        target: 'node4',
        type: 'cvte-polyline',
        // label: 'Y'
      },
      {
        source: 'node1',
        target: 'node5',
        type: 'cvte-polyline'
      },
      {
        source: 'node5',
        target: 'node6',
        type: 'cvte-polyline'
      },
      {
        source: 'node6',
        target: 'node7',
        type: 'cvte-polyline'
      },
      {
        source: 'node5',
        target: 'node8',
        type: 'cvte-polyline'
      }
    ],
  }

  refWlf = React.createRef<HTMLDivElement>();
  cvteFlow: any = null;
  componentDidMount() {
    // const cvteFlow = new Workflow({
    //   container: this.refWlf.current,
    //   width: 1000,
    //   height: 600,
    //   initNodes: [
    //     {
    //       id: 'node1',
    //       type: 'base-node',
    //       size: [70, 70],
    //       // x: 400,
    //       // y: 200
    //     },
    //     {
    //       id: 'node2',
    //       type: 'flow-node',
    //       size: [170, 70],
    //       // x: 600,
    //       // y: 200,
    //       leftText: '1234567',
    //       titleText: 'ajskdskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
    //       taskStatus: 'NAME',
    //       taskStatusValue: 3,
    //       rightText: 'asjdka'
    //     },
    //     {
    //       id: 'node3',
    //       type: 'flow-node',
    //       size: [170, 70],
    //       // x: 600,
    //       // y: 200,
    //       leftText: '1234567',
    //       titleText: '获取数据',
    //       taskStatus: '进行中我真的好',
    //       rightText: 'asjdka'
    //     },
    //     {
    //       id: 'node4',
    //       type: 'flow-node',
    //       size: [170, 70],
    //       // x: 600,
    //       // y: 200,
    //       leftText: '1234567',
    //       titleText: '获取数据',
    //       taskStatus: '进行中',
    //       rightText: 'asjdka'
    //     },
    //     {
    //       id: 'node5',
    //       type: 'flow-node',
    //       size: [170, 70],
    //       // x: 600,
    //       // y: 200,
    //       leftText: '1234567',
    //       titleText: '获取数据',
    //       taskStatus: '进行中',
    //       rightText: 'asjdka'
    //     },
    //     {
    //       id: 'node6',
    //       type: 'flow-node',
    //       size: [170, 70],
    //       // x: 600,
    //       // y: 200,
    //       leftText: '1234567',
    //       titleText: '获取数据',
    //       taskStatus: '进行中',
    //       rightText: 'asjdka'
    //     },
    //     {
    //       id: 'node7',
    //       type: 'flow-node',
    //       size: [170, 70],
    //       // x: 600,
    //       // y: 200,
    //       leftText: '1234567',
    //       titleText: '获取数据',
    //       taskStatus: '进行中',
    //       rightText: 'asjdka'
    //     },
    //     {
    //       id: 'node8',
    //       type: 'flow-node',
    //       size: [170, 70],
    //       // x: 600,
    //       // y: 200,
    //       leftText: '1234567',
    //       titleText: '获取数据',
    //       taskStatus: '进行中',
    //       rightText: 'asjdka'
    //     }
    //   ],
    //   initEdges: [
    //     {
    //       source: 'node1',
    //       target: 'node2',
    //       type: 'cvte-polyline'
    //     },
    //     {
    //       source: 'node1',
    //       target: 'node3',
    //       type: 'cvte-polyline'
    //     },
    //     {
    //       source: 'node2',
    //       target: 'node4',
    //       type: 'cvte-polyline'
    //     },
    //     {
    //       source: 'node3',
    //       target: 'node4',
    //       type: 'cvte-polyline'
    //     },
    //     {
    //       source: 'node1',
    //       target: 'node5',
    //       type: 'cvte-polyline'
    //     },
    //     {
    //       source: 'node5',
    //       target: 'node6',
    //       type: 'cvte-polyline'
    //     },
    //     {
    //       source: 'node6',
    //       target: 'node7',
    //       type: 'cvte-polyline'
    //     },
    //     {
    //       source: 'node5',
    //       target: 'node8',
    //       type: 'cvte-polyline'
    //     }
    //   ],
    //   registerNodes: [], // MyNode
    //   edgeCallback: this.edgeCallback
    // });
    // cvteFlow.graph.setMode('edit');
    // cvteFlow.graph.fitView(20);
    // cvteFlow.graph.on('onDoubleClickNode', (e) => {
    //   console.log(e)
    // });
    // this.cvteFlow = cvteFlow;
  }

  edgeCallback = (sourceNode, targetNode) => {
    return true;
  }

  handleClick = () => {
    this.cvteFlow.graph.add('node', {
      id: `${Math.random()}`,
      type: 'flow-node',
      size: [180, 70],
      x: 0,
      y: 0,
      leftText: '111',
      titleText: 'asjdkasjd',
    })
  }

  getGraph = (workflow) => {
    workflow = workflow;

    workflow.graph.refresh();

    workflow.graph.on('onDoubleClickNode', (item) => {
      
      // console.log(JSON.stringify(this.workflow.graph.save()));
      // this.setState({ visible: true });
      // this.doubleNode = item;
      const group = item.get('group');
      // group.updateLeftText({ text: '111111' }).updateTitleText({ text: '2222' });
      group.updateText && group.updateText({text: group.textWidthToEllipsis({text: '我将会是最长的文本，这样写出来不知道会是什么燕子'})});


      // workflow.graph.updateItem(item, {
      //   style: {
      //     fill: '#A74343',
      //   },
      //   titleText: '罩得住',
      //   x: 10,
      //   y: 10
      // })

      // console.log('我执行了')
      // console.log(item.test);

      // item.update({
      //   style: {
      //     fill: '#A74343',
      //   },
      //   titleText: '罩得住'
      // })
      // item.refresh()
    })

    workflow.on('onSelectNode', (node) => {
      // 节点实例
      console.log();
    })
  }

  render() {
    return (
      <div className="xioo-app-test">
        {/* <div className="wlf-g6" ref={this.refWlf}></div> */}
        <Flow
          groupNodeList={this.state.groupNodeList}
          initNodes={this.state.initNodes}
          // initNodes={config.nodes}
          initEdges={this.state.initEdges}
          // initEdges={config.edges}
          animate
          commandList={commandList}
          layout="horizontal"
          returnGraph={this.getGraph}
          registerEdgeList={registerEdges}
          mode={'edit'}
          // judgeEdgeEnd={(sourceNode, targetNode) => { console.log(sourceNode);  return false;}}
          toolbar={
            (
              <React.Fragment>
                <ToolGroup>
                  <ToolItem icon="fa-ban" text="禁用" command="test" />
                  <ToolItem icon="fa-ban" text="禁用" event="yes" />
                </ToolGroup>
              </React.Fragment>
            )
          }
        // layout="horizontal"
        />
      </div>
    )
  }
}
