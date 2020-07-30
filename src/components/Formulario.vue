<template>
    <div id="mostrarFormulario">
        <h1>Formulario para contato</h1>

<b-form @submit="onSubmit" @reset="onReset" v-if="show">

    <b-form-group class="label-grup" id="input-group-nome" label="Nome:" label-for="input-nome">
        <b-form-input id="input-2" v-model="form.nome" required placeholder="Nome Completo"></b-form-input>
    </b-form-group>

    <b-form-group class="label-grup" id="input-group-email" label="Email:" label-for="input-email" >
        <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="email" ></b-form-input>
    </b-form-group>
    
    <b-form-group class="label-grup" id="input-group-telefone" label="telefone:" label-for="input-Telefone">
        <b-form-input name="phone" type="text" v-model="form.phone" v-mask="'(##) #-####-####'" required placeholder="(DD) 9-9999-9999"></b-form-input>
    </b-form-group>
      <b-button 
      type="submit" 
      variant="primary" 
      :state="habilitar"
      >Corfimar</b-button>

      <b-button slot="end" type="reset" variant="danger">Limpar</b-button>
    </b-form>

    <b-card class="mt-3" id="relatorio" v-if="mostrarFormulario" header="Resultado do Formulario">
      <pre  class="m-0">
          Nome: {{ form.nome }}
          Email: {{form.email}}
          Telefone: {{form.phone}}
        </pre>
    </b-card>
        
    </div>
</template>


<script>

  export default {
    name: "#formulario",
    data() {
      return {
        form: {
          nome: '',
          email: '',
          phone: '',
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true,
        mostrarFormulario: false,
        formularioCompleto: []
      }
    },
    // computed:{
    //     habilitar(){
    //         return this.form.length == 3 ? true : false
    //     }
    // },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        this.form
        this.mostrarFormulario = true
      },
      onReset(evt) {
        evt.preventDefault()
        this.form.nome = ''
        this.form.email = ''
        this.form.phone = ''
        this.mostrarFormulario = false
        
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style>
#formulario {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #e9ecef;
    margin-top: 60px;
    font-weight: bold;
    
}


#relatorio{
    color: black;
}
</style>