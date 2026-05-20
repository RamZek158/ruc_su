import React from "react";

const SiteFooter: React.FC = () => {
	return (
		<footer className="bg-gray-900 text-gray-400 text-sm py-8 border-t border-gray-800">
			<div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
				<div>
					<h4 className="text-white font-bold uppercase mb-4 tracking-wider">Контакты</h4>
					<p>141014, Московская обл.,</p>
					<p>г. Мытищи, ул. В. Волошиной, 12/30</p>
					<p className="mt-2">Телефон: +7 (495) 640-57-11</p>
					<p>E-mail: info@ruc.su</p>
				</div>
				<div>
					<h4 className="text-white font-bold uppercase mb-4 tracking-wider">Разделы сайта</h4>
					<ul className="space-y-2">
						<li><a href="/students/" className="hover:text-white transition-colors">Студентам</a></li>
						<li><a href="/documents/" className="hover:text-white transition-colors">Каталог документов</a></li>
						<li><a href="/services/" className="hover:text-white transition-colors">Электронные сервисы</a></li>
						<li><a href="/academic-calendar/" className="hover:text-white transition-colors">Учебный календарь</a></li>
					</ul>
				</div>
				<div>
					<h4 className="text-white font-bold uppercase mb-4 tracking-wider">Онлайн-подача</h4>
					<ul className="space-y-2">
						<li>
							<a
								href="https://docs.google.com/forms/d/1QZTSTb6jk9yXdJWL3n3D2eJM1I4LJsDIK4ADz2wtuhY/viewform?edit_requested=true"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-white transition-colors"
							>
								Google Form: заявка на справку
							</a>
						</li>
						<li>
							<a href="https://t.me/spravki_university_bot" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
								Telegram-бот для заявок
							</a>
						</li>
					</ul>
					<p className="mt-4 text-xs">© {new Date().getFullYear()} Российский университет кооперации. Все права защищены.</p>
				</div>
			</div>
		</footer>
	);
};

export default SiteFooter;
