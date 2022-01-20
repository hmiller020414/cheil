# Cheil – Hayley Miller

This is a design for a product page that showcases Samsung's Smartphone options.

For each Smartphone, you are able to see an initial thumbnail image, the name of the phone, the various color options that the phone comes in, and the starting price for the phone.

Here is the process I took to complete this assignment:

# STEP 1: API Research
I started by looking into the API to see what kind of details I received for each product. I wrote a list of the different data I might want to use, and the path to each piece of data.

# STEP 2: Design
From this list, I used Adobe XD to design a simple and clean layout for these product cards. I used the Samsung logo and a few photos I took from the API to mock up this design.

# STEP 3: Set-Up
Then I was ready to code! I created my repository, cloned it to my laptop and created my react app. I cleaned up files I wouldn't be using, and made folders and files for each component I'd be creating.

# STEP 4: Data
My first step was to fetch the data from the API. I was able to verify within my browser that I was receiving a response from the API

# STEP 5: Hero Component
Next, I created a simple component for my Hero to show the Samsung logo and H1

# STEP 6: Product Gallery and Single Product Components
I moved my data into the product gallery component and imported UseEffect and UseState to capture the products from the fetch. I only wanted to show Smartphones, so I filtered that data to eliminate Tablets and TVs. Then I was able to use a map function to render a Single Product component for each Smartphone. Within that component, I changed my placeholder copy to instead show the name, thumbnail and the price for that product.

# STEP 7: Color Options Component
I passed the array of color options, if it existed, from the Single Product to the Color Options component. Then I rendered a small circle for each color, using the hex code as the background color of the circle.

# STEP 8: Styling
Now that I had all the product data I wanted, I installed Sass and created all relevant files. I made folders for each component to house the JS and SCSS files for that component, for a cleaner file structure. Then I wrote the styles for each component on desktop. Once it matched my Adobe XD design, I added responsiveness so that the design looks good across all devices.

# STEP 9: Cleanup
Finally, I simplified some of the code by destructuring the object outside of the render.