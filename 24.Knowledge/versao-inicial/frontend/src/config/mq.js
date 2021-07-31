import Vue from 'vue'
import VueMQ from 'vue-mq'

Vue.use(VueMQ, {
    breakpoints: {
        xs: 576,
        sm: 768,
        md: 960,
        lg:1140,
        xl: Infinity
    }
})