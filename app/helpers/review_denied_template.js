function review_accept_template(name) {
  var html = `<html style="--bottom-side-width: 185px">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;1,700&amp;family=Libre+Barcode+128&amp;family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;family=Nunito:ital,wght@1,500&amp;family=Rowdies:wght@300&amp;display=swap"
      rel="stylesheet"
    />
    <style>
      body {
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Josefin Sans", sans-serif;
        font-family: "Libre Barcode 128", cursive;
        font-family: "Montserrat", sans-serif;
      }
      .bold {
        font-family: "Rowdies", cursive;
      }
      a {
        text-decoration: none;
      }
      .text-secondary {
        color: #8a56b5;
      }
      .bg-secondary {
        background-color: #8a56b5;
      }
      .logo {
        width: 10rem;
      }
      .h1 {
        font-size: 2rem;
        margin: 0;
        color: #888;
      }
      .h2 {
        font-size: 2rem;
        margin: 0;
      }
      .h3 {
        font-size: 1.5rem;
        margin: 0;
      }
      .h4 {
        color: #888;
      }
      .code {
        border: 2px solid #999;
        padding: 0.5rem 1rem;
        font-size: 2rem;
        color: #8a56b5;
        width: max-content;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
      }
      hr {
        border: 1px solid #ddd;
      }
      ul {
        display: inline;
        padding: 0;
        margin: 0;
      }
      ul li {
        list-style: none;
        display: inline;
        margin: 0 0.25rem;
      }
      ul li a {
        color: #999;
      }
    </style>
  </head>
  <body>
    <div class="">
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <img
          src="https://www.brandsreviews.com/images/brandslogo.webp"
          class="logo"
        />
      </a>
      <br />
      <br />
      <br />
      <br />
      <p class="h2 bold">Hi ${name}</p>
      <p class="h4">
      Unfortunately, your comment was rejected and won’t be published on the website.
      </p>
      <p class="h4">
      We would like to thank you for your time and let you know that we value and respect your opinion.
      </p>
      <br />
      <br />
      <ul class="">
        <li>
          <a
            href="https://brandsreviews.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to brandsreviews
          </a>
        </li>
        <li>|</li>
        <li>|</li>
        <li>
          <a
            href="https://brandsreviews.com/contact-us"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact us
          </a>
        </li>
      </ul>
      <hr />
      <a
        href="https://brandsreviews.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p class="h3 bold text-secondary"></p>
      </a>
    </div>
  </body>
</html>
`;
  return html;
}
module.exports = review_accept_template;
