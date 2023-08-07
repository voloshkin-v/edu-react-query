import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import SuperHeroes from '../pages/SuperHeroes';
import RQSuperHeroes from '../pages/RQSuperHeroes';
import RQSuperHero from '../pages/RQSuperHero';
import NothingFound from '../pages/NothingFound';

import Navigation from './Navigation';

const App = () => {
	return (
		<div className="text-2xl">
			<Navigation />

			<div className="container p-10">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="super-heroes" element={<SuperHeroes />} />
					<Route path="rq-super-heroes" element={<RQSuperHeroes />} />
					<Route
						path="rq-super-heroes/:id"
						element={<RQSuperHero />}
					/>
					<Route path="*" element={<NothingFound />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
