package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import pageFactory.AddToCartParfum;
import pageFactory.CartPriceValidation;
import pageFactory.MainMenuLinks;

public class PageStepDefs 
{
	public String URL="https://www.flaconi.de/";
	public static WebDriver webdriver = null;
	WebDriverWait wait;
	private static Logger log = LogManager.getLogger(PageStepDefs.class);
	String rootPath = System.getProperty("user.dir");
	String chromeDriverPath = "\\driver\\chromedriver.exe";


	@Given("^browser is open$")
	public void browser_is_open() throws Throwable {
		String browserName = "google chrome";
		log.info("Browser is: " + browserName);
		System.setProperty("webdriver.chrome.driver", rootPath+chromeDriverPath);
		webdriver = new ChromeDriver();
		log.info("Browser is googleChrome");

	}

	@When("^user go to the flaconi page$")
	public void user_go_to_the_flaconi_page() throws Throwable {
		webdriver.get(URL);
		webdriver.manage().window().maximize();
		webdriver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
		AddToCartParfum addToCart=new AddToCartParfum(webdriver);
		Thread.sleep(500);
		addToCart.accept_Cookies();
		webdriver.getWindowHandle();

	}

	@And("^user click on the perfume category$")
	public void user_click_on_the_perfume_category() throws Throwable {

		AddToCartParfum addToCart=new AddToCartParfum(webdriver);
		addToCart.click_On_Perfume_Category();
	}

	@And("^User scroll down to the perfume$")
	public void User_scroll_down_to_the_page() throws Throwable {
		AddToCartParfum addToCart=new AddToCartParfum(webdriver);
		JavascriptExecutor js = (JavascriptExecutor) webdriver;
		js.executeScript("arguments[0].scrollIntoView(true);",addToCart.category_Perfume);

	}

	@And("^user click on the perfume$")
	public void user_click_on_the_perfume() throws Throwable {
		AddToCartParfum addToCart=new AddToCartParfum(webdriver);
		addToCart.click_On_Perfume();

	}

	@And("^user redirected to the perfume detail page$")
	public void user_redirected_to_the_perfume_detail_page() throws Throwable {
		String title=webdriver.getTitle();
		Assert.assertEquals(title, "CHANEL Bleu de Chanel Eau de Parfum bestellen | flaconi");
		log.info("CHANEL Bleu de Chanel Eau de Parfum bestellen | flaconi");


	}

	@And("^user click on add to cart button$")
	public void user_click_on_add_to_the_cart_button() throws Throwable {
		AddToCartParfum addToCart=new AddToCartParfum(webdriver);
		addToCart.click_Add_To_Cart();
		String price=addToCart.price_Details();
		log.info("price of perfume is: " + price);

	}

	@And("^perfume added to the cart successfully$")
	public void perfume_added_to_the_cart() throws Throwable {
		AddToCartParfum addToCart=new AddToCartParfum(webdriver);
		String cart_Message= addToCart.item_added_message();
		Assert.assertEquals(cart_Message, "1 Artikel wird in den Warenkorb gelegt.");
		log.info("Perfume added to the cart successfully.");

	}

	@And("^user validate that price is correct displaying on cart$")
	public void user_validate_that_price_is_correct() throws Throwable {
		AddToCartParfum addToCart=new AddToCartParfum(webdriver);
		CartPriceValidation priceValidation=new CartPriceValidation(webdriver);
		String perfume_price=addToCart.price_Details();
		log.info("price of perfume is: " + perfume_price);
		String price_On_Cart=priceValidation.price_On_Cart();
		log.info("price of perfume displaying on cart: " + price_On_Cart);
		Assert.assertEquals(perfume_price,price_On_Cart);
	}


	@And("^user click on the BRANDS$")
	public void user_click_on_the_BRANDS() throws Throwable {
		waitForLoad(webdriver);
		MainMenuLinks mainMenu=new MainMenuLinks(webdriver);
		mainMenu.click_On_Brands();

	}

	@And("^user click on the PERFUME$")
	public void user_click_on_the_PERFUME() throws Throwable {
		waitForLoad(webdriver);
		MainMenuLinks mainMenu=new MainMenuLinks(webdriver);
		mainMenu.click_On_Perfume();

	}

	@And("^user click on the MAINTAINANCE$")
	public void user_click_on_the_MAINTAINANCE() throws Throwable {
		waitForLoad(webdriver);
		MainMenuLinks mainMenu=new MainMenuLinks(webdriver);
		mainMenu.click_On_Maintenance();

	}

	@And("^user click on the MAKE UP$")
	public void user_click_on_the_MAKE_UP() throws Throwable {
		waitForLoad(webdriver);
		MainMenuLinks mainMenu=new MainMenuLinks(webdriver);
		mainMenu.click_On_MakeUp();

	}

	@And("^user click on the HAIR$")
	public void user_click_on_the_HAIR() throws Throwable {
		waitForLoad(webdriver);
		MainMenuLinks mainMenu=new MainMenuLinks(webdriver);
		mainMenu.click_On_Hair();

	}

	@And("^user click on the NATURE$")
	public void user_click_on_the_NATURE() throws Throwable {
		waitForLoad(webdriver);
		MainMenuLinks mainMenu=new MainMenuLinks(webdriver);
		mainMenu.click_On_Nature();

	}

	@And("^user click on the PREMIUM$")
	public void user_click_on_the_PREMIUM() throws Throwable {
		waitForLoad(webdriver);
		MainMenuLinks mainMenu=new MainMenuLinks(webdriver);
		mainMenu.click_On_Premium();

	}

	@And("^user click on the DRUGSTORE$")
	public void user_click_on_the_DRUGSTORE() throws Throwable {
		waitForLoad(webdriver);
		MainMenuLinks mainMenu=new MainMenuLinks(webdriver);
		mainMenu.click_On_DrugStore();

	}

	@And("^user click on the MEN$")
	public void user_click_on_the_MEN() throws Throwable {
		waitForLoad(webdriver);
		MainMenuLinks mainMenu=new MainMenuLinks(webdriver);
		mainMenu.click_On_Men();

	}

	@And("^user click on the NEW$")
	public void user_click_on_the_NEW() throws Throwable {
		waitForLoad(webdriver);
		MainMenuLinks mainMenu=new MainMenuLinks(webdriver);
		mainMenu.click_On_New();

	}

	@And("^user click on the SALE$")
	public void user_click_on_the_SALE() throws Throwable {
		waitForLoad(webdriver);
		MainMenuLinks mainMenu=new MainMenuLinks(webdriver);
		mainMenu.click_On_Sale();

	}

	@And("^user click on the FREE$")
	public void user_click_on_the_FREE() throws Throwable {
		waitForLoad(webdriver);
		MainMenuLinks mainMenu=new MainMenuLinks(webdriver);
		mainMenu.click_On_Free();

	}


	@Then("^user close the browser$")
	public void user_close_the_browser() throws Throwable {
		webdriver.quit();
	}

	@After
	public void tearDown(Scenario scenario) {
		if (scenario.isFailed()) {
			// Take a screenshot...
			final byte[] screenshot = ((TakesScreenshot) webdriver).getScreenshotAs(OutputType.BYTES);
			// embed it in the report.
			scenario.embed(screenshot, "image/png"); 
			webdriver.quit();
		}
	}

	// Wait function for page load
	public void waitForLoad(WebDriver driver) {
		ExpectedCondition<Boolean> pageLoadCondition = new
				ExpectedCondition<Boolean>() {
			public Boolean apply(WebDriver driver) {
				return ((JavascriptExecutor)driver).executeScript("return document.readyState").equals("complete");
			}
		};
		WebDriverWait wait = new WebDriverWait(driver, 100);
		wait.until(pageLoadCondition);
	}


	public void quit()
	{
		webdriver.quit();

	}

}

