class HeyJobsHome_Page {
	
get firstJobImage() { return ("//*[@id='app']//section[2]/div/a[1]/div/span/div/div/img");}
get firstCompanyName(){ return ("//*[@id='app']//section[2]/div/a[1]/div/span/div/div/span/strong");}
get firstCompanyLocation(){ return ("//*[@id='app']//section[2]/div/a[1]/div/span/div/div/span");}
get firstJobSection() { return ("//*[@id='app']//section[2]/div/a[1]/div/span/div/div");}
	
get secondJobImage() { return ("//*[@id='app']//section[2]/div/a[2]/div/span/div/div/img");}
get secondCompanyName(){ return ("//*[@id='app']//section[2]/div/a[2]/div/span/div/div/span/strong");}
get secondCompanyLocation(){ return ("//*[@id='app']//section[2]/div/a[2]/div/span/div/div/span");}
get secondJobSection() { return ("//*[@id='app']//section[2]/div/a[2]/div/span/div/div");}	
	
get thirdJobImage() { return ("//*[@id='app']//section[2]/div/a[3]/div/span/div/div/img");}
get thirdCompanyName(){ return ("//*[@id='app']//section[2]/div/a[3]/div/span/div/div/span/strong");}
get thirdCompanyLocation(){ return ("//*[@id='app']//section[2]/div/a[3]/div/span/div/div/span");}
get thirdJobSection() { return ("//*[@id='app']//section[2]/div/a[3]/div/span/div/div");}

get fourthJobImage() { return ("//*[@id='app']//section[2]/div/a[4]/div/span/div/div/img");}
get fourthCompanyName(){ return ("//*[@id='app']//section[2]/div/a[4]/div/span/div/div/span/strong");}
get fourthCompanyLocation(){ return ("//*[@id='app']//section[2]/div/a[4]/div/span/div/div/span");}
get fourthJobSection() { return ("//*[@id='app']//section[2]/div/a[4]/div/span/div/div");}

get fifthJobImage() { return ("//*[@id='app']//section[2]/div/a[5]/div/span/div/div/img");}
get fifthCompanyName(){ return ("//*[@id='app']//section[2]/div/a[5]/div/span/div/div/span/strong");}
get fifthCompanyLocation(){ return ("//*[@id='app']//section[2]/div/a[5]/div/span/div/div/span");}
get fifthJobSection() { return ("//*[@id='app']//section[2]/div/a[5]/div/span/div/div");}

confirmVisibilityOfElements(jobImage, companyName, companyLocation)
	{
		var isVisibleImage = browser.isVisible(jobImage);
		expect(isVisibleImage,'Job Image is not Visible').to.equal(true);
	
		var isVisiblecompanyName = browser.isVisible(companyName);
		expect(isVisiblecompanyName,'Company Name is not Visible').to.equal(true);
	
		var isVisibleLocation = browser.isVisible(companyLocation);
		expect(isVisibleLocation,'Company Location is not Visible').to.equal(true);
		expect(browser.getText(companyLocation).replace(browser.getText(companyName),'')).to.have.lengthOf.above(1);
		console.log("Verification complete!")
	}

/* The below code is commented since an unknown URL in the application is not actually sending 404 response code. 
checkLinks()
{
const links=$$('a');
const urls=links.map(link => link.getAttribute('href'));
urls.forEach(async function(url)
{
console.log('Checking response for '+url); //Check all Urls available on your page.
const response = await fetch(url);
var responseStatus=response.status;

expect(responseStatus,'URL '+url+' failed with response Status of'+responseStatus).to.equal(200);

})	

}
*/

checkUnknownURL()
	{ 
		console.log("Checking if erroneous/unknown URLs (if any) existing on this page are handled correctly");
		const links = $$('a');
		const urls=links.map(link => link.getAttribute('href'));
		urls.forEach( function(url)
		{
			
			browser.url(url);
			var currentTitle=browser.getTitle();
			if (currentTitle ==="Jobs Fabrik | Page not found")
				{
					expect(browser.getText('//*[@id="app"]/div/div[2]/div/p'),'Error message not displayed correctly for '+url).to.include('Sorry, this url is not pointing anywhere');
				}

		})	
	
	}

checkDetailsVisible(jobSection)
	{
		const currentSection= $(jobSection);
	     currentSection.click();
		 
		 var isJobTitleVisible=browser.isVisible('//*[@id="app"]/div/div[2]/main/div/div/h1');
         expect(isJobTitleVisible,'Job Title Not visible to user').to.equal(true);
		 
		 var isJobLocationVisible =browser.isVisible('//*[@id="app"]/div/div[2]/main/div/div/h3[1]');
		expect(isJobLocationVisible,'Job Location is not visible to user').to.equal(true);
	
		var isJobDateVisible=browser.isVisible('//*[@id="app"]/div/div[2]/main/div/div/h3[2]');
         expect(isJobDateVisible,'Job Date Not visible to user').to.equal(true);
		 
		 var isCompanyDetailsVisible=browser.isVisible('//*[@id="app"]/div/div[2]/main/div/div/section/span[1]');
         expect(isCompanyDetailsVisible,'Company Details Not visible to user').to.equal(true);
		 
		 var isJobBriefDetailsVisible=browser.isVisible('//*[@id="app"]/div/div[2]/main/div/div/section/span[2]');
         expect(isJobBriefDetailsVisible,'Job Brief Details Not visible to user').to.equal(true);
		 
		 var isJobResponsibilitiesVisible=browser.isVisible('//*[@id="app"]/div/div[2]/main/div/div/section/span[3]/ul');
         expect(isJobResponsibilitiesVisible,'Job Responsibilities Not visible to user').to.equal(true);
	
		var isJobRequirementsVisible=browser.isVisible('//*[@id="app"]/div/div[2]/main/div/div/section/span[4]/ul');
         expect(isJobRequirementsVisible,'Job Requirements Not visible to user').to.equal(true);
	
		console.log(" All Job Details for this job are visible to the user ");
	
	}

checkNavigation(jobSection)
	{
		const currentSection= $(jobSection);
		currentSection.click();
		$('//*[@id="app"]/div/div[2]/main/a/div/button/div/div').click();
		expect(browser.getText('h1'),'Could not navigate back to the home page').to.equal("Welcome To Job Fabrik");
		console.log("Navigation successful");
	}


	}

module.exports = new HeyJobsHome_Page();