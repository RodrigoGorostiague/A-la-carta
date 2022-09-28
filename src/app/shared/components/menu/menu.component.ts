import { Component, OnInit } from '@angular/core';
import { MenuCartServiceService } from '@app/shared/services/menu-cart.service.ts.service';

@Component({
  selector: 'app-menu',
  template:`
  <ng-container *ngIf="{total: total$ |async, HealtScore: healtScoreProm$ |async} as data ">
    <ng-container *ngIf="data.total" >
      <i class="bi bi-bag-plus"></i>
      {{data.total |currency}} | Heal Score:  {{data.HealtScore}}
    </ng-container>
  </ng-container>
  `,
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  total$ = this.menuCartSvc.totalAction$;
  healtScoreProm$ = this.menuCartSvc.healtScorePromAction$;
  readyInMinutesProm$ = this.menuCartSvc.readyInMinutesPromAction$;
  cart$ = this.menuCartSvc.cartAction$;
  constructor(private menuCartSvc: MenuCartServiceService ) { }

  ngOnInit(): void {
  }

}
