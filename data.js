// Edit this file to update the portfolio content.
window.PORTFOLIO = {
  "name": "Khushal Narsaria",
  "short": "khushal",
  "role": "AI & Software Engineer",
  "status": "Open to AI and software engineering roles · 2027 graduate",
  "roles": [
    "Generative AI Engineer",
    "Backend & Data Engineer",
    "Full-Stack Developer"
  ],
  "tagline": "I build AI systems and measure them: retrieval pipelines, text-to-SQL, LLM agents and a transformer written from scratch, on top of solid backend and data engineering.",
  "links": {
    "github": "https://github.com/Khushal-Narsaria",
    "linkedin": "https://www.linkedin.com/in/khushal-narsaria/",
    "email": "khushalnarsaria@gmail.com"
  },
  "terminal": {
    "name": "Khushal Narsaria",
    "role": "AI · Backend · Data",
    "stack": "Python · SQL · PyTorch · FastAPI",
    "based": "Chennai, India",
    "genai": "RAG · Agents · Text-to-SQL · Evals"
  },
  "stats": [
    {
      "value": "8.81",
      "label": "CGPA at SRM IST"
    },
    {
      "value": "2nd",
      "label": "place · Codefest Hackathon"
    },
    {
      "value": "130+",
      "label": "automated tests in CI"
    },
    {
      "value": "10+",
      "label": "industry certifications"
    }
  ],
  "about": [
    "I'm an <strong>AI and software engineer</strong> pursuing a B.Tech in Computer Science (AI &amp; ML) at SRM Institute of Science and Technology, graduating in 2027. I like systems whose quality can be measured, so my projects come with evaluations, baselines and tests.",
    "As a Data Engineering intern at <strong>Emoolar Technology</strong>, I built backend data pipelines and optimized PostgreSQL with indexing and normalization, improving query efficiency by 40%.",
    "I build with <strong>Next.js, React, Node.js, Tailwind CSS and SQL</strong>, plus Spring Boot, FastAPI and .NET — with AWS, Docker, Kubernetes and CI/CD. I care about data integrity and reliable systems."
  ],
  "facts": [
    {
      "icon": "pin",
      "label": "Location",
      "value": "Chennai, India"
    },
    {
      "icon": "cap",
      "label": "Education",
      "value": "B.Tech CSE (AI & ML) · CGPA 8.81"
    },
    {
      "icon": "brief",
      "label": "Latest role",
      "value": "Data Engineering Intern · Emoolar"
    },
    {
      "icon": "star",
      "label": "Achievement",
      "value": "Codefest Hackathon — 2nd Place"
    }
  ],
  "experience": [
    {
      "title": "Data Engineering Intern",
      "company": "Emoolar Technology Pvt Ltd",
      "date": "May 2025 – Jul 2025",
      "place": "Remote",
      "points": [
        "Built backend data pipelines and automation scripts in Python and C++ to transform, migrate and validate structured datasets, ensuring data integrity for downstream services.",
        "Optimized PostgreSQL database structures using indexing and normalization, improving query execution efficiency by 40% on high-traffic tables.",
        "Worked in a 5-person agile team using Git and Jira to debug integration issues and document technical changes, supporting on-time delivery."
      ],
      "tags": [
        "Python",
        "C++",
        "PostgreSQL",
        "Git",
        "Jira"
      ]
    }
  ],
  "projects": [
    {
      "title": "Retail Intelligence Platform",
      "subtitle": "A SQL warehouse you can question in plain English",
      "category": "Data + GenAI",
      "glyph": "£",
      "colors": [
        "#2a78d6",
        "#1baf7a"
      ],
      "featured": true,
      "image": "assets/projects/retail.jpg",
      "metric": {
        "value": "73%",
        "label": "text-to-SQL accuracy with three small models voting"
      },
      "points": [
        "SQL warehouse over 1,067,371 real retail transactions with 12 data-quality checks; PySpark and Delta Lake version.",
        "Text-to-SQL assistant: few-shot prompt, read-only query guard, self-repair and execution-guided voting.",
        "Accuracy on 70 questions: 47% zero-shot, 61% few-shot, 73% with voting; no unsafe request was executed.",
        "Repeat-purchase model (ROC AUC 0.80), demand forecast for 791 products, recommender, FastAPI; 55 tests in CI."
      ],
      "tags": [
        "Python",
        "SQL",
        "LLMs",
        "PySpark",
        "Delta Lake",
        "FastAPI"
      ],
      "github": "https://github.com/Khushal-Narsaria/Retail-Intelligence-Platform",
      "live": "https://khushal-narsaria.github.io/Retail-Intelligence-Platform/#ask-the-data"
    },
    {
      "title": "RAG Document QA",
      "subtitle": "Retrieval-augmented question answering, measured end to end",
      "category": "Generative AI",
      "glyph": "?",
      "colors": [
        "#4a3aa7",
        "#2a78d6"
      ],
      "featured": true,
      "image": "assets/projects/rag.jpg",
      "metric": {
        "value": "91.0%",
        "label": "right chunk in the top 5, over 10,570 questions"
      },
      "points": [
        "Chunking, embeddings, a FAISS vector store, BM25 written from scratch and hybrid retrieval.",
        "Chunk-size trade-off and exact vs approximate search measured on 10,570 questions.",
        "Three open-source LLMs run locally with few-shot and chain-of-thought prompts and cited JSON answers.",
        "Prompt-injection tests, hallucination checks, log redaction and a tool-using agent; 18 tests in CI."
      ],
      "tags": [
        "Python",
        "RAG",
        "FAISS",
        "LLMs",
        "Agents"
      ],
      "github": "https://github.com/Khushal-Narsaria/RAG-Document-QA",
      "live": "https://khushal-narsaria.github.io/RAG-Document-QA/"
    },
    {
      "title": "Meeting Assistant Agent",
      "subtitle": "LLM agents where judgement is needed, code where there is a right answer",
      "category": "Generative AI",
      "glyph": "AI",
      "colors": [
        "#0f766e",
        "#2563eb"
      ],
      "featured": true,
      "image": "assets/projects/meeting.jpg",
      "metric": {
        "value": "83–97%",
        "label": "deadlines right with a code tool, against 34–48% without"
      },
      "points": [
        "Three LLM agents in Agno: a validated-JSON action-item extractor plus recap and summary writers in parallel.",
        "A deterministic deadline tool replaces the model's date arithmetic; owners not in the notes are rejected.",
        "Measured on 18 hand-labelled meetings: 85% action-item F1 across three open-source models.",
        "Linear and Slack integrations with a dry-run mode; Streamlit app; 47 tests in CI."
      ],
      "tags": [
        "Python",
        "Agno",
        "LLMs",
        "Linear API",
        "Slack API",
        "Streamlit"
      ],
      "github": "https://github.com/Khushal-Narsaria/meeting_assistant_agent",
      "live": "https://khushal-narsaria.github.io/meeting_assistant_agent/"
    },
    {
      "title": "Mini GPT From Scratch",
      "subtitle": "A transformer language model and tokenizer, written by hand",
      "category": "Generative AI",
      "glyph": "∑",
      "colors": [
        "#0d366b",
        "#eb6834"
      ],
      "featured": true,
      "image": "assets/projects/minigpt.jpg",
      "metric": {
        "value": "41.8",
        "label": "validation perplexity, against 131.0 for a bigram model"
      },
      "points": [
        "Decoder-only transformer with hand-written causal multi-head self-attention; 940,800 parameters.",
        "Byte-pair tokenizer from scratch (1,024 tokens), also running in the browser.",
        "Training pipeline with AdamW, warm-up, cosine decay and gradient clipping; temperature, top-k and top-p sampling.",
        "Five ablations show context length and position embeddings matter most; 10 tests in CI."
      ],
      "tags": [
        "Python",
        "PyTorch",
        "Transformers",
        "BPE"
      ],
      "github": "https://github.com/Khushal-Narsaria/Mini-GPT-From-Scratch",
      "live": "https://khushal-narsaria.github.io/Mini-GPT-From-Scratch/"
    },
    {
      "title": "Procurement Analytics & Supplier Scorecard",
      "subtitle": "Spend, suppliers, savings and reorder policy",
      "category": "Data",
      "glyph": "₹",
      "colors": [
        "#0f6b52",
        "#c98a12"
      ],
      "metric": {
        "value": "40%",
        "label": "lower ordering + holding cost in a simulated backtest"
      },
      "points": [
        "Spend analysis (Pareto, ABC) and a weighted supplier scorecard, with metrics written in SQL.",
        "Runs on simulated data: 8,791 purchase-order lines, 40 suppliers, 120 materials.",
        "Safety stock, reorder point and EOQ per material; policy held 50% less stock at a 99.4% fill rate.",
        "Scorecard validated against hidden supplier behaviour; 9 tests in CI and a live dashboard."
      ],
      "tags": [
        "Python",
        "SQL",
        "pandas",
        "Supply chain",
        "Chart.js"
      ],
      "github": "https://github.com/Khushal-Narsaria/Procurement-Analytics-Supplier-Scorecard",
      "live": "https://khushal-narsaria.github.io/Procurement-Analytics-Supplier-Scorecard/",
      "image": "assets/projects/procurement.jpg"
    },
    {
      "title": "DSP Toolkit & Spectrum Analyzer",
      "subtitle": "Signal processing library + interactive lab",
      "category": "DSP",
      "glyph": "∿",
      "colors": [
        "#4f46e5",
        "#0891b2"
      ],
      "metric": {
        "value": "34",
        "label": "unit tests against theory"
      },
      "points": [
        "Radix-2 FFT, windowed-sinc FIR design, decimation & interpolation, correlation.",
        "AM/FM, ASK, BPSK and 16-QAM with Monte-Carlo BER vs theory.",
        "FFT and swept-tuned spectrum analyzers, accurate to 0.1 dB.",
        "C++17 core, MATLAB reference and an in-browser lab."
      ],
      "tags": [
        "C++17",
        "MATLAB",
        "FFT",
        "FIR",
        "Modulation"
      ],
      "github": "https://github.com/Khushal-Narsaria/DSP-Toolkit-Spectrum-Analyzer",
      "live": "https://khushal-narsaria.github.io/DSP-Toolkit-Spectrum-Analyzer/",
      "image": "assets/projects/dsp.jpg"
    },
    {
      "title": "GoCart",
      "subtitle": "Full-stack e-commerce platform",
      "category": "Full-Stack",
      "glyph": "{ }",
      "colors": [
        "#2f6fed",
        "#7c3aed"
      ],
      "metric": {
        "value": "50%",
        "label": "faster joins via indexing"
      },
      "points": [
        "Store with product browsing, cart and checkout using Next.js, Tailwind and Redux Toolkit.",
        "REST APIs on Next.js routes with idempotency and retry logic, handling 100+ daily transactions.",
        "Prisma schema and migrations on PostgreSQL/MySQL.",
        "NextAuth login, user dashboard and admin panel for products, users and orders."
      ],
      "tags": [
        "Next.js",
        "Node.js",
        "Tailwind",
        "Redux",
        "Prisma",
        "SQL"
      ],
      "github": "https://github.com/Khushal-Narsaria/GoCart-Fullstack-E-Commerce-Website",
      "live": "https://khushal-narsaria.github.io/GoCart-Fullstack-E-Commerce-Website/",
      "image": "assets/projects/gocart.jpg"
    },
    {
      "title": "Inventory & Order Management",
      "subtitle": "Warehouse and order system",
      "category": "Full-Stack",
      "glyph": "#",
      "colors": [
        "#4f46e5",
        "#0ea5e9"
      ],
      "metric": {
        "value": "CQRS",
        "label": "Clean Architecture · .NET 9"
      },
      "points": [
        "ASP.NET Core 9 Web API with Clean Architecture, CQRS (MediatR) and Repository pattern.",
        "Sales, purchase and warehouse modules: orders, returns, goods receipt, transfers, stock counts.",
        "ASP.NET Identity + JWT with role-based access; FluentValidation and Serilog.",
        "Vue.js + Razor Pages UI with stock and movement reports on SQL Server."
      ],
      "tags": [
        "ASP.NET Core",
        "C#",
        "EF Core",
        "SQL Server",
        "Vue.js"
      ],
      "github": "https://github.com/Khushal-Narsaria/Inventory-Order-Management-System",
      "live": "https://khushal-narsaria.github.io/Inventory-Order-Management-System/",
      "image": "assets/projects/inventory.jpg"
    },
    {
      "title": "Fashion Recommendation System",
      "subtitle": "Deep-learning visual recommendations",
      "category": "AI / ML",
      "glyph": "◎",
      "colors": [
        "#db2777",
        "#f59e0b"
      ],
      "metric": {
        "value": "92%",
        "label": "top-5 accuracy"
      },
      "points": [
        "ResNet classifier in TensorFlow on DeepFashion (289K+ images, 50 categories, 1,000 attributes).",
        "Modular pipeline: preprocessing, image processing, hyperparameter config, train/test scripts.",
        "Nearest-neighbor recommendations on CNN embeddings, cutting retrieval latency by 40%."
      ],
      "tags": [
        "Python",
        "TensorFlow",
        "ResNet",
        "k-NN"
      ],
      "github": "https://github.com/Khushal-Narsaria/Fashion-Recommendation-System",
      "live": "https://khushal-narsaria.github.io/Fashion-Recommendation-System/",
      "image": "assets/projects/fashion.jpg"
    }
  ],
  "skills": {
    "Generative AI": [
      "RAG",
      "Embeddings",
      "FAISS",
      "Hybrid retrieval",
      "Text-to-SQL",
      "Agents (Agno)",
      "Prompt engineering",
      "LLM evaluation",
      "Prompt-injection testing",
      "Llama · Qwen · Gemma",
      "Ollama"
    ],
    "Data Engineering": [
      "PySpark",
      "Delta Lake",
      "SQL warehouse",
      "Data-quality checks",
      "DuckDB"
    ],
    "Languages": [
      "JavaScript",
      "Python",
      "Java",
      "C#",
      "C++",
      "SQL / T-SQL"
    ],
    "Frontend": [
      "React.js",
      "Next.js",
      "Vue.js",
      "Tailwind CSS",
      "Redux Toolkit"
    ],
    "Backend": [
      "Node.js",
      "ASP.NET Core",
      "Spring Boot",
      "FastAPI",
      "REST API Design",
      "Prisma ORM"
    ],
    "Databases": [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "SQL Server",
      "Redis",
      "Indexing & Normalization"
    ],
    "Cloud & DevOps": [
      "AWS",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Linux",
      "Nginx",
      "Kafka"
    ],
    "Tools & AI": [
      "Git",
      "Jira",
      "PyTorch",
      "Hugging Face",
      "pytest",
      "GitHub Copilot"
    ]
  },
  "education": [
    {
      "school": "SRM Institute of Science and Technology",
      "date": "2023 – 2027",
      "degree": "B.Tech, Computer Science & Engineering (AI & ML) · Kattankulathur, Chennai",
      "score": "CGPA 8.81 / 10",
      "coursework": "DSA · Design & Analysis of Algorithms · DBMS · OOP · Operating Systems · Computer Networks · Software Engineering"
    },
    {
      "school": "Sri Chaitanya Jr College",
      "date": "2021 – 2023",
      "degree": "Class XII, MPC · Visakhapatnam, Andhra Pradesh",
      "score": "81.2%"
    }
  ],
  "certsTitle": "Certifications & Achievements",
  "certs": [
    "AWS Certified Cloud Practitioner",
    "Databricks Fundamentals · Databricks Generative AI Fundamentals",
    "Codefest Technical Hackathon — 2nd Place, SRM IST",
    "AWS Certified Developer – Associate",
    "Meta Back-End Developer Professional Certificate",
    "Oracle Certified Professional: MySQL 8.0 Database Developer",
    "MongoDB Associate Developer (Node.js)",
    "Microsoft Azure Fundamentals AZ-900 · Azure AI Fundamentals AI-900",
    "Microsoft Power BI Data Analyst PL-300 · Excel",
    "Google Data Analytics · OCI Generative AI"
  ],
  "contactText": "I'm looking for AI engineering and software engineering roles and internships. Whether you have an opportunity or just want to talk about a project, my inbox is open.",
  "skin": "grid",
  "workTitle": "Things I have built and measured",
  "workSub": "Each project ships with a live demo, tests in CI, and numbers for what works and what does not.",
  "contactTitle": "Let's build something."
};
