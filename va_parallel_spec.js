describe("Testing out Virgin America", function() {

	beforeEach(function(){
		console.log("setting stuff up");
		browser.driver.manage().window().maximize();
		browser.get("http://www.virginamerica.com");
	});

	afterEach(function(){
		console.log("quitting time");
		browser.quit();

	});

	it ("should load up the site", function() {
		console.log("testing rn");
		element(by.css(".ng-scope")).$('[for="ONE_WAY_BOOK"]').click();
		element(by.css(".people-picker")).click();
		element(by.css("li[testing-prefix='number-picker-adult-add']")).click();
		element(by.css("#destination-airport--field")).click();
		element(by.css("#destination-airport--field")).sendKeys("JFK");
		browser.sleep(3000);
		browser.findElement(by.xpath('//*[@id="booker"]/div/div/div[3]/div/ul/li[3]/div/ul/li/a')).click();
		element(by.css(".booker-trip-button")).click();
		var moreDates = element(by.css('[ng-click="calendar.showMoreDates()"]'));
		browser.executeScript('arguments[0].scrollIntoView()', moreDates.getWebElement());
		moreDates.click();

		browser.sleep(5000);

	});
	

});