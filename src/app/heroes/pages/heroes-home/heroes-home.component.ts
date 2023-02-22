import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroes-home',
  templateUrl: './heroes-home.component.html',
  styleUrls: ['./heroes-home.component.css'],
  styles:[`
  .container {
    margin:10px
  }
     `]
})
export class HeroesHomeComponent implements OnInit {

  constructor(private activatedRouted: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouted.params.subscribe(({id}) =>console.log(id) )
  }

}
