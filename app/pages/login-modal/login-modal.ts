import { Page } from 'ionic-angular';
import { Component } from 'angular2/core';  
import { FORM_DIRECTIVES, FormBuilder,  ControlGroup, Validators, AbstractControl } from 'angular2/common';


@Page({
	templateUrl: 'build/pages/auth/auth.html',
	directives: [FORM_DIRECTIVES]
})

export class LoginModalPage {

	authForm: ControlGroup;
	mobileNumber: AbstractControl;
	password: AbstractControl;

	constructor(fb: FormBuilder) {
	   	this.authForm = fb.group({  
	    	'mobileNumber': ['',Validators.compose([Validators.required,mobileNumberValidator])],
	    	'password': ['']
	    });

		this.username = this.authForm.controls['mobileNumber'];	    
		this.mobileNumber = this.authForm.controls['password'];		
	}

	onSubmit(value: string): void { 
	    if(this.authForm.valid) {
	    	console.log('Submitted value: ', value);
	    }
	} 

	checkFirstCharacterValidator(control: Control): { [s: string]: boolean } {  
		if (control.value.match(/^\d/)) {  
			return {checkFirstCharacterValidator: true};  
		}		
	}
	
	mobileNumberValidator(control: Control) : {[s:string]:boolean}{
	  
	  let re= /^(13[0-9]{9})|(15[89][0-9]{8})$/;
	  if(re.test(control.value)){
	    return {inv:true};
	  }
	  
	}
}