import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Sidebar, { SidebarItem } from './components/Sidebar';
import { LayoutDashboard, BarChart3, UserCircle, Boxes, Settings, LifeBuoy } from 'lucide-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode className="flex flex-col">
    <Sidebar className="abolsute w-48">
        <SidebarItem icon={<LayoutDashboard size={20} color='white'/>} text="Dashboard" alert />
        <SidebarItem icon={<BarChart3 size={20} color='white' />} text="Statistics" />
        <SidebarItem icon={<UserCircle size={20} color='white' />} text="Users" />
        <SidebarItem icon={<Boxes size={20} color='white' />} text="Inventory" />
        <SidebarItem icon={<Settings size={20} color='white' />} text="Settings" />
        <SidebarItem icon={<LifeBuoy size={20} color='white' />} text="Help" />
      </Sidebar>
    <App className=""/>
  </React.StrictMode>,
)
