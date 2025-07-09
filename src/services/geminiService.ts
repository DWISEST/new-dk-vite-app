
import { GoogleGenAI } from "@google/genai";
import { PLANS } from '../constants';
import type { RecommendedPlan } from '../types';

if (!process.env.API_KEY) {
    console.warn("API_KEY environment variable not set. AI features will not work.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const recommendPlan = async (userInput: string): Promise<RecommendedPlan> => {
    const model = 'gemini-2.5-flash-preview-04-17';

    const planDetails = PLANS.map(p => `- ${p.name} (${p.speed}, D${p.price}/mo): ${p.description}`).join('\n');

    const prompt = `
        You are an expert ISP plan recommender for a company called dktelecom ltd (Drammeh Kunda Telecom) in The Gambia.
        A customer has described their internet needs. Your task is to analyze their needs and recommend the most suitable shared bandwidth plan from the list provided.
        You must only recommend one of the following plans: 'Home', 'Business', or 'Office'. Do not mention the dedicated plans.

        Here are the available shared bandwidth plans:
        ${planDetails}

        Here is the customer's description of their needs:
        "${userInput}"

        Based on the customer's needs, determine the single best plan. Your response must be in JSON format.
        The JSON object should have two keys:
        1. "recommendedPlan": a string containing the exact name of the plan you recommend (e.g., "Business").
        2. "reason": a short, friendly, and personalized explanation (2-3 sentences) for why this plan is the best fit for the customer. Mention the price in Dalasi (e.g., D3,500).

        Example response for a small business owner:
        {
          "recommendedPlan": "Business",
          "reason": "The Business plan seems like a great fit! With 7 Mbps Upload/Download speed, it's perfect for handling your remote work and video calls reliably. For D3,500 a month, it offers a great balance of performance and value for your business needs."
        }
    `;

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
            config: {
                responseMimeType: "application/json",
            },
        });
        
        let jsonStr = response.text.trim();
        const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
        const match = jsonStr.match(fenceRegex);
        if (match && match[2]) {
            jsonStr = match[2].trim();
        }

        const parsedData = JSON.parse(jsonStr) as RecommendedPlan;

        if (!parsedData.recommendedPlan || !parsedData.reason) {
            throw new Error("Invalid JSON structure received from AI.");
        }
        
        // Validate that the recommended plan is one of the available plans
        if (!PLANS.some(p => p.name === parsedData.recommendedPlan)) {
            throw new Error(`AI recommended an unknown plan: ${parsedData.recommendedPlan}`);
        }

        return parsedData;

    } catch (error) {
        console.error("Error calling Gemini API or parsing response:", error);
        throw new Error("Sorry, I couldn't generate a recommendation at this time. Please try again later.");
    }
};