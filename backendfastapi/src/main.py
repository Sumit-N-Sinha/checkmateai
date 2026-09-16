from fastapi import FastAPI

app = FastAPI(
    title="Checkmate Authentication API",
    description="JWT-based user registration and authentication service.",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

@app.get("/")
def user_info():
    return {"message": "Hello, World!"}