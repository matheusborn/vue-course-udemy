const app = Vue.createApp({
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = ''
    }
  },
  watch: {
    counter(value) {
      if(value > 50) this.counter = 0
    }
  },
  computed: {
    fullName(){
      if(this.name === '') return ''
      return this.name + ' ' + 'Barros'
    }
  }
});

app.mount('#events');
