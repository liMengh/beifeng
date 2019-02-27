import{RECEIVE_ADDRESS, RECEIVE_FOODCATEGORYS, RECEIVE_SHOPS} from './mutation-types'

export default{
    [RECEIVE_ADDRESS](state,{address}){
        state.address = address
    },
    [RECEIVE_FOODCATEGORYS](state,{categorys}){
        state.categorys = categorys
    },
    [RECEIVE_SHOPS](state,{shops}){
        state.shops = shops
    }
}