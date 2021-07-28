import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARY!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwibmFtZSI6IkpvZSBNb21pIiwiZW1haWwiOiJ5b3Vyb2NAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTYyNzQzMzA2NiwiZXhwIjoxNjI3NjkyMjY2fQ.-_JPyX2Eq0EQZNaquiEL6nuMxwhxYjB4sdurCCaEoHg'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')