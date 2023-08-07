import axios from 'axios';

export const fetchSuperHeroes = () => {
	return axios
		.get<ISuperHero[]>('http://localhost:4000/superheroes')
		.then((response) => response.data);
};
