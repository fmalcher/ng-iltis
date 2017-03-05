import { Component, Input } from '@angular/core';

@Component({
  selector: 'il-icon',
  template: '<i class="fa" [ngClass]="iconClass" aria-hidden="true"></i>',
})
export class IconComponent {

  iconClass: string;

  @Input() set for(reason: string) {
    this.iconClass = this.iconMap[reason] || reason;
  }

  private iconMap: { [k: string]: string } = {
    transferOut: 'fa-sign-out',
    transferIn: 'fa-sign-in fa-flip-horizontal',
    edit: 'fa-pencil',
    ok: 'fa-check',
    cancel: 'fa-times',
    spinner: 'fa-circle-o-notch fa-spin fa-fw',
    counter: 'fa-snowflake-o',
    storage: 'fa-database',
    evActive: 'fa-unlock',
    evInactive: 'fa-lock',
    evClose: 'fa-power-off',
    cash: 'fa-money',
    clock: 'fa-clock-o',
    calendar: 'fa-calendar',
    plus: 'fa-plus',
    delete: 'fa-trash'
  };

}
