import React from "react";
import "./LoginPage.css";
import { NavLink } from "react-router-dom";
 import { Formik } from 'formik';
import { useFormik } from 'formik';
import * as yup from 'yup';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

import logoWebiste from "../../images/logo.png"
import { UIMenu } from "../../Components/UIMenu";



const LoginPage = () => {

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });
  
 
    const formik = useFormik({
      initialValues: {
        email: 'foobar@example.com',
        password: 'foobar',
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });
  





  const access = () => {
    alert("go to another page");
  };

  return (
    <div className="box">
    <UIMenu/>
      <section className="layout">
        <div className="layout-loginContainer">
        <form className="form" onSubmit={formik.handleSubmit}>
        <TextField className="form"
          fullWidth
          id="email"
          name="email"
          label="Email"
          
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField 
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>

          <a href="">
            <span className="settingsLogin">CreateUser</span>
          </a>
          <a href="">
            <span className="settingsLogin">Remember password</span>
          </a>
        </div>
      </section>
      <footer className="footer">
    
       Train with me<br></br>
        Copyright © 2022 - All Rigths reserved
      </footer>
    </div>
  );
};

export default LoginPage;
