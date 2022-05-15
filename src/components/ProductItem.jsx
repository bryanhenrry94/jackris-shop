import React, { useState, useContext } from 'react';
import '@styles/ProductItem.scss';

import AppContext from '@context/AppContext';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
  })(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
	  duration: theme.transitions.duration.shortest,
	}),
  }));

const ProductItem = ({product}) => {
	const {addToCart} = useContext(AppContext);
	const [expanded, setExpanded] = useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const handleShoppingCartClick = (item) => {
		addToCart(item);
	}

	return (
		<Card sx={{ minWidth: 200 }}>
		<CardHeader
			action={
			<IconButton aria-label="settings">
				<MoreVertIcon />
			</IconButton>
			}
			title={product.title}
			subheader={`Precio: $${product.price}`}
		/>
		<CardMedia
			component="img"
			height="200"
			width="150"
			image={product.images[0]}
			alt={product.title}
		/>
		<Collapse in={expanded} timeout="auto" unmountOnExit>
			<CardContent>
				<Typography variant="body2" color="text.secondary">{product.description}</Typography>
			</CardContent>
		</Collapse>
		<CardActions disableSpacing>
			<IconButton 
				aria-label="add to shopping cart" 
				onClick={() => handleShoppingCartClick(product)}
			>
				<AddShoppingCartIcon />
			</IconButton>
			<ExpandMore
					expand={expanded}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</ExpandMore>
			
		</CardActions>
	</Card>
	);
}

export default ProductItem;