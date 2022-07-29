import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/model/register';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  btnText = 'Registrar';

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async create(register: Register) {
    this.registerService.registerClient(register).subscribe(
      () => {
        this.router.navigate(['']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
