import { FC } from 'react';

import Header from './../layout/header/Header';
import BannerThanks from './../layout/banner/bannerThanks/BannerThanks';
import Footer from './../layout/footer/Footer';

const Thanks: FC = () => {
	return (
		<>
			<Header />
			<BannerThanks />
			<Footer />
		</>
	);
};

export default Thanks;
