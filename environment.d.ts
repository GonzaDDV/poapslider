import { MetaMaskInpageProvider } from '@metamask/providers';

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NEXT_PUBLIC_POAP_API_KEY: string;
		}
	}

	interface Window {
		ethereum?: MetaMaskInpageProvider;
	}
}

export {};
