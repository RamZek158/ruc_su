import React from "react";
import { NavItem, PageRoute } from "../types";
import { NAV_ITEMS, UNIVERSITY_NAME, SECTION_NAME } from "../constants";
import { Menu, X, ChevronRight } from "lucide-react";
import logo from "../assets/logomini.png";

interface LayoutProps {
	children: React.ReactNode;
	activeRoute: PageRoute;
	onNavigate: (route: PageRoute) => void;
}

interface RUCLogoProps {
	onClick: () => void;
}

const RUCLogo: React.FC<RUCLogoProps> = ({ onClick }) => (
	<div
		onClick={onClick}
		className="
      bg-white
      rounded-xl
      p-1.5
      mr-4
      cursor-pointer
      shadow-sm
      flex
      items-center
      justify-center
    "
	>
		<img src={logo} alt="Логотип" className="h-10 w-10 object-contain select-none" />
	</div>
);

const Layout: React.FC<LayoutProps> = ({ children, activeRoute, onNavigate }) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

	return (
		<div className="min-h-screen flex flex-col font-sans">
			{/* Top Header - Updated to Brand Purple */}
			<header className="bg-[#4b2e83] text-white shadow-md">
				<div className="container mx-auto px-4 py-4 flex items-center justify-between">
					<div className="flex items-center">
						<RUCLogo />
						<div>
							<h1 className="text-lg md:text-xl font-bold uppercase tracking-wider leading-tight">{UNIVERSITY_NAME}</h1>
							<p className="text-xs md:text-sm text-purple-100 opacity-90 uppercase tracking-wide mt-1">{SECTION_NAME}</p>
						</div>
					</div>
					{/* Mobile Menu Toggle */}
					<button className="md:hidden p-2 text-white hover:bg-[#3b2366] rounded" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
						{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</header>

			{/* Main Content Area */}
			<div className="flex-grow container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
				{/* Sidebar Navigation */}
				<aside
					className={`
          md:w-1/4 flex-shrink-0
          ${isMobileMenuOpen ? "block" : "hidden md:block"}
        `}
				>
					<nav className="bg-gray-50 border border-gray-200 rounded p-4 sticky top-4">
						<h3 className="font-bold text-gray-900 uppercase text-xs tracking-wider mb-4 border-b pb-2 border-gray-200">Навигация</h3>
						<ul className="space-y-1">
							{NAV_ITEMS.map((item: NavItem) => (
								<li key={item.id}>
									<button
										onClick={() => {
											onNavigate(item.id);
											setIsMobileMenuOpen(false);
										}}
										className={`
                      w-full text-left px-3 py-2 text-sm font-medium rounded transition-colors flex items-center justify-between group
                      ${activeRoute === item.id ? "bg-[#4b2e83] text-white shadow-sm" : "text-gray-700 hover:bg-gray-200 hover:text-gray-900"}
                    `}
									>
										<span>{item.label}</span>
										{activeRoute === item.id && <ChevronRight size={16} />}
									</button>
								</li>
							))}
						</ul>

						{/* Quick Helper Widget */}
						<div className="mt-8 pt-4 border-t border-gray-200 text-xs text-gray-500">
							<p className="mb-2 font-semibold text-gray-700">Единый деканат:</p>
							<p>Телефон: +7 (495) 640-57-11</p>
							<p>Кабинет: 420 (Главный корпус)</p>
						</div>
					</nav>
				</aside>

				{/* Content Render */}
				<main className="md:w-3/4 min-h-[500px]">
					{/* Breadcrumbs simulation */}
					<div className="text-sm text-gray-500 mb-6 flex items-center">
						<span>Главная</span>
						<span className="mx-2">/</span>
						<span>Студентам</span>
						<span className="mx-2">/</span>
						<span className="text-gray-900 font-medium">{NAV_ITEMS.find((i) => i.id === activeRoute)?.label}</span>
					</div>

					<div className="bg-white">{children}</div>
				</main>
			</div>

			{/* Footer */}
			<footer className="bg-gray-900 text-gray-400 text-sm py-8 border-t border-gray-800">
				<div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
					<div>
						<h4 className="text-white font-bold uppercase mb-4 tracking-wider">Контакты</h4>
						<p>141014, Московская обл.,</p>
						<p>г. Мытищи, ул. В. Волошиной, 12/30</p>
					</div>
					<div>
						<h4 className="text-white font-bold uppercase mb-4 tracking-wider">Информация</h4>
						<ul className="space-y-2">
							<li>
								<a href="#" className="hover:text-white transition-colors">
									Сведения об образовательной организации
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white transition-colors">
									Структура и органы управления
								</a>
							</li>
						</ul>
					</div>
					<div>
						<p className="mt-4 md:mt-0 text-xs">
							© {new Date().getFullYear()} Российский университет кооперации.
							<br />
							Все права защищены.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Layout;
