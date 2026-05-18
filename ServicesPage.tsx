import React from "react";
import InfoPageLayout from "./components/InfoPageLayout";
import { PORTAL_NAV_ITEMS } from "./portalData";

const ServicesPage: React.FC = () => {
	return (
		<InfoPageLayout
			title="Электронные сервисы для студентов"
			description="Рабочие каналы подачи обращений, регламент обработки, статусы и правила эскалации заявок."
			breadcrumbs={[
				{ label: "Главная", href: "/" },
				{ label: "Электронные сервисы для студентов" },
			]}
			navigation={PORTAL_NAV_ITEMS}
		>
			<section className="mb-8">
				<h3 className="text-xl font-semibold text-gray-800 mb-3">1. Каналы подачи обращений</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
					<div className="border border-gray-200 p-4 bg-gray-50">
						<p className="font-medium text-gray-900 mb-1">Google Form</p>
						<p className="mb-3">Основной канал для заявок на справки, копии документов и типовые обращения.</p>
						<a
							href="https://docs.google.com/forms/d/1QZTSTb6jk9yXdJWL3n3D2eJM1I4LJsDIK4ADz2wtuhY/viewform?edit_requested=true"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#4b2e83] hover:underline"
						>
							Открыть форму
						</a>
					</div>
					<div className="border border-gray-200 p-4 bg-gray-50">
						<p className="font-medium text-gray-900 mb-1">Telegram-бот</p>
						<p className="mb-3">Подходит для быстрого запуска обращения и проверки статуса заявки.</p>
						<a href="https://t.me/spravki_university_bot" target="_blank" rel="noopener noreferrer" className="text-[#4b2e83] hover:underline">
							Открыть Telegram-бот
						</a>
					</div>
				</div>
			</section>

			<section className="mb-8">
				<h3 className="text-xl font-semibold text-gray-800 mb-3">2. SLA и регламент обработки</h3>
				<div className="overflow-x-auto border border-gray-200">
					<table className="w-full text-sm">
						<thead className="bg-gray-100 text-gray-800">
							<tr>
								<th className="text-left p-3">Тип обращения</th>
								<th className="text-left p-3">Срок первой реакции</th>
								<th className="text-left p-3">Срок выполнения</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-200 text-gray-700">
							<tr>
								<td className="p-3">Справка об обучении</td>
								<td className="p-3">До 1 рабочего дня</td>
								<td className="p-3">До 3 рабочих дней</td>
							</tr>
							<tr>
								<td className="p-3">Копии документов</td>
								<td className="p-3">До 1 рабочего дня</td>
								<td className="p-3">До 5 рабочих дней</td>
							</tr>
							<tr>
								<td className="p-3">Консультационный запрос</td>
								<td className="p-3">В день обращения</td>
								<td className="p-3">1-2 рабочих дня</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>

			<section className="mb-8">
				<h3 className="text-xl font-semibold text-gray-800 mb-3">3. Статусы заявки</h3>
				<div className="space-y-3 text-sm text-gray-700">
					<div className="border border-gray-200 p-4">
						<p className="font-medium text-gray-900">Принята</p>
						<p>Заявка зарегистрирована и передана ответственному сотруднику.</p>
					</div>
					<div className="border border-gray-200 p-4">
						<p className="font-medium text-gray-900">В обработке</p>
						<p>Проводится проверка данных и подготовка документа.</p>
					</div>
					<div className="border border-gray-200 p-4">
						<p className="font-medium text-gray-900">Требуется уточнение</p>
						<p>Не хватает данных или требуется корректировка сведений в заявке.</p>
					</div>
					<div className="border border-gray-200 p-4">
						<p className="font-medium text-gray-900">Готово к выдаче</p>
						<p>Документ подготовлен и доступен для получения в установленном порядке.</p>
					</div>
				</div>
			</section>

			<section className="mb-8">
				<h3 className="text-xl font-semibold text-gray-800 mb-3">4. Частые ошибки при подаче</h3>
				<ul className="list-disc pl-6 space-y-2 text-gray-700">
					<li>Неполные ФИО или отсутствие учебной группы в форме.</li>
					<li>Опечатка в e-mail, из-за которой невозможно отправить ответ.</li>
					<li>Отправка одного и того же обращения несколько раз подряд.</li>
					<li>Заявка в выходной день с ожиданием ответа «день-в-день».</li>
				</ul>
			</section>

			<section>
				<h3 className="text-xl font-semibold text-gray-800 mb-3">5. Эскалация и помощь</h3>
				<p className="text-gray-700 mb-3 leading-relaxed">
					Если срок обработки превысил регламент, укажите номер заявки и дату подачи при обращении
					в Единый деканат. Это позволяет быстрее найти обращение и проверить текущий этап.
				</p>
				<div className="flex flex-wrap gap-3">
					<a href="/documents/" className="inline-block bg-gray-100 text-gray-900 px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors">Открыть каталог документов</a>
					<a href="/students/?tab=document-order" className="inline-block bg-[#4b2e83] text-white px-4 py-2 text-sm font-medium hover:bg-[#3b2366] transition-colors">Перейти к вкладке заказа справок</a>
				</div>
			</section>
		</InfoPageLayout>
	);
};

export default ServicesPage;

