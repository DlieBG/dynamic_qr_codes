from fastapi import FastAPI
import lane, unique_part

app = FastAPI()

app.include_router(lane.router)
app.include_router(unique_part.router)
