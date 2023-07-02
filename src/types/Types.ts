export type ViewRoutes = {
  name: string;
  component: JSX.Element;
  icon: JSX.Element | string | undefined;
  path: string;
  secondary?: boolean;
};

export type TypeRoutes = {
  title: string;
  layout: string;
  views: ViewRoutes[];
};
export type TypeRouteClient = {
  name: string;
  component: JSX.Element;
  icon: JSX.Element | string | undefined;
  path: string;
  layout: string;
  secondary?: boolean;
  views: ViewRoutes[];
};
