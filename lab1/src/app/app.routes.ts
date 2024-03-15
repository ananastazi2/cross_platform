import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'graph',
    loadComponent: () => import('./graph/graph.page').then(m => m.GraphPage)
  },  {
    path: 'lab3',
    loadComponent: () => import('./lab3/lab3.page').then( m => m.Lab3Page)
  },
  {
    path: 'lab4',
    loadComponent: () => import('./lab4/lab4.page').then( m => m.Lab4Page)
  },

];

export { routes }; // Exporting the 'routes' constant

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
