import os
from dotenv import load_dotenv
import json
import requests
load_dotenv()

AIRTABLE_TOKEN = os.getenv("AIRTABLE_TOKEN")
AIRTABLE_BASE_ID = os.getenv("AIRTABLE_BASE_ID")

AIRTABLE_URL = f"https://api.airtable.com/v0/{AIRTABLE_BASE_ID}"


new_data = {
    "records": [
        {
            "fields": {
                "Name": "added_name",
                "Notes": "no notes",
                "INT": 100
            }
        }
    ]
}

def add_new_row(data):
    url = f"{AIRTABLE_URL}/ex_tweets"
    headers = {
      'Authorization': f'Bearer {AIRTABLE_TOKEN}',
      'Content-Type': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data=json.dumps(data))

    print("add", response)
    return response

def get_rows():
    """Get scores to the Airtable."""
    url = f"{AIRTABLE_URL}/ex_tweets"
    headers = {
      'Authorization': f'Bearer {AIRTABLE_TOKEN}',
      'Content-Type': 'application/json'
    }

    response = requests.request("GET", url, headers=headers)

    print("get", response)

    return response

row = get_rows()
add_new_row(new_data)
