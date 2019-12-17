
import React, { Component } from "react";
import styled, { css } from "styled-components";
import EasyBtn from "./components/EasyBtn";
import SubmitNotesBtn from "./components/SubmitNotesBtn";
import { render } from 'react-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { Rect, Image, Welcome,Image2,ImageRow,Rect2, Rect2Stack,P1, Path4Row,Rect3, Rect4,  Image3,TextInput,Rect5,TextInput2,Path7Stack,Path7StackStack,Path19Stack,EnterDiagnosis,Path20Stack,Path19StackStack,Rect4Row,STabs,STabList,STab,STabPanel,ChatYou,Chatme,Rect7,P2 } from './style2.js';


import { Route, Link } from 'react-router-dom'
const User = ({ match }) => <p>{match.params.id}</p>
class Users extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: '', apiResponse: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    fetch("http://localhost:9000/testAPI/"+this.state.value)
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    this.setState({value: ""});
    event.preventDefault();
  }

  render() {
    const { url } = this.props.match
    return (
   <>
  
   {/* Row starts here */}
      <Rect>
        <ImageRow>
		<Link to="/">
          <Image src={require("./assets/images/logo.jpg")}></Image>
		  </Link>
          <Welcome>Welcome, Ammar</Welcome>
          <Image2 src={require("./assets/images/Screenshot_23.jpg")}></Image2>
        </ImageRow>
      </Rect>
	   {/* Row ends here */}
	  
	   {/* Row starts here */}
       <Rect2Stack>
        <Rect2> 
		<Path4Row>
          
         <P1>
           <b>Case #1245 - Gastroenterology:</b> You are the admitting doctor on the
            general medicine ward.  You are asked to see this middle-aged {"\n"}
            man who is complaining of abdominal pain.  Please take a full
            history with a view to making a diagnosis
          </P1>
		   <EasyBtn>
		   </EasyBtn>
        </Path4Row>
		</Rect2>
		
		
        <svg
          viewBox="0 0 783 2"
          style={{
            top: 30,
            left: 2,
            
            
            position: "absolute"
          }}
        >
          <path
            strokeWidth={1}
            fill="rgba(230, 230, 230,0.5)"
            stroke="rgba(230, 230, 230,0.5)"
            d="M0.00 0.00 L783.00 2.00 L0.00 0.00 Z"
          ></path>
        </svg>
        
		
		<svg
          viewBox="0 0 783 2"
          style={{
            top: 55,
            left: 0,
            
           
            position: "absolute"
          }}
        >
          <path
            strokeWidth={1}
            fill="rgba(230, 230, 230,0.5)"
            stroke="rgba(230, 230, 230,0.5)"
            d="M0.00 0.00 L783.00 2.00 L0.00 0.00 Z"
          ></path>
        </svg>
        <svg
          viewBox="0 0 783 2"
          style={{
            top: 80,
            left: 0,
            
            
            position: "absolute"
          }}
        >
          <path
            strokeWidth={1}
            fill="rgba(230, 230, 230,0.5)"
            stroke="rgba(230, 230, 230,0.5)"
            d="M0.00 0.00 L783.00 2.00 L0.00 0.00 Z"
          ></path>
        </svg>

		
		<svg
      viewBox="0 0 2 58"
      style={{
        width: 5,
        height: 105,
		top:0,
		left:20,
		position: "absolute"
      }}
    >
      <path
        strokeWidth={1}
        fill="rgba(230, 230, 230,0.3)"
        stroke="rgba(230, 230, 230,0.3)"
        d="M0.00 0.00 L2.00 58.00 L0.00 0.00 Z"
      ></path>
    </svg>
      </Rect2Stack>
	  	{/* Row ends here */}

	  
	  
	 	{/* Row starts here */}
 
	   <Rect3>
        <Rect4Row>
		  
          <Rect4>
            <Image3
              src={require("./assets/images/Avatar.jpg")}
            ></Image3>
            <form onSubmit={this.handleSubmit}>
              <label>
                <TextInput 
                type="text" 
                value={this.state.value} 
                onChange={this.handleChange}
                placeholder="Hold space to talk to the patient, or type your response here" />
              </label>
            </form>

          </Rect4>
          
          <Rect5>
            
			<svg
              viewBox="0 0 239 2"
              style={{
                width: 394,
               
                marginTop: 25,
                marginLeft: 5
              }}
            >
              <path
                strokeWidth={1}
                fill="rgba(230, 230, 230,1)"
                stroke="rgba(230, 230, 230,1)"
                d="M0.00 0.00 L239.00 2.00 L0.00 0.00 Z"
              ></path>
            </svg>
            <svg
              viewBox="0 0 239 2"
              style={{
                width: 394,
               
                marginTop: 25,
                marginLeft: 2
              }}
            >
              <path
                strokeWidth={1}
                fill="rgba(230, 230, 230,1)"
                stroke="rgba(230, 230, 230,1)"
                d="M0.00 0.00 L239.00 2.00 L0.00 0.00 Z"
              ></path>
            </svg>
            <Path7StackStack>
              <Path7Stack>
                <svg
                  viewBox="0 0 239 2"
                  style={{
                    top: 25,
                    left: 0,
                    width: 394,
                    
                    position: "absolute"
                  }}
                >
                  <path
                    strokeWidth={1}
                    fill="rgba(230, 230, 230,1)"
                    stroke="rgba(230, 230, 230,1)"
                    d="M0.00 0.00 L239.00 2.00 L0.00 0.00 Z"
                  ></path>
                </svg>
                <TextInput2
                
                  
				placeholder="Enter your medical notes here"></TextInput2>
              </Path7Stack>
              <svg
                viewBox="0 0 239 2"
                style={{
                  top: 50,
                  left: 0,
                  width: 394,
                  
                  position: "absolute"
                }}
              >
                <path
                  strokeWidth={1}
                  fill="rgba(230, 230, 230,1)"
                  stroke="rgba(230, 230, 230,1)"
                  d="M0.00 0.00 L239.00 2.00 L0.00 0.00 Z"
                ></path>
              </svg>
              <svg
                viewBox="0 0 239 2"
                style={{
                  top: 75,
                  left: 0,
                  width: 394,
                  
                  position: "absolute"
                }}
              >
                <path
                  strokeWidth={1}
                  fill="rgba(230, 230, 230,1)"
                  stroke="rgba(230, 230, 230,1)"
                  d="M0.00 0.00 L239.00 2.00 L0.00 0.00 Z"
                ></path>
              </svg>
              <svg
                viewBox="0 0 239 2"
                style={{
                  top: 100,
                  left: 0,
                  width: 394,
                  
                  position: "absolute"
                }}
              >
                <path
                  strokeWidth={1}
                  fill="rgba(230, 230, 230,1)"
                  stroke="rgba(230, 230, 230,1)"
                  d="M0.00 0.00 L239.00 2.00 L0.00 0.00 Z"
                ></path>
              </svg>
              <svg
                viewBox="0 0 239 2"
                style={{
                  top: 125,
                  left: 0,
                  width: 394,
                  
                  position: "absolute"
                }}
              >
                <path
                  strokeWidth={1}
                  fill="rgba(230, 230, 230,1)"
                  stroke="rgba(230, 230, 230,1)"
                  d="M0.00 0.00 L239.00 2.00 L0.00 0.00 Z"
                ></path>
              </svg>
              <svg
                viewBox="0 0 239 2"
                style={{
                  top: 150,
                  left: 2,
                  width: 394,
                  
                  position: "absolute"
                }}
              >
                <path
                  strokeWidth={1}
                  fill="rgba(230, 230, 230,1)"
                  stroke="rgba(230, 230, 230,1)"
                  d="M0.00 0.00 L239.00 2.00 L0.00 0.00 Z"
                ></path>
              </svg>
              <svg
                viewBox="0 0 239 2"
                style={{
                  top: 175,
                  left: 0,
                  width: 394,
                  
                  position: "absolute"
                }}
              >
                <path
                  strokeWidth={1}
                  fill="rgba(230, 230, 230,1)"
                  stroke="rgba(230, 230, 230,1)"
                  d="M0.00 0.00 L239.00 2.00 L0.00 0.00 Z"
                ></path>
              </svg>
              <svg
                viewBox="0 0 239 2"
                style={{
                  top: 200,
                  left: 2,
                  width: 394,
                  
                  position: "absolute"
                }}
              >
                <path
                  strokeWidth={1}
                  fill="rgba(230, 230, 230,1)"
                  stroke="rgba(230, 230, 230,1)"
                  d="M0.00 0.00 L239.00 2.00 L0.00 0.00 Z"
                ></path>
              </svg>
              <svg
                viewBox="0 0 239 2"
                style={{
                  top: 225,
                  left: 0,
                  width: 394,
                  
                  position: "absolute"
                }}
              >
                <path
                  strokeWidth={1}
                  fill="rgba(230, 230, 230,1)"
                  stroke="rgba(230, 230, 230,1)"
                  d="M0.00 0.00 L239.00 2.00 L0.00 0.00 Z"
                ></path>
              </svg>
              <svg
                viewBox="0 0 239 2"
                style={{
                  top: 250,
                  left: 5,
                  width: 394,
                  
                  position: "absolute"
                }}
              >
                <path
                  strokeWidth={1}
                  fill="rgba(230, 230, 230,1)"
                  stroke="rgba(230, 230, 230,1)"
                  d="M0.00 0.00 L239.00 2.00 L0.00 0.00 Z"
                ></path>
              </svg>
              <svg
                viewBox="0 0 239 2"
                style={{
                  top: 275,
                  left: 5,
                  width: 394,
                  
                  position: "absolute"
                }}
              >
                <path
                  strokeWidth={1}
                  fill="rgba(230, 230, 230,1)"
                  stroke="rgba(230, 230, 230,1)"
                  d="M0.00 0.00 L239.00 2.00 L0.00 0.00 Z"
                ></path>
              </svg>
              <svg
                viewBox="0 0 239 2"
                style={{
                  top: 300,
                  left: 0,
                  width: 394,
                  
                  position: "absolute"
                }}
              >
                <path
                  strokeWidth={1}
                  fill="rgba(230, 230, 230,1)"
                  stroke="rgba(230, 230, 230,1)"
                  d="M0.00 0.00 L239.00 2.00 L0.00 0.00 Z"
                ></path>
              </svg>
			   <svg
                viewBox="0 0 239 2"
                style={{
                  top: 325,
                  left: 0,
                  width: 394,
                  
                  position: "absolute"
                }}
              >
                <path
                  strokeWidth={1}
                  fill="rgba(230, 230, 230,1)"
                  stroke="rgba(230, 230, 230,1)"
                  d="M0.00 0.00 L239.00 2.00 L0.00 0.00 Z"
                ></path>
              </svg>
			   <svg
                viewBox="0 0 239 2"
                style={{
                  top: 350,
                  left: 0,
                  width: 394,
                  
                  position: "absolute"
                }}
              >
                <path
                  strokeWidth={1}
                  fill="rgba(230, 230, 230,1)"
                  stroke="rgba(230, 230, 230,1)"
                  d="M0.00 0.00 L239.00 2.00 L0.00 0.00 Z"
                ></path>
              </svg>
			   <svg
                viewBox="0 0 239 2"
                style={{
                  top: 375,
                  left: 0,
                  width: 394,
                  
                  position: "absolute"
                }}
              >
                <path
                  strokeWidth={1}
                  fill="rgba(230, 230, 230,1)"
                  stroke="rgba(230, 230, 230,1)"
                  d="M0.00 0.00 L239.00 2.00 L0.00 0.00 Z"
                ></path>
              </svg>
			   <svg
                viewBox="0 0 239 2"
                style={{
                  top: 400,
                  left: 0,
                  width: 394,
                  
                  position: "absolute"
                }}
              >
                <path
                  strokeWidth={1}
                  fill="rgba(230, 230, 230,1)"
                  stroke="rgba(230, 230, 230,1)"
                  d="M0.00 0.00 L239.00 2.00 L0.00 0.00 Z"
                ></path>
              </svg>
			   <svg
                viewBox="0 0 239 2"
                style={{
                  top: 425,
                  left: 0,
                  width: 394,
                  
                  position: "absolute"
                }}
              >
                <path
                  strokeWidth={1}
                  fill="rgba(230, 230, 230,1)"
                  stroke="rgba(230, 230, 230,1)"
                  d="M0.00 0.00 L239.00 2.00 L0.00 0.00 Z"
                ></path>
              </svg>
            </Path7StackStack>
            <Path19StackStack>
              <Path19Stack>
                <svg
                  viewBox="0 0 239 2"
                  style={{
                    top: 0,
                    left: 0,
                    width: 325,
                   
                    position: "absolute"
                  }}
                >
                  <path
                    strokeWidth={1}
                    fill="rgba(230, 230, 230,1)"
                    stroke="rgba(230, 230, 230,1)"
                    d="M0.00 0.00 L239.00 2.00 L0.00 0.00 Z"
                  ></path>
                </svg>
                <SubmitNotesBtn
                  style={{
                    top: 2,
                    left: 274,
                    width: 60,
                    height: 92,
					zIndex:1,
                    position: "absolute"
                  }}
                ></SubmitNotesBtn>
              </Path19Stack>
              <Path20Stack>
                <svg
                  viewBox="0 0 239 2"
                  style={{
                    top: 25,
                    left: 0,
                    width: 394,
                    
                    position: "absolute"
                  }}
                >
                  <path
                    strokeWidth={1}
                    fill="rgba(230, 230, 230,1)"
                    stroke="rgba(230, 230, 230,1)"
                    d="M0.00 0.00 L239.00 2.00 L0.00 0.00 Z"
                  ></path>
                </svg>
                <EnterDiagnosis placeholder="Enter diagnosis"></EnterDiagnosis>
              </Path20Stack>
              <svg
                viewBox="0 0 239 2"
                style={{
                  top: 50,
                  left: 0,
                  width: 394,
                  
                  position: "absolute"
                }}
              >
                <path
                  strokeWidth={1}
                  fill="rgba(230, 230, 230,1)"
                  stroke="rgba(230, 230, 230,1)"
                  d="M0.00 0.00 L239.00 2.00 L0.00 0.00 Z"
                ></path>
              </svg>
			   <svg
                viewBox="0 0 239 2"
                style={{
                  top: 75,
                  left: 0,
                  width: 394,
                  
                  position: "absolute"
                }}
              >
                <path
                  strokeWidth={1}
                  fill="rgba(230, 230, 230,1)"
                  stroke="rgba(230, 230, 230,1)"
                  d="M0.00 0.00 L239.00 2.00 L0.00 0.00 Z"
                ></path>
              </svg>
			  <svg
                viewBox="0 0 239 2"
                style={{
                  top: 100,
                  left: 0,
                  width: 394,
                  
                  position: "absolute"
                }}
              >
                <path
                  strokeWidth={1}
                  fill="rgba(230, 230, 230,1)"
                  stroke="rgba(230, 230, 230,1)"
                  d="M0.00 0.00 L239.00 2.00 L0.00 0.00 Z"
                ></path>
              </svg>
            </Path19StackStack>
          </Rect5>
		    
        </Rect4Row>
      </Rect3>
	  	{/* Row ends here */}

	  
	  
	  	{/* Row starts here */}

	  <Rect7>
	  <STabs
    selectedTabClassName='is-selected'
    selectedTabPanelClassName='is-selected'
  >
    <STabList>
      <STab>Transcript</STab>
      <STab>Hints</STab>
      <STab>Solution</STab>
	  <STab>Discussion Board</STab>
    </STabList>
    <STabPanel><Chatme>
      Hello, my name is Ammar, I am one of the doctors at this hospital.
    </Chatme>
	<ChatYou>Hi, nice to meet you</ChatYou>
	<Chatme>
     What is your name?
    </Chatme>
	<ChatYou>I am Brian.</ChatYou>
	<Chatme>
     How old are you?
    </Chatme>
	<ChatYou>I am 52 years old.</ChatYou>
	<Chatme>
     How can I help you today?
    </Chatme>
	<ChatYou>I have been suffering from severe pain in my stomach.</ChatYou>
	<Chatme>
     I am sorry to hear about that
	 </Chatme>
	<ChatYou>That is very kind of you to say.</ChatYou>
	<Chatme>
    When did the pains start?
	 </Chatme>
	
    </STabPanel>
    <STabPanel> 
	<P2>
      Think about what organs could be associated with the specific site of the
      pain...{"\n"}Have you tried asking about how long the episodes of pain
      last and how frequent they are?{"\n"}What behaviour causes this
      patient&#39;s pain to come on?{"\n"}As you progress, make a list of what
      diagnoses it could be and exclude them one-by-one by asking the
      appropriate closed questions{"\n"}For the best history, don&#39;t forget
      to demonstrate empathy with the patient and sign-post from one segment of
      the history to the next
    </P2>
	</STabPanel>
    <STabPanel>
	<P2>
      Mr Brian Montgomery&#39;s diagnosis is biliary colic{"\n"}This can be
      confirmed by the right upper-quadrant pain of a colicky nature, which
      comes on with food{"\n"}especially heavy meals, and subsides with reducing
      oral intake{"\n"}The key to the unlocking the history is to conduct a
      thorough SOCRATES questioning of the pain
    </P2>
	</STabPanel>
	
	<STabPanel>
	<P2>
      Great case - I was thinking duodenal ulcers could have been a differential
      {"\n"}True, but I was suspicious that this could be a retrocaecal
      appendicitis. But the lack of fever made that less likely I suppose{"\n"}I
      got the diagnosis correctly!! I saw a patient just like this on my
      internship last month!{"\n"}How long did you guys take to solve this? By
      the time I completed my history, 20 minutes had already passed 📷{"\n"}The
      gastroenterology label got me thinking more broadly, but this seemed to be
      a surgical case otherwise
    </P2>
	</STabPanel>
  </STabs>
  </Rect7>
  	{/* Row ends here */}

  
    </>
    )
  }
}






export default Users