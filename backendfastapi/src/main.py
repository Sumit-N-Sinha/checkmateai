from fastapi import FastAPI
from .routers.auth import router as auth_router
from .database import Base, engine
from .models import user

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Checkmate Authentication API",
    description="JWT-based user registration and authentication service.",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

app.include_router(auth_router)

@app.get("/")
def user_info():
    return {"message": "Hello, World!"}