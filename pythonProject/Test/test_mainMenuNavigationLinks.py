from pip._vendor import requests

from Pages.homePage import HomePage
from Pages.mainMenuPage import MainMenu
from Base.base import Base
import pytest


@pytest.mark.usefixtures('set_up')
class TestMainNavigationLinks(Base):

    def test_menu_links(self):
        driver = self.driver
        home = HomePage(driver)
        menu = MainMenu(driver)

        # home page - accept cookies
        home.accept_cookies()

        # Navigating to all main menu links
        menu.main_menu_links_navigator()