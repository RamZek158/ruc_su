import React from "react";

export interface BreadcrumbItem {
	label: string;
	href?: string;
}

interface BreadcrumbsProps {
	items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
	return (
		<nav aria-label="Хлебные крошки" className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-y-1">
			{items.map((item, index) => {
				const isLast = index === items.length - 1;

				return (
					<React.Fragment key={`${item.label}-${index}`}>
						{item.href && !isLast ? (
							<a href={item.href} className="hover:text-gray-700 transition-colors">
								{item.label}
							</a>
						) : (
							<span className={isLast ? "text-gray-900 font-medium" : ""}>{item.label}</span>
						)}
						{!isLast ? <span className="mx-2">/</span> : null}
					</React.Fragment>
				);
			})}
		</nav>
	);
};

export default Breadcrumbs;
