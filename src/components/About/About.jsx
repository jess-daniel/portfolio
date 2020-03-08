import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// local imports
import bgImage from '../../assets/purple-wallpaper-bg.jpg';

const useStyles = makeStyles({
	root: {
		width: '100%',
		height: 500,
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		flexDirection: 'column',
		backgroundImage: `url(${bgImage})`,
		color: 'white',
	},
	sub: {
		maxWidth: 500,
		textAlign: 'left',
	},
});

const About = () => {
	const classes = useStyles();

	return (
		<Container id="about" className={classes.root}>
			<Typography variant="h3" component="h2" gutterBottom>
				About Me
			</Typography>
			<Typography className={classes.sub} variant="subtitle1" gutterBottom>
				Hi! I'm Michael J. Daniel, a full stack developer with a passion for
				software development! Thanks for checking out my portfolio!
			</Typography>
		</Container>
	);
};

export default About;
