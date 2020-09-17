 const slider = document.querySelector(".items");
 const slides = document.querySelectorAll(".item");
 const button = document.querySelectorAll(".button");

 var listofnames = ["Thomas Stubblefield", "Ramen",
     "Niranjan Dev Singh",
     "Samkit Shah",
     "Aishwarya",
     "Siddhant Rana",
     "Hrithik Tanwar",
     "Ishika Bansal",
     "Ananya S Sadana",
     "Astika Anand",
     "Kanika Gopal",
     "Tusharika Mehta",
     "Aakash Tanwar",
     "Samkit Shah",
     "Ayush Bajpai",
     "Ashish Rathod",
     "Madhuri",
     "Ikshul Dureja",
     "Ekant Bagri",
     "Ravleen Kour",
     "Chetna Gola",
     "Aryan Bhatnagar",
     "Ishan Budhiraja",
     "Karan Taneja",
     "Shreya Kasotia",
     "Isha Sethi"
 ];

 var listofpositions = ["UI/UX Co-Head",
     "UI/UX Co-Head",
     "Mentor",
     "Mentor",
     "Mentor",
     "Mentor",
     "Mentor",
     "Mentor",
     "Content Mentor",
     "Creative Mentor",
     "Creative Mentor",
     "Technical Co-Head",
     "Technical Co-Head",
     "Technical Co-Head",
     "Technical Co-Head",
     "Technical Co-Head",
     "Technical Co-Head",
     "Technical Co-Head",
     "Technical Coordinator",
     "Head of Marketing and Content",
     "Head of Operations",
     "Head of Management and Planning",
     "Head of Participations",
     "Head of International Relations",
     "Student Support Lead",
     "Submission Monitoring Lead"
 ];

 let current = 0;
 let prev = 25; //prev = 4
 let next = 1;

 for (let i = 0; i < button.length; i++) {
     button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
 }

 const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);
 const gotoNext = () => current < 25 ? gotoNum(current + 1) : gotoNum(0); //current <5

 const gotoNum = number => {
     current = number;
     prev = current - 1; //24
     next = current + 1; //26

     for (let i = 0; i < slides.length; i++) {
         slides[i].classList.remove("active");
         slides[i].classList.remove("prev");
         slides[i].classList.remove("next");
     }

     if (next == 26) { //next == 5
         next = 1;
     }

     if (prev == -1) {
         prev = 25; //prev == 4
     }

     slides[current].classList.add("active");
     slides[prev].classList.add("prev");
     slides[next].classList.add("next");

     document.getElementById("name").innerHTML = listofnames[current];
     document.getElementById("title").innerHTML = listofpositions[current];
 }