import { useState } from 'react';
import type { NextPage } from 'next';
import axios from 'axios';
import Image from 'next/image';
import Swiper from 'components/Swiper';

import styles from 'styles/Main.module.css';
import AddressInputComponent from 'components/AddressInput';
import { POAP } from 'ts/types';

import { AiOutlineGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import { RiLinkedinFill } from 'react-icons/ri';

const Home: NextPage = () => {
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

	const fetchPOAPs = async (addressToScan: string) => {
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
	};

	return (
		<div className={styles.mainContainer}>
			<div className={styles.titleContainer}>
				<div className={styles.logoContainer}>
					<Image className={styles.logo} src='/assets/logo.png' alt='POAPSlider Logo' width='120' height='120' />
				</div>
				<h1 className={styles.title}>POAPSlider</h1>
				<h5 className={styles.subtitle}>by @gonzaddv</h5>
				<div className={styles.icons}>
					<a href='https://github.com/gonzaddv' target='_blank' rel='noopener noreferrer'>
						<AiOutlineGithub size={32} />
					</a>
					<a href='https://twitter.com/gonzaddv' target='_blank' rel='noopener noreferrer'>
						<AiOutlineTwitter size={32} />
					</a>
					<a href='https://linkedin.com/in/gonzaddv' target='_blank' rel='noopener noreferrer'>
						<RiLinkedinFill size={32} />
					</a>
				</div>
			</div>

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
