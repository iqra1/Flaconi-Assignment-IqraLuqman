# Flaconi-Assignment-IqraLuqman

## Test Automation Task - Python:
I have used Python language to write the automation scripts of this assignment as requested. I have used Pytest framework and Page object model approach
 - Folder name: pythonProject -> FlaconiAssignment - Python

## Test Automation Task - Java:
I have covered following test scenarios:
1. add to cart a random product from Parfum category
2. on the Cart page to verify if we are displaying the correct price
3. verify the main navigation menu links

URL: https://www.flaconi.de/

## Solution includes following:

- Language: Java
- Framework: Cucumber framework (BDD)
- Web Driver: Selenium
- Build Automation Tool: Maven
- For logging, log4j tool is used with cucumber framework by just adding its dependency in pom.xml
- IDE: IntelliJ IDEA CE
- Design Approach: PageFactory

## Instructions to run the code:

### Method#1
- Open the project in IntelliJ
- Go to terminal windo of IDE and run command "mvn install" OR Open command line terminal window
- Go to the directory where your project exist
- Run the command "mvn test"
- It will open the chrome browser and test cases will start to execute.
- You can execute all the test cases or single test case by RunITTest.java class by giving tags in the tags parameter e.g  tags{“@addToCart,@applyVoucher,@modifyUser"}
- You can see the logs information on the command prompt.
- You can also see the log information in the file named Cucumberautomation.log in the project.
- You can check the generated Json and Html reports as well.
- You can also check the screenshots of failed test cases in the reports. It will be
embedded into the reports in case of test failure.



