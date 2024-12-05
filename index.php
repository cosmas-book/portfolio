<?php  define("BASE_PATH", dirname(__DIR__));  ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- SEO Meta Tags -->
    <meta name="description" content="Professional portfolio showcasing expertise, research, and professinal achievement">
    <meta name="keywords" content="Research, Web Development, Books, Publications, Patents, Digital Marketing">

    <!-- Open Graph / Social Media -->
    <meta property="og:title" content="Dr. N. Nagabhooshanam M.E.,Ph.D">
    <meta property="og:type", content="website">
    <meta property="og:url", content="https://critech.in/">
    <meta property="og:image", content="./public/assets/images/DSC_0032.JPG">

    <title>Dr. N. Nagabhooshanam</title>
    <!-- css -->
    <link rel="stylesheet" href="./public/assets/css/style.css">
   
    <link rel="shortcut icon" href="./public/assets/images/DSC_0032.ico" type="image/x-icon">
    
    <!-- font awesome files -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    

    <!-- bootstrap CDN -->
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">





</head>
<body> 
    <?php 
    // echo  realpath("../sections/nav.php"); 
    // echo __DIR__ . '/../sections/nav.php';
    // echo $_SERVER['DOCUMENT_ROOT'];
    // require_once BASE_PATH . "/sections/about.php";
    ?>

    <!-- Navigation -->
    <?php require_once "./sections/nav.php";  ?>


    <!-- About Me -->
     <?php require_once "./sections/about.php"; ?>
     
     
     <!-- Experience -->
     <?php require_once  "./sections/experience.php"; ?>
     
     <!-- Education -->
     <?php require_once  "./sections/education.php"; ?>
     
     <!-- Skills -->
     <?php require_once  "./sections/skills.php"; ?>
     
     <!--Research  -->
     <?php require_once  "./sections/research.php"; ?>
     
     <!-- Contact -->
     <?php require_once  "./sections/contact.php"; ?>
     
     <!-- footer -->
     <?php require_once  "./includes/footer.php"; ?>

     <script src="./public/assets/js/script.js"></script>
     <script src="./includes/patents/script.js"></script>
     <!-- bootstrap js and jquery -->
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>