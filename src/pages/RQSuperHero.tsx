import axios from 'axios';

import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchSuperHeroById } from '../api/fetchSuperHeroById';

const RQSuperHero = () => {
	const navigate = useNavigate();
	const { id } = useParams();

	const { data, isLoading, isError, error } = useQuery(
		['super-hero', id],
		() => {
			if (!id) {
				return;
			}

			return fetchSuperHeroById(id);
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

	return (
		<>
			<button onClick={() => navigate(-1)}>
				<span role="img">🔙</span>
			</button>

			<h2 className="flex gap-2 flex-row mt-2 mb-2">
				RQSuperHero Details
			</h2>
			<p>
				{data?.name} - {data?.alterEgo}
			</p>
		</>
	);
};

export default RQSuperHero;
