import { defineStore } from 'pinia'
import router from '@/render/router'
import { getItem, removeAllItem, setItem } from '@/render/utils/storage.ts'

const useUserStore = defineStore('user', {
    state: () => {
        return {
            token: getItem('token') || <string>'',
            userInfo: <any>{}
        }
    },
    getters: {
        hasUserInfo(state) {
            return JSON.stringify(state.userInfo) !== '{}'
        }
    },
    actions: {
        // 保存 token
        setToken(newToken: string) {
            this.token = newToken
            setItem('token', newToken)
        },
        // 保存用户信息
        setUserInfo(newUserInfo: any) {
            this.userInfo = newUserInfo
            setItem('userInfo', newUserInfo)
        },
        // 退出登录
        logout() {
            this.setToken('')
            this.setUserInfo({})
            removeAllItem()
            router.push('/login')
        }
    }
})

export default useUserStore
