import ajax from './ajax'

const BASE_URL = '/api'

//1.根据经纬度获取位置详情
export const reqAddress =  (geohash) => ajax(BASE_URL +'/position/' + geohash)

//2.获取食品分类列表
export const reqFoodCategorys = () => ajax(BASE_URL + '/index_category')
//3.获取商铺列表
export const reqShops = ({latitude,longitude}) => ajax(BASE_URL+'/shops/',{latitude,longitude})
//4.动态一次性短信验证码
export const reqCode = (phone) => ajax(BASE_URL + '/sendcode?phone=' + phone)
//5.手机号验证登录
export const reqSms = (phone,code) => ajax(BASE_URL + '/login_sms',{phone,code}, "POST")
//6.用户名密码登录
export const reqPwd = (name,pwd,captcha) => ajax(BASE_URL + '/login_sms',{name,pwd,captcha}, "POST")
//7.自动登录
