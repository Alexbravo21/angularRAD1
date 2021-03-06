import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotingComponent } from './components/quoting/quoting.component';
import { BodyComponent } from './components/body/body.component';
import { ArmoryComponent } from './components/armory/armory.component';
import { AppComponent } from './app.component';


const routes: Routes = [
    {path: '', component: BodyComponent},
    {path: 'quoting', component: QuotingComponent},
    {path: 'armory', component: ArmoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
