<template>
  <div :class="theme">
    <header is='headerCompontent'></header>
    <div class="tg-main">
      <side-list></side-list>
      <message-content></message-content>
    </div>
      <Wrapper>
      </Wrapper>
      <side-bar></side-bar>
      <box></box> 
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Header from 'Pages/Header'
  import SideList from 'Pages/SideList'
  import SideBar from 'Pages/SideBar'
  import Message from 'Pages/Message'
  import Wrapper from 'Public/Wrapper'
  import Box from 'Public/Box'
  export default {
    name: 'app',
    methods: {
      ...mapActions(['boxDisplay'])
    },
    computed: {
      ...mapGetters(['theme'])
    },
    components: {
      HeaderCompontent: Header,
      MessageContent: Message,
      SideList,
      SideBar,
      Wrapper,
      Box
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
</style>
