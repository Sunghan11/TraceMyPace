# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.delete_all
Route.delete_all

demoUser = User.create(
    first_name: "demo",
    last_name: "user",
    email: "testUser@gmail.com",
    password: "password",
    birth_date: "1988-03-26",
    gender: "Male",
    location: "United States"
)

users = User.create([
    {first_name: "Demo", last_name: "User", email: "testUser@gmail.com", password:"password", birth_date:"2000-12-20", gender: "Male", location: "United States"},
    {first_name: "Kobe", last_name: "Bryant", email: "kobe@gmail.com", password:"password", birth_date:"1978-08-23", gender: "Male", location: "United States"},
    {first_name: "Stephen", last_name: "Curry", email: "scurry@gmail.com", password:"password", birth_date:"1988-03-14", gender: "Male", location: "United States"},
    {first_name: "Shaquille", last_name: "O'Neal", email: "shaq@gmail.com", password:"password", birth_date:"1972-03-06", gender: "Male", location: "United States"},
    {first_name: "Lebron", last_name: "James", email: "LB23@gmail.com", password:"password", birth_date:"1984-12-30", gender: "Male", location: "United States"},
    {first_name: "Michael", last_name: "Jordan", email: "theGOAT@gmail.com", password:"password", birth_date:"1963-02-17", gender: "Male", location: "United States"},
    {first_name: "Derrick", last_name: "Rose", email: "DRose@gmail.com", password:"password", birth_date:"1988-10-04", gender: "Male", location: "United States"},
    {first_name: "Kawhi", last_name: "Leonard", email: "TheClaw@gmail.com", password:"password", birth_date:"1991-06-29", gender: "Male", location: "United States"},
])

routes = Route.create ([
    {name: "First Route", user_id: User.first.id, activity: "Run", route_map:"" , distance: "4.50", city: "New York"},
    {name: "Second Route", user_id: User.first.id, activity: "Walk", route_map: "" , distance: "5.50", city: "New York"},
    {name: "Third Route", user_id: User.first.id, activity: "Run", route_map: "", distance: "6.50", city: "New York"},
])