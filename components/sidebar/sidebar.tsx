import React, {useState} from 'react';
import {Box} from '../styles/box';
import {Sidebar} from './sidebar.styles';
import {Flex} from '../styles/flex';
import {CompanyLogo} from './company-logo';
import {HomeIcon} from '../icons/sidebar/home-icon';
import {AccountsIcon} from '../icons/sidebar/accounts-icon';
import {SidebarItem} from './sidebar-item';
import {SidebarMenu} from './sidebar-menu';
import {useSidebarContext} from '../layout/layout-context';
import {useRouter} from 'next/router';
import {CollapseItems} from "./collapse-items";
import {BalanceIcon} from "../icons/sidebar/balance-icon";
import {SettingsIcon} from "../icons/sidebar/settings-icon";

export const SidebarWrapper = () => {
   const router = useRouter();
   const {collapsed, setCollapsed} = useSidebarContext();

   return (
      <Box
         as="aside"
         css={{
            height: '100vh',
            zIndex: 202,
            position: 'sticky',
            top: '0',
         }}
      >
         {collapsed ? <Sidebar.Overlay onClick={setCollapsed} /> : null}

         <Sidebar collapsed={collapsed}>
            <Sidebar.Header>
               <CompanyLogo/>
            </Sidebar.Header>
            <Flex
               direction={'column'}
               justify={'between'}
               css={{height: '100%'}}
            >
               <Sidebar.Body className="body sidebar">
                  <SidebarItem
                     title="Home"
                     icon={<HomeIcon />}
                     isActive={router.pathname === '/'}
                     href="/"
                  />
                  <SidebarMenu title="Main Menu">
                     {/*<SidebarItem*/}
                     {/*   isActive={router.pathname === '/accounts'}*/}
                     {/*   title="Accounts"*/}
                     {/*   icon={<AccountsIcon />}*/}
                     {/*   href="accounts"*/}
                     {/*/>*/}

                  </SidebarMenu>
                   <CollapseItems
                       icon={<BalanceIcon />}
                       items={[
                           { label: 'New', link: 'newUsers' },
                           { label: 'Accepted', link: 'acceptedUsers' },
                           { label: 'Rejected', link: 'rejectedUsers' },
                           { label: 'Half Registered', link: 'halfRegisteredUsers' },
                           { label: 'Need to update', link: 'needToUpdateUsers' },
                       ]}
                       title="User Registrations"
                   />

                   <CollapseItems
                      icon={<BalanceIcon />}
                      items={[
                          { label: 'New', link: 'newLicenses' },
                          { label: 'Accepted', link: 'acceptedLicenses' },
                          { label: 'Rejected', link: 'rejectedLicenses' },
                          { label: 'Half Registered', link: 'halfRegisteredLicenses' },
                          { label: 'Need to update', link: 'needToUpdateLicenses' },
                      ]}
                      title="License Registrations"
                  />
                  <CollapseItems
                      icon={<BalanceIcon/>}
                      items={[
                          { label: 'New', link: 'newVehicles' },
                          { label: 'Accepted', link: 'acceptedVehicles' },
                          { label: 'Rejected', link: 'rejectedVehicles' },
                          { label: 'Half Registered', link: 'halfRegisteredVehicles' },
                          { label: 'Need to update', link: 'needToUpdateVehicles' },
                      ]}
                      title="Vehicle Registrations"
                  />
                  <SidebarItem
                      isActive={router.pathname === '/referees'}
                      title="Referees"
                      icon={<SettingsIcon/>}
                      href="referees"
                  />
                  <SidebarItem
                      title="App Traffic"
                      icon={<SettingsIcon/>}
                      isActive={router.pathname === '/appTraffic'}
                      href="appTraffic"
                  />
                  <SidebarItem
                      title="Transactions"
                      icon={<SettingsIcon />}
                      isActive={router.pathname === '/transactions'}
                      href="transactions"
                  />
                  <SidebarItem
                      title="Assets"
                      icon={<SettingsIcon />}
                      isActive={router.pathname === '/assets'}
                      href="assets"
                  />
                  <SidebarItem
                      title="Adds"
                      icon={<SettingsIcon />}
                      isActive={router.pathname === '/adds'}
                      href="adds"
                  />
                  <SidebarItem
                      title="Notifications"
                      icon={<SettingsIcon />}
                      isActive={router.pathname === '/notifications'}
                      href="notifications"
                  />
                  <SidebarItem
                      title="Offers"
                      icon={<SettingsIcon />}
                      isActive={router.pathname === '/offers'}
                      href="offers"
                  />
               </Sidebar.Body>
            </Flex>
         </Sidebar>
      </Box>
   );
};
