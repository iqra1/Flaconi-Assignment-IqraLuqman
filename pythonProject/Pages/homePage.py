from Locators.locators import Locators


class HomePage:

    def __init__(self, driver):
        self.driver = driver
        self.accept_cookies_id = Locators.accept_cookies_id
        self.perfume_category_xpath = Locators.perfume_category_xpath

    def accept_cookies(self):
        self.driver.find_element_by_id(self.accept_cookies_id).click()

    def choose_category(self):
        self.driver.find_element_by_xpath(self.perfume_category_xpath).click()
