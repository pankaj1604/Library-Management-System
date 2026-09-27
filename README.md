# Libraray Management System

    This is a library management API Backend for the management of Users and The Books

# Routes and the Endpoints

## /users
GET: Get all the list of users in the system
POST: Create a new user


## /users{id}
GET: Get a user by their ID
PUT: Updating a user by their ID
DELETE: Deleting a user by their ID (Check if the user still has an issued book) && {is there any fine/penalty to be collected}

## /users/subscription-details/{id}
GET: Get a user subscripton details
    >> Date of Subscription
    >> Valid till
    >> Fine if any

## /books
GET: Get all the books in the system
POST: Add a new book to the system

## /books/{id}
GET: Get a book by its ID
PUT: Update a book by its ID
DELETE: Delete a book by its ID

## /books/issued
GET: Get all the issued books

## /books/issued/withFine
GET: Get all issued books with their fine amount


## Subscription Types
    >> Basic (3 months)
    >> Standard (6 months)
    >> Premium (12 months)

>> If a user misses the renewal date, then user should be collected with 100 rs.
>> If a user misses his subscription, then user is expected to pay 100 rs.
>> if a user misses both renewal & subscripton, then the collected amount should be 200 rs.