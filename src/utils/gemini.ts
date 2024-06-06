import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function GeminiAI(url: string) {
  try {
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY!;
    if (!apiKey) {
      throw new Error(
        "API key is not defined. Please set the GEMINI_API_KEY environment variable.",
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Generate 3 short URL suggestions in camelCase maximum 12 characters / numbers format without slashes, hyphens, or numbers, for '${url}'. Exclude the top level domain. Then response it in json format example: {shortUrl:[urlOne],[urlTwo],[urlThree]}.`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = await response.text();
    text = text.replace(/```json|```/g, "");
    const json = JSON.parse(text);
    return json.shortUrl;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`[GoogleGenerativeAI Error]: ${error.message}`);
      if ((error as any).response) {
        const apiError = error as any;
        console.error(
          `Error fetching from API: ${apiError.response.status} ${apiError.response.statusText}`,
        );
      }
    } else {
      console.error(`[Unknown Error]: ${error}`);
    }
  }
}
