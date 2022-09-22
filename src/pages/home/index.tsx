import React, { useState, useEffect } from 'react';
import './index.scss';
const video1 = 'bg_1';
const video2 = 'bg_2';
const video3 = 'bg_3';

const tabs =[
  {
    type: 'index',
    color: '',
    title: 'Where People @  Meet for @ Secret Relationships',
    content:  ``,
    video: video1
  },
  {
    type: 'baby',
    color: '#FFA6F6',
    title: 'What is a @ Sugar Baby?',
    content:  `A sugar baby wants something more than a traditional relationship. 
    She's looking for a successful and generous gentleman. 
    She seeks the chance to upgrade her lifestyle. 
    She's an attractive, goal-oriented woman who knows what she wants.`,
    video: video2
  },
  {
    type: 'daddy',
    color: '#61B3FF',
    title: 'What is a @ Sugar Daddy?',
    content:  `A sugar daddy is a successful man who knows exactly what he wants from a relationship.
     He wants to generously share his lifestyle and experience with an attractive companion.`,
     video: video3
  },
  {
    type: 'relationshipWithBenefits',
    color: '#C4F388',
    title: 'What is a Relationship @ With Benefits?',
    content:  `You can skip the traditional relationship rules. Don't waste your time on pretenses. 
    Create a unique relationship with a like‑minded partner that benefits you both. 
    We only accept applications from the top 10 wealthiest countries. 
    Enjoy sunset cocktails on a yacht, grab reservations at the best new restaurants, 
    and spend a weekend on a beautiful European island that should never be enjoyed alone. 
    Start your sexy relationship with us. 
    In just a few minutes at SugarBaby, you'll browse profiles of eligible, 
    wealthy men or attractive, beautiful women who are looking for a date.
     Make all your dreams and wildest fantasies come true - join SugarBaby Now!`,
     video: video2
  },
];
interface tabItemType {
  type: string;
  color: string;
  title: string;
  content: string;
  video: any
}
function Home() {
  const [currentTab, setCurrentTab] = useState<tabItemType>(tabs[0]);
  const [order, setOrder] = useState<string>('positive');// negative

  useEffect(() => {
    pcHandleTab(tabs[0]);
  },[]);
  
  const clipTitle = (str:string) => {
    let list = str.split('@') || [];
    return list.map((item,index) => {
      return <div key={index}>{item}</div>
    })
  }

  const pcHandleTab = (item:tabItemType) => {
    let myVideo:any = document.getElementById('my-'+currentTab.type);
    myVideo.pause();
    setCurrentTab(item);
    let currentVideo:any = document.getElementById('my-'+item.type);
    setTimeout(() => {
      currentVideo.currentTime = 0;
      currentVideo?.play();
      currentVideo.loop = true;
    }, 0);
  }

  const mobileClickNext = () => {
    let i = 0;
    tabs.forEach((item,index)=>{
      if(item.type === currentTab.type) i = index;
    });
    if(order === 'positive'){
      pcHandleTab(tabs[i+1]);
      if(i === 2) setOrder('negative');
    }else {
      pcHandleTab(tabs[i-1]);
      if(i === 1) setOrder('positive');
    }
  }


  return (
    <div className="home">
      <div className='myvideoMask'></div>
      {
        tabs.map(item => {
          return (<video id={'my-'+item.type} className="myvideo"  key={item.type} loop={true} muted style={{display: currentTab.type === item.type?'block':'none'}}>
          <source src={require(`../../assets/video/${item.video}.mp4`)} type='video/mp4'/>
        </video>)
        })
      }
      <header className="home-header">
        <div className="header-left">
          <img src={require("../../assets/images/logo.png")} alt="LOGO" className='cursorPointer' onClick={()=>{pcHandleTab(tabs[0])}}/>
        </div>
        <div className="header-right">
          <div className="whitepaper-wrap">
            <img src={require("../../assets/images/book.png")} alt="" />
            <span>WHITEPAPER</span>  
          </div>
        </div>
      </header>
      <div className="home-content">
        <div className="content-left">
          <div className="content-left-content">
            <div className={`content-item ${['baby','relationshipWithBenefits'].includes(currentTab.type)?'center':''}` }>
              <div className="title">
                {clipTitle(currentTab.title)}
              </div>
              {
                currentTab.type === 'index' ? (<>
                  <div className="sub-title-wrap">
                    <div className="verticalLine">
                      <div className="flling"></div>
                    </div>  
                    <div className="sub-title">
                      <div>A web3 based dating platform</div>
                      <div>Where People Meet for Secret Relationships</div>
                    </div>
                  </div>
                  <div className="platform-list">
                    <img src={require("../../assets/images/platform_1.png")} alt="" />
                    <img src={require("../../assets/images/platform_2.png")} alt="" />
                    <img src={require("../../assets/images/platform_3.png")} alt="" />
                    <img src={require("../../assets/images/platform_4.png")} alt="" />
                    <img src={require("../../assets/images/platform_5.png")} alt="" />
                  </div>
                </>
                ):<>
                  <div className="horizontalLine">
                    <div className="flling" style={{backgroundColor: currentTab.color}}></div>
                  </div>
                  <div className="content-box">{currentTab.content}</div>
                </>
              }
            </div>
          </div>
          <div className={`content-left-footer ${['baby','relationshipWithBenefits'].includes(currentTab.type)?'center':''}`}>
            <div className="link-item">
              <img src={require("../../assets/images/telegram.png")} alt="" />
              <span>TELEGRAM</span>
            </div>
            <div className="link-item">
              <img src={require("../../assets/images/twitter.png")} alt="" />
              <span>TWITTER</span>
            </div>
          </div>
        </div>
        <div className={`mobileNext ${order === 'negative'?'center':''}`} onClick={mobileClickNext}></div>
        <div className="content-right ">
          <ul className='menu-list'>
            {
              tabs.map((item:tabItemType) => {
                return item.type !== 'index' && (<li 
                  className={`menu-item`} 
                  style={{borderColor: currentTab.type === item.type?`${item.color}`:''}}
                  key={item.type} 
                  onClick={()=>pcHandleTab(item)}>
                    <div className='menu-item-box'>
                      <div className="title">
                        {clipTitle(item.title)}
                      </div>
                      <div className='imgs'></div>
                    </div>
                </li>)
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
