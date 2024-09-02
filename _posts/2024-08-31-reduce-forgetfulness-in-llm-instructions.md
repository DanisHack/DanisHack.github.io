![Feature Image](images/1725278428243.jpeg)

> Boost Your LLM Accuracy with "Writing in the Margins"

Let's talk about something we all face when working with Large Language Models (LLMs) – the more instructions you add, the worse they seem to perform. It’s like trying to juggle more and more balls; eventually, something’s going to drop. But what if I told you there’s a way to keep everything in the air, no matter how complex your prompt gets? Enter "Writing in the Margins."

## The Problem with Long Prompts

When you keep adding details to your LLM prompts, the model starts to struggle. It’s as if the model is trying to hold onto too much information at once, and the result? It forgets some of the details. Imagine trying to remember a grocery list that just keeps getting longer and longer; eventually, you’re going to forget the milk or eggs. This is where "Writing in the Margins" comes in to save the day.

## What Exactly is "Writing in the Margins"?

Okay, so picture this: you have a super long prompt, kind of like a big, complicated story. Normally, the LLM uses something called the chunked prefill method to break that story into manageable parts, or "chunks." It processes each chunk one at a time, updating its memory (the KV cache) as it goes. This is supposed to help the model handle long prompts without running out of memory, but it doesn’t always keep everything straight. Important details can slip through the cracks.

Now, here’s where "Writing in the Margins" switches things up:

1. **Breaking It Down**: Just like before, the prompt is divided into segments. But instead of just moving on to the next chunk, this method adds a little twist.

2. **Extractive Instructions**: Each segment gets an extractive instruction – think of it as a mini-summary or a note in the margin of your book. These are called "margins." They’re checked to make sure they’re still on point with the task.

3. **Building It Back Up**: Once the model has these "margins," it combines the relevant ones and puts them back into the context. This way, nothing gets forgotten along the way, and the final instruction has all the info it needs to get things right.

## Why Does This Matter?

This approach does more than just sound cool; it actually works. "Writing in the Margins" boosts the model’s performance by over 7.5% in tasks that require multi-step thinking, like solving a problem that needs you to remember details from earlier steps. It gets even better with tasks that involve combining information from different parts of the prompt – here, the improvement is more than 30%.

## The Takeaway

If you’re working with LLMs, especially on tasks with long prompts or complex instructions, "Writing in the Margins" is like giving your model a cheat sheet. It helps the model keep track of everything, remember the important stuff, and deliver better results. So next time you’re trying to get your LLM to do some heavy lifting, remember – a little margin writing can go a long way.

[Read the full paper here](https://arxiv.org/pdf/2408.14906)
