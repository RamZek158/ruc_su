import React from "react";
import InfoPageLayout from "./components/InfoPageLayout";
import { PORTAL_NAV_ITEMS } from "./portalData";

const AcademicCalendarPage: React.FC = () => {
	return (
		<InfoPageLayout
			title="Учебный календарь"
			description="Ключевые учебные даты: начало семестров, сессии, каникулы и периоды пересдач."
			breadcrumbs={[
				{ label: "Главная", href: "/" },
				{ label: "Учебный календарь" },
			]}
			navigation={PORTAL_NAV_ITEMS}
		>
			<section className="mb-8">
				<h3 className="text-xl font-semibold text-gray-800 mb-3">1. Осенний семестр 2026/2027</h3>
				<div className="overflow-x-auto border border-gray-200">
					<table className="w-full text-sm">
						<thead className="bg-gray-100 text-gray-800">
							<tr>
								<th className="text-left p-3">Этап</th>
								<th className="text-left p-3">Даты</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-200 text-gray-700">
							<tr>
								<td className="p-3">Начало занятий</td>
								<td className="p-3">1 сентября 2026</td>
							</tr>
							<tr>
								<td className="p-3">Промежуточная аттестация</td>
								<td className="p-3">26 октября - 1 ноября 2026</td>
							</tr>
							<tr>
								<td className="p-3">Зачетная неделя</td>
								<td className="p-3">14 - 20 декабря 2026</td>
							</tr>
							<tr>
								<td className="p-3">Экзаменационная сессия</td>
								<td className="p-3">21 декабря 2026 - 10 января 2027</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>

			<section className="mb-8">
				<h3 className="text-xl font-semibold text-gray-800 mb-3">2. Весенний семестр 2026/2027</h3>
				<div className="overflow-x-auto border border-gray-200">
					<table className="w-full text-sm">
						<thead className="bg-gray-100 text-gray-800">
							<tr>
								<th className="text-left p-3">Этап</th>
								<th className="text-left p-3">Даты</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-200 text-gray-700">
							<tr>
								<td className="p-3">Начало занятий</td>
								<td className="p-3">1 февраля 2027</td>
							</tr>
							<tr>
								<td className="p-3">Промежуточная аттестация</td>
								<td className="p-3">22 - 28 марта 2027</td>
							</tr>
							<tr>
								<td className="p-3">Зачетная неделя</td>
								<td className="p-3">24 - 30 мая 2027</td>
							</tr>
							<tr>
								<td className="p-3">Экзаменационная сессия</td>
								<td className="p-3">31 мая - 20 июня 2027</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>

			<section className="mb-8">
				<h3 className="text-xl font-semibold text-gray-800 mb-3">3. Периоды пересдач и ликвидации задолженностей</h3>
				<ul className="list-disc pl-6 space-y-2 text-gray-700">
					<li>Первая волна пересдач после зимней сессии: 15 - 28 января 2027.</li>
					<li>Первая волна пересдач после летней сессии: 21 июня - 4 июля 2027.</li>
					<li>Индивидуальный график по решению деканата оформляется отдельным приказом.</li>
				</ul>
			</section>

			<section>
				<h3 className="text-xl font-semibold text-gray-800 mb-3">4. Важные примечания</h3>
				<div className="space-y-3 text-sm text-gray-700">
					<div className="border border-gray-200 p-4">
						<p className="font-medium text-gray-900 mb-1">Уточнение по факультетам</p>
						<p>Отдельные институты и магистерские программы могут иметь локальные сдвиги сроков.</p>
					</div>
					<div className="border border-gray-200 p-4">
						<p className="font-medium text-gray-900 mb-1">Официальный документ</p>
						<p>Финальные даты утверждаются приказом и публикуются через деканат.</p>
					</div>
				</div>
			</section>
		</InfoPageLayout>
	);
};

export default AcademicCalendarPage;
