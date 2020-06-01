import { Action } from '@ngrx/store';

export const LOGIN_START = '[AUTH]_LOGIN_START';
export const AUTHENTICATE_SUCCESS = '[AUTH]_AUTHENTICATE_SUCCESS';
export const AUTHENTICATE_FAIL = '[AUTH]_AUTHENTICATE_FAIL';
export const LOGOUT = '[AUTH]_LOGOUT';
export const SIGNUP_START = '[AUTH]_SIGNUP_START';
export const CLEAR_ERROR = '[AUTH]_CLEAR_ERROR';
export const AUTO_LOGIN = '[AUTH]_AUTO_LOGIN';
export const AUTO_LOGOUT = '[AUTH]_AUTO_LOGOUT';

export class AuthenticateSuccess implements Action {
    readonly type = AUTHENTICATE_SUCCESS;

    constructor(
        public  payload: {
           email: string,
           userId: string,
           token: string,
           expirationDate: Date
        }) {}
}

export class Logout implements Action {
    readonly type = LOGOUT;
}

export class ClearError implements Action {
  readonly type = CLEAR_ERROR;
}
export class AutoLogin implements Action {
  readonly type = AUTO_LOGIN;
}

export class AutoLogout implements Action {
  readonly type = AUTO_LOGOUT;
}


export class LoginStart implements Action {
    readonly type = LOGIN_START;

    constructor(public payload: { email: string; password: string }) {}
  }

export class AuthenticateFail implements Action {
    readonly type = AUTHENTICATE_FAIL;

    constructor(public payload: string) {}
  }

export class SignupStart implements Action{
  readonly type = SIGNUP_START;

  constructor(public payload: { email: string; password: string }) {}

}

export type Actions = AuthenticateSuccess |
 Logout |
 LoginStart |
 AuthenticateFail |
 SignupStart | 
 ClearError | 
 AutoLogin |
 AutoLogout;

