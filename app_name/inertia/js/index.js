import Inertia from 'inertia-vue';
import Vue from 'vue';
import axios from 'axios';

// register django csrf token for Inertia.post posts
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

Vue.config.productionTip = false;

const app = document.getElementById('app')
// we are getting the initialPage from a rendered json_script
const page = JSON.parse(document.getElementById('page').textContent)

new Vue({
  render: h => h(Inertia, {
    props: {
      initialPage: page,
      resolveComponent: (component) => {
        return import(`@/pages/${component}`).then(module => module.default)
      },
    },
  }),
}).$mount(app)
