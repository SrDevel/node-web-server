const express = require('express');
const path = require('path');

const startServer = (options) => {
    const { port, public_path= 'public' } = options;
    
    const app = express();

    // Para usar 
    app.use(express.static(public_path)); // Contenido estático en la carpeta public

    app.get('*', (req, res) => {
        const indexPath = path.join(public_path, `../../${public_path}/index.html`);
        res.sendFile(indexPath);
    });

    app.listen(port, () => {
        console.log(`Escuchando en el puerto: ${port}`);
    });
}

module.exports = {
    startServer
}