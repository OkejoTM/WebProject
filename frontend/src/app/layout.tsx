import "../styles/styles.css";


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<title>Simple Notion</title>
			</head>
			<body>
				{children}
			</body>
		</html>
	);
}
