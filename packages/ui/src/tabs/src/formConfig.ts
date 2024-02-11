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
    type: 'select',
    text: '样式风格',
    name: '_type',
    defaultValue: 'line',
    options: [
      {
        text: 'line',
        value: 'line',
      },
      {
        text: 'card',
        value: 'card',
      },
    ],
  },
  {
    type: 'colorPicker',
    text: '标签主题色',
    name: 'color',
  },
  {
    type: 'colorPicker',
    text: '标题默认态颜色',
    name: 'title-inactive-color',
  },
  {
    type: 'colorPicker',
    text: '标题选中态颜色',
    name: 'title-active-color',
  },
  {
    type: 'colorPicker',
    text: '标签栏背景色',
    name: 'background',
  },
  {
    type: 'switch',
    text: '显示标签栏外边框',
    name: 'border',
    extra: '&nbsp;样式风格为 "line" 时有效',
  },
  {
    type: 'switch',
    text: '粘性布局',
    name: 'sticky',
  },
  {
    type: 'switch',
    text: '左侧收缩布局',
    name: 'shrink',
  },
  {
    type: 'switch',
    text: '手势左右滑动切换',
    name: 'swipeable',
  },
  {
    type: 'switch',
    text: '滚动导航',
    name: 'scrollspy',
  },
  {
    type: 'table',
    text: '标签',
    name: 'item',
    items: [
      {
        label: '标题',
        name: 'title',
        rules: [
          {
            required: true,
            message: '必填',
          },
        ],
      },
    ],
  },
];
