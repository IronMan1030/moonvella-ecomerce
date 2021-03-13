import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  HOMEPAGE,
  REGISTER,
  LOGIN,
  MAIN_PAGE,
  DASHBOARD,
  PRODUCTS,
  CATEGORY,
  ORDERS,
  SETTINGS,
  MESSAGES,
  PRODUCT_RESULT_PAGE,
} from "./settings/constants";

import { InLineLoader } from "./components/InlineLoader/InlineLoader";

//Main page
const HomePage = lazy(() => import("./pages/Shop/HomePage/Home"));
const RegisterPage = lazy(() => import("./pages/Shop/SignUpPage/SignUp"));
const LoginPage = lazy(() => import("./pages/Shop/LoginPage/Login"));
const ProductResultPage = lazy(() => import("./pages/Shop/ResultPage/ProductResult"));
//Dashboard page
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const Products = lazy(() => import("./pages/Products/Products"));
const Orders = lazy(() => import("./pages/Orders/Orders"));
const Category = lazy(() => import("./pages/Category/Category"));
const Settings = lazy(() => import("./pages/Settings/Settings"));
const Messages = lazy(() => import("./pages/Messages/Messages"));

const AdminLayout = lazy(() => import("./pages/Layout/Layout"));
const HomeLayout = lazy(() => import("./pages/Layout/HomeLayout/HomeLayout"));

function PrivateRoute({ children, ...rest }) {
  let isAuthenticated = true;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function PublicRoute({ children, ...rest }) {
  let isAuthenticated = true;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
const Routes = () => {
  return (
    <Suspense fallback={<InLineLoader />}>
      <Switch>
        <PrivateRoute exact={true} path={DASHBOARD}>
          <AdminLayout>
            <Suspense fallback={<InLineLoader />}>
              <Dashboard />
            </Suspense>
          </AdminLayout>
        </PrivateRoute>

        <PrivateRoute exact={true} path={PRODUCTS}>
          <AdminLayout>
            <Suspense fallback={<InLineLoader />}>
              <Products />
            </Suspense>
          </AdminLayout>
        </PrivateRoute>

        <PrivateRoute exact={true} path={ORDERS}>
          <AdminLayout>
            <Suspense fallback={<InLineLoader />}>
              <Orders />
            </Suspense>
          </AdminLayout>
        </PrivateRoute>

        <PrivateRoute exact={true} path={CATEGORY}>
          <AdminLayout>
            <Suspense fallback={<InLineLoader />}>
              <Category />
            </Suspense>
          </AdminLayout>
        </PrivateRoute>

        <PrivateRoute exact={true} path={SETTINGS}>
          <AdminLayout>
            <Suspense fallback={<InLineLoader />}>
              <Settings />
            </Suspense>
          </AdminLayout>
        </PrivateRoute>

        <PrivateRoute exact={true} path={MESSAGES}>
          <AdminLayout>
            <Suspense fallback={<InLineLoader />}>
              <Messages />
            </Suspense>
          </AdminLayout>
        </PrivateRoute>

        <PublicRoute exact={true} path={HOMEPAGE}>
          <HomeLayout>
            <Suspense fallback={<InLineLoader />}>
              <HomePage />
            </Suspense>
          </HomeLayout>
        </PublicRoute>

        <PublicRoute exact={true} path={MAIN_PAGE}>
          <HomeLayout>
            <Suspense fallback={<InLineLoader />}>
              <HomePage />
            </Suspense>
          </HomeLayout>
        </PublicRoute>

        <PublicRoute exact={true} path={REGISTER}>
          <HomeLayout>
            <Suspense fallback={<InLineLoader />}>
              <RegisterPage />
            </Suspense>
          </HomeLayout>
        </PublicRoute>

        <PublicRoute exact={true} path={LOGIN}>
          <HomeLayout>
            <Suspense fallback={<InLineLoader />}>
              <LoginPage />
            </Suspense>
          </HomeLayout>
        </PublicRoute>

        <PublicRoute exact={true} path={PRODUCT_RESULT_PAGE}>
          <HomeLayout>
            <Suspense fallback={<InLineLoader />}>
              <ProductResultPage />
            </Suspense>
          </HomeLayout>
        </PublicRoute>
      </Switch>
    </Suspense>
  );
};

export default Routes;
