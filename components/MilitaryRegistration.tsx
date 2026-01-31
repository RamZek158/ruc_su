import React from 'react';

const MilitaryRegistration: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Воинский учет</h2>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Кто подлежит воинскому учету</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Воинскому учету в Университете подлежат граждане Российской Федерации, обучающиеся по очной форме обучения:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Граждане мужского пола в возрасте от 18 до 27 лет, состоящие на воинском учете и не пребывающие в запасе (призывники).</li>
          <li>Граждане, пребывающие в запасе (военнообязанные).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Обязанности обучающихся</h3>
        <p className="text-gray-700 mb-2">В целях обеспечения воинского учета обучающиеся обязаны:</p>
        <ul className="list-decimal pl-6 space-y-2 text-gray-700">
          <li>При поступлении в Университет встать на воинский учет в военно-учетном столе (ВУС) Университета в течение 14 дней с момента издания приказа о зачислении.</li>
          <li>Сообщать в ВУС об изменениях семейного положения, образования, состояния здоровья (получении инвалидности), места жительства.</li>
          <li>Своевременно предоставлять документы, подтверждающие право на отсрочку от призыва.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Перечень документов для постановки на учет</h3>
        <p className="text-gray-700 mb-4">Для постановки на воинский учет при себе необходимо иметь оригиналы следующих документов:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Паспорт гражданина РФ.</li>
          <li>Удостоверение гражданина, подлежащего призыву на военную службу (приписное свидетельство) — для призывников.</li>
          <li>Военный билет (или временное удостоверение, выданное взамен военного билета) — для военнообязанных.</li>
          <li>Справка о регистрации по месту пребывания (для иногородних студентов, проживающих в общежитии или на съемной квартире).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Сроки предоставления документов</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Документы должны быть предоставлены в военно-учетный стол Университета ежегодно до <span className="font-semibold">30 сентября</span> текущего учебного года.
        </p>
        <div className="bg-red-50 border-l-4 border-red-700 p-4">
          <p className="text-sm text-red-900">
            Несвоевременное предоставление документов может повлечь за собой административную ответственность и отсутствие отсрочки от призыва на военную службу.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">5. Контактная информация</h3>
        <div className="bg-gray-50 p-6 rounded-sm border border-gray-200">
          <p className="font-semibold text-gray-900">Второй отдел (Военно-учетный стол)</p>
          <p className="text-gray-700 mt-2"><span className="font-medium">Адрес:</span> г. Мытищи, ул. В.Волошиной, д. 12/30, главный корпус, каб. (уточняется)</p>
          <p className="text-gray-700 mt-1"><span className="font-medium">Ответственное лицо:</span> Начальник ВУС (ФИО уточняется)</p>
          <p className="text-gray-700 mt-1"><span className="font-medium">Телефон:</span> см. раздел "Контакты" на основном сайте</p>
          <p className="text-gray-700 mt-1"><span className="font-medium">График работы:</span> Пн-Чт с 09:00 до 18:00, Пт с 09:00 до 16:45</p>
        </div>
      </section>
    </article>
  );
};

export default MilitaryRegistration;