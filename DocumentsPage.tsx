import React from "react";
import InfoPageLayout from "./components/InfoPageLayout";
import { PORTAL_NAV_ITEMS } from "./portalData";

const DocumentsPage: React.FC = () => {
	return (
		<InfoPageLayout
			title="Каталог документов и бланков"
			description="Страница-реестр актуальных документов: регламенты, шаблоны заявлений и требования к оформлению."
			breadcrumbs={[
				{ label: "Главная", href: "/" },
				{ label: "Каталог документов и бланков" },
			]}
			navigation={PORTAL_NAV_ITEMS}
		>
			<section className="mb-8">
				<h3 className="text-xl font-semibold text-gray-800 mb-3">1. Реестр основных документов</h3>
				<div className="overflow-x-auto border border-gray-200">
					<table className="w-full text-sm">
						<thead className="bg-gray-100 text-gray-800">
							<tr>
								<th className="text-left p-3">Документ</th>
								<th className="text-left p-3">Для кого</th>
								<th className="text-left p-3">Последнее обновление</th>
								<th className="text-left p-3">Источник</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-200 text-gray-700">
							<tr>
								<td className="p-3">Памятка по миграционному учету</td>
								<td className="p-3">Иностранные граждане</td>
								<td className="p-3">Май 2026</td>
								<td className="p-3"><a href="/students/?tab=foreign-students" className="text-[#4b2e83] hover:underline">Раздел «Студентам»</a></td>
							</tr>
							<tr>
								<td className="p-3">Регламент по воинскому учету обучающихся</td>
								<td className="p-3">Граждане РФ, очная форма</td>
								<td className="p-3">Сентябрь 2025</td>
								<td className="p-3"><a href="/students/?tab=military-registration" className="text-[#4b2e83] hover:underline">Раздел «Студентам»</a></td>
							</tr>
							<tr>
								<td className="p-3">Порядок выдачи справок и копий документов</td>
								<td className="p-3">Все обучающиеся</td>
								<td className="p-3">Февраль 2026</td>
								<td className="p-3"><a href="/students/?tab=document-order" className="text-[#4b2e83] hover:underline">Раздел «Студентам»</a></td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>

			<section id="templates" className="mb-8">
				<h3 className="text-xl font-semibold text-gray-800 mb-3">2. Шаблоны заявлений для скачивания</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
					<div className="border border-gray-200 p-4">
						<p className="font-medium text-gray-900 mb-1">Заявление на выдачу справки об обучении</p>
						<p className="mb-3">Заполняется для получения справки по месту требования.</p>
						<a href="/files/zayavlenie-na-spravku.txt" download className="text-[#4b2e83] hover:underline">Скачать шаблон (.txt)</a>
					</div>
					<div className="border border-gray-200 p-4">
						<p className="font-medium text-gray-900 mb-1">Заявление на выдачу копий документов</p>
						<p className="mb-3">Используется для запроса копий документов из личного дела.</p>
						<a href="/files/zayavlenie-na-kopii.txt" download className="text-[#4b2e83] hover:underline">Скачать шаблон (.txt)</a>
					</div>
					<div className="border border-gray-200 p-4">
						<p className="font-medium text-gray-900 mb-1">Уведомление об изменении персональных данных</p>
						<p className="mb-3">Подается при изменении адреса, телефона, e-mail или паспортных данных.</p>
						<a href="/files/uvedomlenie-ob-izmenenii-dannyh.txt" download className="text-[#4b2e83] hover:underline">Скачать шаблон (.txt)</a>
					</div>
					<div className="border border-gray-200 p-4">
						<p className="font-medium text-gray-900 mb-1">Согласие на обработку персональных данных</p>
						<p className="mb-3">Требуется для отдельных обращений и дополнительных запросов.</p>
						<a href="/files/soglasie-na-obrabotku-pdn.txt" download className="text-[#4b2e83] hover:underline">Скачать шаблон (.txt)</a>
					</div>
				</div>
			</section>

			<section id="deadlines" className="mb-8">
				<h3 className="text-xl font-semibold text-gray-800 mb-3">3. Требования к оформлению заявлений</h3>
				<ul className="list-disc pl-6 space-y-2 text-gray-700">
					<li>Указывайте полные ФИО без сокращений, как в паспорте.</li>
					<li>Обязательно указывайте учебную группу, форму обучения и контактный телефон.</li>
					<li>Для иностранных граждан — дополнительно номер паспорта и данные регистрации.</li>
					<li>При подаче через электронные каналы проверяйте корректность e-mail для обратной связи.</li>
					<li>Сохраняйте копию отправленного заявления до завершения обработки.</li>
				</ul>
			</section>

			<section>
				<h3 className="text-xl font-semibold text-gray-800 mb-3">4. Сроки подготовки документов</h3>
				<div className="overflow-x-auto border border-gray-200">
					<table className="w-full text-sm">
						<thead className="bg-gray-100 text-gray-800">
							<tr>
								<th className="text-left p-3">Тип документа</th>
								<th className="text-left p-3">Срок</th>
								<th className="text-left p-3">Канал подачи</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-200 text-gray-700">
							<tr>
								<td className="p-3">Справка об обучении</td>
								<td className="p-3">До 3 рабочих дней</td>
								<td className="p-3">/services/ или Единый деканат</td>
							</tr>
							<tr>
								<td className="p-3">Копии документов</td>
								<td className="p-3">До 5 рабочих дней</td>
								<td className="p-3">/services/ или Единый деканат</td>
							</tr>
							<tr>
								<td className="p-3">Консультационные запросы</td>
								<td className="p-3">1-2 рабочих дня</td>
								<td className="p-3">Электронная форма / почта</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
		</InfoPageLayout>
	);
};

export default DocumentsPage;


