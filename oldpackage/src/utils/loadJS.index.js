import loadJS from './loadJS'
if (window) {
    if (window.VentoseLib) {
        window.VentoseLib.loadJS = loadJS;
    } else {
        window.VentoseLib = {
            loadJS
        }
    }

}
export default loadJS;