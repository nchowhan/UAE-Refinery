import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UAERefineryComponent } from './uaerefinery/uaerefinery.component';




const app_routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', pathMatch: 'full', component: UAERefineryComponent },
    { path: '**', redirectTo: 'home' } // catch any unfound routes and redirect to home page
];

@NgModule({
    imports: [RouterModule.forRoot(
        app_routes,
        { enableTracing: true,
        onSameUrlNavigation: 'reload' } // <-- debugging purposes only
    )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
