import React, { PureComponent } from 'react';
import Marked from 'marked';
import DataList from '../datalist';
import style from './index.less';

export default class Article extends PureComponent {
  render() {
    const { match } = this.props;
    const data = DataList.filter(item => item.id === match.params.id)[0] || {};
    return (
      <div className={`${style.markdown} g-ctn`}>
        <div dangerouslySetInnerHTML={{ __html: Marked(data.source) }} />
      </div>
    );
  }
}
