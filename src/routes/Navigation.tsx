import { BrowserRouter as Router, Switch, Route,NavLink } from "react-router-dom";
import { DynamicForm, FormikAbstract, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage, RegisterFormikPage } from "../03-forms/pages";

import logo from "../logo.svg";


export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/register" activeClassName="nav-active" exact>
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" activeClassName="nav-active" exact>
                Formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" activeClassName="nav-active" exact>
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-components"
                activeClassName="nav-active"
                exact
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstract" activeClassName="nav-active" exact>
                Formik Abstract
              </NavLink>
            </li>
            <li>
              <NavLink to="/register-formik" activeClassName="nav-active">
                Formik Register
              </NavLink>
            </li>
            <li>
              <NavLink to="/dynamic-form" activeClassName="nav-active">
                Dynamic Form
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/formik-yup">
            <FormikYupPage />
          </Route>
          <Route path="/formik-basic">
            <FormikBasicPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/register-formik">
            <RegisterFormikPage />
          </Route>
          <Route path="/formik-components">
            <FormikComponents />
          </Route>
          <Route path="/formik-abstract">
            <FormikAbstract />
          </Route>
          <Route path="/dynamic-form">
            <DynamicForm />
          </Route>          
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
