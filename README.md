# Prior Authorization Copilot

This is a mock prior authorization AI copilot to enhance productivity of Utilization Review built in [Next.js](https://nextjs.org/).

## To Start

```bash
npm install
npm run dev
```

Then, nagivate to [http://localhost:3000](http://localhost:3000).

## Overview

Helper takes uploaded pdf record and guidelines and generates output (determination).

Display results from LLM pipeline along with reasoning provided.

Typical use case: Start at Question 1 and move to subsequent questions, until determination of approval.

## Requirements

- Display
  - Steps taken by AI
  - Evidence for each step
  - Reasoning used to decide subsequent steps
  - Determination summary
  - Clearly highlight if treatment criteria is met
- Constraints
  - Use mock stubs to simulate file uploads
  - Load example response from mock API if demonstrating loading states, otherwise load directly from JSON file
    record

## Approach

- Use zod for typing and validation
  - NOTE: due to time constraint, did not get to validating API responses
- Use NextJS with shadcn components for prototyping.
- Loose component structure:
  - Main page
  - PriorAuthorizationForm
    - UploadInput
  - DeterminationView
    - Header NOTE: make API call in this component
    - Step NODE: Display reasoning
      - OptionList
      - EvidenceList
      - LogicList
    - DecisionSummary
