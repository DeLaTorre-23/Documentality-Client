import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { connect } from "react-redux";

import { ProfileView } from "../ProfileView/ProfileView";
import { LoginView } from "../LoginView/LoginView";
import { SingUpView } from "../SingUpView/SingUpView";
import { MovieCardView } from "../MovieCardView/MovieCardView";
import { MovieView } from "../MovieView/MovieView";
import { DirectorView } from "../DirectorView/DirectorView";
import { GenreView } from "../GenreView/GenreView";

const Routes = ({ auth }) => {
  console.log(auth);
  return (
    <section className="container">
      {!auth ? <Redirect to="/login" /> : <Redirect to="/" />}
      <Switch>
        <Route exact path="/login" component={LoginView} />
        <Route exact path="/" component={MovieCardView} />
        <Route exact path="/register" component={SingUpView} />
        <Route exact path="/profile" component={ProfileView} />
        <Route exact path="/movies/:Title" component={MovieView} />
        <Route exact path="/movies/genre/:Name" component={GenreView} />
        <Route exact path="/movies/director/:Name" component={DirectorView} />
      </Switch>
    </section>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth.userInfo,
});

export default connect(mapStateToProps)(Routes);
