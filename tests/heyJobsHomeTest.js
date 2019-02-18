var HeyJobsHome_Page = require("../pageObjects/HeyJobsHome_Page.js");


beforeEach(function()
	{
		console.log("==============TRIGGERING NEW TEST CASE===============");
		browser.url('/');
	})

afterEach( function()
	{
        HeyJobsHome_Page.checkUnknownURL();
    });

describe('Test HeyJobs Details on the Home Page', function() {
  it('Should be able to view the Image, Company Name and Company Location for first job', function(done) {
	console.log("Verifying all elements displayed for the first Job..");  
	HeyJobsHome_Page.confirmVisibilityOfElements(HeyJobsHome_Page.firstJobImage,HeyJobsHome_Page.firstCompanyName,HeyJobsHome_Page.firstCompanyLocation);
    });
  
  it(' Should be able to view the Image, Company Name and Company Location for second job', function(done)
	{
	console.log("Verifying all elements displayed for the second Job..");  
	HeyJobsHome_Page.confirmVisibilityOfElements(HeyJobsHome_Page.secondJobImage,HeyJobsHome_Page.secondCompanyName,HeyJobsHome_Page.secondCompanyLocation);
	}); 
	
	it(' Should be able to view the Image, Company Name and Company Location for third job', function(done)
	{
	console.log("Verifying all elements displayed for the third Job..");  
	HeyJobsHome_Page.confirmVisibilityOfElements(HeyJobsHome_Page.thirdJobImage,HeyJobsHome_Page.thirdCompanyName,HeyJobsHome_Page.thirdCompanyLocation);
	}); 
	
	it(' Should be able to view the Image, Company Name and Company Location for fourth job', function(done)
	{
	console.log("Verifying all elements displayed for the fourth Job..");  
	HeyJobsHome_Page.confirmVisibilityOfElements(HeyJobsHome_Page.fourthJobImage,HeyJobsHome_Page.fourthCompanyName,HeyJobsHome_Page.fourthCompanyLocation);
	}); 
	
	it(' Should be able to view the Image, Company Name and Company Location for fifth job', function(done)
	{
	console.log("Verifying all elements displayed for the fifth Job..");  
	HeyJobsHome_Page.confirmVisibilityOfElements(HeyJobsHome_Page.fifthJobImage,HeyJobsHome_Page.fifthCompanyName,HeyJobsHome_Page.fifthCompanyLocation);
	}); 
  
  
  
 /* 
  //The below test has been commented because an unknown url is not actually returning status code of 404. Kept for reference.
it('Verify all links are functioning properly', async function(done) {
  
  HeyJobsHome_Page.checkLinks();
  
   	});
*/
});



describe('Test Descriptions for every Job', function() {
   
it(' User Should be able to view job details for the first job', function(done)
	{
		console.log("Verifying Job Details for the first job");
		HeyJobsHome_Page.checkDetailsVisible(HeyJobsHome_Page.firstJobSection);
	}); 
it(' User Should be able to view job details for the second job', function(done)
	{
		console.log("Verifying Job Details for the second job");
		HeyJobsHome_Page.checkDetailsVisible(HeyJobsHome_Page.secondJobSection);
	}); 
it(' User Should be able to view job details for the third job', function(done)
   {
	   console.log("Verifying Job Details for the third job");
		HeyJobsHome_Page.checkDetailsVisible(HeyJobsHome_Page.thirdJobSection);
	}); 
 it(' User Should be able to view job details for the fourth job', function(done)
 {
	 console.log("Verifying Job Details for the fourth job");
		HeyJobsHome_Page.checkDetailsVisible(HeyJobsHome_Page.fourthJobSection);
 }); 
  it(' User Should be able to view job details for the fifth job', function(done)
  {
	  console.log("Verifying Job Details for the fifth job");
  	HeyJobsHome_Page.checkDetailsVisible(HeyJobsHome_Page.fifthJobSection);
  }); 
});


describe('Test HeyJobs Navigation from Job Details page to Home page', function() {
  
it(' User Should be able to navigate back to home page from the first job', function(done)
{   console.log("Verifying navigation back to home page from the first job");
	HeyJobsHome_Page.checkNavigation(HeyJobsHome_Page.firstJobSection);
}); 
it(' User Should be able to navigate back to home page from the second job', function(done)
{
	console.log("Verifying navigation back to home page from the second job");
  	HeyJobsHome_Page.checkNavigation(HeyJobsHome_Page.secondJobSection);
}); 
it(' User Should be able to navigate back to home page from the third job', function(done)
{
	console.log("Verifying navigation back to home page from the third job");
  	HeyJobsHome_Page.checkNavigation(HeyJobsHome_Page.thirdJobSection);
}); 
it(' User Should be able to navigate back to home page from the fourth job', function(done)
{
	console.log("Verifying navigation back to home page from the fourth job");
  	HeyJobsHome_Page.checkNavigation(HeyJobsHome_Page.fourthJobSection);
}); 
it(' User Should be able to navigate back to home page from the fifth job', function(done)
{
	console.log("Verifying navigation back to home page from the fifth job");
  	HeyJobsHome_Page.checkNavigation(HeyJobsHome_Page.fifthJobSection);
}); 
	
});





