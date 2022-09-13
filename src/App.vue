<template>
  <div>
    <myHeader v-if="!$route.meta.isRegister && !$route.meta.islogin"></myHeader>
    <router-view></router-view>
    <Footer v-if="!$route.meta.isRegister && !$route.meta.islogin"></Footer>
  </div>
</template>

<script>
import myHeader from "./components/myHeader";
import Footer from "./components/footer";

export default {
  name: "App",
  components: {
    myHeader,
    Footer,
  },
  mounted() {
    this.autol();
  },
  methods: {
    async autol() {
      let tem = await this.$api.autologin();
      if (tem.code == "200") {
        this.$store.dispatch("user/actUsername", tem.username);
        sessionStorage.setItem("username", tem.username);
        if(this.$router.currentRoute.path == '/login' || this.$router.currentRoute.path == '/register'){
          this.$router.replace('/home')
        }
      }
      else{
        sessionStorage.clear('username')
      }
    },
  },
};
</script>

<style>
</style>
