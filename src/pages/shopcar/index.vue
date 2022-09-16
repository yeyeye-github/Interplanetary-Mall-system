<template>
  <div class="h">
    <div class="w">
      <div class="all">全部商品</div>
      <div class="th">
        <span class="t0">全部</span>
        <span class="t1">商品</span>
        <span class="t2">单价（元）</span>
        <span class="t3">数量</span>
        <span class="t4">小计（元）</span>
        <span class="t5">操作</span>
      </div>
      <div class="tb">
        <ul>
          <li v-for="(d,i) in allgoods" :key="d.id">
            <input :checked="d.ischeck" class="t0" type="checkbox" style="cursor: pointer;" @change="()=>{d.ischeck = !d.ischeck}">
            <div class="t1" style="display:flex;align-items: center;justify-content: center;" >
              <img class="imgshow" :src="d.goodInfo.img" alt="">
              <span class="imgtitle">{{d.goodInfo.title}}</span>
            </div>
            <span class="t2">{{d.goodInfo.price}}</span>
            <div class="t3">
              <button class="bbbbb" @click="d.goodNum = d.goodNum-1 < 1 ?d.goodNum:d.goodNum-1">-</button>
              <input @input="yanz(d)" class="numn" type="text" v-model="d.goodNum">
              <button class="bbbbb" @click="d.goodNum = d.goodNum+1 > 999 ?d.goodNum:d.goodNum+1">+</button>
            </div>
            <span class="t4">{{(+d.goodNum * +d.goodInfo.price.replace(/,/g,"")).toLocaleString()}}</span>
            <a class="t5" href="#">从购物车移除</a>
          </li>
        </ul>
      </div>
      <div class="tf">
        <input :checked="allccc" @change="cj" type="checkbox" style="cursor:pointer">
        <span style="margin-left:5px">全选</span>
        <a style="margin-left:20px" href="#">移除所选商品</a>
        <div style="flex:1"></div>
        <span>已选择 {{allxuanz}} 件商品，</span>
        <span>总价（不含运费）：{{allprice}}</span>
        <button class="jiesuan">结算</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopcar",
  data() {
    return {
      allgoods: [],
      allxuanz:0,
      allprice:0,
    };
  },
  computed:{
    allccc(){
      let tem = true
      this.allgoods.forEach(e=>{
        if (!e.ischeck){
          tem = false
        }
      })
      return tem
    }
  },
  methods: {
    async getCar() {
      let tem = await this.$api.getShopCar();
      if (tem.code == "201") {
        alert(tem.msg);
        this.$router.replace("/login");
      } else if (tem.code == "200") {
        this.allgoods = tem.data;
        this.chuli();
      }
    },
    cj(){
      if(this.allccc == true){
        this.allgoods.forEach(e=>{
          e.ischeck = false
        })
      }
      else{
        this.allgoods.forEach(e=>{
          e.ischeck = true
        })
      }
    },
    chuli() {
      this.allgoods.forEach((e) => {
        const tem = e.goodInfo.img;
        e.goodInfo.img = tem.slice(9, -4);
        e.goodInfo.img = require(`../search/images/${e.goodInfo.img}.png`);
      });
    },
    yanz(d){
      d.goodNum = d.goodNum.toString().replace(/[^\d]/g, "");
      if (+d.goodNum < 1) {
        d.goodNum = 1;
      }
      if (+d.goodNum > 999) {
        console.log(0)
        d.goodNum = 999;
      }
    }
  },
  mounted() {
    this.getCar();
  },
  watch:{
    allgoods:{
      deep:true,
      immediate:true,
      handler(){
        let temxuanz = 0
        let temprice = 0
        this.allgoods.forEach(e=>{
          if(e.ischeck){
            temxuanz++
            temprice += +e.goodNum * +e.goodInfo.price.replace(/,/g,"")
          }
        })
        this.allxuanz = temxuanz
        this.allprice = temprice.toLocaleString()
      }
    }
  }
};
</script>

<style>
.h {
  border-top: 2px solid #35a3a3;
  padding-bottom: 30px;
}
.all {
  font-weight: 600;
  font-size: 14px;
  color: black;
  padding: 10px 0;
}
.th {
  display: flex;
  padding: 10px 5px;
  background-color: rgb(249, 249, 249);
  justify-content: space-around;
  border: 1px solid rgb(175, 175, 175);
}
.th span {
  text-align: center;
}
.t0 {
  width: 35px;
}
.t1 {
  width: 450px;
}
.t2 {
  width: 200px;
}
.t3 {
  width: 170px;
}
.t4 {
  width: 170px;
}
.t5 {
  width: 170px;
}
.imgshow {
  width: 100px;
  height: 100px;
  margin-right: 10px;
}
.tb li {
  display: flex;
  align-items: center;
  text-align: center;
}
.imgtitle {
  width: 200px;
}
.tb {
  border: 1px solid rgb(175, 175, 175);
  border-top: none;
}
.tf {
  display: flex;
  height: 50px;
  align-items: center;
  border: 1px solid rgb(175, 175, 175);
  padding: 0 0px 0 10px;
  border-top: none;
}
.jiesuan {
  height: calc(100%);
  border: none;
  background-color: #e1251b;
  color: white;
  width: 100px;
  font-size: 20px;
  margin-left: 20px;
}
.jiesuan:hover {
  background-color: #c91e15;
}
.numn{
  width: 30px;
  height: 30px;
  text-align: center;
  border: 1px solid rgb(175, 175, 175);
  border-right: none;
  border-left: none;
}
.bbbbb{
  width: 30px;
  height: 30px;
  background-color: white;
  border: 1px solid rgb(175, 175, 175);
}
.bbbbb:hover{
  background-color: rgb(242, 242, 242);
}
</style>