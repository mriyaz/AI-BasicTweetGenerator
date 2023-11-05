import { ChatOpenAI } from "langchain/chat_models/openai";
import { PromptTemplate } from "langchain/prompts";
import 'dotenv/config'

const openAIApiKey = process.env.openAIApiKey;

const llm = new ChatOpenAI({ openAIApiKey });

const tweetTemplate = 'Generate a promotional tweet for a product, from this product description:{productdesc}';
const tweetPrompt = PromptTemplate.fromTemplate(tweetTemplate)
const tweetChain = tweetPrompt.pipe(llm);

const response = await tweetChain.invoke({ productdesc: 'Electric Bike' })
console.log(response.content);