import {Button, Input, Text} from '@nextui-org/react';
import React from 'react';
import {ExportIcon} from '../icons/accounts/export-icon';
import {Flex} from '../styles/flex';

export const Assets = () => {
   return (
      <Flex
         css={{
            'mt': '$5',
            'px': '$6',
            '@sm': {
               mt: '$10',
               px: '$16',
            },
         }}
         justify={'center'}
         direction={'column'}
      >

         <Text h3>Assets</Text>
         <Flex
            css={{gap: '$8'}}
            align={'center'}
            justify={'between'}
            wrap={'wrap'}
         >
            <Flex
               css={{
                  'gap': '$6',
                  'flexWrap': 'wrap',
                  '@sm': {flexWrap: 'nowrap'},
               }}
               align={'center'}
            >
               <Input
                  css={{width: '100%', maxW: '410px'}}
                  placeholder="Search users"
               />
               {/*<SettingsIcon />*/}
               {/*<TrashIcon />*/}
               {/*<InfoIcon />*/}
               {/*<DotsIcon />*/}
            </Flex>
            <Flex direction={'row'} css={{gap: '$6'}} wrap={'wrap'}>
               {/*<AddUser />*/}
               <Button auto iconRight={<ExportIcon />}>
                  Export to CSV
               </Button>
            </Flex>
         </Flex>

         {/*<TableWrapper />*/}
      </Flex>
   );
};
