# Ping-Pong
## Week 10: Independent weekened project

Created a web application that takes a number from a user and returns a range of numbers from 1 to the chosen number with certian  exceptions, v 1.0 (October 2018)

By Daniel Burbach

Created in Epicodus for personal and public use
Main purpose is to show the possibilities of looping and arrays using JS, HTML, and Behavior Driven Development.

### Setup/Installation Requirements:
1. Load up page either via GitHub, Download, or weblink
2. Be sure that the number you enter is a numerical number. Ex: "135" and not "One-hundred thirty-five"
3. After entering number into field press the "Ping Pong" button for results
4. Number entered will be broken into a full string and each number identified with the following exceptions:
    
    - Numbers divisible by 3 are replaced with "ping"
    - Numbers divisible by 5 are replaced with "pong"
    - Numbers divisible by 15 are replaced with "pingpong"
#### Example: 
- 1
- 2
- ping
- 4
- pong
- ping
- 7
- 8
- ping
- pong
- 11
- ping
- 13
- 14
- pingpong

### Behavior Driven Development for Ping-Pong:

- Take the users input and display it as a string.

    --input: 12 --output: 1,2,3,4,5,6,...,11,12

- Take the users input and recognize it as a true number, otherwise alert user.

    --input: hello my name is Dan. --output: Alert: "Please enter in an actual number"

- If the string is divisible by 3, return "ping"

    --input: 9 --output: "ping"

- If the string is divisible by 5, return "pong"

    --input: 95 --output: "pong"

- If the number is divisible by 15, return "ping-pong"

    --input: 60 --output: "ping-pong"

- If the number isn't any of the previous 3 points, return as normal

    --input: 2  --output: 1,2

- Returned a compiled string of the previous 4 points

    --input: 12  --output: 1 ,2 ,"ping" ,4 ,"pong" ,"ping" ,7 ,8 ,"ping" ,"pong" ,11 , "ping"

- Have a refresh button so the user may quickly re-enter a different number

    --input: "push button"  --output: refreshes page and empties results

### Known Bugs
Currently no known bugs however while the field can have a number of over 10 numerals, this will most likely cause your computer to slow down and it may not return an answer since there is an overflow limiter on most internet OS.

### Support and contact details
Questions or comments, please contact Daniel Burbach at dburbach1982@gmail.com Advice on code layout or use? I am open to ideas and suggestions!

### Technologies Used
Used HTML, CSS, jQuery (v 3.3.1), BDD (Behavior Driven Development),  and Bootstrap to create content.

### Images Used
All images used are from freeimages.com, pexels.com, unsplash.com, and/or from google search image results.

### License
MIT License

## Copyright (c) 2018 Daniel Burbach's Portfolio Page

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

#### THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


