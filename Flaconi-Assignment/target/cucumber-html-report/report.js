$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/featureFiles/addToCartParfum.feature");
formatter.feature({
  "line": 1,
  "name": "Add to cart a random product from Parfum category",
  "description": "",
  "id": "add-to-cart-a-random-product-from-parfum-category",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Add to cart",
  "description": "",
  "id": "add-to-cart-a-random-product-from-parfum-category;add-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@addToCart"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "browser is open",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user go to the flaconi page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click on the perfume category",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user click on the perfume",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user redirected to the perfume detail page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "perfume added to the cart successfully",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "PageStepDefs.browser_is_open()"
});
formatter.result({
  "duration": 2710737800,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_go_to_the_flaconi_page()"
});
formatter.result({
  "duration": 10215158300,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_the_perfume_category()"
});
formatter.result({
  "duration": 106869600,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_the_perfume()"
});
formatter.result({
  "duration": 8662907900,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_redirected_to_the_perfume_detail_page()"
});
formatter.result({
  "duration": 10375600,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_add_to_the_cart_button()"
});
formatter.result({
  "duration": 160915300,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.perfume_added_to_the_cart()"
});
formatter.result({
  "duration": 90990800,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_close_the_browser()"
});
formatter.result({
  "duration": 979919500,
  "status": "passed"
});
formatter.after({
  "duration": 116500,
  "status": "passed"
});
formatter.uri("src/test/resources/featureFiles/cartPriceValidation.feature");
formatter.feature({
  "line": 1,
  "name": "To veirfy the correct price displayed on the cart page",
  "description": "",
  "id": "to-veirfy-the-correct-price-displayed-on-the-cart-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Product price validation",
  "description": "",
  "id": "to-veirfy-the-correct-price-displayed-on-the-cart-page;product-price-validation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@cartPriceValidation"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "browser is open",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user go to the flaconi page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click on the perfume category",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user click on the perfume",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user redirected to the perfume detail page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "perfume added to the cart successfully",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user validate that price is correct displaying on cart",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "PageStepDefs.browser_is_open()"
});
formatter.result({
  "duration": 1204920800,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_go_to_the_flaconi_page()"
});
formatter.result({
  "duration": 10859369800,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_the_perfume_category()"
});
formatter.result({
  "duration": 99205300,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_the_perfume()"
});
formatter.result({
  "duration": 7507358300,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_redirected_to_the_perfume_detail_page()"
});
formatter.result({
  "duration": 18937600,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_add_to_the_cart_button()"
});
formatter.result({
  "duration": 171360200,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.perfume_added_to_the_cart()"
});
formatter.result({
  "duration": 67036700,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_validate_that_price_is_correct()"
});
formatter.result({
  "duration": 39705700,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_close_the_browser()"
});
formatter.result({
  "duration": 836148200,
  "status": "passed"
});
formatter.after({
  "duration": 42900,
  "status": "passed"
});
formatter.uri("src/test/resources/featureFiles/mainMenuLinks.feature");
formatter.feature({
  "line": 1,
  "name": "Verify the main navigation menu links",
  "description": "",
  "id": "verify-the-main-navigation-menu-links",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Menu links verification",
  "description": "",
  "id": "verify-the-main-navigation-menu-links;menu-links-verification",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@menuLinksVerification"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "browser is open",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user go to the flaconi page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click on the BRANDS",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user click on the PERFUME",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click on the MAINTAINANCE",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user click on the MAKE UP",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on the HAIR",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click on the NATURE",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user click on the PREMIUM",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user click on the DRUGSTORE",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user click on the MEN",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user click on the NEW",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user click on the SALE",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user click on the FREE",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "PageStepDefs.browser_is_open()"
});
formatter.result({
  "duration": 1231223800,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_go_to_the_flaconi_page()"
});
formatter.result({
  "duration": 10226498900,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_the_BRANDS()"
});
formatter.result({
  "duration": 3369130000,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_the_PERFUME()"
});
formatter.result({
  "duration": 5798960300,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_the_MAINTAINANCE()"
});
formatter.result({
  "duration": 4866155000,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_the_MAKE_UP()"
});
formatter.result({
  "duration": 3912477800,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_the_HAIR()"
});
formatter.result({
  "duration": 3488029700,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_the_NATURE()"
});
formatter.result({
  "duration": 6357540900,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_the_PREMIUM()"
});
formatter.result({
  "duration": 6619413600,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_the_DRUGSTORE()"
});
formatter.result({
  "duration": 4647036400,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_the_MEN()"
});
formatter.result({
  "duration": 6142310600,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_the_NEW()"
});
formatter.result({
  "duration": 4605936300,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_the_SALE()"
});
formatter.result({
  "duration": 4424921900,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_the_FREE()"
});
formatter.result({
  "duration": 3438025400,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_close_the_browser()"
});
formatter.result({
  "duration": 859919700,
  "status": "passed"
});
formatter.after({
  "duration": 46500,
  "status": "passed"
});
});