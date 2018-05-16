import React from 'react'
import { Link } from 'react-router-dom'
import style from './index.less'
export default class Page extends React.Component {
	render() {
		return (
      <div className={`${style.page} g-ctn`}>
        <div className={style.list}>
          <Link className={style.link} target="_blank" to="/sites/fego-rn/">
            <img src={require("../home/img/wifi.jpg")} alt="fego" />
            <p className={style.title}>Fego-RN</p>
          </Link>
          <a className={style.link} target="_blank" href="https://fegos.github.io/react-native-template-fego/">
            <img src={require("../home/img/wifi.jpg")} alt="fego" />
            <p className={style.title}>Fego-RN-Template</p>
          </a>
          <a className={style.link} target="_blank" href="https://fegos.github.io/fego-rn-update/">
            <img src={require("../home/img/wifi.jpg")} alt="fego" />
            <p className={style.title}>Fego-RN-Update</p>
          </a>
        </div>
      </div>
    )
	}
}
