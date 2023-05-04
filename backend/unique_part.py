from typing import List, Union
from pydantic import BaseModel
from fastapi import APIRouter
import db

class KeyValueData(BaseModel):
    key: str
    value: str

class LinkData(BaseModel):
    name: str
    url: str

class ImageData(BaseModel):
    alt: str
    src: str

class UniquePart(BaseModel):
    id: str
    data: List[Union[KeyValueData, LinkData, ImageData]]

class UniquePartUpdateDto(BaseModel):
    id: str
    data: List[Union[KeyValueData, LinkData, ImageData]]

class UniquePartDeleteDto(BaseModel):
    id: str

router = APIRouter(
    prefix='/unique-part'
)

@router.get("/", response_model=List[UniquePart])
async def get_unique_parts():
    lanes = db.mongo.get_collection('unique_parts').find(
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
async def update_unique_part(
    uniquePartUpdateDto: UniquePartUpdateDto
):
    db.mongo.get_collection('unique_parts').update_one(
        filter={
            'id': uniquePartUpdateDto.id
        },
        update={
            '$set': {
                'id': uniquePartUpdateDto.id,
                'data': [dict(entry) for entry in uniquePartUpdateDto.data]
            }
        },
        upsert=True
    )

@router.delete("/")
async def delete_lane(
    uniquePartDeleteDto: UniquePartDeleteDto
):
    db.mongo.get_collection('unique_parts').delete_one(
        filter={
            'id': uniquePartDeleteDto.id
        }
    )
    