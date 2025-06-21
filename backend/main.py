from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import analyze, config_gen

app = FastAPI(title="NetSageAI - GenAI Network Assistant")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(analyze.router)
app.include_router(config_gen.router)
