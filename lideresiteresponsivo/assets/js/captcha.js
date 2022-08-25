
15
function reload()
{
img = document.getElementById("capt");
img.src="captcha.php";
}
 
$(document).ready(function(){
 
var htm='<p><img src="captcha.php" id="capt">&nbsp;<input width="30" height="30" type="image" src="reload.png" onClick="reload();"  ></p><p><input type="text" name="g-recaptcha-response"  > ';
 
$('#custom_captcha').html(htm);//set the captcha data in element having id > custom_captcha . you can change as your div/Element id
 
 
 
});

