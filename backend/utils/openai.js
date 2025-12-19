import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

// API key is automatically read from process.env.GEMINI_API_KEY
const ai = new GoogleGenAI({});

const getGeminiAPIResponse = async (message) => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: message
        });

        return response.text; // reply
    } catch (err) {
        console.error("Gemini API Error:", err);
        return null;
    }
};

export default getGeminiAPIResponse;
 