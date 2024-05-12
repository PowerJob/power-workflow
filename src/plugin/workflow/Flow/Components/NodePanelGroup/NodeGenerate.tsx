import React, { useState, useMemo } from 'react';

const HtmlNodes = {
  /** 矩形 */
  rect: (attr) => {
    return (
      <div className="panel-node rect">
        <div 
          draggable="true" 
          data-item={JSON.stringify(attr)} 
          className={`node-item rect`}
          style={{
            width: 100,
            height: 50,
            backgroundColor: attr.fill,
            border: `2px solid ${attr.stroke}`,
            borderRadius: 4
          }}>
            {attr.img && <img src={attr.img} className="panel-node-rect-icon" />}
        </div>
        {attr.text}
      </div>
    )
  },
  /** 圆形 */
  circle: (attr) => {
    return (
      <div className="panel-node circle">
        <div 
          draggable="true" 
          data-item={JSON.stringify(attr)} 
          className="node-item circle"
          style={{
            width: 50,
            height: 50,
            backgroundColor: attr.fill,
            border: `2px solid ${attr.stroke}`,
            borderRadius: '50%'
          }}>
            <img src={attr.img} className="panel-node-rect-icon" />
        </div>
        {attr.text}
      </div>
    )
  },
  /** 三角形 */
  trigon: (attr) => {
    const position = {
      top: '▲',
      bottom: '▼',
      left: '◀︎', 
      right: '▶'
    }
    const insert = {
      top: '10px 0 0',
      bottom: '0 0 14px 0',
      left: '0 0 0 10px',
      right: '0 20px 8px 0'
    }
    const insertStyle = {
      inset: insert[attr.position]
    }

    return (
      <div className="panel-node circle">
        <div 
          draggable="true" 
          data-item={JSON.stringify(attr)} 
          className="node-item"
          style={{
            fontSize: 64,
            color: attr.fill,
            lineHeight: '50px',
            backgroundColor: 'transparent',
            position: 'relative'
          }}>
            <img src={attr.img} className="panel-node-rect-icon" style={{
              position: 'absolute',
              ...insertStyle,
              margin: 'auto',
              width: 30,
              height: 30
            }} />
            {position[attr.position ? attr.position : 'top']}
        </div>
        {attr.text}
      </div>
    )
  },
  /** 菱形 */
  diamond: (attr) => {
    return (
      <div className="panel-node">
        <div 
          draggable="true" 
          data-item={JSON.stringify(attr)} 
          className={`node-item diamond`}
          style={{
            width: 35,
            height: 35,
            backgroundColor: attr.fill,
            border: `2px solid ${attr.stroke}`,
            borderRadius: 4
          }}>
            {attr.img && <img src={attr.img} className="panel-node-rect-icon diamond" />}
        </div>
        {attr.text}
      </div>
    )
  }
}

interface IProps {
  [key:string]: any;
}

const HtmlNode: React.FC<IProps> = ({node}) => {
  return HtmlNodes[node.thumbnail](node.attrs);
}

export default HtmlNode;