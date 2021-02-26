from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
from Locators.locators import Locators


class PerfumeDetailsPage:

    def __init__(self, driver):
        self.driver = driver
        self.add_to_cart_xpath = Locators.add_to_cart_xpath
        self.price_xpath= Locators.price_xpath

    def click_add_to_cart(self):
        self.driver.find_element_by_xpath(self.add_to_cart_xpath).click()

    def get_perfume_price(self):
        self.driver.find_element_by_xpath(self.price_xpath).text

    def get_title(self):
        WebDriverWait(self.driver, 10).until(EC.title_contains("flaconi"))
        return self.driver.title

