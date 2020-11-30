import Vue from 'vue'
import App from './App.vue'
import "../node_modules/timeline-vuejs/dist/timeline-vuejs.css";
import vuetify from '@/plugins/vuetify' // path to vuetify export
import moment from 'moment'

Vue.prototype.moment = moment

import colors from 'vuetify/es5/util/colors'

Vue.use(vuetify, {
  theme: {
    primary: colors.red.darken1, // #E53935
    secondary: colors.red.lighten4, // #FFCDD2
    accent: colors.indigo.base // #3F51B5
  }
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')

