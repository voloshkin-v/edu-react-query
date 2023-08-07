import { Link, NavLink } from 'react-router-dom';

import { ROUTE } from '../types/route.enum';

const Navigation = () => {
	return (
		<header className="flex bg-slate-800 text-white p-10 text-3xl justify-between">
			<Link to={ROUTE.HOME}>
				<span>TanStack Query</span>
			</Link>

			<nav>
				<ul className="flex gap-10 justify-center">
					<NavLink
						to={ROUTE.HOME}
						className={({ isActive }) => {
							return isActive ? 'underline' : '';
						}}
					>
						Home
					</NavLink>

					<NavLink
						to={ROUTE.SUPER_HEROES}
						className={({ isActive }) => {
							return isActive ? 'underline' : '';
						}}
					>
						Basic Super Heroes
					</NavLink>

					<NavLink
						to={ROUTE.RQ_SUPER_HEROES}
						className={({ isActive }) => {
							return isActive ? 'underline' : '';
						}}
					>
						RQ Super Heroes
					</NavLink>
				</ul>
			</nav>
		</header>
	);
};

export default Navigation;
