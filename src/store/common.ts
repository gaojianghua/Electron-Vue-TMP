import { defineStore } from 'pinia'
import {getItem} from "@/utils/storage";
import {LANG} from "@/constants";
const useCommonStore = defineStore('common', {
    state: () => {
        return {
            language: <string>getItem(LANG) || 'zh',
        }
    },
    getters: {

    },
    actions: {

    },
    persist: {
        key: 'common',
        storage: window.localStorage,
        paths: [],
        beforeRestore: () => {
            //console.log('Before hydration...:' + context)
        },
        afterRestore: () => {
            //console.log('After hydration...:' + context)
        }
    }
})

export default useCommonStore
