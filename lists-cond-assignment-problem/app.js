const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      tasks: [],
      showTasks: true
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.userInput)
      this.userInput = ''
    }
  }
})

app.mount('#assignment')