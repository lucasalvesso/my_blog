import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.blue.darken1, // #E53935 teal darken-4
                sideMenuColor: colors.blue.darken1,
                topAppBar: colors.blue.darken1,
            },
        },
    },
});