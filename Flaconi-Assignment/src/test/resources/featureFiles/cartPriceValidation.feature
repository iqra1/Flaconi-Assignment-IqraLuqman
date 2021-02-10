Feature: To veirfy the correct price displayed on the cart page
@cartPriceValidation
	Scenario: Product price validation
			Given browser is open
			When user go to the flaconi page
			And user click on the perfume category
			And user click on the perfume
			And user redirected to the perfume detail page
			And user click on add to cart button
			And perfume added to the cart successfully
			And user validate that price is correct displaying on cart
			Then user close the browser
