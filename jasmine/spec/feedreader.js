/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
   //why did taylor got promoted? :p
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


        //check if url is defined and the url is not empty
        it('check if it has url', function () {
            for (e in allFeeds) {
                expect(allFeeds[e].url).toBeDefined();
                expect(allFeeds[e].url.length).not.toBe(0);
            }
        });


        //check if name is defined and is not empty
        it('check if it has name', function () {
            for (e in allFeeds) {
                expect(allFeeds[e].name).toBeDefined();
                expect(allFeeds[e].name.length).not.toBe(0);
            }
        });

    });


    //new test suite named "The menu"
    describe('The menu', function () {
        //check if menu is hidden by default
        it('check if menu is hidden initaily', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        //whether the class of body changes on being clicked
        var menu = $('.menu-icon-link');
        it('check if the visibility of menu changes on click', function () {
            menu.click();
            expect($('body').hasClass('menu-hiddden')).toBe(false);
            menu.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    // test suite named "Initial Entries"
    describe('Initial Entries', function () {
        //checks for a single .entry element within .feed container
        beforeEach(function (done) {
            loadFeed(0, done);
        });
       
        it('ensure that loadFeed function completes its work', function () {
            expect($('.feed .entry').length).not.toBe(0);
        });
    });
    // new test suite named "New Feed Selection" 
    describe('New Feed Selection', function () {
        
        //checks for change of content when a new feed is loaded
        var data;
        var data1;
        beforeEach(function (done) {
            loadFeed(0, function () {
                data = $('.feed').html();
                loadFeed(1, function () {
                    done();
                });
            });
        });
        it('ensure that content changes', function (done) {
            data1 = $('.feed').html();
            expect(data1).not.toBe(data);
            done();
        });
    });
}());