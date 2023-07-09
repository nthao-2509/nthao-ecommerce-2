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

//
export type TypeDataCollapse = {
  key: number | string;
  label: string;
  children: string;
};

export type TypeDataTabsContentChildren2 = {
  type: string;
  title?: string | undefined;
  collapse?: TypeDataCollapse[] | undefined;
};
export type TypeDataTabsContentChildren = {
  type: string;
  title?: string | undefined;
  text?: string | undefined;
  content?: TypeDataTabsContentChildren2[] | undefined;
  collapse?: TypeDataCollapse[] | undefined;
};

export type TypeDataTabsContent = {
  type: string;
  src?: string | undefined;
  content?: TypeDataTabsContentChildren[] | undefined;
};

export type TypeDataTabs = {
  className: string;
  content: TypeDataTabsContent[];
};
