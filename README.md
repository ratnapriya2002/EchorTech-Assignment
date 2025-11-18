Sentence Transformer API

This is a small Express.js API that takes a sentence and returns:

Total number of words

List of unique words

The sentence in reverse word order

It’s a simple project to demonstrate working with Express, JSON parsing, and basic text manipulation.

Features

Accepts a sentence through a POST request

Counts total words

Extracts unique words (case-insensitive)

Reverses the sentence

Clean and easy-to-read Express.js code

Technologies Used

Node.js

Express.js

Installation & Setup

Follow these steps to run the project locally:

1.Clone the repository
git clone <your-repo-link>

2.Move into the project folder
cd your-project-folder

3️. Install dependencies
npm install

4️. Start the server
node index.js


(Replace index.js with your file name if different.)

 How to Test the API

You can test the API using Postman, Thunder Client, or cURL.

Endpoint
POST /api/transform

Request Body (JSON)
{
  "sentence": "Hello world this is a test"
}

Example Response
{
  "word_count": 6,
  "unique_words": ["hello", "world", "this", "is", "a", "test"],
  "reversed_sentence": "test a is this world Hello"
}

📁 Project Structure
.
├── index.js
├── package.json
└── README.md
