import {Injectable} from 'angular2/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';

@Injectable()
export class HeroService{
  
  public getHeroes(){
    return Promise.resolve(HEROES);
  }
  
  public getHeroesSlowly(){
    return new Promise<Hero[]>(resolve =>
      setTimeout(() => resolve(HEROES), 5000)
    );
  }
  
  public getHero(id: Number){
    return Promise.resolve(HEROES) .then(
      heroes => heroes.filter(hero => hero.id === id)[0]
    );
  }
}