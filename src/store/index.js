import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './Auth/Api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    serviceData: {
      services: [
        'Road Work',
        'Alternative Power',
        'Building Construction',
        'Interior Furnishing',
        'Automobile Sales & Furnishing',
        'Roofing Sheets'
      ],
      service: 'Road Work',
      mainPictures: [
        'road-work-main',
        'alternative-power-main',
        'building-construction-main',
        'interior-furnishing-main',
        'automobile-sales-main',
        'roofing-sheets-main'
      ],
      mainPicture: 'road-work-main',
      sliders: [
        ['road-work-slide-1', 'road-work-slide-2', 'road-work-slide-3', 'road-work-slide-4', 'road-work-slide-5'],
        ['alternative-power-1', 'alternative-power-2', 'alternative-power-3', 'alternative-power-4', 'alternative-power-5'],
        ['building-construction-1', 'building-construction-2', 'building-construction-3', 'building-construction-4', 'building-construction-5'],
        ['interior-furnishing-1', 'interior-furnishing-2', 'interior-furnishing-3', 'interior-furnishing-4', 'interior-furnishing-5'],
        ['automobile-sales-1', 'automobile-sales-2', 'automobile-sales-3', 'automobile-sales-4', 'automobile-sales-5'],
        ['roofing-sheets-1', 'roofing-sheets-2', 'roofing-sheets-3', 'roofing-sheets-4', 'roofing-sheets-5']
      ],
      slider: ['road-work-slide-1', 'road-work-slide-2', 'road-work-slide-3', 'road-work-slide-4', 'road-work-slide-5']
    },
    partners: ['partner-1.png', 'partner-2.png', 'partner-3.png', 'partner-4.png', 'partner-5.png'],
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
    partners (state) {
      return state.partners
    },
    title (state) {
      return state.title
    }
  }
})
