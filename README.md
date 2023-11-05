# Generating a Promotional Tweet with Langchain and OpenAI

This example demonstrates how to use Langchain and OpenAI to generate a promotional tweet for a product based on a product description.

## Installation

Before you begin, make sure you have installed the following dependencies:

* Langchain
* OpenAI Python library
* Dotenv

## Creating an OpenAI Chat Model

First, you need to create an OpenAI Chat model instance. This will require your OpenAI API key.

```javascript
import { ChatOpenAI } from "langchain/chat_models/openai";
import 'dotenv/config'

const openAIApiKey = process.env.openAIApiKey;

const llm = new ChatOpenAI({ openAIApiKey })
```
## Defining a Prompt Template

Next, you need to define a prompt template for the tweet. This template will be used to generate the actual tweet.

```javascript
import { PromptTemplate } from "langchain/prompts";

const tweetTemplate = 'Generate a promotional tweet for a product, from this product description:{productdesc}';
const tweetPrompt = PromptTemplate.fromTemplate(tweetTemplate);

```

## Creating a Langchain Chain

Now, you can create a Langchain chain that will process the product description and generate the tweet.

```javascript
const tweetChain = tweetPrompt.pipe(llm);
```

## Generating the Tweet

Finally, you can invoke the Langchain chain to generate the tweet.

```JavaScript
const response = await tweetChain.invoke({ productdesc: 'Electric Bike' })
console.log(response.content);
```
## Execution & Output

Execute the code using
```JavaScript
node .\index.js
```

The output of the code will be a promotional tweet for an "electric bike" as product description 

```
Electric Bike: Ride the future with our stylish and eco-friendly electric bikes. Get yours today! #electricbike #ecofriendly #futureoftransportation

```
