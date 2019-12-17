var express = require('express');
var router = express.Router();
const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const assistant = new AssistantV2({
  version: '2018-11-08',
  authenticator: new IamAuthenticator({
    apikey: 'd7Gfh-2Zlm0vOGKjz067jZtTx8yM8C6Y0vrMmwH_05VT',
  }),
  url: 'https://gateway.watsonplatform.net/assistant/api',
});

var assistant_id = 'f3d20759-dfa8-48ec-8f66-a18ea3d517ec'
var session_id = null

router.get('/:message', async function(req, res, next) {
	var userMessage = req.params.message
	if (session_id == null){
		var sessionData = await assistant.createSession({assistantId: assistant_id})
		session_id = sessionData["result"]["session_id"]
		var msg = await assistant.message({assistantId: assistant_id, sessionId: session_id,
			input: {
				'message_type': 'text',
				'text': userMessage
			}
		})

		res.send(msg["result"]["output"]["generic"][0]["text"])
	}

	else{
		var msg = await assistant.message({assistantId: assistant_id, sessionId: session_id,
			input: {
				'message_type': 'text',
				'text': userMessage
			}
		})
		res.send(msg["result"]["output"]["generic"][0]["text"])
	}
});


module.exports = router;
