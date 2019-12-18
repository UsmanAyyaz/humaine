var express = require('express');
var router = express.Router();
var path = require('path');


const fs = require('fs');
const speech = require('@google-cloud/speech');

// Creates a client
const client = new speech.SpeechClient();
var jsonPath = path.join(__dirname, '..', 'resources', 'audio.raw');

const filename = jsonPath;
const encoding = 'MP3';
const sampleRateHertz = 16000;
const languageCode = 'en-US';

const config = {
  encoding: encoding,
  sampleRateHertz: sampleRateHertz,
  languageCode: languageCode,
};
// const getBlobFile = async function(){
//   var blobFile = await fetch("blob:http://localhost:3001/d7f614d2-b42f-4a3c-819c-2be3f5389473")
// }




router.get('/', async function(req, res, next) {
    // Detects speech in the audio file
    const [response] = await client.recognize(request);
    const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');
    console.log(`Transcription: `, transcription);
})

router.post('/speech', async function(req, res, next) {
  // Detects speech in the audio file
  console.log("got a speech request from client: ", req.body)
  const speech = req.body.audio
  console.log("speech: ", speech)
  const audio = {
    content: speech,
  };
  const request = {
    config: config,
    audio: audio,
  };
  try{
    console.log("about to send request")
    const [response] = await client.recognize(request);
    const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');
    console.log(`Transcription: `, transcription);

    res.send({"data":transcription})
  }catch(e){
    console.log(e)
  }
  
})

module.exports = router;