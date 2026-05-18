import React from "react";
import { NavItem, PageRoute } from "../types";
import { NAV_ITEMS } from "../constants";
import { ChevronRight, ExternalLink } from "lucide-react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import Breadcrumbs from "./Breadcrumbs";

interface LayoutProps {
	children: React.ReactNode;
	activeRoute: PageRoute;
	onNavigate: (route: PageRoute) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeRoute, onNavigate }) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
	const activeLabel = NAV_ITEMS.find((item) => item.id === activeRoute)?.label ?? "Раздел";

	return (
		<div className="min-h-screen flex flex-col font-sans">
			<SiteHeader isMobileMenuOpen={isMobileMenuOpen} onToggleMobileMenu={() => setIsMobileMenuOpen((prev) => !prev)} />

			<div className="flex-grow container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
				<aside
					className={`
          md:w-1/4 flex-shrink-0
          ${isMobileMenuOpen ? "block" : "hidden md:block"}
        `}
				>
					<nav className="bg-gray-50 border border-gray-200 rounded p-4 sticky top-4">
						<h3 className="font-bold text-gray-900 uppercase text-xs tracking-wider mb-4 border-b pb-2 border-gray-200">Навигация по разделу</h3>
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
										{activeRoute === item.id ? <ChevronRight size={16} /> : null}
									</button>
								</li>
							))}
						</ul>

						<div className="mt-8 pt-4 border-t border-gray-200 text-xs text-gray-500 space-y-2">
							<p className="font-semibold text-gray-700">Другие разделы:</p>
							<a href="/documents/" className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors">
								Каталог документов <ExternalLink size={13} />
							</a>
							<a href="/services/" className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors">
								Электронные сервисы <ExternalLink size={13} />
							</a>
							<a href="/academic-calendar/" className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors">
								Учебный календарь <ExternalLink size={13} />
							</a>
							<a href="/scholarships/" className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors">
								Стипендии и поддержка <ExternalLink size={13} />
							</a>
						</div>

						<div className="mt-6 pt-4 border-t border-gray-200 text-xs text-gray-500">
							<p className="mb-2 font-semibold text-gray-700">Единый деканат:</p>
							<p>Телефон: +7 (495) 640-57-11</p>
							<p>Кабинет: 420 (Главный корпус)</p>
						</div>
					</nav>
				</aside>

				<main className="md:w-3/4 min-h-[500px]">
					<Breadcrumbs
						items={[
							{ label: "Главная", href: "/" },
							{ label: "Студентам", href: "/students/" },
							{ label: activeLabel },
						]}
					/>

					<div className="bg-white">{children}</div>
				</main>
			</div>

			<SiteFooter />
		</div>
	);
};

export default Layout;
