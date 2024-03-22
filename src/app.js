import { envs } from './config/env.js';
import { startServer } from './server/server.js'

const main = async() => {
    startServer({
        port : envs.PORT,
        public_path : envs.PUBLIC_PATH
    });
}

// Función agnóstica auoconvocada
// Agnóstica porque no tiene nombre y autocovocada porque la ejecutamos con los parentesis
( async() => {
    main()
})();