import React from "react";
import InfoPageLayout, { SectionNavItem } from "./components/InfoPageLayout";
import ForeignStudents from "./components/ForeignStudents";
import MilitaryRegistration from "./components/MilitaryRegistration";
import DocumentOrder from "./components/DocumentOrder";
import { PageRoute } from "./types";
import { NAV_ITEMS } from "./constants";
import { PORTAL_NAV_ITEMS } from "./portalData";

const isPageRoute = (value: string): value is PageRoute => {
	return Object.values(PageRoute).includes(value as PageRoute);
};

const getRouteFromQuery = (): PageRoute => {
	const tab = new URLSearchParams(window.location.search).get("tab");
	if (tab && isPageRoute(tab)) {
		return tab;
	}
	return PageRoute.FOREIGN_STUDENTS;
};

const App: React.FC = () => {
	const activeRoute = getRouteFromQuery();
	const activeLabel = NAV_ITEMS.find((item) => item.id === activeRoute)?.label ?? "Раздел";
	const studentSectionNavigation: SectionNavItem[] = NAV_ITEMS.map((item) => ({
		label: item.label,
		href: `/students/?tab=${item.id}`,
	}));

	const renderContent = () => {
		switch (activeRoute) {
			case PageRoute.FOREIGN_STUDENTS:
				return <ForeignStudents />;
			case PageRoute.MILITARY_REGISTRATION:
				return <MilitaryRegistration />;
			case PageRoute.DOCUMENT_ORDER:
				return <DocumentOrder />;
			default:
				return <ForeignStudents />;
		}
	};

	return (
		<InfoPageLayout
			title="Раздел «Студентам»"
			description="Ключевая справочная информация для обучающихся: иностранные студенты, воинский учет и заказ документов."
			breadcrumbs={[
				{ label: "Главная", href: "/" },
				{ label: "Студентам", href: "/students/" },
				{ label: activeLabel },
			]}
			navigation={PORTAL_NAV_ITEMS}
			sectionNavigation={studentSectionNavigation}
		>
			{renderContent()}
		</InfoPageLayout>
	);
};

export default App;
