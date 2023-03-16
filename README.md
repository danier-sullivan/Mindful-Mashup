# Mindful-Mashup
## Deployed Link
> Click here: <a href="https://mindful-mashup.herokuapp.com/" target="_blank">Mindful Mashup</a>

## Project Description
> General App Idea/Purpose<br />
Mindful Mashup is an app where individuals can view and add healthy coping strategies and good mental health and mindfulness practices. The goal off this app is to give the user an easy reference for things they can do to positively affect their mental health.

> Models including field names and their datatypes<br />
Entry 
String: Title  
String: Description
String: Contributor <br />

> A list of routes (e.g. `POST /pins/ allows users to post a picture of a pin`)<br />
* Get /entry Index  shows a list of entries
* Get /entry/:id Show Title and description of 1 entry
* Get /entry/new New Show form to enter new strategy / practice
* Post /entry Create create entry on server
* Get /entry/:id/edit Edit Get form already filled in for user to change
* Put/Patch /entry/:id Update update entry <id>'s data on server
* Delete /entry/:id Destroy   Removes entry<id> from server

## Technologies
> Tech Stack
* Express MVC architecture + REST Framework
* MongoDB(Atlas): mongoose for CRUD
* Express Framework with ejs templates
* Server created with JavaScript



## Wireframes
> Wireframes with basic page layouts<br />
> Copy and paste or drag and drop your images here.
Index Page
![Screenshot 2023-03-07 at 7 11 43 PM](https://media.git.generalassemb.ly/user/46921/files/09c9baae-113f-4809-adbd-526ba86d6953)
Show Page
![Screenshot 2023-03-07 at 7 12 48 PM](https://media.git.generalassemb.ly/user/46921/files/dbdf1fb4-ef96-4de9-8d52-7b39fba695c9)




## User Stories
> User stories detailing app functionality<br />

* As a user I want to be able to view a list of the titles of all the entries on the index page.
* As a user I want to be able to click on a title from the index page and be shown the entry title  and description on a new page
* As a user I want the option to delete and edit entries on their individual show pages only
* As a user I want to be able to add entries with a title and description and list myself as the contributor


### MVP Goals
* A working full-stack application, built by me, using **Node.js, Mongoose, Express and EJS**
* Adhere to the **MVC** file structure: Models, Views, Controllers
* At least one model with all 7 **RESTful routes** and full **CRUD**.
* **Be deployed online** and accessible to the public via **Heroku**

### Stretch Goals

* Make it so that a user can only edit or delete an entry they created
* Portfolio level styling
* Add a sign up with login and password
* Make it so individual users can favorite entries that will be saved under their login 
