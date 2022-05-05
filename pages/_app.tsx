import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>POAPSlider - View your POAPs</title>
				<link rel='icon' href='/assets/logo.png' />
				<meta name='description' content='POAPSlider - We display your POAPs in a cool looking way. ' />
				<meta property='og:title' content='POAPSlider - View your POAPs' />
				<meta property='og:description' content='POAPSlider - We display your POAPs in a cool looking way. ' />
				<meta property='og:url' content='https://poapslider.com/' />
				<meta property='og:type' content='website' />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
