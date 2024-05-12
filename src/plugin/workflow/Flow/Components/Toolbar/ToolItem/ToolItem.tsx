import React, { useState, memo, useEffect } from 'react';


interface IProps {
  /** 显示的文字 */
  text: string;
  /** 图标，这里请使用font-awesome */
  icon: string;
  /** 键值 */
  event?: string;
  /** 命令，这里的命令要通过注册命令去注册 */
  command?: string;
  /** 执行命令时传递的参数，请保持是json格式 */
  params?: Object;
  /** 状态 */
  status?: boolean;
  /** 点击事件 */
  onChange?: (key) => void;
}

const ToolItem: React.FC<IProps> = memo(({ text, icon, command, params, status = true, event, onChange }) => {

  const [ divProps, setDivParps ] = useState({});

  const handleClick = () => {
    onChange && onChange(event);
  }

  useEffect(() => {
    const startProps: { 'data-command'?: string, 'data-params'?: string } = {};
    if(command) {
      startProps['data-command'] = command;
    }

    if(params) {
      startProps['data-params'] = JSON.stringify(params);
    }

    setDivParps(startProps);
  }, [])

  return (
    <div className={`xioo-work-header-group-icon ${status ? 'actionable' : ''}`} {...divProps} onClick={handleClick}>
      <span className={`operate fa ${icon}`}></span>
      <span className="icon-text">{text}</span>
    </div>
  )
})

export default ToolItem;