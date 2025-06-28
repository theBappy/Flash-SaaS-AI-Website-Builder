import { inngest } from "./client";
import groq from "@/lib/groq";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    try {
      const completion = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: "You are an expert Next.js developer. You write readable, maintainable code. You write simple Next.js and React snippets.",
          },
          {
            role: "user",
            content: event.data.value, 
          }
        ],
        temperature: 0.7,
        max_tokens: 300,
      });

      const output = completion.choices[0]?.message?.content;
      return { output };
    } catch (error: any) {
      console.error("Groq API Full Error:", JSON.stringify(error, null, 2));
      console.error("Groq API Response Data:", JSON.stringify(error.response?.data, null, 2));
      throw error;
    }
  }
);
