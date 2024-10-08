const express = require("express");
const app = express();
const port = 4000;

const data = {
  "What does the eligibility verification agent (EVA) do?":
    "EVA automates the process of verifying a patient's eligibility and benefits information in real-time, eliminating manual data entry errors and reducing claim rejections.",
  "What does the claims processing agent (CAM) do?":
    "CAM streamlines the submission and management of claims, improving accuracy, reducing manual intervention, and accelerating reimbursements.",
  "How does the payment posting agent (PHIL) work?":
    "PHIL automates the posting of payments to patient accounts, ensuring fast, accurate reconciliation of payments and reducing administrative burden.",
  "Tell me about Thoughtful AI's Agents.":
    "Thoughtful AI provides a suite of AI-powered automation agents designed to streamline healthcare processes. These include Eligibility Verification (EVA), Claims Processing (CAM), and Payment Posting (PHIL), among others.",
  "What are the benefits of using Thoughtful AI's agents?":
    "Using Thoughtful AI's Agents can significantly reduce administrative costs, improve operational efficiency, and reduce errors in critical processes like claims management and payment posting.",
};

app.use(express.json());

app.post("/ask", (req, res) => {
  const userQuestion = req.body.question;

  const response =
    data[userQuestion] ||
    "I'm sorry, I don't have an answer for that. Please ask about Thoughtful AI's services.";

  res.json({ answer: response });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
