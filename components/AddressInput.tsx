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
	const handleFinish = async (e: React.FormEvent) => {
		e.preventDefault();
		searchFunction(address);
	};

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAddress(e.target.value);
	};

	return (
		<form onSubmit={handleFinish} className={styles.input}>
			<input
				className={styles.inputField}
				type='text'
				placeholder='Enter an address...'
				value={address}
				onChange={handleInput}
			/>
			<button className={styles.inputButton} type='submit'>
				{isLoading ? <BiLoaderAlt className={styles.loadingIcon} size={32} /> : <BiSearchAlt2 size={32} />}
			</button>
		</form>
	);
};

export default AddressInputComponent;
