# UNCORKD

UNCORKD is a beer review site inspired by UNTAPPD, users can share their opinions and thoughts
with their friends. Users can also browse through the collection of breweries and beverages listed on the site. 

[UNCORKD Live](https://uncork-d.herokuapp.com/)


## Features

<ul>
    <li> Backend to Frontend user authentication with password and session token encryption. </li>
    <li> On login, users are redirected to the home page where they can view the recent activty of other users. </li>
    <li> Users are able to look through the list of breweries and their respective beverages. </li>
    <li> Users can check-in a beverage they've tried, share their thoughts, and incldue a picture! </li>
    <li> Users have a profile page that displays their check-ins and stats for their account. </li>
    <li> Display pages for breweries and beverages are updated to show the proper ratings and check-in counts </li>
</ul>

## Technologies

### Backend
<ul>
    <li> Ruby 2.5.1 </li>
    <li> Rails 5.3.2 </li>
    <li> Postgresql </li>
</ul>

### Frontend
<ul>
    <li> React </li>
    <li> Redux </li>
    <li> JavaScript-ES6 </li>
</ul>

## Feature Highlights

### Brewery Pages

![Brew Show](https://github.com/ppondo/Uncorkd/blob/master/app/assets/images/brew-show.png "Brewery Show")

The Brewery Show page includes an average rating display, which renders the current rating out of five.
This was acheived by calculating the average rating in the backend, passing that rating up when the frontend requests it, and updating the styling of the rating display when the rating changes.

This page also displays the total, unique, and monthly checkins for each brewery, as well as the amount of checkins the current user has created for beverages that belong to that brewery.

### Checkin Feed

![Checkin](https://github.com/ppondo/Uncorkd/blob/master/app/assets/images/checkin.png "Checkin")

Checkins display the optional rating that the user provided on review, the optional body of the review, and an image if the user chooses to include one. The images that the users include in their reviews are uploaded to and retrieved from a bucket provided by Amazon's S3 service.

The checkins also include a link to a page which displays a detailed version of a single checkin, as well as a button that removes the checkin from the app. This action updates the users stats accordingly.

## Upcoming Features

<ul>
    <li> Likes and Comments! Users will be able to comment on checkins and like them. </li>
    <li> Search! Users will be able to search the app for particular beverages, breweries, or users. </li>
    <li> Badges! Users will receive special badges for reaching milestones (number of checkins, checking in certain styles, etc.) </li>
    <li> Friends! Users will be able to add friends to interact with on the app. </li>
    <li> Profile Customization! Users will be able to change their avatar and profile header image. </li>
</ul>