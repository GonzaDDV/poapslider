import type { NextPage } from 'next';

import styles from 'styles/Main.module.css';
import Header from 'components/Header';
import useAddress from 'hooks/useAddress';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo } from 'react';
import Swiper from 'components/Swiper';
import AddressInputComponent from 'components/AddressInput';
import Head from 'next/head';

const AddressPage: NextPage = () => {
	const router = useRouter();

	const { address, setAddress, fetchPOAPs, poaps, loading } = useAddress();

	const routerAddress = router.query.address;

	useEffect(() => {
		if (typeof routerAddress === 'string') {
			setAddress(routerAddress);
			fetchPOAPs(routerAddress);
		}
	}, [routerAddress, setAddress, fetchPOAPs]);

	return (
		<>
			<Head>
				<title>POAPSlider - {address}</title>
				<meta name='description' content={`POAPSlider - Take a look at ${address} POAPs`} />
			</Head>
			<div className={styles.mainContainer}>
				<Header />

				<AddressInputComponent
					address={address}
					setAddress={setAddress}
					searchFunction={fetchPOAPs}
					isLoading={loading}
				/>
				<Swiper poaps={poaps} />
			</div>
		</>
	);
};

export default AddressPage;
