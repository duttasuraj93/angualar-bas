import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { YourGuardGuard } from './your-guard.guard';

const routes: Routes = [
  {
    path: 'child/:id', component: ChildComponent,
    children: [
      {path: 'child-a', component: ChildAComponent},
      {path: 'child-b', component: ChildBComponent}
    ]
  },
  {
    path: 'parent', component: ParentComponent, canActivate: [YourGuardGuard]
  },
  {
    path: '**', component: ChildComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
