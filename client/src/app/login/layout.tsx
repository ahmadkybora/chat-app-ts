import { FC, ReactNode } from "react";

export const metadata = {
  title: 'Login',
}

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({children}) =>{
  return (
    <div>{children}</div>
  )
}

export default Layout;
