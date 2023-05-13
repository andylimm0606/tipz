const axios = require('axios')
require('dotenv').config();

async function rateTip(user_tip){
	console.log(`The user tip is ${user_tip}`);
	const message = `Rate the following tip in terms of helping sustainability. Requirements: Your rating must be from 1 - 5, 1 being worst and 5 being best. You must not give a response outside of this range. Your response should be in JSON format, with the key being "rating" and "explanation", with the values being your rating and explanation respectively. Your explanation should not exceed one sentence. You should not include additional commentary before or after the json formatted response. The tip: ${user_tip}`
	try {
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "You are a helpful assistant." },
                    { role: "user", content: message },
                ],
            },
            {
				headers: {
					'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
					'Content-Type': 'application/json',
				  },
            }
        )

        const reply = response.data.choices[0].message.content
		return JSON.parse(reply)

    } catch (error) {
        console.error("Error:", error)
        return "error"
    }

}

module.exports = rateTip;