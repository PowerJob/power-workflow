/*
 * @version: 
 * @Author: dee
 * @Date: 2021-02-03 09:53:29
 * @LastEditors: dee
 * @LastEditTime: 2021-02-05 16:36:44
 */
interface IRegisterManger {
  /** 继承实例信息 */
  extendedName: string;
  /** 注册类型 */
  registerType: "registerNode";
  /** 实例名字 */
  name: string;
}

export default abstract class RegisterManger implements IRegisterManger {
  G6;
  extendedName: string = null;
  name: string;
  registerType: "registerNode";
  constructor(G6) {
    this.G6 = G6;
  }
  register(events?: any) {
    this.G6[this.registerType](this.name, {}, this.extendedName);
  }
}
