const app = Vue.createApp({
  data() {
    return {
      userInputClass: '',
      inlineBackgroundColor: '',
      visible: false
    }
  },
  computed: {
    paragraphClasses () {
      return {
        'visible': this.visible,
        'hidden': !this.visible,
        'user1': this.userInputClass === 'user1',
        'user2': this.userInputClass === 'user2'
      }
    }
  },
  methods: {
    toggleVisibility() {
      this.visible = !this.visible
    }
  },
})

app.mount("#assignment")