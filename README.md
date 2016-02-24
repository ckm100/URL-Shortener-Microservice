# URL Shortener Microservice

### User Story

  - You can pass a URL as a parameter and you will receive a shortened URL in the JSON response.

    - If you pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.

    - When you visit that shortened URL, it will redirect you to the original link.
    
## Example Creation Usage:

https://thawing-refuge-32459.herokuapp.com/freecodecamp.com

https://thawing-refuge-32459.herokuapp.com/freecodecamp.com/ckm100

## Example Creation Output:

{ "original_url": "http://freecodecamp.com/ckm100", "short_url": "https://thawing-refuge-32459.herokuapp.com/12" }

## Usage

https://thawing-refuge-32459.herokuapp.com/12

## Will redirect to:

http://freecodecamp.com/ckm100
