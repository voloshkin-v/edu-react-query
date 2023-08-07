import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SuperHeroes = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState<ISuperHero[]>([]);
	const [error, setError] = useState('');

	useEffect(() => {
		axios
			.get('http://localhost:4000/superheroes')
			.then((res) => {
				setIsLoading(false);
				setData(res.data);
			})
			.catch((error) => {
				if (axios.isAxiosError(error)) {
					setError(error.message);
				} else {
					setError('An unexpected error occurred');
				}
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	if (isLoading) {
		return <h2>Loading...</h2>;
	}

	if (error) {
		return <h2>Error: {error}</h2>;
	}

	return (
		<>
			<h2>Super Heroes Page</h2>

			<ul className="mt-5">
				{data.map((item) => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
		</>
	);
};

export default SuperHeroes;
