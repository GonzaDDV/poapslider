import type { NextPage } from 'next';
import { POAP } from 'ts/types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Keyboard } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-cards';
import Image from 'next/image';

import styles from '../styles/Swiper.module.css';
import { shortenText } from 'utils/text';
import { formatDateWithMoment } from 'utils/date';

interface Props {
	poaps: Array<POAP>;
}

const SwiperComponent: NextPage<Props> = ({ poaps }) => {
	if (!poaps || !poaps.length) return <h1>No POAPs found</h1>;
	return (
		<Swiper
			effect='cards'
			grabCursor={true}
			modules={[EffectCards, Keyboard]}
			className={styles.swiper}
			keyboard={{ enabled: true }}
		>
			{poaps.map((poap: POAP) => (
				<SwiperSlide key={poap.tokenId} className={styles.swiperSlide}>
					<div>
						<Image
							src={poap.event.image_url}
							alt={`${poap.tokenId} image`}
							width='200'
							height='200'
							className={styles.poapImage}
						/>
					</div>
					<h1 className={styles.poapTitle}>{shortenText(poap.event.name, 30)}</h1>
					<p>minted {formatDateWithMoment(poap.created)}</p>
					<p>{shortenText(poap.event.description, 100)}</p>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default SwiperComponent;
