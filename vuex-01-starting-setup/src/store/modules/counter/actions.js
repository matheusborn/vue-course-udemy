export default {
  increment(context) {
    setTimeout(() => {
      context.commit('increment');
    }, 2000)
    context.commit('increment')
  },
  increase(context, payload) {
    context.commit('increase', payload)
  }
}