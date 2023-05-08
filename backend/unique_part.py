from typing import List, Union
from pydantic import BaseModel
from fastapi import APIRouter
from fastapi.exceptions import HTTPException
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
    unique_parts = db.mongo.get_collection('unique_parts').find(
        filter={
        },
        sort=[
            ('id', 1)
        ],
        projection={
            '_id': 0
        }
    )
    
    return list(unique_parts)

@router.get("/{id}", response_model=List[UniquePart])
async def get_unique_part(
    id: str
):
    unique_part = db.mongo.get_collection('unique_parts').find_one(
        filter={
            'id': id
        },
        projection={
            '_id': 0
        }
    )

    if not unique_part:
        raise HTTPException(404)
    
    return unique_part

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
async def delete_unique_parts(
    uniquePartDeleteDto: UniquePartDeleteDto
):
    db.mongo.get_collection('unique_parts').delete_one(
        filter={
            'id': uniquePartDeleteDto.id
        }
    )
    