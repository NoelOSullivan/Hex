import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

import { MenuComponent } from './menu/menu.component';
import { HexagonGroupComponent } from './hexagon-group/hexagon-group.component';
import { HexagonComponent } from './hexagon/hexagon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MenuComponent,
    HexagonGroupComponent,
    HexagonComponent],
  exports: [
    MenuComponent,
    HexagonGroupComponent,
    HexagonComponent],
  providers: [DataService]
})
export class MenuModule { }
