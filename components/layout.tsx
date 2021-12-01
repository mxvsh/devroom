import React from 'react';
import { Box, Flex } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/react';
import UserList from '@/components/sidebar/users-list';

const Layout: React.FC = ({ children }) => {
	return (
		<Box>
			<Flex>
				<Flex h='100vh' w='72' flexDir='column' position='relative'>
					<Heading
						p={4}
						fontSize='5xl'
						position='absolute'
						zIndex={1}
						backdropFilter='blur(12px);'
						w='full'
					>
						Home
					</Heading>

					<Box overflow='auto' pt={20}>
						<UserList />
					</Box>
				</Flex>
				<Box></Box>
			</Flex>
			{children}
		</Box>
	);
};

export default Layout;
