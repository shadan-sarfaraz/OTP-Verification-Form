let code = document.querySelectorAll(".code");
code.forEach(function(otpEl) {
    otpEl.addEventListener("keyup", backSp);
    otpEl.addEventListener("keypress", function() {
         
        var nexEl = this.nextElementSibling;
        nexEl.focus();
    })
})

function backSp(backKey) {
    if (backKey.keyCode == 8) {
        var prev = this.previousElementSibling.focus()
    }
}

// OTP Input (End)