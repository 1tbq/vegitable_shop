import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { UserService } from 'shared/services/user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminAuthGaurd implements CanActivate {

  constructor(private auth:AuthService, private userService:UserService) { }

  canActivate(): Observable<boolean> {
    return this.auth.user$
      .switchMap(user => this.userService.get(user.uid).valueChanges())
      .map(appUser => appUser.isAdmin)
  }
}

