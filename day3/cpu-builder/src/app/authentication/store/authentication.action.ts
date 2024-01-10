import { Action } from '@ngrx/store';

export const LOGIN_START = 'Login Start';
export const AUTHENTICATE_SUCCESS = 'Login';

export class AuthenticateSuccess implements Action {
  readonly type = AUTHENTICATE_SUCCESS;
  constructor(public payload: { email: string, token: string }) { }
}

export class LoginStart implements Action {
  readonly type = LOGIN_START;
  constructor(public payload: { email: string, password: string }) { }
}
