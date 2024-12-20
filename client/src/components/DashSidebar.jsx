import { Sidebar } from 'flowbite-react';
import { HiArrowRight, HiUser } from 'react-icons/hi';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function DashSidebar() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  
  useEffect(() => {
    const urlParam = new URLSearchParams(location.search);
    const tabFromUrl = urlParam.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <Sidebar className='w-full md:w-56'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            as={Link}
            to="/dashboard?tab=profile"
            active={tab === 'profile'}
            icon={HiUser}
            label={"User"}
            labelColor="dark"
          >
            Profile
          </Sidebar.Item>
          <Sidebar.Item icon={HiArrowRight} className='cursor-pointer'>
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}