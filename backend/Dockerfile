FROM python:3.10

WORKDIR /dynamic_qr_codes/backend

COPY requirements.txt .
RUN pip3 install -r requirements.txt

COPY *.py src/

WORKDIR /dynamic_qr_codes/backend/src

ENV TZ Europe/Berlin

EXPOSE 8083

CMD [ "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8083" ]
