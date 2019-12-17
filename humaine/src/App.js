
import React, { Component } from "react";
import styled, { css } from "styled-components";
import LoginButton from "./components/LoginButton";
import RegisterButton from "./components/RegisterButton";
import TryDemoBtn from "./components/TryDemoBtn";
import SignUpBtn from "./components/SignUpBtn";
import SendBtn from "./components/SendBtn";
import DownloadAppBtn from "./components/DownloadAppBtn";
import { MdSlowMotionVideo } from 'react-icons/md';
import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import { Rect, Image, Menu, Menuitm, Email,Password,ImageRow, Rect2, H2, P2, Image2, Image3,Rect2Stack, Rect33,H1,P1, Rect3, Images, H4, P4, Cols4, Image4Row, Rect44, Rect4, Image7, Image8, Image9,Rect4Stack,Testimonials, Rect5,P5, P6, TestiRow, Client1, Client2, ClientRow, Rect55, P8, Rect6, TextInput, Emaill, FullName, EmaillRow, Rect66, Rect7, Rect8, P9 , Image10, Image11, Image10Row, Rect9, P10, Humaine } from './style.js';



class App extends React.Component {
	onSubmit = () => {
    this.props.history.push('/users')
	}
  render() {
    return (
       <>
   
   {/* Row starts here */}
   <Rect>
      <ImageRow>
	  <Link to="/">

        <Image src={require("./assets/images/logo.jpg")}></Image>
		</Link>
        <Menu>Home</Menu>
        <Menuitm>About</Menuitm>
        <Menuitm>Download</Menuitm>

        <Email placeholder="Email" type="email"></Email>
		
        <Password placeholder="Password" type="password"></Password>
       
	   <LoginButton>
		</LoginButton>
		
        <RegisterButton>
		</RegisterButton>
		
      </ImageRow>
    </Rect>
	{/* Row ends here */}
	
	
	{/* Row starts here */}
	<Rect2Stack>
        <Rect2>
          <H2>Humaine helps you {"\n"}succeed!</H2>
          <P2>
            Humaine is a cutting-edge medical education platform {"\n"}that
            brings hundreds of patients to your PC, Mac, or {"\n"}Smartphone,
            letting you master the art of diagnosis
          </P2>
		 
          <Image2 src={require("./assets/images/Screenshot_5.jpg")}></Image2>
        </Rect2>
		
        <TryDemoBtn onClick={this.onSubmit}>
		</TryDemoBtn>
		
        <SignUpBtn>
		</SignUpBtn>
		
        <Image3 src={require("./assets/images/Pt_C.jpg")}></Image3>
      </Rect2Stack>
{/* Row ends here */}
	  
	  
	  <svg
        viewBox="0 0 683 2"
        style={{
          width: 1366,
          height: 10,
		  marginBottom: 50,
          marginTop: 10
        }}
      >
        <path
          strokeWidth={1}
          fill="rgba(230, 230, 230,1)"
          stroke="rgba(230, 230, 230,1)"
          d="M0.00 0.00 L683.00 2.00 L0.00 0.00 Z"
        ></path>
      </svg>
	  
	  
	  {/* Row starts here */}
	  <Rect33>
	  <H1>Practice makes perfect</H1>
      <P1>
        Humaine&#39;s AI-augmented software lets you foster much-improved
        learning from{"\n"} the safety of the classroom or your home
      </P1>
	  
	  </Rect33>
	  {/* Row ends here */}
	  
	  
	  {/* Row starts here */}
      <Rect3>
        <Image4Row>
          <Images src={require("./assets/images/Screenshot_8.jpg")}></Images>
          
		  <Cols4>
            <H4>Individual Practice</H4>
            <P4>
              Humaine lets you take{"\n"}control of your individual{"\n"}
              learning
            </P4>
          </Cols4>
		  
          <Images src={require("./assets/images/Screenshot_9.jpg")}></Images>
		  
          <Cols4>
            <H4>Instant Feedback</H4>
            <P4>
              Humaine tells you what you{"\n"}got right, and where you{"\n"}can
              improve
            </P4>
          </Cols4>
		  
          <Images src={require("./assets/images/Screenshot_10.jpg")}></Images>
         
		 <Cols4>
            <H4>Levels of Difficulty</H4>
            <P4>
              Control the difficulty level, practice rare cases, and choose time
              limits
            </P4>
          </Cols4>
		  
        </Image4Row>
		
      </Rect3>
	  {/* Row ends here */}
	  
	  
	  
	  <svg
        viewBox="0 0 683 2"
        style={{
          width: 1366,
          height: 10,
		  marginBottom:50,
          marginTop: 40
        }}
      >
        <path
          strokeWidth={1}
          fill="rgba(230, 230, 230,1)"
          stroke="rgba(230, 230, 230,1)"
          d="M0.00 0.00 L683.00 2.00 L0.00 0.00 Z"
        ></path>
      </svg>
	  
	  
	  
	  {/* Row starts here */}
	  <Rect44>
      <H1>Sign up and meet our patients today</H1>
      <P1>
        Sign up and login using your institution&#39;s credentials, and get
        started today
      </P1>
	  </Rect44>
	  {/* Row ends here */}
	  
	  
	  {/* Row starts here */}
      <Rect4Stack>
        <Rect4></Rect4>
        <Image7 src={require("./assets/images/Ptb.jpg")}></Image7>
        <Image8 src={require("./assets/images/Pta.jpg")}></Image8>
        <Image9 src={require("./assets/images/Ptd.jpg")}></Image9>
      </Rect4Stack>
	  {/* Row starts here */}
	  
	  
	  
	  <svg
        viewBox="0 0 683 2"
        style={{
          width: 1366,
          height: 10,
		  marginBottom:40,
          marginTop: 20
        }}
      >
        <path
          strokeWidth={1}
          fill="rgba(230, 230, 230,1)"
          stroke="rgba(230, 230, 230,1)"
          d="M0.00 0.00 L683.00 2.00 L0.00 0.00 Z"
        ></path>
      </svg>
	  
	  
	  
	  {/* Row starts here */}
      <Testimonials>Testimonials</Testimonials>
      <Rect5>
        <TestiRow>
          <P5>
            Lorem ipsum dolor sit amet, consectetur adipiscing {"\n"}elit, sed
            do eiusmod tempor incididunt ut labore et{"\n"}dolore magna aliqua.
            Ut enim ad minim veniam, {"\n"}quis nostrud exercitation ullamco
            laboris
          </P5>
          <P6>
            Lorem ipsum dolor sit amet, consectetur adipiscing {"\n"}elit, sed
            do eiusmod tempor incididunt ut labore et{"\n"} dolore magna aliqua.
            Ut enim ad minim{"\n"} veniam, quis nostrud exercitation ullamco
            laboris
          </P6>
        </TestiRow>
        <ClientRow>
          <Client1>Person 1, Medical Student</Client1>
          <Client2>Person 2, Professor in Medical School</Client2>
        </ClientRow>
      </Rect5>
	  {/* Row ends here */}
	  
	  
	  <svg
        viewBox="0 0 683 2"
        style={{
          width: 1366,
          height: 10,
          marginTop: 20,
          marginBottom:40
        }}
      >
        <path
          strokeWidth={1}
          fill="rgba(230, 230, 230,1)"
          stroke="rgba(230, 230, 230,1)"
          d="M0.00 0.00 L683.00 2.00 L0.00 0.00 Z"
        ></path>
      </svg>
	  
	  
	  
	  {/* Row starts here */}
	  <Rect55>
      <H1>Get In Touch</H1>
      <P8>
        If Humaine is not at your institution, and you would like to see it
        there, please get in touch!
      </P8>
	  </Rect55>
	  {/* Row ends here */}
	  
	  
	  
	  {/* Row starts here */}
      <Rect6>
        <TextInput placeholder="Message"></TextInput>
        <EmaillRow>
          <Emaill placeholder="Email"></Emaill>
          <FullName placeholder="Full Name"></FullName>
          <SendBtn>
		  </SendBtn>
        </EmaillRow>
      </Rect6>
	  {/* Row ends here */}
	  
	  
	  {/* Row starts here */}
	  <Rect66>
      <P1>Or email us directly at: info@humaine.ai</P1>
	 </Rect66>
	 {/* Row ends here */}
	 
	 
	 
	  <svg
        viewBox="0 0 683 2"
        style={{
          width: 1366,
          height: 4,
          marginTop: 20,
          marginLeft: -1
        }}
      >
        <path
          strokeWidth={1}
          fill="rgba(230, 230, 230,1)"
          stroke="rgba(230, 230, 230,1)"
          d="M0.00 0.00 L683.00 2.00 L0.00 0.00 Z"
        ></path>
      </svg>
	  
	  
	  
	  {/* Row starts here */}
      <Rect7>
        <H1>Remember, Humaine is also an app!</H1>
      </Rect7>
	  {/* Row ends here */}
	  
	  
	  {/* Row starts here */}
      <Rect8>
        <P9>
          Download the app to register and login to Humaine on your Smartphone
        </P9>
        <DownloadAppBtn>
		</DownloadAppBtn>
        <Image10Row>
          <Image10
            src={require("./assets/images/Screenshot_14.jpg")}
          ></Image10>
          <Image11
            src={require("./assets/images/Screenshot_15.jpg")}
          ></Image11>
        </Image10Row>
      </Rect8>
	  {/* Row ends here */}
	  
	  
	  
      <svg
        viewBox="0 0 683 2"
        style={{
          width: 1366,
          height: 4,
          marginTop: 112
        }}
      >
        <path
          strokeWidth={1}
          fill="rgba(230, 230, 230,1)"
          stroke="rgba(230, 230, 230,1)"
          d="M0.00 0.00 L683.00 2.00 L0.00 0.00 Z"
        ></path>
      </svg>
	  
	  
	  
	  {/* Row starts here */}
      <Rect9>
        <P10>129 Franklin St., Cambridge, MA 02139, USA</P10>
        <Humaine>Humaine</Humaine>
      </Rect9>
	  {/* Row ends here */}
	  
	 </> 
    )
  }
}




export default App