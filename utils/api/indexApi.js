//login api
const config = require('../config')

// get
function getDemo(params) {
    return config.fetchApi(config.API_URL + "/api/UserDeal/v1/myDealPageList", params, "GET", true).then(res => res.data);
}
// post
function postDemo(params) {
    return config.fetchApi(config.API_URL + "/api/UserDeal/v1/myDealPageList", params, "POST", true).then(res => res.data);
}
module.exports = {
    getDemo,
    postDemo
}