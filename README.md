# photoswipepopupslider

`umd/` folder contains transpiled version of PhotoSwipe in universal module definition format.

Use it only if you are unable to use ESM version.

Basic example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>photoswipepopupslider</title>
    <link rel="stylesheet" href="./photoswipe.css">


    <style>
        img{
            width: 200px;
        }
    </style>

</head>
<body>
   
    <div class="popup-gallery">
        <a href="https://www.javascripttutorial.net/wp-content/uploads/2021/04/JavaScript-Tutorial.svg" data-pswp-width="1200" data-pswp-height="600">
        <!-- <img src="https://www.javascripttutorial.net/wp-content/uploads/2021/04/JavaScript-Tutorial.svg" alt="" /> -->
        </a>
        <a href="https://blog.logrocket.com/wp-content/uploads/2021/02/machine-learning-libraries-javascript.png" data-pswp-width="1200" data-pswp-height="600">
        <!-- <img src="https://dummyimage.com/120x60/000/fff" alt="" /> -->
        </a>
        <a href="https://oracle-devrel.github.io/devo-image-repository/seo-thumbnails/JavaScript---Thumbnail-1200-x-630.jpg" data-pswp-width="1200" data-pswp-height="600">
        <!-- <img src="https://dummyimage.com/60x60/000/fff" alt="" /> -->
        </a>
        <a href="https://www.freecodecamp.org/news/content/images/2022/11/What-is.png" data-pswp-width="1200" data-pswp-height="600">
        <!-- <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230726113229/Concept-of-nodejs.webp" alt="" /> -->
        </a>
        <a href="https://media.geeksforgeeks.org/wp-content/uploads/20230726113229/Concept-of-nodejs.webp" data-pswp-width="1200" data-pswp-height="600">
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230726113229/Concept-of-nodejs.webp" alt="" />
        </a>
        <a href="https://kinsta.com/wp-content/uploads/2021/03/Nodejs-Architecture-1024x576.png" data-pswp-width="1200" data-pswp-height="600">
            <!-- <img src="https://kinsta.com/wp-content/uploads/2021/03/Nodejs-Architecture-1024x576.png" alt="" /> -->
            </a>
    </div>


    <script src="./photoswipe-lightbox.umd.min.js"></script>
    <script src="./photoswipe.umd.min.js"></script>
    <script src="./custom.js"></script>
</body>
</html>

```
