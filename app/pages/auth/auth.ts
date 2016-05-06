import {Page, NavController, Modal} from 'ionic-angular';
import {Page1} from '../page1/page1';
import {LoginModalPage} from '../login-modal/login-modal';

/*
  Generated class for the AuthPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({

  templateUrl: 'build/pages/auth/auth.html',
})

export class AuthPage {
  
  constructor(public nav: NavController) {
    this.nav = nav;
    
  }
  
  presentLoginModal() {
    let loginModal = Modal.create(LoginModalPage);
    this.nav.present(loginModal);
  }
    
}
