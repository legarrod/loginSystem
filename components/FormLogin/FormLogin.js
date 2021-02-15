import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Copyright from "../TextCopyright";
import { useFormik } from "formik";
import * as Yup from "yup";
import useAutn from "../../hooks/useAuth.js";
import GoogleLogin from "react-google-login";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const [errorMessage, setErrorMessage] = useState("");
  const { handleOpenRegister } = props;

  const [authData, setAuthData] = useState({});
  let { auth, login } = useAutn();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formData) => {
      console.log(formData);
    },
  });

  const validateField = ({ name, value }) => {
    if (value !== null || value !== "") {
      setErrorMessage(`Escriba su ${name}`);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (!value) {
      validateField({ name, value });
    }
  };

  const responseGoogle = (response) => {
    auth.idToken = response.tokenObj.id_token;
    auth.name = response.profileObj.name;
    auth.email = response.profileObj.email;
    auth.img = response.profileObj.imageUrl;
    // setAuthData({
    //   idToken: response.tokenObj.id_token,
    //   googleId: response.googleId,
    // });
    // console.log(response);
    localStorage.setItem("user", JSON.stringify(auth));
    location.reload();
  };
  console.log(auth);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar sesión
        </Typography>
        <div>
          <p className="text-red-700 text-lg">{errorMessage}</p>
        </div>
        <GoogleLogin
          clientId="282806600206-pdbfktcgg2qevormmivkvfjq61ugcf21.apps.googleusercontent.com"
          buttonText="Iniciar sesión"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        ,
        <form
          className={classes.form}
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo electrónico"
            name="Correo electrónico"
            autoComplete="email"
            autoFocus
            onChange={formik.handleChange}
            error={formik.errors.email}
            onBlur={handleBlur}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Contraseña"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={formik.handleChange}
            error={formik.errors.password}
            onBlur={handleBlur}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recordarme"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Ingresar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Olvido su contraseña?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" onClick={handleOpenRegister}>
                {"No tienes una cuenta? Registrate"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

function initialValues() {
  return {
    email: "",
    password: "",
  };
}

function validationSchema() {
  return {
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
  };
}
