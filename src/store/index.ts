import useCommonStore from './common'
import useUserStore from "./user";

// 统一导出 useStore 方法
export default function useStore() {
    return {
        common: useCommonStore(),
        user: useUserStore(),
    }
}
