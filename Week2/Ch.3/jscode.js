// functions for chapter 5 lesson exercise....

///////////////////////////////////////////////////////////////////////////////////////////////////////

function ConcertTicket( customer, event, quantity, eventDate ) {
	this.customerName = customer;
	this.eventName = event;
	this.numTicket = quantity;
	this.date = eventDate;


	this.getCustomerName = getCustomerName; // Method to object binding...
	// Javascript does not allow the inclusion of functions within a class.
	this.getEventName = getEventName;

}
function getEventName()
{
	return this.eventName;
}
function getCustomerName()
{
	return this.customerName;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

// Functions for project 3.2 week 2

function CalcHeartRate(age_in)
{
	this.age = age_in;
	this.maxHR = 220 - this.age;
	this.minRecommended = Math.round( 0.5 * this.maxHR );
	this.maxRecommended = Math.round( 0.85 * this.maxHR );

	//return body mass index calculation
	//document.getElementById("result").value = calcBMI.toString().match(/^-?\d+(?:\.\d{0,2})?/);
	this.getMinRecommend = getMinRecommend;
	this.getMaxRecommend = getMaxRecommend;
	
}
function getMinRecommend()
{
	return this.minRecommended;
}
function getMaxRecommend()
{
	return this.maxRecommended;
}
function UpdateHR()
{
	var age = parseFloat(document.f1.age.value);
	var heartRateCalc = new CalcHeartRate(age);
	var min = heartRateCalc.minRecommended();
	var max = heartRateCalc.maxRecommended();
}
function Clear_text(id)
{
	var id = id;
	//window.alert("you called me");
	if(id == age)
	{
		document.getElementById("age").value = " ";
	}
}