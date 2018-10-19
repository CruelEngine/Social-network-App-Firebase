import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[passwordEqual][formControlName],[passwordEqual][formControl],[passwordEqual][ngModel]',
  providers:[
    {provide:NG_VALIDATORS , useExisting:forwardRef(()=> Passwordequalvalidator) , multi:true}
  ]
})
export class Passwordequalvalidator implements Validator{

  constructor(@Attribute('passwordEqual') public passwordEqual : string) { }


  validate(control : AbstractControl) : { [key : string] : any } {
    let retypePassword = control.value;
    let originalPassword = control.root.get(this.passwordEqual);

    return (originalPassword && retypePassword !== originalPassword.value) ? {passwordEqual : false} : null;
  }
}
