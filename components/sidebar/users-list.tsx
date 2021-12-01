import React, { useEffect, useState } from 'react';
import { Box, Stack, Text } from '@chakra-ui/layout';
import { Tag } from '@chakra-ui/react';

export default function UserList() {
	const [users, setUsers] = useState<any[]>([]);
	const [active, setActive] = useState(0);

	const FetchUsers = () => {
		fetch('https://jsonplaceholder.typicode.com/users?_limit=16')
			.then((response) => response.json())
			.then((data) => setUsers(data));
	};

	useEffect(() => {
		FetchUsers();
	}, []);

	return (
		<Stack p={4}>
			{users.map((user, index) => (
				<Box
					key={index}
					py={2}
					px={4}
					backgroundColor={active === index ? 'gray.300' : 'transparent'}
					cursor='pointer'
					onClick={() => setActive(index)}
					rounded='md'
					transition='all 0.3s'
					pos='relative'
				>
					<Text>{user.name}</Text>
					<Text noOfLines={1} color='gray.500' textOverflow='ellipsis'>
						Veniam labore nisi non do anim anim sunt id
					</Text>
				</Box>
			))}
		</Stack>
	);
}
