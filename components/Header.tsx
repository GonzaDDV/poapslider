import type { NextPage } from 'next';
import Image from 'next/image';
import styles from 'styles/Header.module.css';

import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';
import { RiLinkedinFill } from 'react-icons/ri';
import Link from 'next/link';

const Header: NextPage = () => {
	return (
		<div className={styles.titleContainer}>
			<Link href='/' className={styles.logoContainer}>
				<a>
					<Image
						className={styles.logo}
						src='/assets/logo.png'
						alt='POAPSlider Logo'
						width='120'
						height='120'
						quality='100'
					/>
				</a>
			</Link>
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
	);
};

export default Header;
