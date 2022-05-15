import CardMaker from "./CardMaker";
import Loader from "./Loader";

export default function FetchAPI(textInput) {

    const apiKey = `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`;
    const engineId= `text-curie-001`;
    const URI = `https://api.openai.com/v1/engines/${engineId}/completions`;

    const data = {
      prompt: `Tell me the origin story of the following musical artist: \n: ${textInput}`,
      max_tokens: 200,
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
          let bio = result.choices[0].text; 
          CardMaker(textInput, bio);
          })
      .catch(error => {
        console.log("error, please try again");
      })    
  }

};