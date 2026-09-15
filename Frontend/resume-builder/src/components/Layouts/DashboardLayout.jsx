import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import Navbar from './Navbar';

const DashboardLayout = ({activeMenu, children}) => {
    const { user } = useContext(UserContext);
  return (
    <div>
      <Navbar activeMenu={activeMenu} />

      {user && <div className=" pt-4 pb-4 md:px-12">{children}</div>}
    </div>
  )
}

export default DashboardLayout;
