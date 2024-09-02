---
layout: post
title: "LLM's can read a lot, but they can't write a lot"
---

![Feature Image](images/1724876819754.jpeg)

# Reality is LLM's can read a lot, but they can't write a lot

In the evolving world of AI, we keep hearing about how powerful language models (LLMs) have become. They can process vast amounts of text, learn from millions of examples, and generate coherent responses in a variety of contexts. But there’s a hidden limitation that often gets overlooked: while many LLMs can handle a huge number of input tokens (think of them as chunks of text), they often struggle to produce long outputs. In simple terms, they can read a lot, but they can't write as much as you might expect. 

## Why Does This Matter?

At first glance, this might not seem like a big deal. After all, most tasks we use LLMs for don’t require extremely long responses—usually, a few thousand words will do. But imagine a future where we want these models to write entire movie scripts, novels, or even complex research papers. Suddenly, this limitation becomes a significant roadblock.

## The Core Issue: Limited Training Data

So, why do LLMs hit this wall when it comes to output length? The answer lies in their training. The models are usually trained on data where the longest examples are about 2,000 words. Because of this, they get really good at producing outputs around that length, but they struggle to go much beyond it. It's like being a runner who’s trained for 5K races—no matter how fit they are, running a marathon is a different challenge altogether.

## Introducing AgentWrite: Breaking Through LLM's Output Limitations

To tackle this problem, researchers have come up with a smart solution called "AgentWrite." Think of it as a tool that helps LLMs manage their workload better. Instead of trying to write a massive document in one go, AgentWrite breaks down the task into smaller, more manageable parts. It’s like writing a book one chapter at a time, rather than trying to pen the whole thing in a single sitting. This method allows LLMs to generate much longer texts—over 20,000 words—with ease and coherence.

## The LongWriter-6k Dataset: Training for the Long Haul

With AgentWrite in action, the researchers created a new dataset called LongWriter-6k. This dataset is like a special training program for LLMs, filled with examples where the output ranges from 2,000 to 32,000 words. By feeding this dataset to the models, they learned to produce much longer outputs without losing the thread of the conversation or the quality of the writing. In fact, the models trained with LongWriter-6k can now generate over 10,000 words smoothly, opening up new possibilities for future applications.

## Setting a New Benchmark with LongBench-Write

To measure the success of their approach, the researchers introduced LongBench-Write, a new benchmark specifically designed to evaluate how well LLMs handle ultra-long generation tasks. And here’s the exciting part—their 9 billion parameter model, which was further fine-tuned using a technique called Direct Preference Optimization (DPO), outperformed even larger, proprietary models on this benchmark. This means that not only can these models generate longer texts, but they can do it better than ever before.

## What Does This Mean for the Future?

The advancements introduced by AgentWrite and the LongWriter-6k dataset mark a significant step forward in the capabilities of LLMs. We’re now closer than ever to a future where these models can take on more complex, long-form tasks, from writing entire books to crafting detailed reports. The ability to generate longer, high-quality outputs will open up new avenues for creativity, research, and communication.

In a nutshell, while today’s LLMs are already impressive, innovations like AgentWrite are pushing the boundaries even further. And as we continue to develop these models, the possibilities of what they can achieve are virtually limitless. 

So next time you read about AI-generated text, remember: the best is yet to come.

---

**Read the full paper here: [Link to the Paper](https://arxiv.org/pdf/2408.07055)**

