import React from "react";
import InfoPageLayout from "./components/InfoPageLayout";
import { PORTAL_NAV_ITEMS } from "./portalData";

const SECTION_LINKS = [
	{ label: "Виды выплат", href: "#types" },
	{ label: "Критерии", href: "#criteria" },
	{ label: "Матпомощь", href: "#support" },
	{ label: "Сроки", href: "#timeline" },
	{ label: "Контакты", href: "#contacts" },
];

const SCHOLARSHIP_TYPES = [
	{
		title: "Государственная академическая",
		description: "Для очной формы при стабильной успеваемости.",
	},
	{
		title: "Повышенная академическая",
		description: "За достижения в учебе, науке и внеучебной активности.",
	},
	{
		title: "Социальная",
		description: "При подтвержденной льготной категории.",
	},
];

const CRITERIA = [
	"Нет академических задолженностей.",
	"Документы поданы вовремя и полностью.",
	"Реквизиты для выплаты актуальны.",
	"Для социальной выплаты есть действующее подтверждение.",
];

const SUPPORT_PACK = [
	"Заявление на материальную помощь.",
	"Подтверждающий документ по ситуации.",
	"Актуальные реквизиты для перевода.",
];

const REVIEW_TIMELINE = [
	{ type: "Академическая стипендия", term: "По итогам сессии и приказа по университету" },
	{ type: "Социальная стипендия", term: "До 10 рабочих дней после подачи полного пакета" },
	{ type: "Материальная помощь", term: "До 15 рабочих дней" },
];

const CONTACTS = [
	{
		title: "Единый деканат",
		description: "Проверка пакета и первичная консультация.",
	},
	{
		title: "Стипендиальная комиссия факультета",
		description: "Назначение выплат и этапы рассмотрения.",
	},
	{
		title: "Бухгалтерия",
		description: "Статус выплаты после приказа.",
	},
];

const ScholarshipsPage: React.FC = () => {
	return (
		<InfoPageLayout
			title="Стипендии и материальная поддержка"
			description="Коротко: какие выплаты есть, какие условия и куда обращаться."
			breadcrumbs={[
				{ label: "Главная", href: "/" },
				{ label: "Стипендии и поддержка" },
			]}
			navigation={PORTAL_NAV_ITEMS}
			sectionNavigation={SECTION_LINKS}
		>
			<section id="types" className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-5">
				<h3 className="text-xl font-semibold text-slate-900 mb-3">Виды выплат</h3>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-slate-700">
					{SCHOLARSHIP_TYPES.map((item) => (
						<article key={item.title} className="bg-white border border-slate-200 rounded-lg p-4">
							<p className="font-semibold text-slate-900 mb-1">{item.title}</p>
							<p>{item.description}</p>
						</article>
					))}
				</div>
			</section>

			<section id="criteria" className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-5">
				<h3 className="text-xl font-semibold text-slate-900 mb-3">Базовые критерии назначения</h3>
				<ul className="list-disc pl-6 space-y-2 text-slate-700">
					{CRITERIA.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
			</section>

			<section id="support" className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-5">
				<h3 className="text-xl font-semibold text-slate-900 mb-3">Материальная помощь</h3>
				<p className="text-slate-700 mb-4 leading-relaxed">Единовременная выплата оформляется при подтвержденных обстоятельствах.</p>
				<div className="bg-white border border-slate-200 rounded-lg p-4 text-sm text-slate-700">
					<p className="font-semibold text-slate-900 mb-2">Что подать</p>
					<ul className="list-disc pl-5 space-y-1">
						{SUPPORT_PACK.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>
			</section>

			<section id="timeline" className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-5">
				<h3 className="text-xl font-semibold text-slate-900 mb-3">Сроки рассмотрения</h3>
				<div className="overflow-x-auto border border-slate-200 rounded-lg">
					<table className="w-full text-sm">
						<thead className="bg-slate-100 text-slate-800">
							<tr>
								<th className="text-left p-3">Тип обращения</th>
								<th className="text-left p-3">Срок рассмотрения</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-slate-200 text-slate-700">
							{REVIEW_TIMELINE.map((row) => (
								<tr key={row.type}>
									<td className="p-3">{row.type}</td>
									<td className="p-3">{row.term}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>

			<section id="contacts" className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-5">
				<h3 className="text-xl font-semibold text-slate-900 mb-3">Куда обращаться</h3>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-slate-700">
					{CONTACTS.map((item) => (
						<article key={item.title} className="bg-white border border-slate-200 rounded-lg p-4">
							<p className="font-semibold text-slate-900 mb-1">{item.title}</p>
							<p>{item.description}</p>
						</article>
					))}
				</div>

				<div className="mt-4 flex flex-wrap gap-3">
					<a
						href="/services/"
						className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800 transition-colors"
					>
						Подать обращение
					</a>
					<a
						href="/documents/"
						className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100 transition-colors"
					>
						Открыть шаблоны
					</a>
				</div>
			</section>
		</InfoPageLayout>
	);
};

export default ScholarshipsPage;
