# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# create sports
["football","basketball","soccer","tennis","golf"].each do {|sportname|
  Sport.create(sport: sportname)
}

# create coaches
Coach.create(first_name: "Steve", last_name: "Nash", zip_code: "85002", 
  coach_description: "2× NBA Most Valuable Player, 8× NBA All-Star, 3× All-NBA First Team, 
  2× All-NBA Second Team, 5× NBA assists leader")

Coach.create(first_name: "Steph", last_name: "Curry", zip_code: "94501", 
  coach_description: "Wardell Stephen Curry II is an American professional basketball player 
    for the Golden State Warriors of the National Basketball Association. A six-time NBA All-Star, 
    Curry has been named the NBA Most Valuable Player twice and won three NBA championships with 
    the Warriors.")

Coach.create(first_name: "Charles", last_name: "Woodson", zip_code: "94501", 
  coach_description: "Super Bowl champion (XLV), 9× Pro Bowl (1998–2001, 2008–2011, 2015), 4× First-team 
    All-Pro (1999, 2001, 2009, 2011), 4× Second-team All-Pro (2000, 2008, 2010, 2015), NFL Defensive 
    Player of the Year (2009), NFL Defensive Rookie of the Year (1998), 2× NFL interceptions leader (2009, 2011)") 

Coach.create(first_name: "Vince", last_name: "Young", zip_code: "85002", 
  coach_description: "The real Vince Young National Champion, 2X Pro Bowler, 06 ROY")

Coach.create(first_name: "Andy", last_name: "Roddick", zip_code: "85002", 
  coach_description: "I used to play tennis....")

Coach.create(first_name: "Lorena", last_name: "Ochoa", zip_code: "85002", 
  coach_description: "Retired at #1")

Coach.create(first_name: "Mia", last_name: "Hamm", zip_code: "85002", 
  coach_description: "Retired at #1")

Coach.create(first_name: "Lorena", last_name: "Ochoa", zip_code: "85002", 
  coach_description: "Retired at #1")