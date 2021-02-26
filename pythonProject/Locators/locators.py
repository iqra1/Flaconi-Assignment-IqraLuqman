
class Locators:

    # HomePage elements
    accept_cookies_id = "uc-btn-accept-banner"
    perfume_category_xpath = "//*[@id='main-navigation']/ul/li[2]"

    # PerfumePage elements
    perfume_id = "80048918-C"

    # PerfumeDetailsPage elements
    price_xpath = "//ul[@class='product-list multiple-variants']/li[1]"
    add_to_cart_xpath = "//button[contains(text(),'In den Warenkorb')]"

    # cartPage elements
    cart_page_price_xpath="//div[@id='htmlData']//span[@class='price price-sale']"

    # mainMenu links elements
    main_menu_xpath = "//*[@id = 'main-navigation']//li//a[@data-webtrekk-link-id='header.nav']"

