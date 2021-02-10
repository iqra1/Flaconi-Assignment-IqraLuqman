package pageFactory;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class AddToCartParfum {

	WebDriver driver;

	@FindBy(id="uc-btn-accept-banner")
	public
	WebElement acceptCookies;

	@FindBy(xpath="//*[@id='main-navigation']/ul/li[2]")
	public
	WebElement category_Perfume;

	@FindBy(xpath="//a[@href='/parfum/chanel/bleu-de-chanel/chanel-bleu-de-chanel-eau-de-parfum.html']")
	public
	WebElement  perfume;

	@FindBy(css ="button[class='button-primary loaderbox-trigger']")
	public
	WebElement cartButton;

	@FindBy(className = "price")
	public
	WebElement price;

	@FindBy(id="htmlData")
	public
	WebElement add_To_Cart_DialogBox;

	@FindBy(css="h1.title")
	public
	WebElement item_Added_Message;

	//Constructor Method
	public AddToCartParfum(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver,this);
	}

	//Methods
	public void accept_Cookies()
	{

		acceptCookies.click();
	}

	public void click_On_Perfume_Category()
	{

		category_Perfume.click();
	}	

	public void click_On_Perfume()
	{

		perfume.click();
	}

	public void click_Add_To_Cart()
	{

		cartButton.click();
	}

	public String price_Details()
	{

		return price.getText();
	}

	public String item_added_message()
	{

		add_To_Cart_DialogBox.click();
		return item_Added_Message.getText().trim();
	}
}

