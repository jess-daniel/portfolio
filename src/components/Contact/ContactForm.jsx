import React from 'react';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// const ContactSchema = yup.object().shape({
// 	name: yup.string().required(),
// 	email: yup
// 		.string()
// 		.email()
// 		.required(),
// 	subject: yup.string().required(),
// 	message: yup
// 		.string()
// 		.max(500)
// 		.required(),
// });

const useStyles = makeStyles({
	root: {},
});

const ContactForm = () => {
	// Material UI styles
	const classes = useStyles();

	// react hook form
	const { register, handleSubmit, errors, control, reset } = useForm();

	// form submit handler
	const formSubmit = (data, e) => {
		console.log(data);
		axios
			.post('https://formspree.io/mvorjoyl', data)
			.then(res => {
				console.log('Success', res);
				reset();
			})
			.catch(err => console.error(err));
	};

	return (
		<Container>
			<form
				onSubmit={handleSubmit(formSubmit)}
				action="https://formspree.io/mvorjoyl"
				method="POST"
			>
				<Controller
					as={TextField}
					required
					name="name"
					control={control}
					defaultValue=""
					inputRef={register}
					id="outlined-basic"
					label="Name"
					variant="outlined"
				/>
				{errors.name && <p>{errors.name.message}</p>}
				<Controller
					as={TextField}
					control={control}
					required
					defaultValue=""
					type="email"
					inputRef={register}
					id="outlined-basic"
					label="Email"
					name="email"
					variant="outlined"
				/>
				<Controller
					as={TextField}
					control={control}
					required
					inputRef={register}
					id="outlined-basic"
					defaultValue=""
					label="Subject"
					name="subject"
					variant="outlined"
				/>
				<Controller
					as={TextField}
					control={control}
					multiline
					defaultValue=""
					required
					rowsMax="5"
					inputRef={register}
					id="outlined-multiline-flexible"
					label="Message"
					name="message"
					variant="outlined"
				/>
				<Button type="submit" variant="contained" color="primary">
					Send
				</Button>
			</form>
		</Container>
	);
};

export default ContactForm;
