# Music Bio Maker

## Description

This application leverages the [OpenAI](https://openai.com/api/) [GPT-3](https://beta.openai.com/docs/engines/gpt-3) API to generate short biographies of famous musicians or bands.

Bear in mind, the results the AI generate are anywhere from almost accurate, to non-sensical, depending on the [engine](https://beta.openai.com/docs/engines/gpt-3) that is chosen. Best results come from **Davinci** or **Curie**. 

## Technology

This web application was written using JavaScript, CSS, and HTML. It was bundled using Webpack and is hosted on [Netlify](www.netlify.com).

You may view a live version of this app [here](https://main--musicianbiomaker.netlify.app/).

## Notes

Rather than allowing the user to enter a longer prompt, this app appends their entry to this string:

> Tell me the origin story of the following musical artist:

I wanted the application to have a narrow scope of focus, and I found that using this structure allowed for that.

