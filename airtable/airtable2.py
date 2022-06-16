from airtable import Airtable

base_id = "app0HYDUVfrBVLFV2"
table_name = "ex_tweets"
api_key = "keyQUcYkOoAkjWXTV"

airtable = Airtable(base_id, table_name, api_key)

getData = airtable.get_all()
def insert():
    insertData = airtable.insert({'Name': 'czh'})

# print(getData)
# print(insertData)

def update():
    record = airtable.match("Name", "name1")
    fields = {"INT":500}
    #airtable.replace(record["id"], fields)
    airtable.update(record["id"], fields)

update()
