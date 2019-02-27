import {
  reqAddress,
  reqFoodCategorys
} from '../api'

import {
  RECEIVE_ADDRESS,
  RECEIVE_FOODCATEGORYS
} from './mutation-types'

export default{
    async getAddress({commit,state}){
       const geohash = state.latitude + ',' + state.longitude
       const result = await reqAddress(geohash)
       console.log(result)
       if (result.code === 0) {
            const address = result.data
            commit(RECEIVE_ADDRESS,{address: result.data})
       }
    },
    async getCategorys({commit,state}){
       const result = await reqFoodCategorys()
       console.log(result.data)
       if (result.code === 0) {
            const categorys = result.data
            commit(RECEIVE_FOODCATEGORYS,{categorys: result.data})
       }
    },
    async getshops({commit,state}){
      const {latitude,longitude} = state
      const result = await reqShops(latitude, longitude)
      if(result.code === 0){
        const shops = result.data
        commit(RECEIVE_SHOPS,{shops: result.data})
      }

    }
}