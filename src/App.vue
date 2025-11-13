<template>
  <MainHeader />
  <main>
    <MainContent />
  </main>
  <MainFooter />
</template>

<script>
import MainFooter from './components/MainFooter.vue'
import MainHeader from './components/MainHeader.vue'
import MainContent from './components/MainContent.vue'

export default {
  components: {
    MainFooter,
    MainHeader,
    MainContent,
  },
}
</script>

<style scoped>
main {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 60px;
  bottom: 30px;
  background: rgb(255, 255, 255);
}
</style>
