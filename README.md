# Streaking Stars Window Cleaning

### Video Demo: https://youtu.be/Gvjno7BxISE

### Description

For my final project I made a website for a hypothetical window cleaning company called Streakless Stars. I took a lot of inspiration from other window cleaning company websites when it came to the content and the pages I wanted to include.

For this project I used HTML, CSS and JavaScript to build out the front end. I also decided to use a framework so as to follow a proven industry standard structure. I chose NextJS which is a popular web development framework that uses ReactJS for the frontend and NodeJS for the backend. I also used a popular CSS library called Tailwind CSS to style my app.

NextJS allows you to set up a global layout for the entire app and that is what I did for mine. My app's global layout included a navbar up top, the main content in the middle and the a footer down here on the bottom. I actually got the navbar and footer components from a UI library called Flowbite and then I just customized them with my styling and content. The main content is the section of my app that renders new content whenever we travel to a different route.

Next JS makes it easy to set up multiple routes. As you can see, my app contains 5 basic pages/routes: Home, About, Pricing, Book and Contact.

My home page includes a hero secton compoenent that is meant to welcome new users to our site and also contains a button that routes the user directly to the booking page.

My about page displays static content about my hypothetical company. My pricing page also just displays static content. As you can see, we have 8 window types listed along with how much we charge per type.

In the booking page I built a form that allows users to book an appointment with us. When the user submits the form, the form makes a post request to the book api route containing the user's inputted form data in the body of the request to a NodeJS server. The server will then use another library called Resend to send out two emails: two emails: one to the customer thanking them for contacting us and a second one that notifies us with the user's appointment details.

I used the React Email library to create the email templates for these outgoing emails. These email templates use the props passed into them by the Node server to populate the outgoing emails with the user's form data.

Finally the contact page also contains static content about our different contact channels but also a contact form that a user can use to send us a message via email with any inquiry they may have; much like in the form on the booking page. Under the hood, it uses the same mechanism as the booking page form to send outgoing emails.
