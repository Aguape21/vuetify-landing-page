import Vue from 'vue';
import Vuetify from 'vuetify'


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#119DA4",
                secondary: "#688c00",
                accent: "#3D87E4"
            }
        }
    }
});
