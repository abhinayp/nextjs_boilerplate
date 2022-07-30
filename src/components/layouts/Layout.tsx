import React from 'react';
import Link from 'next/link'
import {ChatFill} from '@styled-icons/bootstrap/ChatFill'

interface HeaderProps {
  href: string,
  children: React.FC
}

const HeaderLink: React.FC = (props: HeaderProps) => {
  const _no_child_props = {...props}
  delete _no_child_props.children

  return (
    <Link {..._no_child_props}>
      <span className="cursor-pointer font-light px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-90">{props.children}</span>
    </Link>
  )
}

const Layout: React.FC = ({ children, noSpacing=false }: { children: React.FC, noSpacing: boolean }) => {
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
            <button className="btn btn-primary shadow-shinePrimary">
              <ChatFill size="14" className="mr-2" /> Chat
            </button>
          </div>
        </div>
      </div>
      <div className={`container mx-auto ${noSpacing ? '' : 'p-4'}`}>
        {children}
      </div>
    </>
  );
};

export default Layout;
