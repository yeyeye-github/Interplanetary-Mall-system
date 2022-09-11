<template>
  <div> 
    <myHeader v-if="!$route.meta.isRegister"></myHeader>
    <router-view></router-view>
    <Footer v-if="!$route.meta.isRegister"></Footer>
  </div>
</template>

<script>
import myHeader from './components/myHeader'
import Footer from './components/footer'

export default {
  name: 'App',
  components: {
    myHeader,Footer
  }
}
</script>

<style>

</style>
