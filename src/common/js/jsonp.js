import originJSONP from 'jsonp'

export default function jsponp(url, data, option) {
    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
    return new Promise((resolve, reject) => {
        originJSONP(url, option, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}
/**
 * @param {Object} data 
 */
export function param(data) {
    let url = ''
    for (var k in data) {
        let value = !!data[k] ? data[k] : ''
        url += `&${k}=${encodeURIComponent(value)}`
    }
    // 如果数据不为空，要去掉前在的&符号，所以用天substring
    return url ? url.substring(1) : ''
}