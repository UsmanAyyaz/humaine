import styled, { css } from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const Rect = styled.div`
  width: 1366px;
  height: 122px;
  flex-direction: row;
  display: flex;
`;

export const Image = styled.img`
  width: 200px;
  height: 81px;
  object-fit: contain;
`;

export const Welcome = styled.span`
  
  color: rgba(74,144,226,1);
  font-size: 20px;
  font-weight: regular;
  font-style: normal;
  line-height: 27px;
  margin-left: 751px;
  margin-top: 29px;
`;

export const Image2 = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 21px;
  margin-top: 15px;
  object-fit: contain;
`;

export const ImageRow = styled.div`
  height: 100%;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 100px;
  margin-left: 55px;
  margin-top: 10px;
`;

export const Rect2 = styled.div`
  width: 1260px;
  height: 105px;
  flex-direction:row;
  display:flex;
 
  background:
        linear-gradient(-135deg, #ffffcc 5px, transparent 0) 0 5px,
        linear-gradient(135deg, #ffffcc 5px, #fff 0) 0 5px;
    background-color: rgba(255,255,204,1);
    background-position: left bottom;
    background-repeat: repeat-x;
    background-size: 13px 7px;
	border: 3px solid #e3e3ca;
    border-bottom: none;
  
  
`;


export const Rect2Stack = styled.div`
  width: 1266px;
  height: 105px;
  margin-left: 38px;
  position: relative;
`;


export const P1 = styled.span`
  
  color: rgba(102,51,0,1);
  font-size: 18px;
  font-weight: regular;
  font-style: normal;
  line-height: 27px;
  margin-left: 22px;
  margin-top: 27px;
  white-space:pre-wrap;
`;

export const Path4Row = styled.div`
  height: 100%;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;

  margin-left: 15px;
`;

export const Rect3 = styled.div`
  width: 1366px;
  height: 651px;
  flex-direction: row;
  display: flex;
  margin-top: 19px;
`;

export const Rect4 = styled.div`
  width: 882px;
  height: 651px;
  flex-direction: column;
  display: flex;
`;

export const Image3 = styled.img`
  width: 97%;
  height: 80%;
  margin-top: 15px;
  margin-left: 20px;
  object-fit: stretch;
`;

export const TextInput = styled.input`
  
  width: 850px;
  height: 106px;
  color: #121212;
  border-radius: 25px;
  border-color: rgba(74,144,226,1);
  border-width: 1px;
  font-size: 18px;
  font-style: normal;
  line-height: 27px;
  text-align: center;
  margin-top: 14px;
  margin-left: 20px;
  border-style: solid;
  background: transparent;
`;

export const Rect5 = styled.div`
  width: 399px;
  height: 621px;
  background-color: rgba(249,249,249,1);
  flex-direction: column;
  display: flex;
  margin-left: 3px;
  margin-top: 21px;
  background:
        linear-gradient(-135deg, rgba(249,249,249,1) 5px, transparent 0) 0 5px,
        linear-gradient(135deg, rgba(249,249,249,1) 5px, #fff 0) 0 5px;
    background-color: rgba(249,249,249,1);
    background-position: left bottom;
    background-repeat: repeat-x;
    background-size: 17px 7px;
	border: 3px solid #e3e3ca;
    border-bottom: none;
`;

export const TextInput2 = styled.textarea`
  
  top: 0px;
  left: 16px;
  width: 362px;
  height: 441px;
  color: #121212;
  position: absolute;
  font-size: 18px;
  font-weight: regular;
  font-style: italic;
  line-height: 25px;
  text-align: left;
  border: none;
  background: transparent;
`;

export const Path7Stack = styled.div`
  top: 0px;
  left: 2px;
  width: 394px;
  height: 441px;
  position: absolute;
`;

export const Path7StackStack = styled.div`
  width: 399px;
  height: 441px;
  position: relative;
`;

export const Path19Stack = styled.div`
  top: 0px;
  left: 0px;
  width: 394px;
  height: 88px;
  position: absolute;
`;

export const EnterDiagnosis = styled.input`
  
  top: 25px;
  left: 13px;
  width: 247px;
  height: 66px;
  color: #121212;
  position: absolute;
  border-radius: 10px;
  border-color: #000000;
  border-width: 1px;
  z-index:1;
  font-size: 20px;
  font-weight: regular;
  font-style: normal;
  line-height: 27px;
  text-align: center;
  border-style: solid;
  background: transparent;
`;

export const Path20Stack = styled.div`
  top: 4px;
  left: 0px;
  width: 394px;
  height: 86px;
  position: absolute;
`;

export const Path19StackStack = styled.div`
  width: 394px;
  height: 90px;
  margin-top: 14px;
  margin-left: 5px;
  position: relative;
`;

export const Rect4Row = styled.div`
  height: 100%;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 22px;
  margin-left: 10px;
`;


export const STabs = styled(Tabs)`
  
  font-size: 16px;
  width: 100%;
`;

export const STabList = styled(TabList)`
  list-style-type: none;
  padding: 10px;
  display: flex;
  margin: 0;
`;
STabList.tabsRole = 'TabList';

export const STab = styled(Tab)`
  margin-right: 4px;
  font-weight: 500;
  padding: 10px 40px;
  user-select: none;
  cursor: arrow;
  color: #429ad9;

  &.is-selected {
     color: white;
     background:#428bca;
    border-bottom: 1px solid white;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 255, .5)
  }
`;
STab.tabsRole = 'Tab';

export const STabPanel = styled(TabPanel)`
  display: none;
  height:40vh;
  border: 1px solid #91d4f5;
  padding: 4px;
  margin-top: -5px;
  overflow-y:scroll;

  &.is-selected {
    display: block;
  }
`;
STabPanel.tabsRole = 'TabPanel';


export const ChatYou = styled.span`
  
  color: #0330a2;
  font-size: 22px;
  font-weight: 700;
  font-style: normal;
  line-height: 27px;
  display:block;
`;

export const Chatme = styled.span`
  
  color: #0330a2;
  font-size: 22px;
  font-weight: 400;
  font-style: normal;
  line-height: 27px;
`;
export const Rect7 = styled.div`
  width: 1270px;
  height: 100%;
  flex-direction: row;
  display: flex;
  margin-left:30px;
  margin-bottom:30px;
`;

export const P2 = styled.span`
  
  color: black;
  font-weight: 400;
  font-style: normal;
  white-space:pre-wrap;
  font-size:18px;
  line-height:27px;
  
`;
