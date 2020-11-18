/* eslint-disable indent */
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: ` @import "@/assets/css/sass/custom.scss";
                @import "@/assets/css/sass/_variables.scss";
                `
            }
        }
    },
    lintOnSave: false
}
