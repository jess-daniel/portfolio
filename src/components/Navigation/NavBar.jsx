import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// local imports
import Nav from './Nav';

// NvaBar component
const NavBar = () => {
	const useStyles = makeStyles(theme => ({
		root: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
			cursor: 'pointer',
			maxWidth: 125,
		},
		tool: {
			display: 'flex',
			justifyContent: 'space-between',
		},
	}));

	const classes = useStyles();

	// navigate to contact page
	const history = useHistory();

	const toContact = () => {
		history.push('/contact');
	};
	const toHome = () => {
		history.push('/');
	};

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar className={classes.tool}>
					<Nav />
					<Typography onClick={toHome} variant="h6" className={classes.title}>
						My Portfolio
					</Typography>
					<Button onClick={toContact} color="inherit">
						Contact Me
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default NavBar;
