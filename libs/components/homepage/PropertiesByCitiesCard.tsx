// import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
// import React from 'react';
// import { useRouter } from 'next/router';
// const cities = [
// 	{ name: 'Seoul', image: '/img/cities/seoul.jpg', count: 12 },
// 	{ name: 'Busan', image: '/img/cities/busan.jpg', count: 12 },
// 	{ name: 'Daegu', image: '/img/cities/daegu_1.webp', count: 12 },
// 	{ name: 'Daejon', image: '/img/cities/daejon.webp', count: 12 },
// 	{ name: 'Incheon', image: '/img/cities/incheon.jpg', count: 12 },
// 	{ name: 'Gyeongju ', image: '/img/cities/gyeongju.jpg', count: 12 },
// 	{ name: 'Gwangju', image: '/img/cities/gwangju.jpg', count: 12 },
// 	{ name: 'Cheonju', image: '/img/cities/cheongju.webp', count: 12 },
// ];
// const PropertiesByCitiesCard = ({ city, onCityClick }) => {
// 	return (
// 		<div>
// 			<Grid container spacing={2}>
// 				{cities.map((city, idx) => (
// 					<Grid item xs={6} sm={4} md={3} key={idx}>
// 						<Card className={'card'} onClick={() => onCityClick(city.name)} sx={{ cursor: 'pointer' }}>
// 							<CardMedia component="img" height="140" image={city.image} alt={city.name} className={'image'} />
// 							<CardContent className={'cardContent'}>
// 								<Typography variant="subtitle1" fontWeight="bold">
// 									{city.name}
// 								</Typography>
// 								<Typography variant="body2">{city.count} property</Typography>
// 							</CardContent>
// 						</Card>
// 					</Grid>
// 				))}
// 			</Grid>
// 		</div>
// 	);
// };

// export default PropertiesByCitiesCard;
