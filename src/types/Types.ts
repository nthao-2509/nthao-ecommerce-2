export type ViewRoutes = {
  name: string;
  component: JSX.Element;
  icon: JSX.Element | string;
  path: string;
  secondary?: boolean;
};

export type TypeRoutes = {
  title: string;
  layout: string;
  views: ViewRoutes[];
};
