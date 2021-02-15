// Main Function
function showTime() {
	
	// Variables to Get Time and Dates
	const date = new Date;
	let h = date.getHours();
	let m = date.getMinutes();
	let s = date.getSeconds();
	let dayNum = date.getDay();
	let todayDate = date.getDate() +' / '+(date.getMonth()+1)+' / '+ date.getFullYear();
	let pm = false;
	let day;
	let time;
	let period;

	
	// Conditionals for Date and Time
	if (h > 12) {
		h = h - 12;
		pm = true;
	}
	if (h == 0) {
		h = 12;
	}
	if (s >= 0 && s < 10) {
		s = '0' + s;
	}
	if (m >= 0 && m < 10) {
		m = '0' + m;
	}
	if (h >= 0 && h < 10) {
		h = '0' + h;
	}
	pm ? time = "PM" : time = "AM"

	// Sets Value of Declared Variable day by Chain of Switch Statement Cases
	switch (dayNum) {
	  case 0:
	    day = "Sunday";
	    break;
	  case 1:
	    day = "Monday";
	    break;
	  case 2:
	     day = "Tuesday";
	    break;
	  case 3:
	    day = "Wednesday";
	    break;
	  case 4:
	    day = "Thursday";
	    break;
	  case 5:
	    day = "Friday";
	    break;
	  case 6:
	    day = "Saturday";
	}


	// Renders Value to HTML Elements
	document.getElementById("day").innerText = day;
	document.getElementById("time").innerText = time;
	document.getElementById("h").innerText = h;
	document.getElementById("m").innerText = m;
	document.getElementById("s").innerText = s;
	document.getElementById("todayDate").innerText = todayDate;

	// Timed Out When No Response Given in 1000 milliseconds => 1 second
	setTimeout(showTime, 1000);
}

// Array of Quotes
const quotes = [

	`
		“ When you have a dream, you’ve got to grab it and never let go. ” 
			
			— Carol Burnett
	`,
	`
		“ Nothing is impossible. The word itself says ‘I’m possible!' ” 
			
			— Audrey Hepburn
	`,
	`
		“ There is nothing impossible to they who will try. ” 
			
			— Alexander the Great
	`,
	`
		“ The bad news is time flies. The good news is you’re the pilot. ” 
			
			— Michael Altshuler
	`,
	`
		“ Life has got all those twists and turns. You’ve got to hold on tight and off you go. ” 
			
			— Nicole Kidman
	`,  
	`
		“ Keep your face always toward the sunshine, and shadows will fall behind you. ” 
			
			— Walt Whitman
	`,
	`
		“ Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell. ” 
			
			— Amal Clooney
	`,
	`
		“ You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box. ” 
			
			— Duchess Meghan
	`,
	`
		“ I just want you to know that if you are out there and you are being really hard on yourself right now for something that has happened … it’s normal. That is what is going to happen to you in life. No one gets through unscathed. We are all going to have a few scratches on us. Please be kind to yourselves and stand up for yourself, please. ” 
			
			— Taylor Swift
	`,
	`
		“ Success is not final, failure is not fatal: it is the courage to continue that counts. ” 
			
			– Winston Churchill
	`
];

let randomInt = Math.floor(Math.random() * 10) // Generates a random number from 0 - 10

document.getElementById("quote").innerText = quotes[randomInt] // Sets a random quote

// Runs Function and Updates Values in Function every 1000 milliseconds => 1 second
setInterval(showTime, 1000)