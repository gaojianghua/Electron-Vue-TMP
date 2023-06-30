/**
 * 判空操作
 */
export const isNull = <T>(data: T) => {
    if (!data) return true
    if (JSON.stringify(data) === '{}') return true
    if (JSON.stringify(data) === '[]') return true
}
