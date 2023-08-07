import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import SuperHeroes from '../pages/SuperHeroes';
import RQSuperHeroes from '../pages/RQSuperHeroes';
import RQSuperHero from '../pages/RQSuperHero';
import NothingFound from '../pages/NothingFound';

import Navigation from './Navigation';

import { ROUTE } from '../types/route.enum';

const App = () => {
	console.log(ROUTE.HOME);
	return (
		<div className="text-2xl">
			<Navigation />

			<div className="container p-10">
				<Routes>
					<Route path={ROUTE.HOME} element={<Home />} />
					<Route
						path={ROUTE.SUPER_HEROES}
						element={<SuperHeroes />}
					/>
					<Route
						path={ROUTE.RQ_SUPER_HEROES}
						element={<RQSuperHeroes />}
					/>
					<Route
						path={`${ROUTE.RQ_SUPER_HEROES}/:id`}
						element={<RQSuperHero />}
					/>
					<Route path="*" element={<NothingFound />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
