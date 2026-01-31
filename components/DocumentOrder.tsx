import React from "react";

const DocumentOrder: React.FC = () => {
	return (
		<article className="prose prose-slate max-w-none">
			<h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Заказ справок и документов</h2>

			<section className="mb-8">
				<h3 className="text-xl font-semibold text-gray-800 mb-3">Описание услуги</h3>
				<p className="text-gray-700 mb-4 leading-relaxed">
					Обучающиеся Университета имеют право на получение справок, подтверждающих факт обучения, а также копий документов, находящихся в личном деле. Заказ
					справок осуществляется в дистанционном формате или при личном обращении в Единый деканат (МФЦ обучающихся).
				</p>
			</section>

			<section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="bg-white border border-gray-200 p-6 rounded shadow-sm hover:shadow-md transition-shadow">
					<h4 className="text-lg font-bold text-gray-800 mb-3">Онлайн-заявка (Google Form)</h4>
					<p className="text-gray-600 mb-4 text-sm">Заполните форму для заказа стандартной справки об обучении (по месту требования).</p>
					<a
						href="https://docs.google.com/forms/d/1QZTSTb6jk9yXdJWL3n3D2eJM1I4LJsDIK4ADz2wtuhY/viewform?edit_requested=true"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block bg-[#4b2e83] text-white px-4 py-2 text-sm font-medium rounded hover:bg-[#3b2366] transition-colors"
					>
						Перейти к форме
					</a>
				</div>

				<div className="bg-white border border-gray-200 p-6 rounded shadow-sm hover:shadow-md transition-shadow">
					<h4 className="text-lg font-bold text-gray-800 mb-3">Telegram-бот</h4>
					<p className="text-gray-600 mb-4 text-sm">Используйте официальный бот для отслеживания статуса готовности документов.</p>
					<a
						href="https://t.me/spravki_university_bot"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block bg-blue-600 text-white px-4 py-2 text-sm font-medium rounded hover:bg-blue-700 transition-colors"
					>
						Запустить бота
					</a>
				</div>
			</section>

			<section className="mb-8">
				<h3 className="text-xl font-semibold text-gray-800 mb-3">Сроки и порядок обработки</h3>
				<ul className="list-disc pl-6 space-y-2 text-gray-700">
					<li>
						Стандартный срок подготовки справки об обучении — <span className="font-semibold">3 рабочих дня</span> с момента подачи заявки.
					</li>
					<li>
						Срок подготовки копий документов из личного дела — <span className="font-semibold">до 5 рабочих дней</span>.
					</li>
					<li>
						Обработка заявок осуществляется строго в рабочие дни (понедельник — пятница). Заявки, поступившие в выходные дни, обрабатываются в первый рабочий
						день.
					</li>
				</ul>
			</section>

			<div className="bg-yellow-50 p-4 border border-yellow-200 rounded text-sm text-yellow-800">
				<strong>Примечание:</strong> Выдача готовых документов производится при предъявлении студенческого билета или паспорта.
			</div>
		</article>
	);
};

export default DocumentOrder;
