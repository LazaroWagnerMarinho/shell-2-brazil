<template>
  <div id="app">
    <b-container id="img" >
      <b-row>
        <b-col><Cabecalho /></b-col>
      </b-row>
    </b-container>    
  </div>
</template>

<script>

import Cabecalho from './components/Cabecalho.vue'


export default {
  name: 'App',
  data() {
      return {
        mainProps: {
          center: true,
          fluidGrow: true,
          blank: true,
          blankColor: '#bbb',
          width: 600,
          height: 400,
          class: 'my-5'
        }
      }
    },
  components: {
    Cabecalho,    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  

}
#img {
    background: url('./assets/imagem1.png') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

</style>
