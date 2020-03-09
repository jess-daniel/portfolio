import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// local imports
import ContactForm from './ContactForm';

const useStyles = makeStyles({
	root: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
});

const Contact = () => {
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<Typography variant="h3" component="h2" gutterBottom>
				Contact
			</Typography>
			<ContactForm />
		</Container>
	);
};

export default Contact;
