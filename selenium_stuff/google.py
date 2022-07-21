from selenium import webdriver
from selenium.webdriver.common.by import By

PATH = r"C:\Users\user\Desktop\tweet_proj\selenium_stuff\chromedriver.exe"

driver = webdriver.Chrome(PATH)

driver.get("https://www.google.com/")

search_box = driver.find_element(By.NAME, "q")

print(search_box)

search_box.send_keys("python")
search_box.submit()

