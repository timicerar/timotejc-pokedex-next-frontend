import DefaultLayout from '~/components/layouts/DefaultLayout/DefaultLayout';

const Layout = ({ children }: LayoutProps<'/'>) => {
  return <DefaultLayout>{children}</DefaultLayout>;
};

export default Layout;
