import Page1 from '../plugin/Page1';
import Page2 from '../plugin/Page2';
import Page3 from '../plugin/Page3';

export default [
  {
    path: '/',
    Component: Page1,
    meta: {
      title: '组件1',
      show: false
    },
    routes: [
      {
        path: 'page2',
        Component: Page2,
        meta: {
          title: '组件1',
          show: false
        },
      },
      {
        path: 'page3',
        Component: Page3,
        meta: {
          title: '组件1',
          show: false
        },
      }
    ]
  }
]