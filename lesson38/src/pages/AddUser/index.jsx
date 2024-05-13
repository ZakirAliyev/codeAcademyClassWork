import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useContext} from "react";
import Context from "../../context/index.jsx";

function AddUser() {

    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        username: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
    });
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema: SignupSchema
    });

    const {[toggled, setToggled]} = useContext(Context);

    return (
        <>
            <h2 style={{marginTop: '30px'}}>User register form</h2>
            <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={formik.handleSubmit}>
                <TextField
                    required
                    id="outlined-required"
                    label="First Name"
                    name="firstName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    sx={{mt: 4}}
                />
                {formik.errors.firstName && formik.touched.firstName &&
                    <div id="feedback" style={{color: 'red', margin: '10px 0 0'}}>{formik.errors.firstName}</div>}
                <TextField
                    required
                    id="outlined-required"
                    label="Last Name"
                    name="lastName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    sx={{mt: 4}}
                />
                {formik.errors.lastName && formik.touched.lastName &&
                    <div id="feedback" style={{color: 'red', margin: '10px 0 0'}}>{formik.errors.lastName}</div>}
                <TextField
                    required
                    id="outlined-required"
                    label="Username"
                    name="username"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                    sx={{mt: 4}}
                />
                {formik.errors.username && formik.touched.username &&
                    <div id="feedback" style={{color: 'red', margin: '10px 0 0'}}>{formik.errors.username}</div>}
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    sx={{mt: 4}}
                />
                {formik.errors.email && formik.touched.email &&
                    <div id="feedback" style={{color: 'red', margin: '10px 0 0'}}>{formik.errors.email}</div>}
                <TextField
                    required
                    id="outlined-required"
                    label="Password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    sx={{mt: 4}}
                />
                {formik.errors.password && formik.touched.password &&
                    <div id="feedback" style={{color: 'red', margin: '10px 0 0'}}>{formik.errors.password}</div>}
                <Button variant="contained" sx={{mt: 4}} type="submit">Add User</Button>
            </form>
        </>
    );
}

export default AddUser;