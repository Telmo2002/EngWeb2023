import json
import requests

# Load JSON file
with open("dataset-extra1.json") as d:
    pessoas = json.load(d)
    pessoas = pessoas["pessoas"]

# Loop through all people
for person in pessoas:
    # Change the key "id" to "_id" for MongoDB compatibility
    person["_id"] = person["id"]
    person.pop("id")

    # Check if the person already exists in the database
    exists = requests.get("http://localhost:3000/pessoas/" + person["_id"])

    if exists.status_code == 404:
        # Insert the new record
        requests.post("http://localhost:3000/pessoas", json=person)
    else:
        # Update the existing record in the database
        requests.put("http://localhost:3000/pessoas/" + person["_id"], json=person)    