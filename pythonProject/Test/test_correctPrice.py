from Pages.homePage import HomePage
from Pages.perfumePage import PerfumePage
from Pages.perfumeDetailsPage import PerfumeDetailsPage
from Pages.cartPage import CartPage
from Base.base import Base
import pytest


@pytest.mark.usefixtures('set_up')
class TestCorrectPrice(Base):

    # pages initialization
    def test_correct_price_validation(self):
        driver = self.driver
        home = HomePage(driver)
        perfume = PerfumePage(driver)
        perfume_details = PerfumeDetailsPage(driver)
        cart_page = CartPage(driver)

    # home page - accept cookies and category selection
        home.accept_cookies()
        home.choose_category()

    # perfume page - perfume selection
        perfume.choose_perfume()

    # perfume details page - get price details and adding perfume to cart
        title = perfume_details.get_title()
        assert title == "Hugo Boss ALIVE Eau de Parfum bestellen | flaconi"
        price_on_page = perfume_details.get_perfume_price()
        perfume_details.click_add_to_cart()

    # cart page - validation of price on cart page
        price_on_cart = cart_page.cart_page_price()
        assert price_on_page == price_on_cart
