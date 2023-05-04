from typing import List
from pydantic import BaseModel
from fastapi import APIRouter
import db

class Lane(BaseModel):
    id: str
    fallback_url: str

class LaneUpdateDto(BaseModel):
    id: str
    fallback_url: str

class LaneDeleteDto(BaseModel):
    id: str

router = APIRouter(
    prefix='/lane'
)

@router.get("/", response_model=List[Lane])
async def get_lanes():
    lanes = db.mongo.get_collection('lanes').find(
        filter={
        },
        sort=[
            ('id', 1)
        ],
        projection={
            '_id': 0
        }
    )
    
    return list(lanes)

@router.post("/")
async def update_lane(
    laneUpdateDto: LaneUpdateDto
):
    db.mongo.get_collection('lanes').update_one(
        filter={
            'id': laneUpdateDto.id
        },
        update={
            '$set': {
                'id': laneUpdateDto.id,
                'fallback_url': laneUpdateDto.fallback_url
            }
        },
        upsert=True
    )

@router.delete("/")
async def delete_lane(
    laneDeleteDto: LaneDeleteDto
):
    db.mongo.get_collection('lanes').delete_one(
        filter={
            'id': laneDeleteDto.id
        }
    )
    