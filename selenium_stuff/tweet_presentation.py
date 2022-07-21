from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains

import random
import time

from multiprocessing import Process
import sys

PATH = r"C:\Users\user\Desktop\tweet_proj\selenium_stuff\chromedriver.exe"

def one_run(participantID):

    driver = webdriver.Chrome(PATH)

    driver.get("https://czh0923.github.io/tweet_presentation/")

    participant_id_box = driver.find_element(By.ID, "participantIdInput")
    enter_button = driver.find_element(By.ID, "enterButton")


    enterID_action = ActionChains(driver)
    enterID_action.click(on_element = participant_id_box)
    enterID_action.send_keys(participantID)
    enterID_action.pause(1)
    enterID_action.move_to_element(enter_button).click()
    enterID_action.perform()

    time.sleep(5)

    d_button = driver.find_element(By.ID, "D")
    r_button = driver.find_element(By.ID, "R")
    i_button = driver.find_element(By.ID, "I")
    o_button = driver.find_element(By.ID, "O")
    choice_buttons = [d_button, r_button, i_button, o_button]
    back_button = driver.find_element(By.ID, "backButton")
    next_button = driver.find_element(By.ID, "finalButton")

    for _ in range(5):
        time.sleep(2)
        choice_buttons[random.randint(0, 3)].click()
        time.sleep(2)
        next_button.click()
    
    time.sleep(2)
    driver.close()


def f1():
    print("start f1")
    for i in range(1, 5):
        one_run("p" + str(i))
    print("end f1")
def f2():
    print("start f2")
    for i in range(5, 10):
        one_run("p" + str(i))
    print("end f2")
def f3():
    print("start f3")
    for i in range(10, 15):
        one_run("p" + str(i)) 
    print("end f3")

if __name__=='__main__':
    p1 = Process(target = f1)
    p1.start()
    p2 = Process(target = f2)
    p2.start()
    p3 = Process(target = f3)
    p3.start()


