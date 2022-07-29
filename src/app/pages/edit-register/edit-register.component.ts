import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Register } from '../../model/register';
import { EditRegisterService } from './edit-register.service';

@Component({
  selector: 'app-edit-register',
  templateUrl: './edit-register.component.html',
  styleUrls: ['./edit-register.component.css'],
})
export class EditRegisterComponent implements OnInit {
  register!: Register;
  btnText = 'Salvar';

  constructor(
    private editRegisterService: EditRegisterService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.editRegisterService.editRegister(id).subscribe((item) => {
      this.register = item.data;
    });
  }

  async editHandler(register: Register) {
    const id = this.register.id;

    register.name;
    register.email;
    register.phone;
    register.cpf;

    await this.editRegisterService.updateRegister(id!, register).subscribe();
  }
}
