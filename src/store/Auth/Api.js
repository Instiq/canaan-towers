// const Api = () => {
//     const getBuilding = async({ commit }) => {
//         try {
//             const request = await fetch(`https://canaan-towers-api.herokuapp.com/${service}/${group}`);
//             const response = await request.json();
//             commit('SET_DATA', response)
//             console.log('omo', response);
//             console.log('boy'); // to check if local storage stops api request
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     const makeRequest = async({ commit }) => {
//         try {
//             const request = await fetch(`https://canaan-towers-api.herokuapp.com/${service}/${group}`);
//             const response = await request.json();
//             commit('SET_DATA', response)
//             console.log('omo', response);
//             console.log('boy'); // to check if local storage stops api request
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     return { getBuilding, makeRequest };
// };

// export Api

export const makeRequest = async ({ commit }) => {
  try {
    const request = await fetch('https://canaan-towers-api.herokuapp.com/building/slider')
    const response = await request.json()
    commit('SET_DATA', response)
    console.log('omo', response)
    console.log('boy') // to check if local storage stops api request
  } catch (err) {
    console.log(err)
  }
}
