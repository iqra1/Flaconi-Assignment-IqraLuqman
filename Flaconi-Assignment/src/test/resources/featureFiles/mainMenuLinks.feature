Feature: Verify the main navigation menu links
@menuLinksVerification
	Scenario: Menu links verification
			Given browser is open
			When user go to the flaconi page
			And user click on the BRANDS
			And user click on the PERFUME
			And user click on the MAINTAINANCE
			And user click on the MAKE UP
			And user click on the HAIR
			And user click on the NATURE
			And user click on the PREMIUM
			And user click on the DRUGSTORE
			And user click on the MEN
			And user click on the NEW
			And user click on the SALE
			And user click on the FREE
			Then user close the browser
