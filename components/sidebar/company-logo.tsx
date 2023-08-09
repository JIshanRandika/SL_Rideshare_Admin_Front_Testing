import { Dropdown, Text } from '@nextui-org/react';
import React, { useState } from 'react';
import { AcmeIcon } from '../icons/acme-icon';
import { AcmeLogo } from '../icons/acmelogo';
import { BottomIcon } from '../icons/sidebar/bottom-icon';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import Logo from '../../assets/navLogo.jpg';
import Image from 'next/image';

interface Company {
    name: string;
    location: string;
    logo: React.ReactNode;
}

export const CompanyLogo = () => {
    const [company, setCompany] = useState<Company>({
        name: 'SL Rideshare',
        location: 'Sri Lanka',
        logo: (
            <Image src={Logo} width={50} height={50} alt="Picture of the author" />
        ),
    });

    return (
        <Box>
            <Flex align={'center'} css={{ gap: '$7' }}>
                {company.logo}
                <Box>
                    <Text
                        h3
                        size={'$xl'}
                        weight={'medium'}
                        css={{
                            m: 0,
                            color: '$accents9',
                            lineHeight: '$lg',
                            mb: '-$5',
                        }}
                    >
                        {company.name}
                    </Text>
                    <Text span weight={'medium'} size={'$xs'} css={{ color: '$accents8' }}>
                        {company.location}
                    </Text>
                </Box>
            </Flex>
        </Box>
    );
};
