
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