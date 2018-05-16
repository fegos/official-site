import React, { Component } from 'react';
import { Fetch } from 'fego';
import { Link } from 'react-router-dom';
import style from './index.less';

class MainSection extends Component {
  render() {
    return (
      <section className={style.mainSection}>
      <div className={`${style.waveWrapper} ${style.waveAnimation}`}>
        <dl className="g-ctn">
          <dt>FEGO 大前端</dt>
          <dd>
            <svg className={style.icon}>
              <g id="mainSection-1" transform="translate(-266.000000, -332.000000)" fillRule="nonzero" fill="#FFFFFF">
                <g id="mainSection-1-1" transform="translate(266.000000, 332.000000)">
                  <path d="M30.0004578,60 C29.489237,60 29.1605608,59.7947274 28.7056394,59.5107263 C28.5309123,59.4014552 28.3330071,59.2780248 28.1062322,59.1551133 L27.3375838,58.7398238 C18.2769411,48.943972 7.01780902,36.7706208 5.40165192,34.5864587 C1.33684667,29.3127558 -0.616352781,22.3381597 0.171907856,15.9211133 C1.36640216,9.48130815 5.30276787,4.28114456 10.9744728,1.65115035 C12.87295,0.881656342 15.3744003,0 17.9021144,0 C18.8171688,0 19.709525,0.115943039 20.5546337,0.344270742 C21.3507118,0.559477029 21.954782,1.00412296 22.2556857,1.59651477 C22.4751232,2.02885479 22.5133877,2.50819472 22.3667074,2.98427279 C22.1936261,3.54552897 21.5322278,5.36792516 20.249547,5.39105442 C19.6045379,5.27659402 18.937928,5.21869664 18.2678207,5.21869664 C16.5730776,5.21869664 14.8160689,5.59069293 13.1864713,6.29465397 C8.74560505,8.04276943 5.70351563,11.9895029 4.84009769,17.1241334 C4.0098011,22.0601634 5.60449447,27.4082952 9.00138687,31.0809612 C14.8629737,37.4179447 22.0450943,45.3353563 29.7718313,53.9771153 L29.9966862,54.2284982 L30.2257241,53.9813409 C35.3450636,48.4462472 48.9311932,33.7575846 51.0098148,31.0700638 C54.4000555,27.397546 55.9904287,22.055493 55.1610236,17.1241334 C54.3213323,12.1296872 51.3551545,8.08228197 47.2268495,6.29658141 C45.5170886,5.58602261 43.7548684,5.22618409 41.9849678,5.22618402 C38.2143459,5.22618402 34.6052164,6.88104097 31.8209661,9.88688634 C29.1153017,12.3953776 22.1348579,19.4721281 19.6052237,22.6493675 C19.2514097,22.894768 18.8398118,23.0250752 18.4194383,23.0247738 C17.6227431,23.0247738 16.8737755,22.5816105 16.415974,21.8388782 L16.398419,21.8106338 L16.3760638,21.7866149 C15.6805155,21.0346902 15.6805155,19.942498 16.3760638,19.1905733 L28.5918062,5.98344622 C30.4539391,4.11486563 32.5847457,2.66075913 34.9253894,1.66049106 C37.2324318,0.674382236 39.6350666,0.174730025 42.0670512,0.174730025 C44.4848409,0.174730025 46.8253475,0.671120374 49.0239055,1.6495936 C54.6947875,4.27728974 58.6342391,9.47893597 59.8291448,15.9210392 C60.2250237,19.1452784 59.9299489,22.5150396 58.9751901,25.6660361 C58.0007504,28.8818985 56.3547635,31.8047155 54.2155909,34.1174232 L54.2067448,34.126838 L54.1989273,34.1366976 C51.8311282,37.1232685 33.4886224,56.966874 31.4047891,59.2196085 C31.0176877,59.6383823 30.6834569,59.9999999 30.0004578,60 Z" id="Shape" />
                </g>
              </g>
            </svg>
            <h2>主动</h2>
            <p>
              主动发现问题<br />
              主动思考更优方案<br />
              主动跟进并解决问题<br />
              主动总结反思(总结经验并分享)<br />
            </p>
          </dd>
          <dd>
            <svg className={style.icon}>
              <g id="mainSection-2" transform="translate(-266.000000, -332.000000)" fillRule="nonzero" fill="#FFFFFF">
                <g id="mainSection-2-1" transform="translate(266.000000, 332.000000)">
                  <path d="M30.0001023,0 C13.4314293,0 0,13.4315198 0,30 C0,46.5684802 13.4315656,60 30.0001023,60 C46.5686389,60 60,46.5684802 60,30 C60,13.4315198 46.5685707,9.69043043e-16 30.0001023,0 Z M30.0001023,56.6666515 C15.272302,56.6666515 3.33308709,44.7274773 3.33308709,29.9999318 C3.33308709,15.2723863 15.272302,3.33321211 30.0001023,3.33321211 C44.727698,3.33321211 56.6667083,15.2723181 56.6667083,29.9999318 C56.6667083,44.7275455 44.7275616,56.6666515 30.0001023,56.6666515 Z" id="Shape" />
                  <path d="M23.2925578,10.05 L36.5715236,10.05 L33.2518501,16.7219591 L26.6124351,16.7219591 L23.2925578,10.05 Z M23.5959206,34.8367391 L36.2739333,44.1023441 L38.2312925,41.7420955 L37.7960446,40.2109538 L24.773786,30.6938664 L23.5959206,34.8367391 Z M34.802756,29.6832282 L31.5918775,18.39 L28.272136,18.39 L26.7371215,23.7885782 L34.802756,29.6832282 Z M23.2031856,36.2177421 L21.6326531,41.7420273 L29.9320407,51.75 L35.4128094,45.1409627 L23.2031856,36.2177421 Z M26.3445902,25.1696494 L25.166521,29.3127951 L37.1972647,38.1053268 L35.4014002,31.7888552 L26.3445902,25.1696494 Z" id="Shape" />
                </g>
              </g>
            </svg>
            <h2>专业</h2>
            <p>
              项目专长：<br />业务领域或某产品线深入学习，独当一面<br />
              技术专长：<br />在某技术领域广泛深入的研究，达到专家水平
            </p>
          </dd>
          <dd>
            <svg className={style.icon}>
              <g id="mainSection-3" transform="translate(-266.000000, -332.000000)" fillRule="nonzero" fill="#FFFFFF">
                <g id="mainSection-3-1" transform="translate(266.000000, 332.000000)">
                  <path d="M39.4285714,43.7142857 L43.7142857,43.7142857 C45,43.7142857 45.8571429,42.8571429 45.8571429,41.5714286 C45.8571429,40.2857143 45,39.4285714 43.7142857,39.4285714 L39.4285714,39.4285714 C38.1428571,39.4285714 37.2857143,40.2857143 37.2857143,41.5714286 C37.2857143,42.8571429 38.5714286,43.7142857 39.4285714,43.7142857 Z M50.1428571,45.8571429 L39.4285714,45.8571429 C38.1428571,45.8571429 37.2857143,46.7142857 37.2857143,48 C37.2857143,49.2857143 38.1428571,50.1428571 39.4285714,50.1428571 L50.1428571,50.1428571 C51.4285714,50.1428571 52.2857143,49.2857143 52.2857143,48 C52.2857143,46.7142857 51.4285714,45.8571429 50.1428571,45.8571429 Z" id="Shape" />
                  <path d="M45,30.8571429 C36.8571429,30.8571429 30,36.8571429 30,44.1428571 C30,47.1428571 31.2857143,50.1428571 33,52.2857143 L30.8571429,60 L38.5714286,57.4285714 C39.4285714,57 40.2857143,57 40.7142857,57 C42,57.4285714 43.2857143,57.4285714 45,57.4285714 C53.1428571,57.4285714 60,51.4285714 60,44.1428571 C60,36.8571429 53.1428571,30.8571429 45,30.8571429 L45,30.8571429 Z M45,53.1428571 C43.7142857,53.1428571 42.4285714,53.1428571 41.5714286,52.7142857 L41.1428571,52.7142857 C39.8571429,52.7142857 37.2857143,53.5714286 37.2857143,53.5714286 C37.2857143,53.5714286 38.1428571,51 37.7142857,51 C35.5714286,48.8571429 34.2857143,46.7142857 34.2857143,44.1428571 C34.2857143,39 39,35.1428571 45,35.1428571 C51,35.1428571 55.7142857,39 55.7142857,44.1428571 C55.7142857,49.2857143 51,53.1428571 45,53.1428571 L45,53.1428571 Z" id="Shape" />
                  <path d="M25.7142857,48 L4.28571429,48 C7.71428571,36.8571429 18.4285714,28.7142857 30.4285714,28.7142857 C32.5714286,28.7142857 35.1428571,29.1428571 37.2857143,29.5714286 C38.1428571,30 39.4285714,29.1428571 39.8571429,28.7142857 C40.2857143,28.2857143 40.7142857,26.1428571 39,25.7142857 C38.1428571,25.2857143 37.2857143,24.8571429 36,24.8571429 C39.8571429,22.2857143 42,18.4285714 42,13.7142857 C42,6 36,0 28.7142857,0 C21.4285714,0 15,6 15,13.7142857 C15,18.8571429 18,23.5714286 22.2857143,25.7142857 C11.5714286,28.2857143 3,36.8571429 0,48 L0,50.1428571 C0,51.4285714 0.857142857,52.2857143 2.14285714,52.2857143 L25.7142857,52.2857143 C27,52.2857143 27.8571429,51.4285714 27.8571429,50.1428571 C27.8571429,48.8571429 27,48 25.7142857,48 Z M19.2857143,13.7142857 C19.2857143,8.57142857 23.5714286,4.28571429 28.7142857,4.28571429 C33.8571429,4.28571429 38.1428571,8.57142857 38.1428571,13.7142857 C38.1428571,18.8571429 33.8571429,23.1428571 28.7142857,23.1428571 C23.5714286,23.1428571 19.2857143,18.4285714 19.2857143,13.7142857 L19.2857143,13.7142857 Z" id="Shape" />
                </g>
              </g>
            </svg>
            <h2>沟通</h2>
            <p>
              换位思考<br />
              促进本组及兄弟团队共同进步
            </p>
          </dd>
        </dl>
        <div className={`${style.waveWrapperInner} ${style.bgTop}`}>
          <div className={`${style.wave} ${style.waveTop}`} />
        </div>
        <div className={`${style.waveWrapperInner} ${style.bgMiddle}`}>
          <div className={`${style.wave} ${style.waveMiddle}`} />
        </div>
        <div className={`${style.waveWrapperInner} ${style.bgBottom}`}>
          <div className={`${style.wave} ${style.waveBottom}`} />
        </div>
      </div>
      </section>
    );
  }
}
class RnSection extends Component {
  render() {
    const { showRnSection, rnPart } = this.props;
    return (
      <section className={style.rnSection} ref={rnPart} >
        <div className="g-ctn">
          <div
            className={style.animPart + (showRnSection ? ` ${style.show}` : '')}
          >
            <div className={style.iphone}>
              <img src={require('./img/screenShot.jpg')} alt="" />
            </div>
            <div className={style.describe}>
              <h2>RN APP</h2>
              <p>移动客户端和web前端开发工程师共同用React Native开发一款多平台适用的APP。</p>
              <p>客户端开发人员分别对iOS和Android不同之处做底层封装，封装成统一的对外接口，之后客户端和web端的两组开发人员就可以共同进行业务逻辑开发。</p>
              <a href="https://github.com/fegos/fego-rn-app" title="fego-rn" className={style.more}>{'了解更多>'}</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
class CompSection extends Component {
  render() {
    const { showCompSection, compPart } = this.props;
    return (
      <section className={style.compSection}>
        <img className={style.module} src={require('./img/module.png')} alt="" />
        <img className={`${style.module2} ${style.module}`} src={require('./img/module2.png')} alt="" />
        <div className="g-ctn">
          <h1>组件库</h1>
          <dl
            className={style.animPart + (showCompSection ? ` ${style.show}` : '')}
            ref={compPart}
          >
            <dd>
              <a href="https://github.com/fegos/fego-rn" title="">
                <i />
                <h2>RN组件库</h2>
                <ol>
                  <li>支持IOS和Android平台</li>
                  <li>常用UI组件</li>
                  <li>常用工具组件</li>
                </ol>
              </a>
            </dd>
            <dd>
              <a href="https://github.com/fegos/fego" title="">
                <i />
                <h2>WEB组件库</h2>
                <ol>
                  <li>支持PC和WAP</li>
                  <li>支持服务端渲染</li>
                  <li>含常用工具组件</li>
                </ol>
              </a>
            </dd>
          </dl>
        </div>
      </section>);
  }
}
class NodeSection extends Component {
  render() {
    const { showNodeSection, nodePart } = this.props;
    return (
      <section
        className={style.nodeSection}
        ref={nodePart}
      >
      <div className="g-ctn">
        <p className={style.title}>React & Node 前后端同构</p>
        <div className={style.content} >
        <div
          className={`${style.fullWidth} ${style.animPart}${showNodeSection ? ` ${style.show}` : ''}`}
        >
          <ol>
            <li>基于React的单页应用, 以页面为单位拆分打包, 按需加载</li>
            <li>支持服务端渲染, 提高首屏响应速度</li>
            <li>支持SEO, 对搜索引擎友好</li>
            <li>支持数据预加载</li>
            <li>支持PC & Mobile</li>
          </ol>
          <Link to="" className={style.more}>{'了解更多>'}</Link>
          <div className={style.settingPic}>
            <svg width="300px" height="300px" viewBox="0 0 74 74">
              <g id="Components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Settup" transform="translate(-13.000000, -13.000000)">
                  <g id="Setting" transform="translate(13.000000, 13.000000)">
                    <path d="M30.8323056,19.7326756 C24.7151762,19.7326756 19.7326756,24.7151762 19.7326756,30.8323056 C19.7326756,36.949435 24.7151762,41.9319356 30.8323056,41.9319356 C36.949435,41.9319356 41.9319356,36.949435 41.9319356,30.8323056 C41.9319356,24.7151762 36.949435,19.7326756 30.8323056,19.7326756 Z M30.8323056,22.19926 C35.6174794,22.19926 39.4653512,26.0471318 39.4653512,30.8323056 C39.4653512,35.6174794 35.6174794,39.4653512 30.8323056,39.4653512 C26.0471318,39.4653512 22.19926,35.6174794 22.19926,30.8323056 C22.19926,26.0471318 26.0471318,22.19926 30.8323056,22.19926 Z M28.3657211,0 C26.3381887,0 24.6658445,1.67234426 24.6658445,3.69987667 L24.6658445,8.41105296 C22.7838405,8.9290357 20.9807673,9.66901103 19.2837572,10.630979 L14.6589114,6.0110663 C13.2233592,4.57551415 10.8603713,4.57551415 9.42235259,6.0110663 L5.93460218,9.49635012 C4.5039832,10.9269691 4.5039832,13.2948902 5.93460218,14.7255091 L10.589047,19.379954 C9.64681177,21.0498317 8.91176961,22.8183727 8.40118663,24.6658445 L3.69987667,24.6658445 C1.67234426,24.6658445 0,26.3381887 0,28.3657211 L0,33.29889 C0,35.3264225 1.67234426,36.9987667 3.69987667,36.9987667 L8.4061198,36.9987667 C8.91670278,38.8659711 9.65667811,40.6493117 10.6087797,42.3364555 L5.93706876,47.0056998 C4.50151662,48.441252 4.50151662,50.8042399 5.93706876,52.2422586 L9.42481917,55.730009 C10.8603713,57.1655611 13.2233592,57.1655611 14.661378,55.730009 L19.3404887,51.0434986 C21.0177661,52.0054665 22.8035732,52.7454418 24.6683111,53.2584914 L24.6683111,57.9647345 C24.6683111,59.9922669 26.3406553,61.6646112 28.3681877,61.6646112 L33.3013566,61.6646112 C34.9391687,61.6646112 34.9293024,59.1980267 33.3013566,59.1980267 L28.3681877,59.1980267 C27.6627446,59.1980267 27.1348955,58.6701777 27.1348955,57.9647345 L27.1348955,52.4543849 C27.1348955,51.8772041 26.740242,51.3764875 26.1729276,51.2457585 C23.879004,50.7228426 21.6837439,49.8151395 19.6858105,48.5571814 C19.2023599,48.251325 18.5709143,48.3228559 18.1639279,48.7249092 L18.1491284,48.749575 L18.1417286,48.7594414 L12.9175027,53.9886004 C12.4241859,54.4819173 11.6669444,54.4819173 11.1662278,53.9886004 L7.68094397,50.4983834 C7.18762708,50.0001333 7.18762708,49.2453585 7.68094397,48.7471084 L12.9175027,43.5179494 L12.9273691,43.5080831 L12.9323023,43.5006833 C13.3318889,43.0936969 13.4009533,42.4647178 13.0975634,41.9812673 C11.8445385,39.9833339 10.9417686,37.7880737 10.4213193,35.4941502 C10.2930569,34.9268358 9.79234026,34.5321823 9.21269291,34.5321823 L3.69987667,34.5321823 C2.99443352,34.5321823 2.46658445,34.0043332 2.46658445,33.29889 L2.46658445,28.3657211 C2.46658445,27.660278 2.99443352,27.1324289 3.69987667,27.1324289 L9.21022633,27.1324289 C9.78740709,27.1324289 10.2881237,26.7377754 10.4188527,26.170461 C10.9368354,23.8938035 11.8346722,21.7158095 13.0753642,19.7326756 C13.3836872,19.2442919 13.3096897,18.6128462 12.9027032,18.2033932 L7.67847738,12.9865671 C7.18022733,12.4883171 7.18022733,11.740942 7.67847738,11.2426919 L11.1662278,7.7549415 C11.6644779,7.25669144 12.4192527,7.25669144 12.9175027,7.7549415 L18.1047298,12.9446352 C18.5117163,13.3516216 19.1406953,13.4231526 19.6340122,13.1172961 C21.6418119,11.8544049 23.8518716,10.9467018 26.1630612,10.4213193 C26.7254425,10.2930569 27.1250292,9.79234026 27.1250292,9.21269291 L27.1250292,3.69987667 C27.1250292,2.99443352 27.6528782,2.46658445 28.3583214,2.46658445 L33.2914903,2.46658445 C33.9969334,2.46658445 34.5247825,2.99443352 34.5247825,3.69987667 L34.5247825,9.21022633 C34.5247825,9.78740709 34.919436,10.2881237 35.4867504,10.4188527 C37.780674,10.9417686 39.9685344,11.8494717 41.9640012,13.1049632 C42.4499183,13.4083531 43.0838305,13.3368221 43.4932836,12.9323023 L48.6731109,7.75247492 C49.171361,7.25422486 49.918736,7.25422486 50.4169861,7.75247492 L53.9047365,11.2402253 C54.4029866,11.7384754 54.4029866,12.4858505 53.9047365,12.9841005 L48.749575,18.1540615 C48.3425886,18.5585814 48.2710576,19.190027 48.5769141,19.6833439 C49.8250058,21.6812773 50.7228426,23.8691377 51.2408253,26.170461 C51.3715543,26.7328422 51.8722709,27.1324289 52.4494517,27.1324289 L57.9647345,27.1324289 C58.6701777,27.1324289 59.1980267,27.660278 59.1980267,28.3657211 L59.1980267,33.29889 C59.1980267,34.9465684 61.6646112,34.9071031 61.6646112,33.29889 L61.6646112,28.3657211 C61.6646112,26.3381887 59.9922669,24.6658445 57.9647345,24.6658445 L53.2584914,24.6658445 C52.7479084,22.8011066 52.0128662,21.0152995 51.0632312,19.3281557 L55.6560115,14.7279757 C57.0915636,13.2973568 57.0915636,10.9294357 55.6560115,9.49881671 L52.1682611,6.00859971 C50.7376421,4.57304757 48.369721,4.57304757 46.939102,6.00859971 L42.3265891,10.6211126 C40.6493117,9.6591447 38.861038,8.91916936 36.9987667,8.4061198 L36.9987667,3.69987667 C36.9987667,1.67234426 35.3264225,0 33.29889,0 L28.3657211,0 Z" id="Shape" fill="#555555" fillRule="nonzero" />
                    <path d="M55.4981501,36.9987667 C57.5256825,36.9987667 59.1980267,38.671111 59.1980267,40.6986434 L59.1980267,42.6225792 C60.169861,42.908703 61.0972968,43.288557 61.9852672,43.7818739 L62.7622413,43.009833 C64.1928602,41.5718143 66.5607813,41.5718143 67.9914003,43.009833 C69.4269524,44.440452 69.4269524,46.8034399 67.9914003,48.238992 L67.2168928,49.011033 C67.7052765,49.8990034 68.0826639,50.8289057 68.3638545,51.7982734 L70.3001233,51.7982734 C72.3276557,51.7982734 74,53.4706176 74,55.4981501 C74,57.5256825 72.3276557,59.1980267 70.3001233,59.1980267 L68.3761875,59.1980267 C68.0900637,60.169861 67.7102097,61.0972968 67.2168928,61.9852672 L67.9889337,62.7622413 C69.4269524,64.1928602 69.4269524,66.5607813 67.9889337,67.9914003 C66.5583147,69.4269524 64.1953268,69.4269524 62.7597747,67.9914003 L61.9877337,67.2168928 C61.0997633,67.7052765 60.169861,68.0826639 59.2004933,68.3638545 L59.2004933,70.3001233 C59.2004933,72.3276557 57.5281491,74 55.5006166,74 C53.4730842,74 51.80074,72.3276557 51.80074,70.3001233 L51.80074,68.3761875 C50.8289057,68.0900637 49.90147,67.7102097 49.0134996,67.2168928 L48.2365254,67.9889337 C46.8059065,69.4269524 44.4379854,69.4269524 43.0073664,67.9889337 C41.5718143,66.5583147 41.5718143,64.1953268 43.0073664,62.7597747 L43.7818739,61.9877337 C43.2934902,61.0997633 42.9161028,60.169861 42.6349122,59.2004933 L40.6986434,59.2004933 C38.671111,59.2004933 36.9987667,57.5281491 36.9987667,55.5006166 C36.9987667,53.4730842 38.671111,51.80074 40.6986434,51.80074 L42.6225792,51.80074 C42.908703,50.8289057 43.288557,49.90147 43.7818739,49.0134996 L43.009833,48.2365254 C41.5718143,46.8059065 41.5718143,44.4379854 43.009833,43.0073664 C44.440452,41.5718143 46.8034399,41.5718143 48.238992,43.0073664 L49.011033,43.7818739 C49.8990034,43.2934902 50.8289057,42.9161028 51.7982734,42.6349122 L51.7982734,40.6986434 C51.7982734,38.671111 53.4706176,36.9987667 55.4981501,36.9987667 Z M55.4981501,39.4653512 C54.7927069,39.4653512 54.2648578,39.9932002 54.2648578,40.6986434 L54.2648578,43.1652278 C54.2648578,43.6240125 54.3117229,44.39852 53.320156,44.6254458 C51.9166694,44.9066364 50.5797807,45.4591514 49.3810206,46.2484584 C48.8926369,46.5715809 48.2439252,46.5049832 47.8320056,46.090597 L46.4926502,44.7512416 C45.9944002,44.2529916 45.2470251,44.2529916 44.748775,44.7512416 C44.250525,45.2494917 44.250525,45.9968668 44.748775,46.4951168 L46.0881304,47.8344722 C46.5025166,48.2488584 46.5666478,48.9000367 46.2410586,49.3884204 C45.4517516,50.5847138 44.8967701,51.9216026 44.6131129,53.3275557 C44.4552515,53.9121363 44.2603913,54.2648578 43.1627612,54.2648578 L40.6961768,54.2648578 C39.9907336,54.2648578 39.4628846,54.7927069 39.4628846,55.4981501 C39.4628846,56.2035932 39.9907336,56.7314423 40.6961768,56.7314423 L43.1627612,56.7314423 C43.9767341,56.7314423 44.49965,57.0545648 44.6229792,57.6761441 C44.9041699,59.0796307 45.4566848,60.4165194 46.2459918,61.6152795 C46.5691144,62.1036632 46.5025166,62.7523749 46.0881304,63.1642945 L44.748775,64.5036499 C44.250525,65.0018999 44.250525,65.749275 44.748775,66.2475251 C45.2470251,66.7457751 45.9944002,66.7457751 46.4926502,66.2475251 L47.8320056,64.9081697 C48.2463918,64.4937835 48.8975701,64.4296523 49.3859538,64.7552415 C50.5822473,65.5445485 51.919136,66.09953 53.3250892,66.3831872 C53.9220026,66.5435152 54.2623913,66.9209026 54.2623913,67.8335389 L54.2623913,70.3001233 C54.2623913,71.0055665 54.7902403,71.5334156 55.4956835,71.5334156 C56.2011266,71.5334156 56.7289757,71.0055665 56.7289757,70.3001233 L56.7289757,67.8335389 C56.7289757,67.2119596 57.0224993,66.5459818 57.6736775,66.3733209 C59.0771641,66.0921303 60.4140529,65.5396153 61.6128129,64.7503083 C62.1011966,64.4271858 62.7499083,64.4937835 63.1618279,64.9081697 L64.5011833,66.2475251 C64.9994334,66.7457751 65.7468084,66.7457751 66.2450585,66.2475251 C66.7433086,65.749275 66.7433086,65.0018999 66.2450585,64.5036499 L64.9057031,63.1642945 C64.491317,62.7499083 64.4271858,62.09873 64.7527749,61.6103463 C65.5420819,60.4140529 66.0970634,59.0771641 66.3807206,57.671211 C66.5287157,57.1236292 66.859238,56.7339089 67.8310723,56.7339089 L70.2976567,56.7339089 C71.0030999,56.7339089 71.530949,56.2060598 71.530949,55.5006166 C71.530949,54.7951735 71.0030999,54.2673244 70.2976567,54.2673244 L67.8310723,54.2673244 C67.2193594,54.2673244 66.5681811,54.0675311 66.3708543,53.3226226 C66.0896637,51.919136 65.5371488,50.5822473 64.7478417,49.3834872 C64.4247192,48.8951035 64.491317,48.2463918 64.9057031,47.8344722 L66.2450585,46.4951168 C66.7433086,45.9968668 66.7433086,45.2494917 66.2450585,44.7512416 C65.7468084,44.2529916 64.9994334,44.2529916 64.5011833,44.7512416 L63.1618279,46.090597 C62.7474418,46.5049832 62.0962635,46.5691144 61.6078797,46.2435252 C60.4115863,45.4542182 59.0746975,44.8992367 57.6687444,44.6155795 C56.9386354,44.4182527 56.7314423,43.9742675 56.7314423,43.1652278 L56.7314423,40.6986434 C56.7314423,39.9932002 56.2035932,39.4653512 55.4981501,39.4653512 Z M55.4981501,49.3316889 C58.8897037,49.3316889 61.6646112,52.1065964 61.6646112,55.4981501 C61.6646112,58.8897037 58.8897037,61.6646112 55.4981501,61.6646112 C52.1065964,61.6646112 49.3316889,58.8897037 49.3316889,55.4981501 C49.3316889,52.1065964 52.1065964,49.3316889 55.4981501,49.3316889 Z M55.4981501,51.7982734 C53.4410186,51.7982734 51.7982734,53.4410186 51.7982734,55.4981501 C51.7982734,57.5552815 53.4410186,59.1980267 55.4981501,59.1980267 C57.5552815,59.1980267 59.1980267,57.5552815 59.1980267,55.4981501 C59.1980267,53.4410186 57.5552815,51.7982734 55.4981501,51.7982734 Z" id="Combined-Shape" fill="#FD9843" />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        </div>
      </div>
      </section>
    );
  }
}
const gitList = [{
  id: '2155775',
  login: 'esky',
  name: 'esky',
}, {
  id: '8546063',
  login: 'lucky3mvp',
  name: 'lucky3mvp',
}, {
  id: '17973448',
  login: 'oOjia',
  name: 'oOjia',
}, {
  id: '11714758',
  login: 'askday',
  name: 'askday',
}, {
  id: '19582382',
  login: 'cherish1260',
  name: 'cherish1260',
}, {
  id: '2663595',
  login: 'bytesnail',
  name: 'bytesnail',
}, {
  id: '8346691',
  login: 'dlutfrank',
  name: 'dlutfrank',
}, {
  id: '2776064',
  login: 'dongdong204hn',
  name: 'dongdong204hn',
}, {
  id: '12504790',
  login: 'MattieEric',
  name: 'MattieEric',
}, {
  id: '19342237',
  login: 'goingMaze',
  name: 'goingMaze',
}, {
  id: '25764371',
  login: 'JusterKinbo',
  name: 'JusterKinbo',
}, {
  id: '10447095',
  login: 'sunshine002',
  name: 'sunshine002',
}, {
  id: '4079349',
  login: 'DachiCoding',
  name: 'DachiCoding',
}, {
  id: '12498375',
  login: 'zramals',
  name: 'zramals',
}];
const TeamSection = () => (
  <section className={style.teamSection}>
    <dl className="g-ctn">
      <dt>团队成员</dt>
      {gitList.map(g => (
        <dd key={g.id}>
          <img src={`//avatars1.githubusercontent.com/u/${g.id}?v=4`} alt="avatar" />
          <a href={`https://github.com/${g.login}`} target="_blank">{g.name}</a>
        </dd>
      ))}
    </dl>
  </section>
);
class Home extends Component {
  static async getInitialProps() {
    const res = await Fetch.get('/home/query');
    return {
      data: res,
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      showRnSection: false,
      showCompSection: false,
      showNodeSection: false,
    };
    this.scrollTop = 0;
  }
  componentDidMount() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }
  render() {
    return (
      <div className={style.page}>
        <MainSection />
        <RnSection
          rnPart={el => this.rnPart = el}
          showRnSection={this.state.showRnSection}
        />
        <CompSection
          compPart={el => this.compPart = el}
          showCompSection={this.state.showCompSection}
        />
        <NodeSection
          nodePart={el => this.nodePart = el}
          showNodeSection={this.state.showNodeSection}
        />
        <TeamSection />
      </div>
    );
  }
  compareTop = () => {

  }
  handleScroll = () => {
    // const scrollTop = e.target.documentElement.scrollTop;
    const rnTopToWindow = (this.rnPart.getBoundingClientRect().top + 100);
    const compTopToWindow = this.compPart.getBoundingClientRect().top;
    const nodeTopToWindow = this.nodePart.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (rnTopToWindow <= windowHeight) {
      this.setState({
        showRnSection: true,
      });
    } else {
      this.setState({
        showRnSection: false,
      });
    }
    if (compTopToWindow <= windowHeight) {
      this.setState({
        showCompSection: true,
      });
    } else {
      this.setState({
        showCompSection: false,
      });
    }
    if (nodeTopToWindow <= windowHeight) {
      this.setState({
        showNodeSection: true,
      });
    } else {
      this.setState({
        showNodeSection: false,
      });
    }
  }
}
export default Home;
