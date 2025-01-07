import { FunctionComponent, ReactNode } from 'react';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';

interface LayoutProps {
  children: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};

