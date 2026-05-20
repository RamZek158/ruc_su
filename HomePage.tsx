import React from "react";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import Breadcrumbs from "./components/Breadcrumbs";

const PORTAL_SECTIONS = [
	{
		title: "Студентам",
		href: "/students/",
		description: "Иностранные студенты, воинский учет и заказ справок в одном разделе.",
	},
	{
		title: "Каталог документов",
		href: "/documents/",
		description: "Актуальные бланки, шаблоны заявлений и требования к оформлению.",
	},
	{
		title: "Электронные сервисы",
		href: "/services/",
		description: "Подача обращений, статусы заявок и регламент обработки.",
	},
	{
		title: "Учебный календарь",
		href: "/academic-calendar/",
		description: "Семестры, сессии, пересдачи и важные учебные даты.",
	},
];

const QUICK_ACTIONS = [
	{ label: "Подать обращение", href: "/services/" },
	{ label: "Открыть шаблоны документов", href: "/documents/" },
	{ label: "Перейти в раздел «Студентам»", href: "/students/" },
];

const HomePage: React.FC = () => {
	return (
		<div className="min-h-screen flex flex-col font-sans bg-white">
			<SiteHeader />

			<main className="flex-grow container mx-auto px-4 py-6 md:py-8">
				<Breadcrumbs items={[{ label: "Главная" }]} />

				<section className="mb-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-white p-6 md:p-8">
					<p className="text-xs uppercase tracking-wide font-semibold text-blue-700 mb-2">Единый студенческий портал</p>
					<h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Все сервисы университета в одном месте</h2>
					<p className="text-slate-700 leading-relaxed max-w-3xl">
						Выбирайте нужный раздел без лишних переходов: учебные вопросы, документы, электронные обращения,
						и календарь.
					</p>
				</section>

				<section className="mb-8">
					<h3 className="text-xl font-semibold text-slate-900 mb-3">Разделы портала</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{PORTAL_SECTIONS.map((section) => (
							<a
								key={section.href}
								href={section.href}
								className="group rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-blue-200 hover:bg-blue-50/40"
							>
								<p className="text-base font-semibold text-slate-900 mb-2">{section.title}</p>
								<p className="text-sm text-slate-600 leading-relaxed">{section.description}</p>
								<p className="mt-4 text-sm font-semibold text-blue-700">Открыть раздел</p>
							</a>
						))}
					</div>
				</section>

				<section>
					<h3 className="text-xl font-semibold text-slate-900 mb-3">Быстрые действия</h3>
					<div className="flex flex-wrap gap-3">
						{QUICK_ACTIONS.map((action, index) => (
							<a
								key={action.href}
								href={action.href}
								className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
									index === 0
										? "bg-blue-700 text-white hover:bg-blue-800"
										: "bg-slate-100 text-slate-800 hover:bg-slate-200"
								}`}
							>
								{action.label}
							</a>
						))}
					</div>
				</section>
			</main>

			<SiteFooter />
		</div>
	);
};

export default HomePage;
