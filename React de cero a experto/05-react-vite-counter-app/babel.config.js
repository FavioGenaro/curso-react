module.exports = {
    // presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
    presets: [
        // Podemos usar los modulos de EcmaScript dentro de React
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ], // se debe instalar tmb @babel/preset-react
    ],
};