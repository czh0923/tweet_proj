from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains

import random
import time

PATH = r"C:\Users\user\Desktop\tweet_proj\selenium_stuff\chromedriver.exe"

driver = webdriver.Chrome(PATH)

driver.get("https://czh0923.github.io/tweet_presentation/")

participant_id_box = driver.find_element(By.ID, "participantIdInput")
enter_button = driver.find_element(By.ID, "enterButton")


enterID_action = ActionChains(driver)
enterID_action.click(on_element = participant_id_box)
enterID_action.send_keys(random.randint(0, 1000000))
enterID_action.pause(1)
enterID_action.move_to_element(enter_button).click()
enterID_action.perform()


print("ok")