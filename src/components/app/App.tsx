/* eslint-disable */
import { FC, useReducer } from 'react';
import { formQuestReducer, FormQuestContext } from './../../reducer/reducer';
import { formQuestInitStore } from './../../store/formQuestInitStore';

import Header from './../layout/header/Header';
import BannerThanks from './../layout/banner/bannerThanks/BannerThanks';
import BannerInner from './../layout/banner/bannerInner/BannerInner';
import FormQuest from './../form/FormQuest';
import Tabs from '../layout/tabs/Tabs';
import BannerAdv from './../layout/banner/bannerAdv/BannerAdv';
import Roadmap from './../layout/roadmap/Roadmap';
import Advantage from './../layout/advantage/Advantage';
import Features from './../layout/features/Features';
import Footer from './../layout/footer/Footer';
import PayMonthly from './../layout/payMonthly/PayMonthly';

const App: FC = () => {
	const [state, dispatch] = useReducer(formQuestReducer, formQuestInitStore);

	return (
		<>
			<Header />
			{/* <BannerThanks /> */}
			<FormQuestContext.Provider value={{ dispatch, state }}>
				<BannerInner />
				<FormQuest />
			</FormQuestContext.Provider>
			<Tabs />
			<BannerAdv title="Получите кредит наличными по паспорту" />
			<Roadmap />
			<PayMonthly />
			<Advantage />
			<Features />
			<BannerAdv title="Оформить кредит наличными прямо сейчас" />
			<Footer />
		</>
	);
};

export default App;
