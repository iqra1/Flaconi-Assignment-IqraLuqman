package pageFactory;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CartPriceValidation {

	WebDriver driver;

	@FindBy(id="htmlData")
	public
	WebElement add_To_Cart_DialogBox;

	@FindBy(className = "price")
	public
	WebElement price_On_Cart;


	//Constructor Method
	public CartPriceValidation(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver,this);
	}

	//Methods

	public void click_On_Add_To_Cart_DialogBox()
	{
		add_To_Cart_DialogBox.click();

	}

	public String price_On_Cart() 
	{

		return price_On_Cart.getText();
	}

}
