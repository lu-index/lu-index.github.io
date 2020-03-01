import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		currentSearchKeyword: null
	},
	mutations: {
		setCurrentSearchKeyword(state, param) {
			state.currentSearchKeyword = param.url;
		}
	},
	actions: {},
	modules: {}
});
