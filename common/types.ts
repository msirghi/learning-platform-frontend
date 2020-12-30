export interface MenuItem {
  icon: React.ComponentClass<{ className: string }>;
  link: string;
  label: string;
  className?: string;
}
