Feature:  Add to cart a random product from Parfum category
@addToCart
	Scenario: Add to cart
			Given browser is open
			When user go to the flaconi page
			And user click on the perfume category
			And user click on the perfume
			And user redirected to the perfume detail page
			And user click on add to cart button
			And perfume added to the cart successfully
			Then user close the browser
