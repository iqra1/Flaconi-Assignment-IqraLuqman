from pip._vendor import requests

from Pages.homePage import HomePage
from Pages.perfumePage import PerfumePage
from Pages.perfumeDetailsPage import PerfumeDetailsPage
from Base.base import Base
import pytest


@pytest.mark.usefixtures('set_up')
class TestAddToCart(Base):

    # pages Initialization
    def test_add_to_cart(self):
        driver = self.driver
        home = HomePage(driver)
        perfume = PerfumePage(driver)
        perfume_details = PerfumeDetailsPage(driver)

    # home page - accept cookies and category selection
        home.accept_cookies()
        home.choose_category()

    # perfume page - perfume selection
        perfume.choose_perfume()

    # perfume details page - validate correct page and then add perfume to cart
        title = perfume_details.get_title()
        assert title == "Hugo Boss ALIVE Eau de Parfum bestellen | flaconi"
        url = self.driver.current_url
        request_response = requests.head(url)
        status_code = request_response.status_code
        assert status_code == 200
        perfume_details.click_add_to_cart()
