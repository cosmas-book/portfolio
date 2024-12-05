<!-- Contact Section with Phone and Subject Fields -->
<section id="contact" class="py-5 bg-light">
    <div class="container">
        <div class="text-center mb-4">
            <h2 class="fw-bold text-primary">Contact Me</h2>
            <p class="text-muted">Feel free to reach out for any queries or collaboration opportunities!</p>
        </div>

        <div class="row justify-content-center">
            <div class="col-md-8">
                <!-- Contact Form -->
                <form id="contact-form" class="bg-white p-4 rounded shadow-lg">
                    <div class="mb-3">
                        <label for="name" class="form-label fw-bold">Your Name</label>
                        <input type="text" id="name" class="form-control" name="name" placeholder="Enter your name" required>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label fw-bold">Your Email</label>
                        <input type="email" id="email" class="form-control" name="email" placeholder="Enter your email" required>
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label fw-bold">Your Phone Number</label>
                        <input type="tel" id="phone" class="form-control" name="phone" placeholder="Enter your phone number" required>
                    </div>
                    <div class="mb-3">
                        <label for="subject" class="form-label fw-bold">Subject</label>
                        <input type="text" id="subject" class="form-control" name="subject" placeholder="Enter the subject" required>
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label fw-bold">Your Message</label>
                        <textarea id="message" class="form-control" name="message" rows="5" placeholder="Write your message" required></textarea>
                    </div>
                    <div class="d-grid">
                        <button type="submit" class="btn btn-primary btn-lg">Send Message</button>
                    </div>
                </form>
                <div id="response-message" class="mt-3 text-center" style="display:none;"></div>
            </div>
        </div>
    </div>
</section>



<script>

    // ajax

document.getElementById("contact-form").addEventListener('submit', function(event){
    event.preventDefault();

    // collect the form data
    const formData = new FormData(this);


    // send the data using fetch (AJAX)
    fetch('send_email.php', {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // display success message
        document.getElementById("response-message").style.display = "block";
        document.getElementById("response-message").className = "alert alert-success";
        document.getElementById("response-message").innerText = data.message;
        document.getElementById("contact-form").reset();   // Reset form
    })
    .catch(error => {
        // display error message
        document.getElementById("response-message").style.display = "block";
        document.getElementById("response-message").className = "alert alert-danger";
        document.getElementById("response-message").innerText = "Error sending email, please try again.";

    });

});

</script>