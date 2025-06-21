
# 🧠 NetSageAI

NetSageAI is a Generative AI-powered assistant for network engineers. It diagnoses network issues from router logs and generates vendor-specific CLI configurations using open-source LLMs like `llama3` via [Ollama](https://ollama.com).

<p align="center">
  <img src="https://img.shields.io/badge/Built%20With-FastAPI%20%7C%20React%20%7C%20Ollama-0A0A0A?style=flat&logo=vercel&logoColor=white" alt="stack badge" />
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="license badge" />
</p>

---

<pre lang="md"> ## 🖼️ Screenshot Here’s a preview of the **NetSageAI** web app: ![NetSageAI Screenshot](assets/ChatGPT Image Jun 21, 2025, 05_34_00 PM.png) </pre>

## ✨ Features

- 📄 Upload router log files and receive AI-powered diagnosis  
- ⚙️ Generate vendor-style CLI configurations based on your intent  
- 🧠 Uses local open-source LLMs (`llama3`, `mistral`) via Ollama  
- 🧩 FastAPI backend and React frontend with Tailwind styling  
- 🔐 Fully offline and private — no OpenAI API required  

---

## 📁 Project Structure

```
NetSageAI/
├── backend/
│   ├── main.py                  # FastAPI entrypoint
│   ├── ollama_client.py         # LLM integration via /api/chat
│   ├── routers/
│   │   ├── analyze.py           # /analyze endpoint logic
│   │   └── generate_config.py   # /generate-config endpoint
│   └── data/
│       └── sample_logs/         # Sample router logs
├── frontend/                    # React + Tailwind UI
├── README.md
└── requirements.txt
```

---

## 🚀 Getting Started

### 1️⃣ Backend Setup

#### 🧰 Requirements

- Python 3.9+
- Ollama installed (`brew install ollama`)
- LLM pulled locally (e.g. `llama3`)

#### 🔧 Instructions

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# In another terminal
ollama serve            # Start Ollama server
ollama pull llama3      # Pull the LLM

# Back in backend terminal
uvicorn main:app --reload
```

> FastAPI will be running at: `http://localhost:8000`

---

### 2️⃣ Frontend Setup

#### 🧰 Requirements

- Node.js 18+ (recommended via `nvm` or `brew install node`)

#### 🔧 Instructions

```bash
cd frontend
npm install
npm run dev
```

> Frontend runs at: `http://localhost:5173`

---

## 🧪 API Reference

### 🔍 POST `/analyze`

Analyze uploaded network log file and return possible issues.

#### Request:
```bash
POST /analyze
Content-Type: multipart/form-data
file: <router_log.txt>
```

#### Response:
```json
{
  "diagnosis": "OSPF neighbor down event detected on Fa0/1 due to interface flap."
}
```

---

### ⚙️ POST `/generate-config`

Generate vendor-style CLI configuration from user intent.

#### Request:
```bash
POST /generate-config
Content-Type: multipart/form-data
vendor: Cisco
intent: Configure OSPF on interface Gi0/1 in area 0
```

#### Response:
```json
{
  "config": "interface Gi0/1\n ip ospf 1 area 0\n ip address ..."
}
```

---

## 🔒 Privacy First

All data is processed locally — no external API calls. This project runs 100% offline using models served by Ollama.

---

## 📌 Roadmap

- [x] Log file diagnosis via LLM
- [x] Vendor-specific config generation
- [ ] Chat memory support
- [ ] Model selector UI (llama3, mistral, etc.)
- [ ] Docker container for fullstack setup
- [ ] Export config as `.txt` or `.conf` file

---

## 🧑‍💻 Author

**Mehak Kalia**  
💼 Generative AI & Networking Projects  
📫 [LinkedIn](https://www.linkedin.com/in/mehak-kalia) | 🛠️ [GitHub](https://github.com/mehakkalia)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
```
