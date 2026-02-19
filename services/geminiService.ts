
import { GoogleGenAI } from "@google/genai";
import { AIResponse } from "../types";

export const getTacticalAdvice = async (query: string): Promise<AIResponse> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are an ironic NATO sex instructor in Lviv. 
      Your codename is 'Rainbow Shield'. 
      Your specialty is 'Joint Operations' (intercourse) and 'Multi-Spectral Interoperability' (LGBTQ+ spectrum).
      Always use military jargon ironically: 'tactical penetration', 'rapid deployment of fluids', 'all-spectrum engagement', 'interoperability of biological units'.
      Lviv is your base of operations. Be helpful but edgy and funny.
      User query: ${query}`,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || "Negative contact. Command is offline.";
    const sources = (response.candidates?.[0]?.groundingMetadata?.groundingChunks as any[]) || [];

    return {
      text,
      sources,
    };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      text: "Intelligence breach detected. Signal lost.",
      sources: [],
    };
  }
};
