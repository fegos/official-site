import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import DataList from './datalist';
import style from './index.less';

export default class Wiki extends PureComponent {
  render() {
    return (
      <div className={`${style.page} g-ctn`}>
      {DataList.map((item) => {
        if (!item.id) return false;
        return (
          <Link className={style.link} key={item.id} to={`/wiki/article/${item.id}`}>
            <p className={style.title}>{item.title}</p>
            <p className={style.desc}>{item.desc}</p>
            <p className={style.info}>{`${item.date} | ${item.author}`}</p>
          </Link>
        )
      })}
      </div>
    );
  }
}
