import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss']
})

export class FormulariosComponent implements OnInit{
  form = new FormGroup({
    name: new FormControl('',[Validators.minLength(3), Validators.required]),
    isChecked: new FormControl(true),
  });
  constructor(){}

  ngOnInit():void{}
}

