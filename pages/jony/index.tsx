import React, { useCallback, useEffect, useState } from 'react';

import { Stack, Box, Link, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import useDeviceDetect from '../../libs/hooks/useDeviceDetect';
import { useRouter } from 'next/router';
import { PropertyLocation } from '../../libs/enums/property.enum';
import { PropertiesInquiry } from '../../libs/types/property/property.input';

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

interface FilterProps {
	initialInput: PropertiesInquiry;
}

const PropertiesByCities = (props: FilterProps) => {
	const { initialInput } = props;
	const router = useRouter();
	const [propertyLocation, setPropertyLocation] = useState<PropertyLocation[]>(Object.values(PropertyLocation));
	const [searchFilter, setSearchFilter] = useState<PropertiesInquiry>(initialInput);
	// const naviG = router.push("/property")
	/* HANDLERS */
	const handleCardClick = useCallback(
		(location: PropertyLocation) => {
			const updatedSearchFilter = {
				...searchFilter,
				search: {
					...searchFilter.search,
					locationList: [location],
				},
			};
			setSearchFilter(updatedSearchFilter);
			if (updatedSearchFilter?.search?.locationList) {
				router.push({
					pathname: '/property?input',
					query: { input: JSON.stringify(updatedSearchFilter) },
				});
			}
		},
		[searchFilter, router],
	);

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
									<img src="/img/icons/rightup.svg" alt="" />
								</Link>
							</div>
						</Box>
					</Stack>
					<Grid container spacing={8}>
						{propertyLocation.map((location, idx) => (
							<Grid item xs={6} sm={4} md={3} key={idx}>
								<Card className={'card'} onClick={() => handleCardClick(location)}>
									<CardMedia
										component="img"
										height="140"
										image={`/img/banner/cities/${location.toLocaleLowerCase()}.webp`}
										alt={location}
										className={'image'}
									/>
									<CardContent className={'cardContent'}>
										<Typography variant="subtitle1" fontWeight="bold">
											{location}
										</Typography>
										<Typography variant="body2">{0} property</Typography>
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
// har doim page render bulganda birinchi yuboriladigan default request param
PropertiesByCities.defaultProps = {
	initialInput: {
		page: 2,
		limit: 10,
		search: {},
	},
};
export default PropertiesByCities;
