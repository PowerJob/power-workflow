/*
 * @version: 
 * @Author: dee
 * @Date: 2021-02-03 15:43:11
 * @LastEditors: dee
 * @LastEditTime: 2021-02-03 16:18:49
 */
import Item from "@antv/g6-core/lib/item/item";

import { deepMix } from "@antv/util";

export default class Anchor extends Item {
  /** 判断是否是锚点 */
  public isAnchor: boolean;

  /** 锚点控制器 */
  public hotpot: any;

  constructor(props) {
    super(
      deepMix(props, {
        type: "anchor",
        isActived: true,
        model: {
          type: "anchor",
          style: {
            r: 4,
            fill: "#fff",
            shadowBlur: 4,
            shadowColor: "#666",
            cursor: "crosshair"
          }
        }
      })
    );
    this.enableCapture(true);
    this.isAnchor = true;
    this.toFront();
  }

  showHotpot(){
    this.hotpot = this.getContainer().addShape('marker', {
      attrs: {
        ...this.get('model').style,
        r: 12, 
        fill: '#1890FF', 
        fillOpacity: .25
        // ...editorStyle.anchorHotsoptStyle
      },
      name: 'hotpot-shape',
      draggable: true,
    });
    this.hotpot.toFront();
  }

  setHotspotActived(active) {
    this.hotpot && active && this.hotpot.attr ? this.hotpot.attr && this.hotpot.attr({r: 14, fill: '#0084FF'}) : this.hotpot.attr && this.hotpot.attr({r: 12, fill: '#1890FF'})
  }
}
