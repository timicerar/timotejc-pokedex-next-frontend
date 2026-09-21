import DefaultLayout from '~/components/layouts/DefaultLayout/DefaultLayout';

const Layout = ({ children }: LayoutProps<'/'>) => {
  return <DefaultLayout hideFilters>{children}</DefaultLayout>;
};

export default Layout;
