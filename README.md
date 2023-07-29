# Streaking Stars Window Cleaning

### Video Demo: https://youtu.be/Gvjno7BxISE

### Description

For my final project I made a website for a hypothetical window cleaning company called Streakless Stars. I took a lot of inspiration from other window cleaning company websites when it came to the content and the pages I wanted to include.

For this project I used HTML, CSS and JavaScript to build out the front end; all of which we learned in cs50. I also decided to use a framework so as to follow a industry standard structure. I chose NextJS which is a popular framework that uses React for the frontend and Node for the backend. I also used a popular CSS library called Tailwind to style my app.

So starting here on the home page we can see that the general layout for each page is going to be basically the same throughout. Each page will have a navbar up top, the main content in the middle and the a footer down here on the bottom. I actually got the navbar and footer components from a UI library called Flowbite and then I just customized them with my styling and content. As you can see, my app contains 5 pages: Home, About, Pricing, Book and Contact.

My about page displays static content about my hypothetical company. My pricing page also just displays static content. As you can see, we have 8 window types listed along with how much we charge per type. In the booking page I built a form that allows users to book an appointment with us. When the user submits the form, it will send the form data to a server which will then use another library called Resend to send out two emails: one to the customer thanking them for contacting us and a second one that notifies us with the user's appointment details. Finally the contact page also contains static content about our different contact channels but also a contact form that a user can use to send us a message via email with any inquiry they may have; much like in the form on the booking page.
