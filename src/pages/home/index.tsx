import React, { useState } from 'react';
import './index.scss';

const tabs =[
  {
    type: 'index',
    color: '',
    title: 'Where People @  Meet for @ Secret Relationships',
    content:  ``
  },
  {
    type: 'baby',
    color: '#FFA6F6',
    title: 'What is a @ Sugar Baby?',
    content:  `A sugar baby wants something more than a traditional relationship. 
    She's looking for a successful and generous gentleman. 
    She seeks the chance to upgrade her lifestyle. 
    She's an attractive, goal-oriented woman who knows what she wants.`
  },
  {
    type: 'daddy',
    color: '#61B3FF',
    title: 'What is a @ Sugar Daddy?',
    content:  `A sugar daddy is a successful man who knows exactly what he wants from a relationship.
     He wants to generously share his lifestyle and experience with an attractive companion.`
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
     Make all your dreams and wildest fantasies come true - join SugarBaby Now!`
  },
];
interface tabItemType {
  type: string;
  color: string;
  title: string;
  content: string;
}
function Home() {
  const [currentTab, setCurrentTab] = useState<tabItemType>(tabs[1]);
  const [order, setOrder] = useState<string>('positive');// negative

  const clipTitle = (str:string) => {
    let list = str.split('@') || [];
    return list.map((item,index) => {
      return <div key={index}>{item}</div>
    })
  }

  const mobileClickNext = () => {
    let i = 0;
    tabs.forEach((item,index)=>{
      if(item.type === currentTab.type) i = index;
    });
    console.log(currentTab.type,i)
    if(i === tabs.length-1){
      setCurrentTab(tabs[0]);
    }else {
      setCurrentTab(tabs[i+1]);
    }
  }

  return (
    <div className="home">
      <header className="home-header">
        <div className="header-left">
          <img src={require("../../assets/images/logo.png")} alt="LOGO" className='cursorPointer' onClick={()=> setCurrentTab(tabs[0])}/>
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
        <div className="mobileNext" onClick={mobileClickNext}></div>
        <div className="content-right">
          <ul className='menu-list'>
            {
              tabs.map((item:tabItemType) => {
                return item.type !== 'index' && (<li 
                  className={`menu-item`} 
                  style={{borderColor: currentTab.type === item.type?`${item.color}`:''}}
                  key={item.type} 
                  onClick={()=>setCurrentTab(item)}>
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
