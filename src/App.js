import React from 'react';
import Youtube from './Youtube';
import Chatter from './Chatter';
import './App.scss';
import ChatProvider from './ChatContext';
import { Route, Link, Switch } from 'react-router-dom';
import { MdArrowBack } from "react-icons/md";


function App() {
  return (
    <>
      <ChatProvider>
        <Switch>
          <Route path="/lobby" component={LobbyPage}/>
          <Route path="/room/:team" component={TemplatePage}/>
          <Route render={({ location }) =>
            <div>
              <h2>이 페이지는 존재하지 않습니다.</h2>
              <p>{location.pathname}</p>
            </div>
          }/>   
        </Switch>  
      </ChatProvider>
    </>
  );
}

const roomData = {
  all: { //아무 팀 팬
    teamname: "모두",
  },
  af: { //아프리카 프릭스
    teamname: "아프리카 프릭스"
  },
  dwg: { //담원게이밍
    teamname: "담원게이밍"
  },
  drx: { //DRX
    teamname: "DRX"
  },
  gen: { //젠지
    teamname: "젠지"
  },
  hle: { //한화생명
    teamname: "한화생명"
  },
  kt: { //KT 롤스터
    teamname: "KT 롤스터"
  },
  sb: { //샌드박스
    teamname: "샌드박스 게이밍"
  },
  sp: { //설해원 프린스
    teamname: "설해원 프린스"
  },
  dyn: { //팀 다이나믹스
    teamname: "팀 다이나믹스"
  },
  t1: { //skt t1
    teamname: "T1"
  },

}

function TemplatePage({ match }) {

  const { team } = match.params;
  const { teamname } = roomData[team];

  if(!teamname) {
    return (
      <div>
        <h2>이 페이지는 존재하지 않습니다.</h2>
      </div>
      );
  }

  return (
    <>
      <header>
        <Link to="/lobby"><MdArrowBack style={{color: "#DDDDDD"}} /></Link>&nbsp;&nbsp;&nbsp;
        #함께 봐요&nbsp;&nbsp;&nbsp;#LCK&nbsp;&nbsp;&nbsp;#{teamname}
        <a href="https://toon.at/donate/beomseok-kang" className="donation-link">후원하기</a>
      </header>
      <Youtube />
      <Chatter />
    </>
  );
}

function LobbyPage() {
  return (
    <>
      <div className="body__container">
        <div className="inner">
          <h2>입장하실 방을 선택해 주세요.</h2>
          <Link to="/room/all"><div className="link--to-room"><div></div>모두</div></Link>
          <h3>팀 방</h3>
          <ul>
            <Link to="/room/t1"><li id="t1">T1</li></Link>
            <Link to="/room/drx"><li id="drx">DRX</li></Link>
            <Link to="/room/kt"><li id="kt">KT</li></Link>
            <Link to="/room/dyn"><li id="dyn">Team DYN</li></Link>
            <Link to="/room/hle"><li id="hle">한화생명</li></Link>
            <Link to="/room/dwg"><li id="dwg">담원</li></Link>
            <Link to="/room/gen"><li id="gen">Gen G</li></Link>
            <Link to="/room/af"><li id="af">Afreeca</li></Link>
            <Link to="/room/sp"><li id="sp">설해원</li></Link>
            <Link to="/room/sb"><li id="sb">샌드박스</li></Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
