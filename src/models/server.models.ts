import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

// Routes
import db from '../config/conecction';
import IndexRoutes from '../routes/index.routes';
import PostRoutes from '../routes/post.routes';
// import UserRoutes from '../routes/user.routes';
import AuthRoutes from '../routes/auth.routes';
import ProfileRoutes from '../routes/profile.routes';
import UserRoutes from '../routes/user.routes';
import PerfilRoutes from '../routes/perfil.routes';
import ModuloRoutes from '../routes/modulo.routes';
import PerfilModuloRoutes from '../routes/perfil.modulo.routes';
import Estacionamiento from '../routes/estacionamiento.routes';
import Locales from '../routes/locales.routes';
import Reservas from '../routes/reservas.routes';
import Tarifarios from '../routes/tarifario.routes';

export class Server {

    private app: Application;
    
    constructor( private port?: number | string){
        this.app = express();
        this.settings();
        this.dbConnection();
        this.middelwares();
        this.routes();
    }

    settings(){
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    async dbConnection() {
        
        try {
            
            await db.authenticate();
            console.log('Database online');
            
        } catch (error) {
            throw new Error( String(error) ) ;
        }

    }

    middelwares(){
        this.app.use(cors());
        this.app.use(morgan('dev'));
        // trae los datos por url
        this.app.use(express.json());
        // this.app.use(express.urlencoded( { extended: false } ));
    }

    routes(){
        this.app.use(IndexRoutes);
        this.app.use('/posts', PostRoutes);
        this.app.use('/users', UserRoutes);

        // this.app.use('/user', UserRoutes);

        this.app.use('/auths', AuthRoutes);
        this.app.use('/profile', ProfileRoutes);
        
        // perfiles
        this.app.use('/perfiles', PerfilRoutes);

        // modulos
        this.app.use('/modulos', ModuloRoutes);
        
        // perfil modulo
        this.app.use('/perfilmodulo', PerfilModuloRoutes);
            
        // Estacinamiento
        this.app.use('/estacionamiento', Estacionamiento);

        // Locales
        this.app.use('/locales', Locales);

        // Reservas 
        this.app.use('/reserva', Reservas);

        // Reservas 
        this.app.use('/tarifario', Tarifarios);

    }
    
    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }

}