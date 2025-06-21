import requests

OLLAMA_URL = "http://localhost:11434/api/chat"

def query_ollama(prompt: str, model: str = "llama3") -> str:
    """
    Sends a single-turn user prompt to a chat-tuned Ollama model.
    """
    payload = {
        "model": model,
        "messages": [
            { "role": "user", "content": prompt }
        ],
        "stream": False
    }

    response = requests.post(OLLAMA_URL, json=payload)
    response.raise_for_status()  # Raises HTTPError if response code is not 2xx
    return response.json()["message"]["content"].strip()
