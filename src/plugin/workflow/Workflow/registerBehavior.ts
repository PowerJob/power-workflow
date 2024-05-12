/*
 * @version: 
 * @Author: dee
 * @Date: 2021-02-05 15:50:40
 * @LastEditors: dee
 * @LastEditTime: 2021-02-05 16:38:17
 */
import RegisterManger from './registerManger';

export default class RegisterBehavior extends RegisterManger {
  name = '';

  constructor(Grid) {
    super(Grid);
  }

  register(events = {}) {
    const self = this;
    this.G6.registerBehavior(this.name, {
      getEvents: this.getEvents,
      ...events
    })
  }

  getEvents() {
    return {}
  }
}