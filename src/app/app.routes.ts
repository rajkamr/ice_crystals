import {HomeComponent} from "./pages/home/home.component";
import { AssetListComponent } from './components/asset-list/asset-list.component';
export const appRoutes=[
    {
        path:'',
        redirectTo:'asset-list',
        pathMatch:'full'
    },
    {
        path: 'details/:id',
        component: HomeComponent
    },
    {
        path: 'asset-list',
        component: AssetListComponent
    },
    {
        path: '**',
        redirectTo: '/asset-list'
    }
];