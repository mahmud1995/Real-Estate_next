import React, { useCallback, useRef, useState } from 'react';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import { Stack, Box, Link, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { PropertiesInquiry } from '../../types/property/property.input';
import { PropertyLocation } from '../../enums/property.enum';
import { useRouter } from 'next/router';

interface CityFilterProps {
	initialInput: PropertiesInquiry;
}

const PropertiesByCities = (props: CityFilterProps) => {
	const { initialInput } = props;
	const locationRef: any = useRef();
	const [searchFilter, setSearchFilter] = useState<PropertiesInquiry>(initialInput);
	const router = useRouter();
	const [propertyLocation, setPropertyLocation] = useState<PropertyLocation[]>(Object.values(PropertyLocation));
	/** APOLLO REQUESTS **/

	/** HANDLERS **/

	console.log('searchFilter', searchFilter);

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
					pathname: '/property',
					query: { input: JSON.stringify(updatedSearchFilter) },
				});
			}
		},
		[searchFilter, router],
	);
	console.log('searchFilter', searchFilter);

	// const routeNavi = () => {
	// 	if (searchFilter?.search?.locationList)
	// 		router.push(`/property?input=${JSON.stringify(searchFilter)}`);
	// };

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
						{propertyLocation.map((location: PropertyLocation, idx: any) => (
							<Grid item xs={6} sm={4} md={3} key={idx}>
								<Card className={'card'} onClick={() => handleCardClick(location)}>
									<CardMedia
										component="img"
										height="140"
										image={`img/banner/cities/${location.toLowerCase()}.webp`}
										alt={location}
										className={'image'}
									/>
									<CardContent className={'cardContent'}>
										<Typography variant="subtitle1" fontWeight="bold">
											{location}
										</Typography>
										<Typography variant="body2">{0} properties</Typography>
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

PropertiesByCities.defaultProps = {
	initialInput: {
		page: 1,
		limit: 10,
		search: {
			squaresRange: { start: 0, end: 500 },
			pricesRange: { start: 0, end: 2000000 },
			locationList: [], // Initialize with empty locationList
		},
	},
};

export default PropertiesByCities;
