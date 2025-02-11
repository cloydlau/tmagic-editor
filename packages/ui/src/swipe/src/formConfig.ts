export default [
  {
    type: 'number',
    text: '上边距',
    name: 'pt',
    append: 'px',
  },
  {
    type: 'number',
    text: '右边距',
    name: 'pr',
    append: 'px',
  },
  {
    type: 'number',
    text: '下边距',
    name: 'pb',
    append: 'px',
  },
  {
    type: 'number',
    text: '左边距',
    name: 'pl',
    append: 'px',
  },
  {
    type: 'switch',
    text: '纵向滚动',
    name: 'vertical',
  },
  {
    type: 'number',
    text: '高度',
    name: 'height',
  },
  {
    type: 'switch',
    text: '循环播放',
    name: 'loop',
  },
  {
    type: 'switch',
    text: '显示指示器',
    name: 'showIndicators',
  },
  {
    type: 'switch',
    text: '手势滑动',
    name: 'touchable',
  },
  {
    type: 'number',
    text: '自动轮播间隔',
    name: 'autoplay',
    append: '毫秒',
  },
  {
    type: 'number',
    text: '动画时长',
    name: 'duration',
    append: '毫秒',
  },
  {
    type: 'colorPicker',
    text: '指示器颜色',
    name: 'indicatorColor',
  },
  {
    type: 'table',
    text: '轮播卡片',
    name: 'item',
    items: [
      {
        label: '链接',
        name: 'src',
        rules: [
          {
            required: true,
            message: '必填',
          },
        ],
      },
      {
        type: 'switch',
        label: '是否视频',
        name: 'isVideo',
      },
      {
        type: 'switch',
        label: '自动播放视频',
        name: 'autoplay',
      },
    ],
  },
];
