import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<header className="flex bg-slate-800 text-white p-10 text-3xl justify-between">
			<Link to="/">
				<span>TanStack Query</span>
			</Link>

			<nav>
				<ul className="flex gap-10 justify-center">
					<NavLink
						to="/"
						className={({ isActive }) => {
							return isActive ? 'underline' : '';
						}}
					>
						Home
					</NavLink>

					<NavLink
						to="super-heroes"
						className={({ isActive }) => {
							return isActive ? 'underline' : '';
						}}
					>
						Basic Super Heroes
					</NavLink>

					<NavLink
						to="rq-super-heroes"
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
