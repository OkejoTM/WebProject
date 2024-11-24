// "use client";

// import { Game } from "./gameType";

// let gamesStorage: Game[] | null = null;


// const demoGamesList = [	   
// 	{
// 		id: 1,
// 		title: 'GTA 5',
// 		description: 'Действие игры происходит в вымышленном штате Сан-Андреас...',
// 		genres: ["Открытый мир", "Шутер от первого лица", "Экшен"],
// 		price: 1000,
// 		bought: true
// 	},
// 	{
// 		id: 2,
// 		title: 'Elden ring',
// 		description: 'Компьютерная игра сурово наказывает за ошибки...',
// 		genres: ["Фэнтези", "Ролевая", "Файтинги"],
// 		price: 3999,
// 		bought: false
// 	}

// ];

// export function getGamesList(): Game[] {
// 	if (gamesStorage) {
// 		return gamesStorage;
// 	}

// 	const gamesInLocalStorage = localStorage.getItem('games');
// 	if (gamesInLocalStorage) {
// 		try {
// 			gamesStorage = JSON.parse(gamesInLocalStorage);
// 			return gamesStorage == null ? [] : gamesStorage;
// 		} catch (e) {
// 			localStorage.removeItem('games');
// 			console.log(e);
// 		}
// 	} else {
// 		gamesStorage = demoGamesList;
// 		localStorage.setItem('games', JSON.stringify(gamesStorage));
// 	}

// 	return gamesStorage === null ? [] : gamesStorage;
// }

// export function getGameById(id: number) {
// 	gamesStorage = getGamesList();
// 	return gamesStorage.find(game => game.id === id);
// }

// export function saveGames() {
// 	const games = getGamesList();
// 	localStorage.setItem('games', JSON.stringify(games));
// }

// export function getAllGenres(){
// 	const games = getGamesList();
// 	const result = new Set(games.flatMap(x => x.genres));
// 	return Array.from(result).sort();
// }


// export function isGameBought(game: Game, bought:string)
// {
// 	return bought == 'true' ? game.bought : !game.bought;
// }

// export function hasMatchingGenres(game:Game, genres:string[]){
//     return game.genres?.some(genre => genres.includes(genre)) || genres.length === 0;
// }

// export function isGenreEmptyAndIncluded(game:Game, genres:string[]) {
//     return game.genres[0] === "" && genres.includes('Без жанра');
// }


// export function getFilteredGamesList(bought: string, genres: string[], priceRange: { min: number; max: number }): Game[] {
// 	let games = getGamesList();
// 	if (!games) return [];
  
// 	if (bought != "all")
// 	{
// 		games = games?.filter((game) => isGameBought(game, bought));
// 	}

// 	return games?.filter((game) => {
// 	  return (		
// 		(hasMatchingGenres(game, genres) || isGenreEmptyAndIncluded(game, genres)) &&
// 		game.price >= priceRange.min &&
// 		game.price <= priceRange.max
// 	  );
// 	});
//   }