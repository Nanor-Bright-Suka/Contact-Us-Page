    My Project On Creating A Contact Form

    Approach;
    Creata a structured html with sections for header, banner , contact form, company's info and footer.

    Design a responsive menu bar with a hamburger menu for navigation and a prominent "Call us" button.

    Enhance visual appeal with a banner section featuring an image and a welcoming message.

    Implement a user friendly contact form with labeled input fields for name, email , phone ,and message.

    Display company contact info in a dedicated section for easy reference. Including adddress, phone , and email.

    Display a footer

    For smaller size device we will use the hamburger menu to toggle the navbar using javascript function.


    <!-- My Contact Form  -->
    The Header ;
<html>
<header>

<button class="harmburger">
<span onclick="openNavbar()">☰</span>
</button>

<div class="logo">Your Logo </div>

<nav>
<ul>
<li><a href="#">Home</a></li>
<li><a href="#">Enquiry</a></li>
<li><a href="#">About</a></li>
<li><a href="#">Services</a></li>
</ul>
</nav>

        <div class="call">
      <button>Call us</button>
            </div>

</header>
</html>



<style>
    header {
         width:100%; and display: block;
         /* alternatively */
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: black;
    color: white;
    
    
    }

.harmburger{
    margin-left: 10px;
} 
.logo {
    margin-left: 2px;
    font-size: 2rem;
}

.call {
     margin-right: 10px;
} 

nav {
    width: 50%; 
        text-align: center;
}

 nav ul {
    display: flex;
    justify-content: space-between;
 }

nav ul li {
      margin-inline: 10px; or
      padding:10px;
      display: inline-block;
}

nav ul li a {
    text-decoration:  none;
    color: white;
    margin-inline: 10px;
}

.call{
    background-color: green;
    padding: 1rem;
    margin-left: 5rem;
    
}


/* Banner Section */
html {
    <section class="banner">
       <img src=""> 
       <div class="text">
       <h2>Get in Touch With Us </h2>
       <p> We are here to answer any question you may have </p>
       </div>
    </section>
}

<style>
.banner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
img {
   max-width: 80%;
    margin: 0 auto;
    height: auto;
}
.text {
    text-align: center;
    margin-bottom: 10px;

}
.text h2 {
    font-size: 1.5rem;
    font-weight: 500px;
    padding: 1rem;
}
  

  /* The contact form */


 