import { FC, useState } from 'react';

import TabsNav from './tabsNav/TabsNav';
import TabDescription from './tabDescription/TabDescription';
import TabGet from './tabGet/TabGet';
import TabRates from './tabRates/TabRates';

import { tabsList } from './tabsList';

import './style.css';

const Tabs: FC = () => {
	const [tab, setTab] = useState<number>(tabsList.Description);

	const tabRender = () => {
		if (tab === tabsList.Description) return <TabDescription />;
		if (tab === tabsList.Get) return <TabGet />;
		if (tab === tabsList.Rates) return <TabRates />;
	};

	const tabView = tabRender();

	return (
		<div className="tabs" id="tabs">
			<TabsNav tab={tab} setTab={setTab} />
			<div className="tabs__list">{tabView}</div>
		</div>
	);
};

export default Tabs;
