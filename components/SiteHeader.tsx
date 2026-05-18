import React from "react";
import { Menu, X } from "lucide-react";
import { UNIVERSITY_NAME, SECTION_NAME } from "../constants";
import logo from "../assets/logomini.png";

interface SiteHeaderProps {
	isMobileMenuOpen?: boolean;
	onToggleMobileMenu?: () => void;
}

const SiteHeader: React.FC<SiteHeaderProps> = ({ isMobileMenuOpen = false, onToggleMobileMenu }) => {
	return (
		<header className="bg-[#4b2e83] text-white shadow-md">
			<div className="container mx-auto px-4 py-4 flex items-center justify-between">
				<div className="flex items-center">
					<a
						href="/"
						className="bg-white rounded-xl p-1.5 mr-4 cursor-pointer shadow-sm flex items-center justify-center"
					>
						<img src={logo} alt="Логотип" className="h-10 w-10 object-contain select-none" />
					</a>
					<div>
						<h1 className="text-lg md:text-xl font-bold uppercase tracking-wider leading-tight">{UNIVERSITY_NAME}</h1>
						<p className="text-xs md:text-sm text-purple-100 opacity-90 uppercase tracking-wide mt-1">{SECTION_NAME}</p>
					</div>
				</div>

				{onToggleMobileMenu ? (
					<button className="md:hidden p-2 text-white hover:bg-[#3b2366] rounded" onClick={onToggleMobileMenu}>
						{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				) : null}
			</div>
		</header>
	);
};

export default SiteHeader;
