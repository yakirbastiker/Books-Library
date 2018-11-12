The Books Library - Home Assignment


The task is to write a simple webpage in Angular 5-6 / React that shows a list of
books - data is provided via an Ajax Request, that returns a JSON object.
Note: not a real server is needed here, the ajax call will return JSON files, you
can serve it locally or from remote origin, or from google books api.
Each book will have:
1. id (Auto generated, please don’t ask the user to fill it out)
2. Author Name
3. Published Date
4. Book Title

The page will show all the books resolved from the requests with a proper design
– nice design == high score.
1. The design should be responsive, use bootstrap / flexbox - should look
good, please don’t use Tables of any kind.
2. Each book can be edit, meaning that an edit button should be available
to edit the book fields, on each book.
3. Edit button should open a modal (popup) with save and cancel buttons.
4. On Edit mode - All fields of the book should be filled with values.
5. Proper validation should be included:
a. strings – not empty
b. date – valid date
Proper error message should be shown when trying to save the book - Please
don’t use HTML5 validation
6. There should be an option to delete a book with a popup message
(cancel, ok) ok will delete the book.
7. Use filter / pipe to show each book title : in the following format :
a. first letter of each word uppercase and each other letter should be
lowercase,
b. also remove any non-English letters from the title. For example : A
title with the name “@@THIS is a BooK!!” should be presented as
“This Is A Book”
 7. Please don’t use html validation but Angular / React validations.
 8. Please add add new book, button that will open the add new book modal
(popup).

Please Note: None of this operations should be persistent (refreshing the page
will clear the changes).

Bonus Task
● Prevent from the user to add / edit a book with existing title, show error
message that same book name is already exist











# BooksLibrary

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
