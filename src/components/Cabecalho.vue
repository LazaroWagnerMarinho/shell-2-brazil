<template>
    <div >
        <img alt="Vue logo" src="../assets/logo.png">
        <h2>{{msg}}</h2>
        <b-nav id="cabecalho">
            <Formulario />
        </b-nav>
    </div>
    
</template>

<script>
import Formulario from './Formulario.vue'

export default {
    name: '#cabecalho',
    components:{
        Formulario,
    },
    data() {
        return {
            msg: "Bem vindo ao site para sua maior oportunidade na carreira",
        }
    },
}
</script>

<style>
#cabecalho {
    margin: 40px 0 0;
    margin-top: 30px;
    display: inline-block;
    color: beige;
    text-align: left;
    /* margin: 0 10px; */


  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  }

  h2{
      color: beige;
  }

</style>