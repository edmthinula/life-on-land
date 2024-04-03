    // Display form data in the preview
    // const formData = getFormData();
    const Name = sessionStorage.getItem('Name');
    const Email = sessionStorage.getItem('Email');
    const Massage = sessionStorage.getItem('Message');
    const ux = sessionStorage.getItem('ux');
    const FTV = sessionStorage.getItem( 'FTV' );
    const rate = sessionStorage.getItem('rating');
    const like = sessionStorage.getItem("like");
    const updates = sessionStorage.getItem("updates");
    const additional = sessionStorage.getItem("Additional")
    const submitButton = document.getElementById('submitButton');
  const previewContent1 = document.getElementById('previewContent');
  const thankYouMessage = document.getElementById('thankYouMessage');
  const go_back = document.getElementById('goback_button') ;
  const preview_msg = document.getElementById('preview-msg');

    // if (formData) {
      const previewContent = document.getElementById('previewContent');
      previewContent.innerHTML = `
        <p><strong>Name:</strong> ${Name}</p>
        <p><strong>Email:</strong> ${Email}</p>
        <p><strong>Was this your first visit?:</strong> ${FTV}</p>
        <p><strong>Was this website informative and easy to navigate?:</strong> ${ux}</p>
        <p><strong>Message:</strong> ${Massage}</p>
        <p><strong>How satisfied are you with our services?:</strong> ${rate}</p>
        <p><strong>Would you recommend our services?:</strong> ${like}</p>
        <p><strong>Would you like to receive updates about new features ?:</strong> ${updates}</p>
        <p><strong>Do you have any aditional question or 
          request. Please provide details ? :</strong> ${additional}</p>
        `;

    submitButton.addEventListener('click', function() {
      previewContent1.style.display = 'none';
      thankYouMessage.style.display = 'block';
      submitButton.style.display = 'none';
      go_back.style.display = 'none';
      preview_msg.style.display = 'none'
    });

    // }

    // Function to navigate back to the form page
    function goBack() {
      window.history.back();
    }
