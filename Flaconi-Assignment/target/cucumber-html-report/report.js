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
  "duration": 2281059400,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_go_to_the_flaconi_page()"
});
formatter.result({
  "duration": 4782817900,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_the_perfume_category()"
});
formatter.result({
  "duration": 131392200,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_the_perfume()"
});
formatter.result({
  "duration": 5708950900,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_redirected_to_the_perfume_detail_page()"
});
formatter.result({
  "duration": 115995600,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_add_to_the_cart_button()"
});
formatter.result({
  "duration": 460729800,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.perfume_added_to_the_cart()"
});
formatter.result({
  "duration": 162254900,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_close_the_browser()"
});
formatter.result({
  "duration": 981275600,
  "status": "passed"
});
formatter.after({
  "duration": 157300,
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
  "duration": 1182081300,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_go_to_the_flaconi_page()"
});
formatter.result({
  "duration": 3774100700,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_the_perfume_category()"
});
formatter.result({
  "duration": 102553700,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_the_perfume()"
});
formatter.result({
  "duration": 4384670600,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_redirected_to_the_perfume_detail_page()"
});
formatter.result({
  "duration": 116759900,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_add_to_the_cart_button()"
});
formatter.result({
  "duration": 438232400,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.perfume_added_to_the_cart()"
});
formatter.result({
  "duration": 218552400,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_validate_that_price_is_correct()"
});
formatter.result({
  "duration": 64517100,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_close_the_browser()"
});
formatter.result({
  "duration": 819401500,
  "status": "passed"
});
formatter.after({
  "duration": 17500,
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
  "duration": 1202942600,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_go_to_the_flaconi_page()"
});
formatter.result({
  "duration": 4494572700,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_the_BRANDS()"
});
formatter.result({
  "duration": 113632700,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_the_PERFUME()"
});
formatter.result({
  "duration": 99609400,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_the_MAINTAINANCE()"
});
formatter.result({
  "duration": 109276600,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_the_MAKE_UP()"
});
formatter.result({
  "duration": 4089329800,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_the_HAIR()"
});
formatter.result({
  "duration": 2756312100,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_the_NATURE()"
});
formatter.result({
  "duration": 5409700200,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_the_PREMIUM()"
});
formatter.result({
  "duration": 5321483300,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_the_DRUGSTORE()"
});
formatter.result({
  "duration": 2970747000,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_the_MEN()"
});
formatter.result({
  "duration": 2197093500,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_the_NEW()"
});
formatter.result({
  "duration": 2354284300,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_the_SALE()"
});
formatter.result({
  "duration": 2618613000,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_click_on_the_FREE()"
});
formatter.result({
  "duration": 2051660600,
  "status": "passed"
});
formatter.match({
  "location": "PageStepDefs.user_close_the_browser()"
});
formatter.result({
  "duration": 913261000,
  "status": "passed"
});
formatter.after({
  "duration": 35600,
  "status": "passed"
});
});