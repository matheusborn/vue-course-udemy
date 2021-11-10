const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      goal: ''
    };
  },
  computed: {
    goalList() {
      return this.goals.reverse()
    }
  },
  methods: {
    addGoal() {
      this.goals.push(this.goal)
      this.goal = ''
    }
  }
});

app.mount('#user-goals');
