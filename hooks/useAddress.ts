import axios from 'axios';
import { useCallback, useState } from 'react';

import { POAP } from 'ts/types';

export default function useAddress() {
	const [poaps, setPoaps] = useState<POAP[]>([]);
	const [address, setAddress] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	const connectMetamask = async () => {
		if (!window.ethereum) return;
		const addresses = await window.ethereum.request({ method: 'eth_requestAccounts' });

		// TODO: Handle errors and display popup/toast
		if (!addresses || !Array.isArray(addresses)) return;

		setAddress(addresses[0]);
		fetchPOAPs(addresses[0]);
	};

	const fetchPOAPs = useCallback(async (addressToScan: string) => {
		const poapAPIKey = process.env.NEXT_PUBLIC_POAP_API_KEY;

		setLoading(true);
		try {
			const { data } = await axios.get(`https://api.poap.tech/actions/scan/${addressToScan}`, {
				headers: { 'X-API-Key': poapAPIKey },
			});
			setPoaps(data);
		} catch (err) {
			console.log(err);
		}
		setLoading(false);
	}, []);

	return { poaps, address, loading, connectMetamask, fetchPOAPs, setAddress };
}
