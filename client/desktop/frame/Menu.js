import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class Menu extends Component {
  renderRoutes = (routes, index = 0) => {
    const { location } = this.props;
    return routes.map((route) => {
      let children = null;
      let className = `m-menu-${index}`;
      if (route.children) {
        children = this.renderRoutes(route.children, index + 1);
      }
      if (index === 0) {
        if (route.key === 'home') {
          className = location.pathname === '/' ? (`${className} active`) : className;
        } else if (location.pathname.indexOf(route.key) === 1) {
          className += ' active';
        }
      } else {
        className = location.pathname === route.path ? (`${className} active`) : className;
      }
      return (
        <div key={route.key} className={className}>
          {this.renderTitle(route)}
          <div className="m-menu-list">{children}</div>
        </div>
      );
    });
  }
  renderTitle(route) {
    if (!route.path) {
      return <div className="title">{route.title}</div>;
    } else {
      return /^http(s)?:\/\//.test(route.path) ? (
         <a className="title" href={route.path} >{route.title}</a>
      ) : <Link className="title" to={route.path}>{route.title}</Link>;
    }
  }
  render() {
    const { routes } = this.props;
    return (
      <div className="m-menu">
        {this.renderRoutes(routes)}
      </div>
    );
  }
}

export default withRouter(Menu);
