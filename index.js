const express = require("express");
const app = express();
app.use(express.json());
app.post("/api/transform", (req, res) => {
  const { sentence } = req.body;
  // Validate input
  if (!sentence || typeof sentence !== "string") {
    return res.status(400).json({ error: "Please provide a valid sentence" });
  }
 // Split sentence into words
  const words = sentence.trim().split(/\s+/);
 // Get unique words (case-insensitive)
  const uniqueWords = Array.from(
    new Set(words.map((word) => word.toLowerCase()))
  );

  // Reverse the word order
  const reversedSentence = words.slice().reverse().join(" ");

  return res.json({
    word_count: words.length,
    unique_words: uniqueWords,
    reversed_sentence: reversedSentence,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
