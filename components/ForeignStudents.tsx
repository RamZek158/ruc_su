import React from 'react';

const ForeignStudents: React.FC = () => {
  return (
    <article className="prose prose-slate max-w-none">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Информация для иностранных граждан</h2>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Общие положения</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Настоящий раздел регламентирует порядок пребывания и обучения иностранных граждан в Российском университете кооперации (далее — Университет). 
          Иностранные граждане, обучающиеся в Университете, обязаны соблюдать законодательство Российской Федерации, в том числе правила миграционного учета, 
          а также Устав и локальные нормативные акты Университета.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Порядок поступления</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Прием иностранных граждан на обучение осуществляется на основании международных договоров Российской Федерации, 
          федеральных законов или договора об оказании платных образовательных услуг.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Перечень необходимых документов</h3>
        <p className="text-gray-700 mb-2">Для зачисления и оформления личного дела иностранный гражданин обязан предоставить в Приемную комиссию:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Документ, удостоверяющий личность иностранного гражданина в РФ (паспорт), с нотариально заверенным переводом на русский язык.</li>
          <li>Оригинал документа об образовании и (или) квалификации (или его заверенную копию) с нотариально заверенным переводом.</li>
          <li>Медицинское заключение об отсутствии противопоказаний для обучения в РФ.</li>
          <li>Полис добровольного медицинского страхования (ДМС), действующий на территории РФ.</li>
          <li>4 фотографии (размер 3x4 см, матовые).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Миграционный учет и регистрация</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          В соответствии с Федеральным законом «О правовом положении иностранных граждан в Российской Федерации», каждый иностранный студент обязан 
          встать на миграционный учет по месту пребывания.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-700 p-4 mb-4">
          <p className="text-sm text-blue-900 font-medium">
            Внимание! Для продления срока временного пребывания необходимо обратиться в Международный отдел не позднее чем за 20 рабочих дней до окончания срока действия визы или регистрации.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">5. Контактные данные ответственного подразделения</h3>
        <div className="bg-gray-50 p-6 rounded-sm border border-gray-200">
          <p className="font-semibold text-gray-900">Международный отдел (Управление международного сотрудничества)</p>
          <p className="text-gray-700 mt-2"><span className="font-medium">Адрес:</span> г. Мытищи, ул. В.Волошиной, д. 12/30, кабинет (уточняется)</p>
          <p className="text-gray-700 mt-1"><span className="font-medium">Телефон:</span> (495) 640-57-11 (доб. — см. справочник)</p>
          <p className="text-gray-700 mt-1"><span className="font-medium">E-mail:</span> <a href="mailto:info@ruc.su" className="text-blue-800 hover:underline">info@ruc.su</a> (с пометкой «Для международного отдела»)</p>
          <p className="text-gray-700 mt-1"><span className="font-medium">Часы приема:</span> Пн-Пт с 09:00 до 17:00 (обед с 13:00 до 14:00)</p>
        </div>
      </section>
    </article>
  );
};

export default ForeignStudents;