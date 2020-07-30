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
    <b-container class="bv-example-row">
        <b-row class="botao">
            <b-col >
                <b-button 
                type="submit" 
                variant="primary" 
                :state="habilitar"
                >Corfimar</b-button>
            </b-col>
            <b-col>
                <b-button slot="end" type="reset" variant="danger">Limpar</b-button>
            </b-col>
        </b-row>
    </b-container>
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

<script src="./javaScript/formulario"></script>
<style src="./css/formulario.css"></style>
