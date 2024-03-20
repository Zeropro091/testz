import OpenAI from "openai"

const openai = new OpenAI({
    apiKey: 
    "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"
});

const result = 
await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
        {
            role: "user",
            content: "name 1 country in europe",
        },
    ],
});

console.log(result.choices[0].message.content);
