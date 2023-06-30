import router from './index'
import useStore from '@/store'
// 白名单
const whiteList = ['/login']
/**
 * @description  : 路由前置守卫
 * @param         {*} to 目标地址
 * @param         {*} from 当前地址
 * @param         {*} next 是否跳转
 * @return        {*} 无
 */
router.beforeEach(async (to, _, next) => {
    // 已登录
    if (useStore().user.token) {
        if (to.path === '/login') {
            next('/')
        } else {
            next()
        }
    } else {
        // 未登录
        if (whiteList.indexOf(to.path) > -1) {
            next()
        } else {
            next('/login')
        }
    }
})
