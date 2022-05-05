import { Html, Main, NextScript, Head } from 'next/document';

function MyApp() {
	return (
		<Html>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
				<link
					href='https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;800&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

export default MyApp;
