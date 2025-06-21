from fastapi import APIRouter, UploadFile
from fastapi.responses import JSONResponse
from ollama_client import query_ollama

router = APIRouter(prefix="/analyze", tags=["Log Analyzer"])

@router.post("/")
async def analyze_log(file: UploadFile):
    content = await file.read()
    log_text = content.decode()

    prompt = f"""You are a senior network engineer. Analyze the following router/switch log and list likely causes of failure:

{log_text}

Explain in bullet points."""
    
    diagnosis = query_ollama(prompt)
    return JSONResponse(content={"diagnosis": diagnosis})
