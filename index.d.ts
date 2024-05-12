declare module "power-workflow" {
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
    /** 是否是树展示 */
    treeGroup?: boolean;
    /** 布局参数, 布局的而外参数，会覆盖原有的布局，只有传入layout才有效 */
    layoutParams?: {
      [key: string]: any
    },
    /** 配置默认的节点信息 */
    defaultNode?: any;
    /** 配置默认的边的信息 */
    defaultEdge?: any;
    /** 自定义的模式配置 */
    modes?: {[key: string]: any[]}
  }
  
  export class Workflow {
    constructor(props: IProps);
    /** g6的图实例 */
    graph: Graph;
    /** 改变图视口的大小 */
    changeSize: (width: number, height: number) => void;
    /** 动态设置数据 */
    setData: (data) => void;
    /** 监听事件 */
    on: (eventName: string, handler) => void;
    /** 设置模式 */
    setMode: (mode: string) => void;
    /** 自适应画板 */
    fitView: (size?: number) => void;
    /** 居中 */
    fitCenter: () => void;
  }

  export class RegisterBehavior {
    name: string;
    register: (events: {[key: string]: any}) => void;
    getEvents: () => ({ [key: string]: any })
  }

  export const ToolGroup;
  export const ToolItem;
  export const BaseNode;
  const Flow;
  export default Flow;
}