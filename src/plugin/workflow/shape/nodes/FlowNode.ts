import BaseNode from './BaseNode';
import nodeStyle from '../../defaultStyle/nodeStyle';

export default class FlowNode extends BaseNode {
  name = 'flow-node'
  constructor(Grid) {
    super(Grid, true);
    this.register();
  }
  draw(cfg, group, inc) {
    this.size = this.computeNodeSize(cfg);

    const keyShape = this.drawKeyShape(cfg, group);
    // this.drawAnchor(group);

    this.drawLeftText(cfg, group);

    this.drawTitleText(cfg, group);

    this.drawStatusShape(cfg, group);

    this.drawRightText(cfg, group);

    return keyShape;
  }

  afterDraw(cfg, group) {
    if(cfg.taskStatusValue === 3) {
      this.drawStatusAnimateShape(cfg, group);
    }
  }

  /** 绘制左上角的文字 */
  drawLeftText(cfg, group) {
    let { leftText, leftTextStyle = {} } = cfg; 

    if(!leftText) return;

    const attrs = {
      ...nodeStyle.leftText.origin,
      text: leftText,
      ...leftTextStyle
    }
    group.addShape('text', {
      attrs: attrs,
      name: 'power-left-text',
      className: 'node-left-text'
    });
  }

  /** 绘制右下角的text */
  drawRightText(cfg, group) {
    const { rightText, rightTextStyle = {} } = cfg;
    if(!rightText) return;
    const { width, height } = this.size;
    const attrs = {
      ...nodeStyle.rightText.origin,
      text: rightText,
      x: width - 12,
      y: height - 12,
      ...rightTextStyle
    };
    group.addShape('text', {
      attrs,
      name: 'power-right-text',
      className: 'right-text'
    });
  }

   /** 绘制主题文字 */
  drawTitleText(cfg, group) {

    let { titleText, titleTextStyle = {} } = cfg;

    if(!titleText) return;

    const width = this.size.width;
    const height = this.size.height;

    if(titleText.length > 25) {
      titleText = titleText.slice(0, 24) + '...'
    }

    const attrs = {
      ...nodeStyle.titleText.origin,
      text: titleText,
      x: width / 2,
      y: height / 2,
      ...titleTextStyle
    }                               

    group.addShape('text', {
      attrs,
      name: 'power-title-text',
      className: 'node-title-text',
      capture: true,
      draggable: true
    })
  }

  /** 判断样式 */
  getStatusStyle(cfg) {
    let { taskStatusValue } = cfg;

    const statusArr = [3, 4, 5, 10]
  
    const style = {
      3: nodeStyle.statusShape.underway,
      1: nodeStyle.statusShape.waiting,
      5: nodeStyle.statusShape.success,
      4: nodeStyle.statusShape.faild,
      10: nodeStyle.statusShape.stop
    }

    if(!taskStatusValue || statusArr.indexOf(taskStatusValue) < 0) taskStatusValue = 1;

    return style[taskStatusValue]
  }

  /** 
   * 绘制状态点 三种状态：进行中 排队中 已完成
   */
  drawStatusShape(cfg, group) {
    const width = this.size.width;
    // const height = this.size.height;
    let { taskStatus } = cfg;

    if(!taskStatus) return;

    let selfStyle = this.getStatusStyle(cfg);

    // if(!taskStatus || !style[taskStatus]) return;


    this.drawStatusText(cfg, group);

    const attrs = {
      ...selfStyle,
      r: nodeStyle.statusShape.r,
      x: width - this.getTextWidth1('14px', taskStatus) - 10,
      y: 12
    };
    group.addShape('circle', {
      attrs,
      name: 'power-status-text',
      className: 'status-text',
      capture: true,
      draggable: true
    });
  }

  /** 绘制状态文字 */
  drawStatusText(cfg, group) {
    const width = this.size.width;

    const {taskStatus, taskStatusStyle = {} } = cfg;

    // const style = {
    //   '进行中': nodeStyle.statusShape.underway,
    //   '排队中': nodeStyle.statusShape.waiting,
    //   '已完成': nodeStyle.statusShape.success
    // }

    let selfStyle = this.getStatusStyle(cfg);

    const attrs = {
      ...selfStyle,
      ...nodeStyle.statusShape.text,
      text: taskStatus,
      x: width - this.getTextWidth1('14px', taskStatus) / 2 - 4,
      y: 12,
      ...taskStatusStyle
    };
    group.addShape('text', {
      attrs,
      name: 'power-status-node',
      className: 'status-node',
      capture: true,
      draggable: true
    });
  }

  /** 绘制状态动画图形 */
  drawStatusAnimateShape(cfg, group) {
    const { width } = this.size;
    const x = width - 52;
    const y = 12;
    const r = nodeStyle.statusShape.r;

    // const back0 = this.createStatusAnimateShape(cfg, group, 'back0-shaoe', 0, 1);
    const back1 = this.createStatusAnimateShape(cfg, group, 'back1-shaoe', -3, 0.6);
    const back2 = this.createStatusAnimateShape(cfg, group, 'back1-shaoe', -2, 0.6);
    const back3 = this.createStatusAnimateShape(cfg, group, 'back1-shaoe', -1, 0.6);
    this.createStatusAnimate(r, back1, 0);
    this.createStatusAnimate(r, back2, 1000);
    this.createStatusAnimate(r, back3, 2000);
  }

  /** 创建动画 */
  createStatusAnimate(r, shape, delay) {
    shape.animate(
      {
        // Magnifying and disappearing
        r: r + 5,
        opacity: 0.1
      },
      {
        duration: 3000,
        easing: "easeCubic",
        delay,
        repeat: true // repeat
      }
    );
  }

  /** 创建动画图形 */
  createStatusAnimateShape(cfg, group, name, zIndex, opacity) {
    const { width } = this.size;
    const x = width - this.getTextWidth1('14px', cfg.taskStatus) - 10;
    const y = 12;
    return group.addShape("circle", {
      zIndex: zIndex,
      attrs: {
        x,
        y,
        r: nodeStyle.statusShape.r,
        fill: nodeStyle.statusShape.underway.fill,
        opacity
      },
      name: name
    });
  }
}