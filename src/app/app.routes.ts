import { RouterModule, Routes } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";
import { JugadoresComponent } from "./components/jugadores/jugadores.component";
import { HomeComponent } from './components/utilidades/home/home.component';
import { MessiComponent } from './components/messi/messi.component';
import { RonaldoComponent } from './components/ronaldo/ronaldo.component';
import { JamesComponent } from './components/james/james.component';


const APP_ROUTES: Routes = [
    {path: "jugadores",component:JugadoresComponent},
    {path: "footer",component:FooterComponent},
    {path: "home", component:HomeComponent},
    {path: "messi",component:MessiComponent},
    {path: "ronaldo", component:RonaldoComponent},
    {path: "james", component:JamesComponent},
    
    {path:'**',pathMatch:'full',redirectTo:'home'}
    
    ];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);