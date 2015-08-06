Feed Reader Testing Project
=================================

This is a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we were left with an application with an incomplete test suite.

To run, open index.html on your browser. The page will also load Jasmine and run thru a series of tests as specified in feedreader.js.  Results of these tests will appear on the bottom of the webpage for index.html.

Tests
======
The series of tests involve:

1. RSS Feeds

  * Are they defined?
  * Are the Feed URLs defined and not empty?
  * Are the Feed NAMEs defined and not empty?

2. The Menu
  * Is it hidden by default?
  * Does it toggle on and off when the menu icon is clicked?

3. Initial Entries
  * Does the feed actually register via asynchronous process?

4. New Feed Selection
  * Does the feed actually changes when we select other menu items?


Test Results
=============
Test results should show all tests pass at the bottom of the webpage.

