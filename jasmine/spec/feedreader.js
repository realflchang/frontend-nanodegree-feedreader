/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
"use strict";

$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        // #8
        it('Feed URLs should be defined and not empty', function() {
            for (var i=0; i<allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe("");
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        // #9
        it('Feed NAMEs should be defined and not empty', function() {
            for (var i=0; i<allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe("");
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    // #10
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        // #11
        it('element is hidden by default', function() {
            // Menu class div is transitioned with css transform. Using jQuery to retrieve css transition x value (var rs)
            // Menu shows by making X==0. It hides the menu by changing X==-192 (or can be less) using css transform.
            // We get the xpos by retrieving the menu's css transform property, and parse that.
            //   If xpos is -192 (or the width of menu) or less, then the menu is hidden.
            //   If xpos is 0, then the menu is visible.
            var xpos = parseInt($('.menu').css('transform').split(',')[4]);

            expect(xpos).toBeLessThan(-191);
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        // #12
        it('toggles when menu icon is clicked open and close', function() {

            // body element uses class "menu-hidden" to hide the menu.
            //   So if this class exists, that means the menu is hidden.
            //   If this class does not exist, that means the menu is visible.
            //
            // Page starts with menu hidden, or class menu-hidden to be true
            $('.icon-list').on('click', function(expect) {
                expect;
            }).trigger('click', [expect($('body').hasClass('menu-hidden')).toBeTruthy()]);

            // After first simulated click, class menu-hidden is removed from body element.
            $('.icon-list').on('click', function(expect) {
                expect;
            }).trigger('click', [expect($('body').hasClass('menu-hidden')).toBeFalsy()]);

        });

    });

    /* TODO: Write a new test suite named "Initial Entries" */
    // #13
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        // #14
        beforeEach(function(done) {
            // Run loadFeed. It should then retrieve its entries.
            loadFeed(0, function() {
                done();
            });

        });

        // .entry element should now have at least an entry and not be null.
        it('should have at least one entry', function(done) {
            expect($('.entry')).not.toBe(null);
            done();
        });

    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    // #15
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        // #16
        // feed0 is original feed. feed1 is after running loadFeed(1), data should change.
        // Then after that, callback runs loadFeed(2) to get feed2 to make sure data changes again.
        var feed0, feed1, feed2;

        beforeEach(function(done) {
            // Original feed.
            feed0 = $('.feed a').text();

            // Get new feed(1).
            loadFeed(1, function() {
                feed1 = $('.feed a').text();

                // When done getting new feed, get another new feed(2) to compare changes.
                loadFeed(2, function() {
                    feed2 = $('.feed a').text();
                    done();
                });
            });
        });

        it('should change content', function() {
            // Original feed0 should not be the same as feed1.
            expect(feed0).not.toBe(feed1);

            // feed1 should also not be the same as feed2.
            expect(feed1).not.toBe(feed2);
        });
    });
}());
