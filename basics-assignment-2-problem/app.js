const app = Vue.createApp({
  data() {
    return {
      input: ''
    }
  },
  methods: {
    showAlert() {
      alert('Alert opened')
    },
    setInput(event) {
      this.input = event.target.value
    }
  }
})

app.mount('#assignment')