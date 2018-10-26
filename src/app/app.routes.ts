import {HomeComponent} from "./pages/home/home.component";
import { AssetListComponent } from './asset-list/asset-list.component';
export const appRoutes=[
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'asset-list',
        component: AssetListComponent
    },
    {
        path: 'others',
        loadChildren:'./pages/others/others.module#OthersModule',
    },
];