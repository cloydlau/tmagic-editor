import { FolderOpened, Grid, PictureFilled, SwitchButton, Ticket, Tickets } from '@element-plus/icons-vue';

export default [
  {
    title: '容器',
    items: [
      {
        icon: FolderOpened,
        text: '组',
        type: 'container',
      },
      {
        icon: FolderOpened,
        text: '蒙层',
        type: 'overlay',
      },
      {
        icon: Ticket,
        text: '页面片容器',
        type: 'page-fragment-container',
      },
    ],
  },
  {
    title: '组件',
    items: [
      {
        icon: Tickets,
        text: '文本',
        type: 'text',
      },
      {
        icon: SwitchButton,
        text: '按钮',
        type: 'button',
      },
      {
        icon: PictureFilled,
        text: '图片',
        type: 'img',
      },
      {
        icon: Grid,
        text: '二维码',
        type: 'qrcode',
      },
      {
        icon: 'https://api.iconify.design/material-symbols:view-carousel-outline.svg',
        text: '轮播',
        type: 'swipe',
      },
      {
        icon: 'https://api.iconify.design/pixelarticons:section-plus.svg',
        text: '热区',
        type: 'hotarea',
      },
      {
        icon: 'https://api.iconify.design/gravity-ui:layout-tabs.svg',
        text: '标签页',
        type: 'tabs',
      },
      {
        icon: 'https://api.iconify.design/icon-park-outline:commodity.svg',
        text: '商品',
        type: 'commodity',
      },
    ],
  },
  {
    title: '组合',
    items: [
      {
        icon: Tickets,
        text: '弹窗',
        data: {
          type: 'overlay',
          style: {
            position: 'fixed',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          },
          name: '弹窗',
          items: [
            {
              type: 'container',
              style: {
                position: 'absolute',
                width: '80%',
                height: '400',
                top: '143.87',
                left: 37.5,
                backgroundColor: 'rgba(255, 255, 255, 1)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
              },
              name: '组',
              items: [],
              layout: 'absolute',
            },
          ],
        },
      },
    ],
  },
];
