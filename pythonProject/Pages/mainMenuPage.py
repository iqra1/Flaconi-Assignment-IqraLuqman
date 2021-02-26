import time
from pip._vendor import requests
from Locators.locators import Locators


class MainMenu:

    def __init__(self, driver):
        self.driver = driver
        self.accept_cookies_id = Locators.accept_cookies_id
        self.main_menu_xpath = Locators.main_menu_xpath

    def accept_cookies(self):
        self.driver.find_element_by_id(self.accept_cookies_id).click()

    def main_menu_links_navigator(self):
        html_list = self.driver.find_elements_by_xpath(self.main_menu_xpath)
        print(len(html_list))
        for i, _j in enumerate(html_list):
            html_list = self.driver.find_elements_by_xpath(self.main_menu_xpath)
            html_list[i].click()
            time.sleep(5)
            url = self.driver.current_url
            request_response = requests.head(url)
            status_code = request_response.status_code
            assert status_code == 200
            title = self.driver.title
            print(title + " :: -> Link is up and working fine")
