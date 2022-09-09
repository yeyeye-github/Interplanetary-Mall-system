<template>
  <div> 
    <myHeader></myHeader>
    <router-view></router-view>
    <Footer></Footer>
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
