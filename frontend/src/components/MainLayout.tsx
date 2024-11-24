import ThemeToggle from '../components/ThemeToggle';

interface MainLayoutProps {
	children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
	return (
		<div className="container">
			<div className="content">
				{children}
			</div>
			<ThemeToggle />
		</div>
	);
}