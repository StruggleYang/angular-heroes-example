import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
@Injectable()
export class HeroService {
    // getHeroes()函数签名是同步的。当使用远端服务器时，用户不会等待服务器的响应。换句话说，你没法在等待期间阻塞浏览器界面。
    // Promise，它是一种异步技术，它会改变getHeroes()方法的签名
    getHeroes():Promise<Hero[]> {
        return Promise.resolve(HEROES);;
    }

    getHero(id: number): Promise<Hero> {
         return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
        // 在提供模拟数据之前等待两秒钟。
        setTimeout(() => resolve(this.getHeroes()), 2000);
    });
}
}