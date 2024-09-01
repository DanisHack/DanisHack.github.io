---
layout: post
title: "LLM Evaluation, Training & Deployment"
---


## LLM Evaluation:
- [lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness) - A framework for few-shot evaluation of language models.
- [MixEval](https://github.com/Psycoy/MixEval) - A reliable click-and-go evaluation suite compatible with both open-source and proprietary models, supporting MixEval and other benchmarks.
- [lighteval](https://github.com/huggingface/lighteval) - a lightweight LLM evaluation suite that Hugging Face has been using internally.
- [OLMO-eval](https://github.com/allenai/OLMo-Eval) - a repository for evaluating open language models.
- [instruct-eval](https://github.com/declare-lab/instruct-eval) - This repository contains code to quantitatively evaluate instruction-tuned models such as Alpaca and Flan-T5 on held-out tasks.
- [simple-evals](https://github.com/openai/simple-evals) - Eval tools by OpenAI.
- [Giskard](https://github.com/Giskard-AI/giskard) - Testing & evaluation library for LLM applications, in particular RAGs
- [LangSmith](https://www.langchain.com/langsmith) - a unified platform from LangChain framework for: evaluation, collaboration HITL (Human In The Loop), logging and monitoring LLM applications.  
- [Ragas](https://github.com/explodinggradients/ragas) - a framework that helps you evaluate your Retrieval Augmented Generation (RAG) pipelines.

## LLM Training Frameworks

- [DeepSpeed](https://github.com/microsoft/DeepSpeed) - DeepSpeed is a deep learning optimization library that makes distributed training and inference easy, efficient, and effective.
- [Megatron-DeepSpeed](https://github.com/microsoft/Megatron-DeepSpeed) - DeepSpeed version of NVIDIA's Megatron-LM that adds additional support for several features such as MoE model training, Curriculum Learning, 3D Parallelism, and others. 
- [torchtune](https://github.com/pytorch/torchtune) - A Native-PyTorch Library for LLM Fine-tuning.
- [torchtitan](https://github.com/pytorch/torchtitan) - A native PyTorch Library for large model training.
- [Megatron-LM](https://github.com/NVIDIA/Megatron-LM) - Ongoing research training transformer models at scale.
- [Colossal-AI](https://github.com/hpcaitech/ColossalAI) - Making large AI models cheaper, faster, and more accessible.
- [BMTrain](https://github.com/OpenBMB/BMTrain) - Efficient Training for Big Models.
- [Mesh Tensorflow](https://github.com/tensorflow/mesh) - Mesh TensorFlow: Model Parallelism Made Easier.
- [maxtext](https://github.com/google/maxtext) - A simple, performant and scalable Jax LLM!
- [Alpa](https://alpa.ai/index.html) - Alpa is a system for training and serving large-scale neural networks.
- [GPT-NeoX](https://github.com/EleutherAI/gpt-neox) - An implementation of model parallel autoregressive transformers on GPUs, based on the DeepSpeed library.


## LLM Deployment

> Reference: [llm-inference-solutions](https://github.com/mani-kantap/llm-inference-solutions)
- [vLLM](https://github.com/vllm-project/vllm) - A high-throughput and memory-efficient inference and serving engine for LLMs.
- [TGI](https://huggingface.co/docs/text-generation-inference/en/index) - a toolkit for deploying and serving Large Language Models (LLMs).
- [exllama](https://github.com/turboderp/exllama) - A more memory-efficient rewrite of the HF transformers implementation of Llama for use with quantized weights.
- [llama.cpp](https://github.com/ggerganov/llama.cpp) - LLM inference in C/C++.
- [ollama](https://github.com/ollama/ollama) - Get up and running with Llama 3, Mistral, Gemma, and other large language models.
- [Langfuse](https://github.com/langfuse/langfuse) -  Open Source LLM Engineering Platform 🪢 Tracing, Evaluations, Prompt Management, Evaluations and Playground. 
- [FastChat](https://github.com/lm-sys/FastChat) - A distributed multi-model LLM serving system with web UI and OpenAI-compatible RESTful APIs.
- [mistral.rs](https://github.com/EricLBuehler/mistral.rs) - Blazingly fast LLM inference.
- [MindSQL](https://github.com/Mindinventory/MindSQL) - A python package for Txt-to-SQL with self hosting functionalities and RESTful APIs compatible with proprietary as well as open source LLM.
- [SkyPilot](https://github.com/skypilot-org/skypilot) - Run LLMs and batch jobs on any cloud. Get maximum cost savings, highest GPU availability, and managed execution -- all with a simple interface.
- [Haystack](https://haystack.deepset.ai/) - an open-source NLP framework that allows you to use LLMs and transformer-based models from Hugging Face, OpenAI and Cohere to interact with your own data. 
- [Sidekick](https://github.com/ai-sidekick/sidekick) - Data integration platform for LLMs.
- [QA-Pilot](https://github.com/reid41/QA-Pilot) - An interactive chat project that leverages Ollama/OpenAI/MistralAI LLMs for rapid understanding and navigation of GitHub code repository or compressed file resources.
- [Shell-Pilot](https://github.com/reid41/shell-pilot) - Interact with LLM using Ollama models(or openAI, mistralAI)via pure shell scripts on your Linux(or MacOS) system, enhancing intelligent system management without any dependencies.
- [LangChain](https://github.com/hwchase17/langchain) -  Building applications with LLMs through composability
- [Floom](https://github.com/FloomAI/Floom) AI gateway and marketplace for developers, enables streamlined integration of AI features into products
- [Swiss Army Llama](https://github.com/Dicklesworthstone/swiss_army_llama) - Comprehensive set of tools for working with local LLMs for various tasks.
- [LiteChain](https://github.com/rogeriochaves/litechain) - Lightweight alternative to LangChain for composing LLMs 
- [magentic](https://github.com/jackmpcollins/magentic) - Seamlessly integrate LLMs as Python functions
- [wechat-chatgpt](https://github.com/fuergaosi233/wechat-chatgpt) - Use ChatGPT On Wechat via wechaty
- [promptfoo](https://github.com/typpo/promptfoo) - Test your prompts. Evaluate and compare LLM outputs, catch regressions, and improve prompt quality.
- [Agenta](https://github.com/agenta-ai/agenta) -  Easily build, version, evaluate and deploy your LLM-powered apps.
- [Serge](https://github.com/serge-chat/serge) - a chat interface crafted with llama.cpp for running Alpaca models. No API keys, entirely self-hosted!
- [Langroid](https://github.com/langroid/langroid) - Harness LLMs with Multi-Agent Programming
- [Embedchain](https://github.com/embedchain/embedchain) - Framework to create ChatGPT like bots over your dataset.
- [CometLLM](https://github.com/comet-ml/comet-llm) - A 100% opensource LLMOps platform to log, manage, and visualize your LLM prompts and chains. Track prompt templates, prompt variables, prompt duration, token usage, and other metadata. Score prompt outputs and visualize chat history all within a single UI.
- [IntelliServer](https://github.com/intelligentnode/IntelliServer) - simplifies the evaluation of LLMs by providing a unified microservice to access and test multiple AI models.
- [OpenLLM](https://github.com/bentoml/OpenLLM) - Fine-tune, serve, deploy, and monitor any open-source LLMs in production. Used in production at [BentoML](https://bentoml.com/) for LLMs-based applications.
- [DeepSpeed-Mii](https://github.com/microsoft/DeepSpeed-MII) -  MII makes low-latency and high-throughput inference, similar to vLLM powered by DeepSpeed.
- [Text-Embeddings-Inference](https://github.com/huggingface/text-embeddings-inference) - Inference for text-embeddings in Rust, HFOIL Licence.
- [Infinity](https://github.com/michaelfeil/infinity) - Inference for text-embeddings in Python
- [TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM) - Nvidia Framework for LLM Inference
- [FasterTransformer](https://github.com/NVIDIA/FasterTransformer) - NVIDIA Framework for LLM Inference(Transitioned to TensorRT-LLM)
- [Flash-Attention](https://github.com/Dao-AILab/flash-attention) - A method designed to enhance the efficiency of Transformer models
- [Langchain-Chatchat](https://github.com/chatchat-space/Langchain-Chatchat) - Formerly langchain-ChatGLM, local knowledge based LLM (like ChatGLM) QA app with langchain.
- [Search with Lepton](https://github.com/leptonai/search_with_lepton) - Build your own conversational search engine using less than 500 lines of code by [LeptonAI](https://github.com/leptonai).
- [Robocorp](https://github.com/robocorp/robocorp) - Create, deploy and operate Actions using Python anywhere to enhance your AI agents and assistants. Batteries included with an extensive set of libraries, helpers and logging.
- [LMDeploy](https://github.com/InternLM/lmdeploy) - A high-throughput and low-latency inference and serving framework for LLMs and VLs
- [Tune Studio](https://studio.tune.app/) - Playground for devs to finetune & deploy LLMs
- [LLocalSearch](https://github.com/nilsherzig/LLocalSearch) - Locally running websearch using LLM chains
- [AI Gateway](https://github.com/Portkey-AI/gateway) — Gateway streamlines requests to 100+ open & closed source models with a unified API. It is also production-ready with support for caching, fallbacks, retries, timeouts, loadbalancing, and can be edge-deployed for minimum latency.
- [talkd.ai dialog](https://github.com/talkdai/dialog) - Simple API for deploying any RAG or LLM that you want adding plugins.
- [Wllama](https://github.com/ngxson/wllama) - WebAssembly binding for llama.cpp - Enabling in-browser LLM inference
- [GPUStack](https://github.com/gpustack/gpustack) - An open-source GPU cluster manager for running LLMs
