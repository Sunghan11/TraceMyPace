# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.destroy_all
Route.destroy_all
Status.destroy_all
Comment.destroy_all

users = User.create([
    {first_name: "Elijah", last_name: "Nam", email: "testUser@gmail.com", password:"password", birth_date:"2000-12-20", gender: "Male", location: "United States"},
    {first_name: "Kobe", last_name: "Bryant", email: "kobe@gmail.com", password:"password", birth_date:"1978-08-23", gender: "Male", location: "United States"},
    {first_name: "Stephen", last_name: "Curry", email: "scurry@gmail.com", password:"password", birth_date:"1988-03-14", gender: "Male", location: "United States"},
    {first_name: "Shaquille", last_name: "O'Neal", email: "shaq@gmail.com", password:"password", birth_date:"1972-03-06", gender: "Male", location: "United States"},
    {first_name: "Lebron", last_name: "James", email: "LB23@gmail.com", password:"password", birth_date:"1984-12-30", gender: "Male", location: "United States"},
    {first_name: "Michael", last_name: "Jordan", email: "theGOAT@gmail.com", password:"password", birth_date:"1963-02-17", gender: "Male", location: "United States"},
    {first_name: "Derrick", last_name: "Rose", email: "DRose@gmail.com", password:"password", birth_date:"1988-10-04", gender: "Male", location: "United States"},
    {first_name: "Kawhi", last_name: "Leonard", email: "TheClaw@gmail.com", password:"password", birth_date:"1991-06-29", gender: "Male", location: "United States"},
])

routes = Route.create([
    {name: "First Route", user_id: User.first.id, activity: "Run", route_map:"" , distance: "4.50", city: "New York", location_markers: "40,-74" },
    {name: "Second Route", user_id: User.first.id, activity: "Walk", route_map: "" , distance: "5.50", city: "New York", location_markers: "40,-72"},
    {name: "Third Route", user_id: User.first.id, activity: "Run", route_map: "", distance: "6.50", city: "New York", location_markers: "45,-71"},
])

statuses = Status.create([
    {body: "Great Run Today!", author_id: User.first.id},
    {body: "Run across the Brooklyn Bridge!", author_id: User.first.id},
    {body: "Mamba Mentality", author_id: User.second.id},
    {body: "1.. 2.. 3..", author_id: User.third.id},
    {body: "Supermannnn is in the Building!", author_id: User.fourth.id},
    {body: "Not 1, not 2, not 3...", author_id: User.fifth.id},
    # {body: "the Greatest Run of All Time", author_id: User.sixth.id},
    # {body: "Too fast, too Strong, too goooood", author_id: User.seventh.id},
    {body: "... ... ...", author_id: User.last.id}
])

comments = Comment.create([
    {body: "Not a bad run, not great, but not bad", author_id: User.second.id, status_id: Status.first.id},
    # {body: "Not the Greatest Run of all time", author_id: User.sixth.id, status_id: Status.first.id},
    {body: "Beautiful View", author_id: User.fifth.id, status_id: Status.second.id},
    {body: "Lets Goooo!", author_id: User.third.id, status_id: Status.second.id},
    {body: "# 1", author_id: User.fourth.id, status_id: Status.second.id},
    {body: "The Claw approves", author_id: User.last.id, status_id: Status.first.id},
])