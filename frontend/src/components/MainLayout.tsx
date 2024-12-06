import ThemeToggle from '../components/ThemeToggle';

interface MainLayoutProps {
	children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
	return (
		<div className="container">
			<nav>
				<ul>
					<li><a href="/">Главная</a></li>
					<li><a href="/login">Вход</a></li>
					<li><a href="/register">Регистрация</a></li>
				</ul>
			</nav>

			<div className="content">
				{children}
			</div>
			<ThemeToggle />
		</div>
	);
}