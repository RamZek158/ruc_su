import React from "react";
import Breadcrumbs, { BreadcrumbItem } from "./Breadcrumbs";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export interface PageNavItem {
	label: string;
	href: string;
}

export interface SectionNavItem {
	label: string;
	href: string;
}

interface InfoPageLayoutProps {
	title: string;
	description?: string;
	breadcrumbs: BreadcrumbItem[];
	navigation?: PageNavItem[];
	sectionNavigation?: SectionNavItem[];
	children: React.ReactNode;
}

const normalizePath = (path: string): string => {
	if (!path.endsWith("/")) {
		return `${path}/`;
	}
	return path;
};

const normalizeLocalHref = (href: string): string => {
	try {
		const resolved = new URL(href, window.location.origin);
		return `${normalizePath(resolved.pathname)}${resolved.search}${resolved.hash}`;
	} catch {
		return href;
	}
};

const InfoPageLayout: React.FC<InfoPageLayoutProps> = ({
	title,
	description,
	breadcrumbs,
	navigation,
	sectionNavigation,
	children,
}) => {
	const currentPath = normalizePath(window.location.pathname);
	const currentPathWithQuery = `${currentPath}${window.location.search}`;
	const currentHash = window.location.hash;

	const isSectionLinkActive = (href: string): boolean => {
		if (href.startsWith("#")) {
			return currentHash === href;
		}

		const normalizedHref = normalizeLocalHref(href);
		return normalizedHref === currentPathWithQuery;
	};

	const handleSectionNavigationClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		if (!href.startsWith("#")) {
			return;
		}

		const target = document.querySelector(href);
		if (!target) {
			return;
		}

		event.preventDefault();
		target.scrollIntoView({ behavior: "smooth", block: "start" });
		window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}${href}`);
	};

	return (
		<div className="min-h-screen flex flex-col font-sans bg-white">
			<SiteHeader />

			<div className="flex-grow container mx-auto px-4 py-6 md:py-8 flex flex-col md:flex-row gap-6 md:gap-8">
				{navigation ? (
					<aside className="md:w-[280px] flex-shrink-0">
						<nav className="bg-white border border-slate-200 rounded-2xl p-4 sticky top-4">
							<h3 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-4 border-b pb-2 border-slate-200">Разделы портала</h3>
							<ul className="space-y-1">
								{navigation.map((item) => {
									const isActive = normalizePath(item.href) === currentPath;
									return (
										<li key={item.href}>
											<a
												href={item.href}
												className={`w-full block px-3 py-2 text-sm font-medium rounded-full transition-colors ${
													isActive ? "bg-blue-100 text-blue-800" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
												}`}
											>
												<span>{item.label}</span>
											</a>
										</li>
									);
								})}
							</ul>

							<div className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-500">
								<p className="mb-2 font-semibold text-slate-700">Единый деканат:</p>
								<p>Телефон: +7 (495) 640-57-11</p>
								<p>Кабинет: 420 (Главный корпус)</p>
							</div>
						</nav>
					</aside>
				) : null}

				<main className={navigation ? "md:flex-1 min-h-[500px]" : "w-full min-h-[500px]"}>
					<Breadcrumbs items={breadcrumbs} />

					<div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6">
						<h2 className="text-2xl font-bold text-slate-900 mb-3 border-b border-slate-200 pb-3">{title}</h2>
						{description ? <p className="text-slate-700 mb-5 leading-relaxed">{description}</p> : null}

						{sectionNavigation && sectionNavigation.length > 0 ? (
							<div className="mb-6 bg-slate-50 rounded-2xl p-3">
								<p className="text-xs uppercase tracking-wide text-slate-500 mb-2">Быстрый переход по странице</p>
								<div className="flex flex-wrap gap-2">
									{sectionNavigation.map((item) => {
										const isActive = isSectionLinkActive(item.href);

										return (
											<a
												key={item.href}
												href={item.href}
												onClick={(event) => handleSectionNavigationClick(event, item.href)}
												className={`inline-flex items-center text-sm px-3 py-1.5 rounded-full font-medium transition-colors ${
													isActive ? "bg-blue-700 text-white" : "bg-white text-slate-700 hover:bg-slate-100"
												}`}
											>
												{item.label}
											</a>
										);
									})}
								</div>
							</div>
						) : null}

						<div className="space-y-5">{children}</div>
					</div>
				</main>
			</div>

			<SiteFooter />
		</div>
	);
};

export default InfoPageLayout;
