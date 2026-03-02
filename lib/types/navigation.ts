export interface Link {
  title?: string;
  href: string;
  text?: string;
}

export interface Group {
  title: string;
  links: Link[];
}

export interface BlockLink {
  type: 'content' | 'resources' | 'links';
  title: string;
  description?: string;
  link?: Link;
  groups?: Group[];
  resources?: Resource[];
  fillSpace?: boolean;
  links?: Link[];
}

export interface Resource {
  title: string;
  image: string;
  href: string;
}

export interface Column {
  className?: string;
  blocks: BlockLink[];
}

export interface DropdownContent {
  title: string;
  type: string;
  columns: Column[];
}

export interface NavItem {
  title: string;
  type: 'dropdown' | 'link' | string;
  href?: string;
  content?: DropdownContent;
}
