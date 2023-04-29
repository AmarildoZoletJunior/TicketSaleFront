import { CepService } from './../../core/Cep/Services/cep.service';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public inputValue: string = "";

  constructor(private fb: FormBuilder, private CepService: CepService) {
  }
  comparePasswordValidator: ValidatorFn = (formGroup: AbstractControl): ValidationErrors | null => {
    const campo1Control = formGroup.get('password')?.value;
    const campo2Control = formGroup.get('confirmPassword')?.value;

    if (campo1Control === null || campo2Control === null) {
      return null;
    }
    if (campo1Control !== campo2Control) {
      return { compareFields: true };
    }
    return null
  }

  



  public FormGroupRegister = this.fb.group
    ({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      cpf: ['', [Validators.required,Validators.minLength(11)]],
      phone: ['', [Validators.required,Validators.minLength(11)]],
      cep: ['', [Validators.required,Validators.minLength(8)]],
      city: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.pattern("^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[a-z])"),Validators.maxLength(3)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: this.comparePasswordValidator
    })


  async puxarInfoApi() {
    const valueCep = this.FormGroupRegister.get("cep")?.value;
    const CEPRegex = /^[0-9]{8}$/;
    if (valueCep.length == 8 && CEPRegex.test(valueCep) && valueCep !== null) {
      console.log("Passou")
      await this.CepService.FindCep(valueCep).subscribe(x => {
        if (x.localidade == null) {
          this.FormGroupRegister.get("city")?.setValue("")
        }
        this.FormGroupRegister.get("city")?.setValue(x.localidade)
      }
      );
    }
  }
  async enviarDados() {
    if (this.FormGroupRegister.valid) {
      console.log(this.FormGroupRegister.value)
    }
  }
}
