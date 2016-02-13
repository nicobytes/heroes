import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import { Router } from 'angular2/router';
@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls:  ['app/heroes.component.css'],
  directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit{
  public title = 'Tour of Heroes';
  public heroes: Hero[];
  public selectedHero: Hero;
  
  constructor(
    private _heroService: HeroService,
    private _router: Router) {}
  
  ngOnInit() {
    this.getHeroes();
  }
  
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  
  getHeroes(){
    this._heroService.getHeroes()
    .then(heroes => this.heroes = heroes)
  }
  
  gotoDetail(){
    let link = ['HeroDetail', {id: this.selectedHero.id} ];
    this._router.navigate( link );
  }
};