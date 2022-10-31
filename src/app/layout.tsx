import React from 'react';
import Link from 'next/link'
import 'styles/globals.scss'
import 'styles/buttons.scss'
import 'styles/font.scss'
import 'styles/animations.scss'

interface HeaderProps {
  href: string,
  children: React.FC
}

const HeaderLink: React.FC = (props: HeaderProps) => {
  const _no_child_props = {...props}
  delete _no_child_props.children

  return (
    <Link className='items-center flex' {..._no_child_props}>
      <span className="cursor-pointer font-light px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-90">{props.children}</span>
    </Link>
  )
}

const Layout: React.FC = ({ children }: { children: React.FC }) => {
  return (
    <>
      <div className="p-4 border-b">
        <div className="flex justify-between container mx-auto">
          <nav className="flex space-x-4">
            <HeaderLink href="/">Home</HeaderLink>
            <HeaderLink href="/profile">Profile</HeaderLink>
          </nav>
          <div className="flex space-x-6 mr-3">
            <button className="btn btn-secondary">Feedback</button>
          </div>
        </div>
      </div>
      <div className={`container mx-auto p-4`}>
        {children}
      </div>
    </>
  );
};

export default Layout;
