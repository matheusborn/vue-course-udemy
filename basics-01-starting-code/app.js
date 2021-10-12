const App = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: '<h1>Master Vue and build amazing apps!</h1>',
      vueLink: 'https://vuejs.org/'
    }
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random()
      if(randomNumber < 0.5) return this.courseGoalA
      return this.courseGoalB
    }
  }
});

App.mount('#user-goal')