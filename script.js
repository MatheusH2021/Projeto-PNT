new Vue({
  el: '#root',
  data: {
    contatos: [],
    nome: null,
    telefone: null
  },
  methods: {
    adicionarContato: function (e) {
      e.preventDefault()
      if (this.nome && this.telefone) {
        this.contatos.push({
          nome: this.nome,
          telefone: this.telefone,
        }),
          this.nome = null,
          this.telefone = null
      }
    }
  }
})