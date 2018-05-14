export default {
  // 导航栏
  navbar: {
    title: '自动化装逼系统',
    languageSwitch: '语言切换',
    theme: '主题'
  },
  isSelect: '鬼首',
    footNav: [{title: '鬼首',active:'active',noActive:'noActive',url:'Ghosts'},
        {title: '俱乐部基地 ',active:'active',noActive:'noActive',url:'ClubBase'},
        {title: '鬼手军团 ',active:'active',noActive:'noActive',url:'LegionGhosts'},
        {title: '鬼手动向 ',active:'active',noActive:'noActive',url:'GhostsHands'},
        {title: '四驾马车 ',active:'active',noActive:'noActive',url:'FourCarriages'},
        {title: '会盟天下 ',active:'active',noActive:'noActive',url:'AllianceWorld'}
  ],
    Title:{
        base:'俱乐部基地',
        footer:'金融鬼手俱乐部鬼手所有'
    },
    clubImgs: [
        {src: '../../static/images/shanghai.jpg',name:'上海基地',url:'Shanghai'},
        {src: '../../static/images/shanghai.jpg',name:'郑州基地',url:'Zhengzhou'},
        {src: '../../static/images/shanghai.jpg',name:'香港基地',url:'HongKong'},
        {src: '../../static/images/shanghai.jpg',name:'合肥基地',url:'Hefei'},
        {src: '../../static/images/shanghai.jpg',name:'长沙基地',url:'Changsha'},
        {src: '../../static/images/shanghai.jpg',name:'澳大利亚',url:'Australia'}
    ],
  skin: {
    blue: '天空蓝',
    green: '典雅绿',
    red: '樱桃红',
    purple: '贵族紫',
    default: '默认'
  },
  route: {
    Readme: '自述',
    permission: '权限'
  }
}
