import React, { Component } from 'react'
import style from './style.less'

export default class Page404 extends Component {
  static getSeoData({ query, data, pathname }) {
    return {
      title: '404',
      keyword: '404, 页面找不到',
      desc: '404, 页面找不到'
    }
  }
  render() {
    return (
      <div className={style.page}>
        <div className={style.errorMsg}>
          <div className={style.title}>访问的页面不存在</div>
        </div>
      </div>
    )
  }
}
