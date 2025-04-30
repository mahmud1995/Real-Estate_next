import React, { useState } from 'react';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import { Stack, Box, Link, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const cities = [
	{ name: 'Seoul', image: '/img/cities/seoul.jpg', count: 12 },
	{ name: 'Busan', image: '/img/cities/busan.jpg', count: 12 },
	{ name: 'Daegu', image: '/img/cities/daegu_1.webp', count: 12 },
	{ name: 'Daejon', image: '/img/cities/daejon.webp', count: 12 },
	{ name: 'Incheon', image: '/img/cities/incheon.jpg', count: 12 },
	{ name: 'Gyeongju ', image: '/img/cities/gyeongju.jpg', count: 12 },
	{ name: 'Gwangju', image: '/img/cities/gwangju.jpg', count: 12 },
	{ name: 'Cheonju', image: '/img/cities/cheongju.webp', count: 12 },
];
const PropertiesByCities = () => {
	const device = useDeviceDetect();
	if (device === 'mobile') {
		return <span>Properties By Cities</span>;
	} else {
		return (
			<Stack className={'properties-bycities'}>
				<Stack className={'container'}>
					<Stack className={'info-box'}>
						<Box component={'div'} className={'left'}>
							<span>Properties by Cities</span>
							<p>You can find properties by cities</p>
						</Box>
						<Box component={'div'} className={'right'}>
							<div className={'more-box'}>
								<Link href={'/property'}>
									<span>See All Categories</span>
								</Link>
								<img src="/img/icons/rightup.svg" alt="" />
							</div>
						</Box>
					</Stack>
					<Grid container spacing={2}>
						{cities.map((city, idx) => (
							<Grid item xs={6} sm={4} md={3} key={idx}>
								<Card className={'card'}>
									<CardMedia component="img" height="140" image={city.image} alt={city.name} className={'image'} />
									<CardContent className={'cardContent'}>
										<Typography variant="subtitle1" fontWeight="bold">
											{city.name}
										</Typography>
										<Typography variant="body2">{city.count} property</Typography>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</Stack>
			</Stack>
		);
	}
};

export default PropertiesByCities;
