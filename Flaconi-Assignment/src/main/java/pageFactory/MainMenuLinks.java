package pageFactory;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MainMenuLinks {
	

	WebDriver driver;
	
	@FindBy(xpath="//*[@id='main-navigation']/ul/li[1]")
	public
	WebElement  brands;

	@FindBy(xpath="//*[@id='main-navigation']/ul/li[2]")
	public
	WebElement perfume;

	@FindBy(xpath ="//*[@id='main-navigation']/ul/li[3]")
	public
	WebElement maintenance;

	@FindBy(xpath ="//*[@id='main-navigation']/ul/li[4]")
	public
	WebElement makeUp;
	
	@FindBy(xpath ="//*[@id='main-navigation']/ul/li[5]")
	public
	WebElement hair;
	
	@FindBy(xpath ="//*[@id='main-navigation']/ul/li[6]")
	public
	WebElement nature;
	
	@FindBy(xpath ="//*[@id='main-navigation']/ul/li[7]")
	public
	WebElement premium;
	
	@FindBy(xpath ="//*[@id='main-navigation']/ul/li[8]")
	public
	WebElement drugStore;
	
	@FindBy(xpath ="//*[@id='main-navigation']/ul/li[9]")
	public
	WebElement men;
	
	@FindBy(xpath ="//*[@id='main-navigation']/ul/li[10]")
	public
	WebElement New;
	
	@FindBy(xpath ="//*[@id='main-navigation']/ul/li[11]")
	public
	WebElement sale;
	
	@FindBy(xpath ="//*[@id='main-navigation']/ul/li[12]")
	public
	WebElement free;


	//Constructor Method
	public MainMenuLinks(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver,this);
	}

	//Methods
	public void click_On_Brands()
	{

		brands.click();
	}

	public void click_On_Perfume()
	{
		perfume.click();
		
	}
	
	public void click_On_Maintenance()
	{
		maintenance.click();
		
	}
	
	public void click_On_MakeUp()
	{
		makeUp.click();
		
	}
	
	public void click_On_Hair()
	{
		hair.click();
		
	}
	
	public void click_On_Nature()
	{
		nature.click();
		
	}
	
	public void click_On_Premium()
	{
		premium.click();
		
	}
	
	public void click_On_DrugStore()
	{
		drugStore.click();
		
	}
	
	public void click_On_Men()
	{
		men.click();
		
	}
	
	public void click_On_New()
	{
		New.click();
		
	}
	
	public void click_On_Sale()
	{
		sale.click();
		
	}
	
	public void click_On_Free()
	{
		free.click();
		
	}

}
