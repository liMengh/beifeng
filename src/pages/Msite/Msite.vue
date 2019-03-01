<template>
  <section class="msite">
    <!--首页头部-->
    <HeadTop :title=address.city>
      <span slot="left" class="header_search">
        <i class="iconfont icon-sousuo icon-sousuo2"></i>
      </span>

      <span slot="right" class="header_login">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeadTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(category,index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(item,index) in category" :key="index">
              <div class="food_container">
                <img :src = "imgBaseUrl + item.image_url">
              </div>
              <span>{{item.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <ShopList/> 
  </section>
</template>
<script>
import {mapState} from 'vuex'
import HeadTop from "../../components/HeadTop/HeadTop";
import ShopList from "../../components/shopList/shopList"
import Swiper from "swiper";
import Vue from 'vue';
export default {
  data() {
    return {
      imgBaseUrl: 'https://fuss10.elemecdn.com',
    }
  },
  components: {
    HeadTop,
    ShopList
  },
  mounted() {
   
  },
  watch: {
    categorys(value){
      this.$nextTick(() => new Swiper(".swiper-container", {
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      }
      }))
    }
  },
  computed:{
    ...mapState(['address','categorys','shops']),
    categorysArr(){
      let arr = this.categorys
      let smallArr = []
      let bigArr = []
      let max = 8
      for(let i = 0;i<arr.length;i++){
        smallArr.push(arr[i])
        if(smallArr.length === max){
          bigArr.push(smallArr)
           smallArr = []
        }
      }
      return bigArr
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';

.msite { // 首页
  width: 100%;

  .msite_header {
    background-color: #02a774;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 45px;

    .header_title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
      color: #fff;
      text-align: center;

      .header_title_text {
        font-size: 20px;
        color: #fff;
        display: block;
      }
    }

    .header_login {
      font-size: 14px;
      color: #fff;
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);

      .header_login_text {
        color: #fff;
      }
    }
  }

  .msite_nav {
    bottom-border-1px(#e4e4e4);
    margin-top: 45px;
    height: 200px;
    background: #fff;

    .swiper-container {
      width: 100%;
      height: 100%;

      .swiper-wrapper {
        width: 100%;
        height: 100%;

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;

          .link_to_food {
            width: 25%;

            .food_container {
              display: block;
              width: 100%;
              text-align: center;
              padding-bottom: 10px;
              font-size: 0;

              img {
                display: inline-block;
                width: 50px;
                height: 50px;
              }
            }

            span {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 13px;
              color: #666;
            }
          }
        }
      }

      .swiper-pagination {
        >span.swiper-pagination-bullet-active {
          background: #02a774;
        }
      }
    }
  }

 
}
</style>
