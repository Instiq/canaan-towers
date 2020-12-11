import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './Auth/Api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    serviceData: {
      index: null,
      services: [
        'Road Work',
        'Alternative Power',
        'Building Construction',
        'Interior Furnishing',
        'Automobile Sales & Furnishing',
        'Roofing Sheets'
      ],
      service: 'Road Work',
      mainPicture: 'alternative-power-main',
      slider: ['road-work-slide-1', 'road-work-slide-2', 'road-work-slide-3', 'road-work-slide-4', 'road-work-slide-5']
    },
    partners: ['partner-1.png', 'partner-2.png', 'partner-3.png', 'partner-4.png', 'partner-5.png'],
    roadData: {
      title: "road works",
      index: null,
      images: []
    },
    buildingData: {
      title: "building construction",
      index: null,
      images: []
    },
    automobileData: {
      title: "automobile sales & servicing",
      index: null,
      images: []
    },
    roofData: {
      title: "roofing",
      index: null,
      images: []
    },
    powerData: {
      title: "alternative power",
      index: null,
      images: []
    },
    furnishingData: {
      title: "interior furnishing",
      index: null,
      images: []
    },
    title: 'hello boy',
    items: []
  },
  mutations: {
    changePicture (state) {
      const ind = state.serviceData.services.indexOf(state.serviceData.service)
      state.serviceData.mainPicture = state.serviceData.mainPictures[ind]
      state.serviceData.slider = state.serviceData.sliders[ind]
    },
    SET_DATA: (state, items) => {
      state.items = items
    }
  },
  actions,
  modules: {
  },
  getters: {
    serviceData (state) {
      return state.serviceData
    },
    roadData (state) {
      return state.roadData
    },
    partners (state) {
      return state.partners
    },
    title (state) {
      return state.title
    }
  }
})
