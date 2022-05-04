<template>
  <div>
    <the-header title="RememberMe"></the-header>
    <stored-resources :resources="storedResources"></stored-resources>
  </div>
</template>

<script>
import TheHeader from '@/components/layouts/TheHeader';
import StoredResources from '@/components/learning-resources/StoredResources';

export default {
  components: {
    TheHeader,
    StoredResources
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org/v2/guide/'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to Google',
          link: 'https://www.google.com/'
        }
      ]
    };
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>