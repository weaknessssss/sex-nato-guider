
import { GoogleGenAI } from "@google/genai";
import { AIResponse } from "../types";

export const getTacticalAdvice = async (query: string): Promise<AIResponse> => {
  // Use defensive check for process.env.API_KEY
  const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
  const ai = new GoogleGenAI({ apiKey: apiKey || "" });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Ти — іронічний секс-інструктор НАТО у Львові. Твій позивний 'Rainbow Shield'.
      Твоя спеціалізація: 'Операції глибокого проникнення' (статевий акт) та 'Багатоспектральна сумісність' (LGBTQ+).
      Використовуй військовий жаргон НАТО іронічно: 'тактичне введення', 'логістика презервативів', 'раптове розгортання біологічних рідин', 'спільні маневри в умовах підвищеної вологості'.
      Будь максимально іронічним, але професійним. Ти навчаєш людей перемагати на інтимному фронті згідно зі стандартами STANAG.
      Запит бійця: ${query}`,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || "Зв'язок з командним центром перервано. Спробуйте розгорнути антену пізніше.";
    const sources = (response.candidates?.[0]?.groundingMetadata?.groundingChunks as any[]) || [];

    return {
      text,
      sources,
    };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      text: "Помилка дешифрування. Перевірте свій ключ доступу до бази даних НАТО.",
      sources: [],
    };
  }
};
