import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {AuthPage} from './pages/auth/auth';


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      AV.initialize("f7raj414xcmmh9dqvwgg1u6frclogxz1m1ih6xsat9y5tu6e", "avc6ma710tvbur5u7qkr69pxgomrg49t35rpdk01l7y95c0a");

  		let currentUser = AV.User.current();

      if(currentUser){
      }
      else{
        this.rootPage = AuthPage;
      }
      StatusBar.styleDefault();
    });
  }
}
