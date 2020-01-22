import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Welcome as WelcomeView,
  Dashboard as DashboardView,
  ProjectList as ProjectListView,
  Typography as TypographyView,
  Account as AccountView,
  MyStory as MyStoryView,
  NotFound as NotFoundView
} from './views';

const Routes = () => {
  return (
    <Switch>
      {/* <Redirect
        exact
        from="/"
        to="/dashboard"
      /> */}
      <RouteWithLayout
        component={WelcomeView}
        exact
        layout={MainLayout}
        path="/"
      />
      {/* <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      /> */}
      <RouteWithLayout
        component={ProjectListView}
        exact
        layout={MainLayout}
        path="/my-work"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={MyStoryView}
        exact
        layout={MainLayout}
        path="/my-story"
      />
      <RouteWithLayout
        component={TypographyView}
        exact
        layout={MainLayout}
        path="/contact"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
