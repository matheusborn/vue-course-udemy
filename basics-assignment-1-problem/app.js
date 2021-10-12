const app = Vue.createApp({
  data() {
    return {
      name: 'Matheus Nascimento Barros',
      age: 32,
      imgURL: 'https://picsum.photos/200/300'
    }
  },
  methods: {
    randomNumber() {
      return Math.random() 
    }
  }
})

app.mount('#assignment')