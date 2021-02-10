package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = ".", 
		plugin = {"pretty","html:target/cucumber-html-report", "json:target/cucumber-json-report.json" },
		monochrome = true, 
		glue={"stepDefinition"},
		tags={"@addToCart,@cartPriceValidation,@menuLinksVerification"})

public class RunItTest {

}

