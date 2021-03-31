import MacroCommand from '../plugin/MacroCommand';
import ReloadCommand from './reload';
import CopyCommand from './copy';
import DeleteCommand from './delete';
import BlowCommand from './blow';
import FitViewCommand from './fitView';
import OriginSizeCommand from './originSize';
import LayoutCommand from './layout';
import FullScreenCommand from './fullScreen';
import UndoCommand from './undo';
import RedoCommand from './redo';
import DocatCommand from './docat';

interface ICommond {
  /** 命令值 */
  command: string;
  /** 命令对象 */
  CommandObject: any;
}

export default (commontList: ICommond[] = []) => {
  MacroCommand.registerCommand('reload', new ReloadCommand());
  MacroCommand.registerCommand('copy', new CopyCommand());
  MacroCommand.registerCommand('delete', new DeleteCommand());
  MacroCommand.registerCommand('blow', new BlowCommand());
  MacroCommand.registerCommand('fitView', new FitViewCommand());
  MacroCommand.registerCommand('originSize', new OriginSizeCommand());
  MacroCommand.registerCommand('layout', new LayoutCommand());
  MacroCommand.registerCommand('fullScreen', new FullScreenCommand());
  MacroCommand.registerCommand('undo', new UndoCommand());
  MacroCommand.registerCommand('redo', new RedoCommand());
  MacroCommand.registerCommand('docat', new DocatCommand());

  commontList.forEach(item => {
    MacroCommand.registerCommand(item.command, new item.CommandObject());
  });
}