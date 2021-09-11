import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

// Routes
import IndexRoutes from './routes/index.routes';
import PostRoutes from './routes/post.routes';
import UserRoutes from './routes/user.routes';
import AuthRoutes from './routes/auth.routes';
import ProfileRoutes from './routes/profile.routes';


export class App {

    private app: Application;
    
    constructor( private port?: number | string){
        this.app = express();
        this.settings();
        this.middelwares();
        this.routes();
    }

    settings(){
        this.app.set('port', this.port || process.env.PORT || 3000);
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

        this.app.use('/auths', AuthRoutes);
    
        this.app.use('/profile', ProfileRoutes);
        ProfileRoutes
    }
    
    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }

}