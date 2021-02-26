from Locators.locators import Locators


class CartPage:

    def __init__(self, driver):
        self.driver = driver
        self.cart_page_price_xpath = Locators.cart_page_price_xpath

    def cart_page_price(self):
        self.driver.find_element_by_xpath(self.cart_page_price_xpath).text
