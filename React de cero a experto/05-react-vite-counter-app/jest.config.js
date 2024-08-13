// Archivo de configuración de Jest
module.exports = {
    // testEnvironment: 'jest-environment-jsdom',

    // busca este archivo, este tiene la importación de whatwg-fetch para que si usamos un versión inferior a node:18
    // use el paquete del archivo en vez del Fetch, porque las versiones anteriores no soportaban fetch de forma nativa.
    // Esto solo es para node en desarrollo, para la parte web con react y demás debería de funcionar sin problemas.
    setupFiles: ['./jest.setup.js']
}