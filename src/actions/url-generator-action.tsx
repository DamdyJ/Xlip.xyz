"use server";

import prisma from "@/lib/prisma";
import GeminiAI from "@/lib/gemini";
import { urlSchema } from "@/types/schema/url-schema";
import { generateRandomString } from "@/utils/random-string-generator";

export default async function urlGenerator(newUrl: unknown) {
  // Server Validation
  const result = urlSchema.safeParse(newUrl);

  if (!result.success) {
    const errorMessages = result.error.issues
      .map((issue) => issue.message)
      .join(", ");
    return {
      error: errorMessages,
    };
  }

  try {
    const suggestionName = await GeminiAI(result.data.url);
    if (!suggestionName || suggestionName.length < 3) {
      return {
        error: "Failed to generate suggestions",
      };
    }
    const minimalist = generateRandomString(4);
    const qrcode = generateRandomString(12);

    // Ensure all values are defined before attempting to create database entries
    const shortLinks = [
      suggestionName[0],
      suggestionName[1],
      suggestionName[2],
      minimalist,
      qrcode,
    ];
    if (shortLinks.some((link) => !link)) {
      throw new Error("One or more short links are undefined");
    }

    await prisma.link.createMany({
      data: shortLinks.map((link) => ({
        shortLink: link,
        redirect: result.data.url,
      })),
    });

    return {
      success: true,
      data: {
        aiSuggestion: [suggestionName[0], suggestionName[1], suggestionName[2]],
        minimalist,
        qrcode,
      },
    };
  } catch (error) {
    console.error("Error saving URL:", error);
    return {
      error: "An error occurred while saving the URL",
    };
  }
}
