const characters = [
    {
        name: 'Zabusa',
        job: 'Shinobi',
        power: 9000,
        country: 'Japan',
        faction: 'Forbidden Mist',
    },
    {
        name: 'Orochimaru',
        job: 'Sannin',
        power: 0,
        height: 204,
        country: 'Japan',
        faction: 'Hidden leaf',
    },
    {
        name: 'Shinnosuke',
        job: 'Child',
        power: 1,
        height: 80,
        country: 'Japan',
        faction: 'Kasukabe',
    },
    {
        name: 'Goku',
        job: 'Fighter',
        power: 5000000,
        height: 175,
        country: 'Japan',
        faction: 'Dead beat Dads',
    },
    {
        name: 'Ippo',
        job: 'Boxer',
        power: 10,
        height: 165,
        country: 'Japan',
        faction: 'Kanagawa',
    }
];

// Filters 

// 1. Get Character with a power higher then 100 
const greaterPower = characters.filter((character) => character.power > 10);
// console.log(greaterPower);

// 2. Get characters with heigh lower then 175
const smallerBoys = characters.filter((character) => character.height < 175);
// console.table(smallerBoys);
// 3. Get all characters with the job of Ninja 
const ninjaBoys = characters.filter((character) =>
    character.job === 'Shinobi');
console.log(ninjaBoys);
// 4. Get all characters of country 日本 
const japaneseCharacters = characters.filter((character) => character.country === 'Japan');
console.table(japaneseCharacters);