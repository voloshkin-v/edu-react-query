import axios from 'axios';

export const fetchSuperHeroById = (id: string) => {
	return axios
		.get<ISuperHero>(`http://localhost:4000/superheroes/${id}`)
		.then((response) => response.data);
};
