import { Component, OnInit} from '@angular/core';
import { Router }   from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }

  //注入 HeroService及其他
  constructor(
    private router: Router,
    private heroService: HeroService) { }

  // 获取mock数据
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes=>this.heroes=heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  // 组件创建时便进入此方法
  ngOnInit(): void {
    this.getHeroes();
  }

}
