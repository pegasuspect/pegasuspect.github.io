$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },

        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });

    var form = document.getElementById("contactForm");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("success");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your message! I will get back to you if you include any contact information in your message.";
          form.reset();
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "There was a problem submitting your form. Send me an email to the address below instead!"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "There was a problem submitting your form. Send me an email to the address below instead!"
      });
    }
    form.addEventListener("submit", handleSubmit)
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
