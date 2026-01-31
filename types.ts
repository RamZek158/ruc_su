export enum PageRoute {
  FOREIGN_STUDENTS = 'foreign-students',
  MILITARY_REGISTRATION = 'military-registration',
  DOCUMENT_ORDER = 'document-order'
}

export interface NavItem {
  id: PageRoute;
  label: string;
}