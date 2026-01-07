<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

  $name = trim($_POST["name"]);
  $email = trim($_POST["email"]);
  $message = trim($_POST["message"]);

  $to = "beatxtechyt@gmail.com"; // 🔴 CHANGE to your email
  $subject = "New Contact Message - BeatXTech";

  $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

  $headers = "From: BeatXTech <$email>";

  if (mail($to, $subject, $body, $headers)) {
    echo "<script>
      alert('Message sent successfully!');
      window.location.href='index.html#contact';
    </script>";
  } else {
    echo "<script>
      alert('Message failed. Try again later.');
      window.history.back();
    </script>";
  }
}
?>
