import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/model/register';
import { RegistersService } from './registers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  registers: Register[] = [];

  constructor(private registersService: RegistersService) {}

  ngOnInit(): void {
    this.registersService.getAll().subscribe(
      (registers) => (this.registers = registers),
      (error) => console.error('error!')
    );
  }

  deleteRegister(register: any) {
    const mustDelete = confirm('Deseja realmente excluir este item?');

    if (mustDelete) {
      this.registersService.delete(register.id).subscribe(
        () =>
          (this.registers = this.registers.filter(
            (element) => element != register
          )),
        () => alert('Erro ao tentar excluir!')
      );
    }
  }
}
