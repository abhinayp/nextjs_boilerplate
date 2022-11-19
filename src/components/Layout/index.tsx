import React from 'react';
import Link from 'next/link'
import Script from 'next/script'
import Head from 'next/head';

interface HeaderProps {
  href: string,
  children: any
}

interface LayoutProps {
  children: any,
  className?: string,
  title?: string
}

const HeaderLink: React.FC<HeaderProps> = (props) => {
  const _no_child_props = {...props}
  delete _no_child_props.children

  return (
    <Link className='items-center flex' {..._no_child_props}>
      <span className="cursor-pointer font-light px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-90">{props.children}</span>
    </Link>
  )
}

const Layout: React.FC<LayoutProps> = ({ children, className="container mx-auto p-4", title="My App" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Script src="https://kit.fontawesome.com/1289001f4f.js" crossOrigin="anonymous"></Script>
      <div className="p-4 border-b">
        <div className="flex justify-between container mx-auto">
          <div className="flex space-x-4">
            <HeaderLink href="/">Home</HeaderLink>
          </div>
        </div>
      </div>
      <div className={className}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
