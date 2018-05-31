import React, { Component } from 'react';
import style from './style.less';

export default class Page50x extends Component {
  static getSeoData({ query, data, pathname }) {
    return {
      title: '50x',
      keyword: '50x, 服务器开小差了',
      desc: '50x, 服务器开小差了',
    };
  }
  render() {
    return (
      <div className={style.page}>
        <div className={style.errorMsg}>
          <div className={style.title}>抱歉，服务器开小差了</div>
        </div>
      </div>
    );
  }
}
