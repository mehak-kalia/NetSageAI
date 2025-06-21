from fastapi import APIRouter, Form
from fastapi.responses import JSONResponse
from ollama_client import query_ollama

router = APIRouter(prefix="/generate-config", tags=["Config Generator"])

@router.post("/")
async def generate_config(vendor: str = Form(...), intent: str = Form(...)):
    prompt = f"""You are a network engineer. Generate a {vendor} CLI configuration to achieve the following intent:

{intent}

Provide only CLI commands, without explanation."""
    
    config = query_ollama(prompt)
    return JSONResponse(content={"config": config})
