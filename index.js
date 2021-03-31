// if(process.env.NODE_ENV === 'production') {
//   module.exports = require('./dist/power-workflow.min.js');
// } else {
//   module.exports = require('./dist/power-workflow.js');
// }

import { default as Flow, BaseNode, Workflow, ToolGroup, ToolItem } from './dist/power-workflow.js';


export { BaseNode, Workflow, ToolGroup, ToolItem };
export default Flow;