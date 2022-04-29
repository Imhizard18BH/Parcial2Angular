import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {LoginComponent} from "./components/login/login.component";
import {RegistroComponent} from "./components/registro/registro.component";
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "./guards/auth.guard";
import {RegistroVideojuegoComponent} from "./components/registroVideojuegos/registroVideojuego.component";
import {VideojuegosComponent} from "./components/Videojuegos/videojuegos.component";

const APP_ROUTES: Routes = [
  {path: 'dashboard', component:DashboardComponent, canActivate: [AuthGuard]},
  {path: 'login', component:LoginComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'registroVideojuego', component:RegistroVideojuegoComponent},
  {path: 'Videojuegos', component:VideojuegosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'login'}
]
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)
