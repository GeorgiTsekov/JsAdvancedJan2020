function heroicInventory(arrayOfHeroes = []) {
    let parsedHeroesData = arrayOfHeroes.reduce((acc, heroString) => {
        let heroData = heroString.split('/').map(x => x.trim());

        const heroName = heroData[0];
        const heroLevel = Number(heroData[1]);
        let heroItems = [];

        if (heroData.length > 2) {
            heroItems = heroData[2].split(',').map(x => x.trim());
        }

        let hero = {
            name: heroName,
            level: heroLevel,
            items: heroItems
        };

        acc.push(hero);

        return acc;
    }, []);

    return JSON.stringify(parsedHeroesData);
}
// const heroesData = [];

// arrayOfHeroes.forEach(element => {
//     let heroData = element.split(' / ');

//     const heroName = heroData[0];
//     const heroLevel = +heroData[1];
//     let heroItems = [];

//     if (heroData.length > 2) {
//         heroItems = heroData[2].split(', ');
//     }

//     let hero = {
//         name: heroName,
//         level: heroLevel,
//         items: heroItems
//     };

//     heroesData.push(hero);
// });

// let heroesDataJson = JSON.stringify(heroesData);

// console.log(heroesDataJson);
//}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']));