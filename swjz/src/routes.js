import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import ClubBase from './components/ClubBase.vue' //俱乐部基地
import Ghosts from './components/Ghosts.vue'  //鬼手
import MainPage from './components/MainPage.vue' //主页
import AllianceWorld from './components/AllianceWorld.vue' //会盟天下
import FourCarriages from './components/FourCarriages.vue' //四驾马车
import GhostsHands from './components/GhostsHands.vue' //鬼手动向
import LegionGhosts from './components/LegionGhosts.vue' //鬼手军团
//俱乐部基地
import Australia from './components/clubBase/Australia.vue' //澳大利亚基地
import Changsha from './components/clubBase/Changsha.vue' //长沙基地
import Hefei from './components/clubBase/Hefei.vue' //合肥基地
import HongKong from './components/clubBase/HongKong.vue' //香港基地
import Shanghai from './components/clubBase/Shanghai.vue' //上海基地
import Zhengzhou from './components/clubBase/Zhengzhou.vue' //郑州基地
//四驾马车
import BusinessSchool from './components/FourCarriages/BusinessSchool.vue' //商学院
import FinanceEconomics from './components/FourCarriages/FinanceEconomics.vue' //财经
import JingRonghospital from './components/FourCarriages/JingRonghospital.vue' //金融医院
import TVstation from './components/FourCarriages/TVstation.vue' //电视台

let routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        children: [
            { path: '/clubBase', component: ClubBase},
            { path: '/ghosts', component: Ghosts},
            { path: '/allianceWorld', component: AllianceWorld},
            { path: '/fourCarriages', component: FourCarriages},
            { path: '/ghostsHands', component: GhostsHands},
            { path: '/legionGhosts', component: LegionGhosts},
            { path: '/Australia', component: Australia},
            { path: '/hefei', component: Hefei},
            { path: '/changsha', component: Changsha},
            { path: '/hongKong', component: HongKong},
            { path: '/shanghai', component: Shanghai},
            { path: '/zhengzhou', component: Zhengzhou},
            { path: '/changsha', component: BusinessSchool},
            { path: '/hongKong', component: FourCarriages},
            { path: '/jingRonghospital', component: JingRonghospital},
            { path: '/tVstation', component: TVstation}
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;