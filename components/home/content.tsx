import React from 'react';
import {Text, Link} from '@nextui-org/react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import {ActiveMembersCard} from './active-members-card';
import {PoolMembersCard} from './pool-members-card';

export const Content = () => (
    <Box css={{overflow: 'hidden', height: '100%'}}>
       <Flex
           css={{
              'gap': '$8',
              'pt': '$5',
              'height': 'fit-content',
              'flexWrap': 'wrap',
              '@lg': {
                 flexWrap: 'nowrap',
              },
              '@sm': {
                 pt: '$10',
              },
           }}
           justify={'center'}
       >
          <Flex
              css={{
                 'px': '$12',
                 'mt': '$8',
                 '@xsMax': {px: '$10'},
                 'gap': '$12',
              }}
              direction={'column'}
          >
             {/* Card Section Top */}
             <Box>
                <Text
                    h3
                    css={{
                       'textAlign': 'center',
                       '@sm': {
                          textAlign: 'inherit',
                       },
                    }}
                >
                   Welcome back, Ishan
                </Text>
                <Flex
                    css={{
                       'gap': '$10',
                       'flexWrap': 'wrap',
                       'justifyContent': 'center',
                       '@sm': {
                          flexWrap: 'nowrap',
                       },
                    }}
                    direction={'row'}
                >
                   {/*<ActiveMembersCard />*/}
                   {/*<PoolMembersCard />*/}
                   {/* <ActiveMembersCard />*/}
                   {/* <PoolMembersCard />*/}
                </Flex>
             </Box>

          </Flex>


       </Flex>

    </Box>
);
