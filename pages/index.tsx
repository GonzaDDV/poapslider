import type { NextPage } from 'next';
import Image from 'next/image';

import Swiper from 'components/Swiper';
import AddressInputComponent from 'components/AddressInput';
import Header from 'components/Header';

import styles from 'styles/Main.module.css';
import useAddress from 'hooks/useAddress';

const Home: NextPage = () => {
	const { poaps, address, loading, connectMetamask, setAddress, fetchPOAPs } = useAddress();

	return (
		<div className={styles.mainContainer}>
			<Header />

			<div className={styles.metamaskButton} onClick={connectMetamask}>
				<Image src='/assets/metamask-fox.png' alt='Metamask Logo' width='50' height='50' />
				Connect Metamask
			</div>

			<AddressInputComponent
				address={address}
				setAddress={setAddress}
				searchFunction={fetchPOAPs}
				isLoading={loading}
			/>
			<Swiper poaps={poaps} />
		</div>
	);
};

export default Home;
