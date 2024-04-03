// Function to reset form fields
function resetForm() {
    const feedbackForm = document.getElementById('feedbackForm')
    feedbackForm.reset()
  }

  // Function to validate form
  function excute_form(form) {
    event.preventDefault()
    const nameInput = document.getElementById('name')
    const emailInput = document.getElementById('email')
    const messageInput = document.getElementById('message')
    const errorMessage = document.getElementById('error-message')
    let additional = document.getElementById('question')

    errorMessage.textContent = ''

    let name_new = false
    let email_new = false
    let msg_new = false

    if (form.name.value.trim() === '') {
      errorMessage.textContent = 'Please enter your name.'
    } else {
      name_new = true
    }
    if (form.email.value.trim() === '') {
      errorMessage.textContent = 'Please enter your email.'
    } else {
      email_new = true
    }
    if (!isValidEmail(form.email.value.trim())) {
      errorMessage.textContent = 'Please enter a valid email address.'
    }
    if (form.message.value.trim() === '' && form.ux.value == 'no_ux') {
      errorMessage.textContent = 'Please enter your message.'
    } else {
      msg_new = true
    }
    if(form.question.value.trim()===''){
      additional = 'There is no aditional  question or request'
    }else{
      additional = form.question.value.trim()
    }

    // Form is valid, prepare data for preview
    if (name_new && email_new && msg_new) {
       getSelectedChoices();
       getSelectedValue();
      // Redirect to preview page
      window.location.href = "preview.html";

      sessionStorage.setItem('Message', form.message.value)
      sessionStorage.setItem('Email', form.email.value)
      sessionStorage.setItem('Name', form.name.value)
      sessionStorage.setItem("Additional", additional);
    }

    return true
  }

  // Function to get the value of the selected radio button within a group
  function getRadioGroupValue(radioGroup) {
    for (let i = 0; i < radioGroup.length; i++) {
      if (radioGroup[i].checked) {
        return radioGroup[i].value;
      }
    }
    return "not selected";
  }

  // Function to validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  function getSelectedChoices(){
    const first_time_visit = document.querySelectorAll('input[name="first_time_visit"]');
    const ux = document.querySelectorAll('input[name="ux"]');
    const rate = document.querySelectorAll('input[name="rate"]');
    const like = document.querySelectorAll('input[name="like"]');
  
    function isRadioSelected(radioArray) {
        for (let i = 0; i < radioArray.length; i++) {
            if (radioArray[i].checked) {
                return true;
            }
        }
        return false;
    }
    const first_time_visitSelected = isRadioSelected(first_time_visit);
    const  uxSelected = isRadioSelected(ux);
    const  rateSelected=isRadioSelected(rate);
    const  likeSelected=isRadioSelected(like);

    if(first_time_visitSelected){
      const FTVvalue = getRadioValue(first_time_visit);
      sessionStorage.setItem( "FTV",FTVvalue );
    }else{
      const FTVvalue = "Not Selected";
      sessionStorage.setItem( "ftv",FTVvalue );
    }

    if(uxSelected){
      const UXvalue = getRadioValue(ux);
      sessionStorage.setItem("ux",UXvalue);
    }else{
      const  UXvalue ="Not Selected" ;
      sessionStorage.setItem("ux",UXvalue);
    }
    if(rateSelected){
      const ratingValue = getRadioValue(rate);
      sessionStorage.setItem("rating",ratingValue);
    }else{
      const ratingValue=  "Not Rated";
      sessionStorage.setItem("rating",ratingValue);
    }
    if(likeSelected){
      const likeValue = getRadioValue(like);
      sessionStorage.setItem("like",likeValue);
    }else{
      const  likeValue = "Not Selected";
      sessionStorage.setItem("like",likeValue);
    }
  }

  function getRadioValue(radioArray) {
    for (let i = 0; i < radioArray.length; i++) {
        if (radioArray[i].checked) {
            return radioArray[i].value;
        }
    }
    return "";
}
function getSelectedValue(){
  const selectList = document.getElementById("updates");
const selectedValue = selectList.options[selectList.selectedIndex].value;
sessionStorage.setItem("updates", selectedValue); 
}

  function disable_text_area() {
    document.getElementById('disable_area').innerHTML =
      "<textarea id='message' name='message' class='text_filds' disabled></textarea>"
  }
  function enable_text_area() {
    document.getElementById('disable_area').innerHTML =
      "<textarea id='message' name='message' class='text_filds'></textarea>"
  }