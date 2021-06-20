import { AuthGuardService } from './shared/services/auth-guard/auth-guard.service';
import { MainModule } from './main/main.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/main/home' },
    { path: 'main', loadChildren: () => MainModule, canActivate: [AuthGuardService] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
