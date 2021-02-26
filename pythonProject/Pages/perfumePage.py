from Locators.locators import Locators


class PerfumePage:

    def __init__(self, driver):
        self.driver = driver
        self.perfume_id = Locators.perfume_id

    def choose_perfume(self):
        self.driver.find_element_by_id(self.perfume_id ).click()
