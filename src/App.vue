<template>
  <header-component></header-component>
  <RouterView id="content-area"></RouterView>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';

export default{
  
  name: 'App',
  components: {
    'header-component':HeaderComponent
  }
}
</script>

<style>
*{
  padding: 0px;
  margin: 0px
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}
#content-area{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
