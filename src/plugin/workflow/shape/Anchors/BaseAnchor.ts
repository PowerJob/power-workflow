/*
 * @version: 
 * @Author: dee
 * @Date: 2021-02-05 14:58:30
 * @LastEditors: dee
 * @LastEditTime: 2021-02-05 15:34:50
 */

import { shapeBase } from '@antv/g6-core/lib/element/shapeBase';
import Shape from '@antv/g6-core/lib/element/shape';
import RegisterManger from '../../Workflow/registerManger';

export default class BaseAnchor extends RegisterManger {
  constructor(Grid) {
    super(Grid);
    this.register();
  }

  register() {
    Shape.registerFactory('anchor', {
      defaultShapeType: 'marker',
      getShape:(type)=> {
        const shapeObj = Object.assign({}, shapeBase,{
          type: 'marker',
          itemType: type,
          drawShape(cfg, group) {
            const style = this.getShapeStyle(cfg);
            const shape = group.addShape('marker', {
              attrs: style,
              name: 'anchor-shape',
              draggable: true,
            });
            return shape;
          },
          setState(name, value, item) {
            if(name === 'anchor-active') {
              if(value) {
                this.update({style: {fill: '#1990FF', r: 5}}, item);
              }
            }
            if(name === 'hoverAnchor') {
              if(value) {
                this.update({style: {fill: '#AEA1FF'}}, item);
              } else {
                this.update({style: {fill: '#FFF'}}, item);
              }
            }
            // if(name === 'active-anchor') {
            //   if(value) {
            //     this.update({style: {...editorStyle.anchorPointHoverStyle}}, item);
            //   }else{
            //     this.update({style: {...editorStyle.anchorPointStyle}}, item);
            //   }
            // }
          }
        });
        return shapeObj;
      },
    });
  }
}