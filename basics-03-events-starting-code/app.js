const app = Vue.createApp({
  data() {
    return {
      confirmedName: '',
      counter: 0,
      name: ''
    }
  },
  methods: {
    add(number) {
      this.counter += number
    },
    confirmInput() {
      this.confirmedName = this.name
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName
    },
    submitForm() {
      alert('Submitted')
    }
  }
});

app.mount('#events');
