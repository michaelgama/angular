import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Register } from 'src/app/model/register';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() btnText!: string;
  @Input() editData: Register | null = null;

  @Output() onSubmit = new EventEmitter<Register>();
  registerForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      id: new FormControl(this.editData ? this.editData.id : ''),
      name: new FormControl(this.editData ? this.editData.name : '', [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl(this.editData ? this.editData.email : '', [
        Validators.required,
        Validators.email,
      ]),
      phone: new FormControl(this.editData ? this.editData.phone : ''),
      cpf: new FormControl(this.editData ? this.editData.cpf : '', [
        Validators.required,
      ]),
    });
  }

  get name() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get phone() {
    return this.registerForm.get('phone');
  }

  get cpf() {
    return this.registerForm.get('cpf');
  }

  registerUser() {
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);

    this.onSubmit.emit(this.registerForm.value);
  }
}
