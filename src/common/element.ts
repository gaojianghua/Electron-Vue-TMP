import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import useStore from '@/store'
import { App } from 'vue'

export default (app: App) => {
    app.use(ElementPlus, {
        locale: useStore().common.language === 'en' ? en : zhCn
    })
}
