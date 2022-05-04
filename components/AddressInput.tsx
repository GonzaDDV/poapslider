import { Dispatch, SetStateAction, useState } from 'react';
import type { NextPage } from 'next';
import { BiSearchAlt2, BiLoaderAlt } from 'react-icons/bi';

import styles from 'styles/Main.module.css';

interface Props {
	searchFunction: (searchTerm: string) => void;
	isLoading: boolean;
	address: string;
	setAddress: Dispatch<SetStateAction<string>>;
}

const AddressInputComponent: NextPage<Props> = ({ searchFunction, isLoading, address, setAddress }) => {
	const handleFinish = async () => searchFunction(address);

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAddress(e.target.value);
	};

	return (
		<div className={styles.input}>
			<input
				className={styles.inputField}
				type='text'
				placeholder='Enter an address...'
				value={address}
				onChange={handleInput}
			/>
			<div className={styles.inputButton} onClick={handleFinish}>
				{isLoading ? <BiLoaderAlt className={styles.loadingIcon} size={32} /> : <BiSearchAlt2 size={32} />}
			</div>
		</div>
	);
};

export default AddressInputComponent;
