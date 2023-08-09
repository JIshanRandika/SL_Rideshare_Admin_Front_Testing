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
                     <SidebarItem
                        isActive={router.pathname === '/accounts'}
                        title="Accounts"
                        icon={<AccountsIcon />}
                        href="accounts"
                     />
                  </SidebarMenu>
                  <CollapseItems
                      icon={<BalanceIcon />}
                      items={['Banks Accounts', 'Credit Cards', 'Loans']}
                      title="Balances"
                  />

               </Sidebar.Body>
            </Flex>
         </Sidebar>
      </Box>
   );
};
