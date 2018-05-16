import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { matchRoutes, renderRoutes } from 'react-router-config';
import Seo from 'Seo';
import URL from 'URL';

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: props.initialRoute,
    };
  }
  componentWillReceiveProps(nextProps) {
    const { location } = this.props;
    if (location.pathname !== nextProps.location.pathname) {
      this.match(nextProps.location);
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    const { location, history, onChange } = this.props;
    if (location.pathname !== nextProps.location.pathname && onChange instanceof Function) {
      onChange(history);
    }
    return nextState.route.path !== undefined;
  }
  componentDidUpdate() {
    const { history } = this.props;
    if (window.document && history.action === 'PUSH') {
      window.scrollTo(0, 0);
    }
  }
  componentDidMount() {
    if (!this.state.route) {
      this.match(this.props.location);
    }
  }
  match = (location) => {
    const { routes, history } = this.props;
    const curRoute = matchRoutes(routes, location.pathname)
      .filter(route => route.match.isExact)
      .map(route => route.route)[0];
    if (curRoute && curRoute.component) {
      if (curRoute.component.prototype instanceof Component) {
        this.updateRoute(curRoute);
      } else {
        this.updateRoute();
        curRoute.component().then((mod) => {
          curRoute.component = mod.default ? mod.default : mod;
          this.updateRoute(curRoute);
        });
      }
    } else {
      history.replace('/page/404');
    }
  }
  updateRoute = (curRoute) => {
    const { pathname, search } = this.props.history.location;
    if (!curRoute || !curRoute.component) {
      this.setState({ route: {} });
    } else {
      if (curRoute.component.getInitialProps instanceof Function) {
        curRoute.component.getInitialProps({
          pathname,
          href: window.location.href,
          query: URL.getParam(search),
        }).then((props) => {
          curRoute.component.defaultProps = Object.assign({}, curRoute.component.defaultProps, props);
          this.setState({ route: curRoute });
          this.updateSeo(curRoute, props);
        }).catch(err => console.log(err));
      }
      this.setState({ route: curRoute });
      this.updateSeo(curRoute);
    }
  }
  updateSeo = (curRoute, data = {}) => {
    const { pathname, search } = this.props.history.location;
    if (curRoute.component.getSeoData instanceof Function) {
      Seo.browser(curRoute.component.getSeoData({
        pathname,
        data,
        query: URL.getParam(search),
      }));
    }
  }
  render() {
    const { route } = this.state;
    return renderRoutes(route ? [route] : []);
  }
}

export default withRouter(Router);
