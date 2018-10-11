// 开发&测试
const API_URL = 'https://www.easy-mock.com/mock/5b29cac2f2513823fb3037a7'; //开发地址
const gatewayToken = ''; //later
// 生产
//const gatewayToken = '';
//const API_URL = '';

const Promise = require('./bluebird');

function fetchApi(URL, params, method, GWToken) {
    var token = wx.getStorageSync('access_token');
    if (GWToken) {
        var header = {
            "Content-Type": "application/json", //post
            "Authorization": token
        }
    } else {
        var header = {
            "Content-Type": "application/json", //post
            "Authorization": gatewayToken
        }
    }
    return new Promise((resolve, reject) => {
        wx.request({
            url: URL,
            data: Object.assign({}, params),
            method: method,
            header: header,
            success: resolve,
            fail: reject,
            complete: function(res) {
                if (res.data.status == "401") {
                    wx.redirectTo({
                        url: '../login/login',
                    })
                }
            }
        })
    })
}
module.exports = {
    API_URL: API_URL,
    fetchApi: fetchApi
}