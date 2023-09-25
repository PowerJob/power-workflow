declare module "max-workflow" {
  import { Graph } from "@antv/g6";
  interface IProps {
    /** 流程图的容器 */
    container: HTMLElement;
    /** 容器宽度,默认全屏 */
    width?: number;
    /** 容器高度,默认全屏 */
    height?: number;
    /** 自适应差值 宽度 传入的时候将启动自适应 */
    diffWidth?: number;
    /** 自适应差值 高度 传入的时候将启动自适应 */
    diffHeight?: number;
    /** 插件列表 */
    plugins?: any[];
    /** 模式 */
    mode?: "edit" | "view";
    /** 初始化的节点数据 */
    initNodes?: any[];
    /** 初始化的边数据 */
    initEdges?: any[];
    /** 节点注册 */
    registerNodes?: any[];
    /** 布局方式 */
    layout?: 'horizontal' | "vertical";
    /** 连线时候的回调 */
    edgeCallback?: (sourceNode, targetNode) => boolean;
    /** 要注册节点的列表 */
    registerNodeList?: any[];
    /** 初始化时是是否执行动画 */
    animate?: boolean;
    /** 注册边, 这里请注意，必需用字面量对象的形式去注册 */
    registerEdgeList?: any[];
    /** 注册行为 */
    registerBehaviors?: any[];
  }
  
  export class Workflow {
    constructor(props: IProps);
    /** g6的图实例 */
    graph: Graph;
    /** 改变图视口的大小 */
    changeSize: (width: number, height: number) => void;
    /** 动态设置数据 */
    setData: (data) => void;
  }
}