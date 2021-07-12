import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less'],
})
export class NavComponent implements OnInit, OnDestroy {
  model: any = {};
  private subscription: Subscription;

  constructor(public accountService: AccountService) {}

  ngOnInit(): void {
  }

  login() {
    this.subscription = this.accountService.login(this.model).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  logout(): void {
    this.accountService.logout();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
