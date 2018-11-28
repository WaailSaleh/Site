<?php
$_POST  = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);

$to = " waail.saleh@ryerson.ca";
$subject = $_POST['subject'];
$namef = $_POST['namef'];
$namel = $_POST['namel'];
$tele = $_POST['telephone'];
$address = $_POST['address'];
$messagef = $_POST['message'];
$message = "
<html>
<head>
<title>HTML email</title>
</head>
<body>
 <link href='https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.css' rel='stylesheet'>


<div class='card'>
 <header class='card-header'>
    <p class='card-header-title'>
      {$subject}
    </p>
   
  </header>
  <div class='card-content'>
    <div class='media'>
      <div class='media-content'>
        <p class='title is-4'>{$namef} {$namel}</p>
        <p class='subtitle is-6'>{$tele}</p>
        <p class='subtitle is-6'>{$address}</p>
        <p class='subtitle is-4'>{$messagef}</p>
      </div>
    </div>
     
      
   
  </div>
</div>

</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= "From: <{$namef}.{$namel}@wsaleh.com>" . "\r\n";
//$headers .= 'Cc: myboss@example.com' . "\r\n";

echo mail($to,$subject,$message,$headers);
?>