import CardMaker from "./CardMaker";
import Loader from "./Loader";
import { engineOptions } from "./index"
import { engineId } from "./index";

export default function FetchAPI(textInput) {
    const apiKey = process.env.AUTH_TOKEN;
    // let engineId = engineOptions.curie;
    const URI = `https://api.openai.com/v1/engines/${engineId}/completions`;

    const data = {
      prompt: `Tell me the origin story of the following musical artist: ${textInput}`,
      max_tokens: 256,
      temperature: 1,
    };

    if (textInput !== undefined) {
      Loader();
      fetch(URI, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify(data),
      }) 
      .then(response => response.json())
      .then(result => {  
          console.log(result);
          let bio = result.choices[0].text; 
          CardMaker(textInput, bio);
          })
      .catch(error => {
        document.getElementsByClassName("loader")[0].innerText = `Error: API not responding. OpenAI may be experiencing an outage at this time, or API key has expired.`
      })    
  }

};