import { NavItem, PageRoute } from './types';

export const UNIVERSITY_NAME = "Российский университет кооперации";
export const SECTION_NAME = "Справочная информация для обучающихся";

export const NAV_ITEMS: NavItem[] = [
  { id: PageRoute.FOREIGN_STUDENTS, label: "Информация для иностранных граждан" },
  { id: PageRoute.MILITARY_REGISTRATION, label: "Воинский учет" },
  { id: PageRoute.DOCUMENT_ORDER, label: "Заказ справок и документов" },
];