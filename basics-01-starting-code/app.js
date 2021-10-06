const App = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish the course and learn Vue!',
      vueLink: 'https://vuejs.org/'
    }
  }
});

App.mount('#user-goal')