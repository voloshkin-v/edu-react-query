import { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { fetchSuperHeroes } from '../api/fetchSuperHeroes';

import { ROUTE } from '../types/route.enum';

const RQSuperHeroes = () => {
	const onSuccess = (data: ISuperHero[]) => {
		console.log('onSuccess after data fatching...');
	};

	const onError = (error: ISuperHero[]) => {
		console.log('onError after encountering error..');
	};

	const { data, isLoading, isError, error, refetch } = useQuery(
		'super-heroes',
		fetchSuperHeroes,
		{
			onSuccess,
			onError,
			enabled: false,
			select: (data) => {
				// console.log(data.map((item) => item.name));
				return data;
			},
		}
	);

	if (isLoading) {
		return <h2>Loading...</h2>;
	}

	if (isError) {
		if (axios.isAxiosError(error)) {
			return <h2>{error.message}</h2>;
		}

		return <h2>An unexpected error occurred</h2>;
	}

	console.log(`${ROUTE.RQ_SUPER_HEROES}/${'1'}`);

	return (
		<>
			<h2>RQ SuperHero</h2>
			<button
				className="rounded-none bg-slate-600 text-white p-2 mt-4"
				onClick={() => refetch()}
			>
				Fetch Heroes
			</button>

			<ul className="mt-5 flex gap-5 flex-col">
				{data?.map((item) => (
					<li key={item.id}>
						<Link
							to={`${ROUTE.RQ_SUPER_HEROES}/${item.id}`}
							className="underline"
						>
							{item.name}
						</Link>
						<p>{item.alterEgo}</p>
					</li>
				))}
			</ul>
		</>
	);
};

export default RQSuperHeroes;
