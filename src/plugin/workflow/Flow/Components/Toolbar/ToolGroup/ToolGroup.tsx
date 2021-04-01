import React, { useState, memo } from 'react';


interface IProps {
  /** 子节点 */
  // children: React.ReactChild;
  onChange?: (key) => void;
}

const ToolGroup: React.FC<IProps> = memo(({ children, onChange }) => {

  return (
    <div className="xioo-work-header-group">
      {
        React.Children.map(children, (child, index) => {
          let childProps = (child as any).props;
          return React.cloneElement(child as any, {
            ...childProps,
            onChange
          });
        })
      }
    </div>
  )
})

export default ToolGroup;