# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Sport.destroy_all
Coach.destroy_all
User.destroy_all
CoachDetail.destroy_all
CoachingSession.destroy_all


# create sports
sport1 = Sport.create(sport: "football")
sport2 = Sport.create(sport: "basketball")
sport3 = Sport.create(sport: "soccer")
sport4 = Sport.create(sport: "tennis")
sport5 = Sport.create(sport: "golf")

# create coaches
# basketball
coach1 = Coach.create(first_name: "Steve", last_name: "Nash", zip_code: "85002", 
  coach_description: "2× NBA Most Valuable Player, 8× NBA All-Star, 3× All-NBA First Team, 
  2× All-NBA Second Team, 5× NBA assists leader")

coach2 = Coach.create(first_name: "Steph", last_name: "Curry", zip_code: "94501", 
  coach_description: "Wardell Stephen Curry II is an American professional basketball player 
    for the Golden State Warriors of the National Basketball Association. A six-time NBA All-Star, 
    Curry has been named the NBA Most Valuable Player twice and won three NBA championships with 
    the Warriors.")

coach3 = Coach.create(first_name: "Byron", last_name: "Norris", zip_code: "97275", 
  coach_description: "I've coached AAU for the last 5 years")

coach4 = Coach.create(first_name: "Connie", last_name: "Gardner", zip_code: "83778", 
  coach_description: "Former NCAA DII player")

coach5 = Coach.create(first_name: "Ed", last_name: "Waters", zip_code: "62474", 
  coach_description: "I'm a proven coach with proven methods that work")

# football
coach6 = Coach.create(first_name: "Charles", last_name: "Woodson", zip_code: "94501", 
  coach_description: "Super Bowl champion (XLV), 9× Pro Bowl (1998–2001, 2008–2011, 2015), 4× First-team 
    All-Pro (1999, 2001, 2009, 2011), 4× Second-team All-Pro (2000, 2008, 2010, 2015), NFL Defensive 
    Player of the Year (2009), NFL Defensive Rookie of the Year (1998), 2× NFL interceptions leader (2009, 2011)") 

coach7 = Coach.create(first_name: "Vince", last_name: "Young", zip_code: "85002", 
  coach_description: "The real Vince Young National Champion, 2X Pro Bowler, 06 ROY")

coach8 = Coach.create(first_name: "George", last_name: "Hamilton", zip_code: "75399", 
  coach_description: "I once caught a TD in 5th grade flag football")
 
coach9 = Coach.create(first_name: "Byron", last_name: "Norris", zip_code: "66294", 
  coach_description: "Rec league champ")

coach10 = Coach.create(first_name: "Pat", last_name: "Barrett", zip_code: "29596", 
  coach_description: "I grew up with football in the house, I know what I'm doing")

# tennis
coach11 = Coach.create(first_name: "Andy", last_name: "Roddick", zip_code: "68022", 
  coach_description: "I used to play tennis")
  
coach12 = Coach.create(first_name: "Pamela", last_name: "McGuire", zip_code: "85264", 
  coach_description: "Women Doubles preferred")

coach13 = Coach.create(first_name: "Archie", last_name: "Simon", zip_code: "73538", 
  coach_description: "CSS runner up '05")
 
coach14 = Coach.create(first_name: "Brook", last_name: "Hicks", zip_code: "24679", 
  coach_description: "10 years experience with coaching")

# golf
coach15 = Coach.create(first_name: "Lorena", last_name: "Ochoa", zip_code: "22434", 
  coach_description: "Retired at #1")

coach16 = Coach.create(first_name: "Angel", last_name: "Johnson", zip_code: "90645", 
  coach_description: "Let me teach you my secrets to up your putting game")
  
coach17 = Coach.create(first_name: "Steve", last_name: "Cobb", zip_code: "24601", 
  coach_description: "I can bring you from clubhouse zero to clubhouse hero")
  
coach18 = Coach.create(first_name: "Steven", last_name: "Floyd", zip_code: "97338", 
  coach_description: "I caddied for Tiger, so I'm pretty much a sure thing")

# soccer
coach19 = Coach.create(first_name: "Mia", last_name: "Hamm", zip_code: "36701", 
  coach_description: "2x Olympic gold medalist")
  
coach20 = Coach.create(first_name: "Zinedine", last_name: "Zidane", zip_code: "10005", 
  coach_description: "#zizou")
 
coach21 = Coach.create(first_name: "Elsa", last_name: "Richardson", zip_code: "72942", 
  coach_description: "I once scored a goal in AYSO")
  
coach22 = Coach.create(first_name: "Nicolas", last_name: "Boone", zip_code: "24593", 
  coach_description: "Local middle school coach with some free time on the weekends")

coach23 = Coach.create(first_name: "Santiago", last_name: "Jaramillo", zip_code: "83569", 
  coach_description: "My friends call me Santi, nice to meet you")

# create users
user1 = User.create(first_name: "Demo", last_name: "User", password: "demouser", email_address: "demo@demo.com", zip_code: "95070")
user2 = User.create(first_name: "first", last_name: "last", password: "password", email_address: "test@test.com", zip_code: "95070")

# create coach details
CoachDetail.create(coach_id: coach1.id, sport_id: sport2.id, duration: 30, coaching_rate: 120, elite_coach: true, equipment: true)
CoachDetail.create(coach_id: coach2.id, sport_id: sport2.id, duration: 45, coaching_rate: 300, elite_coach: true, equipment: false)
CoachDetail.create(coach_id: coach3.id, sport_id: sport2.id, duration: 60, coaching_rate: 40, elite_coach: false, equipment: true)
CoachDetail.create(coach_id: coach4.id, sport_id: sport2.id, duration: 30, coaching_rate: 20, elite_coach: false, equipment: true)
CoachDetail.create(coach_id: coach5.id, sport_id: sport2.id, duration: 45, coaching_rate: 40, elite_coach: false, equipment: true)
CoachDetail.create(coach_id: coach6.id, sport_id: sport1.id, duration: 30, coaching_rate: 40, elite_coach: true, equipment: false)
CoachDetail.create(coach_id: coach7.id, sport_id: sport1.id, duration: 120, coaching_rate: 300, elite_coach: true, equipment: false)
CoachDetail.create(coach_id: coach8.id, sport_id: sport1.id, duration: 45, coaching_rate: 45, elite_coach: false, equipment: false)
CoachDetail.create(coach_id: coach9.id, sport_id: sport1.id, duration: 90, coaching_rate: 50, elite_coach: false, equipment: false)
CoachDetail.create(coach_id: coach10.id, sport_id: sport1.id, duration: 60, coaching_rate: 25, elite_coach: false, equipment: true)
CoachDetail.create(coach_id: coach11.id, sport_id: sport4.id, duration: 30, coaching_rate: 140, elite_coach: true, equipment: true)
CoachDetail.create(coach_id: coach12.id, sport_id: sport4.id, duration: 45, coaching_rate: 70, elite_coach: false, equipment: true)
CoachDetail.create(coach_id: coach13.id, sport_id: sport4.id, duration: 60, coaching_rate: 70, elite_coach: false, equipment: true)
CoachDetail.create(coach_id: coach14.id, sport_id: sport4.id, duration: 30, coaching_rate: 55, elite_coach: false, equipment: true)
CoachDetail.create(coach_id: coach15.id, sport_id: sport5.id, duration: 30, coaching_rate: 150, elite_coach: true, equipment: true)
CoachDetail.create(coach_id: coach16.id, sport_id: sport5.id, duration: 45, coaching_rate: 90, elite_coach: false, equipment: false)
CoachDetail.create(coach_id: coach17.id, sport_id: sport5.id, duration: 60, coaching_rate: 120, elite_coach: false, equipment: false)
CoachDetail.create(coach_id: coach18.id, sport_id: sport5.id, duration: 120, coaching_rate: 35, elite_coach: false, equipment: true)
CoachDetail.create(coach_id: coach19.id, sport_id: sport3.id, duration: 90, coaching_rate: 250, elite_coach: true, equipment: false)
CoachDetail.create(coach_id: coach20.id, sport_id: sport3.id, duration: 30, coaching_rate: 200, elite_coach: true, equipment: false)
CoachDetail.create(coach_id: coach21.id, sport_id: sport3.id, duration: 60, coaching_rate: 60, elite_coach: false, equipment: true)
CoachDetail.create(coach_id: coach22.id, sport_id: sport3.id, duration: 120, coaching_rate: 65, elite_coach: false, equipment: true)
CoachDetail.create(coach_id: coach23.id, sport_id: sport3.id, duration: 30, coaching_rate: 70, elite_coach: false, equipment: true)
CoachDetail.create(coach_id: coach23.id, sport_id: sport4.id, duration: 30, coaching_rate: 45, elite_coach: false, equipment: true)
CoachDetail.create(coach_id: coach18.id, sport_id: sport4.id, duration: 45, coaching_rate: 30, elite_coach: false, equipment: true)
CoachDetail.create(coach_id: coach21.id, sport_id: sport2.id, duration: 90, coaching_rate: 90, elite_coach: false, equipment: true)
CoachDetail.create(coach_id: coach17.id, sport_id: sport2.id, duration: 120, coaching_rate: 25, elite_coach: false, equipment: true)
CoachDetail.create(coach_id: coach3.id, sport_id: sport1.id, duration: 45, coaching_rate: 60, elite_coach: false, equipment: true)
CoachDetail.create(coach_id: coach5.id, sport_id: sport5.id, duration: 60, coaching_rate: 65, elite_coach: false, equipment: false)
CoachDetail.create(coach_id: coach2.id, sport_id: sport5.id, duration: 60, coaching_rate: 200, elite_coach: true, equipment: false)

# create coach sessions
CoachingSession.create(sport_id: sport1.id, coach_id: coach10.id, user_id: user1.id, training_date: "2020-07-05 10:00", training_duration: 60, training_rate: 25, training_description: "Just need some simple help cleaning up my route running")
CoachingSession.create(sport_id: sport2.id, coach_id: coach2.id, user_id: user1.id, training_date: "2020-07-11 11:00", training_duration: 45, training_rate: 300, training_description: "I need help with my 3s")
CoachingSession.create(sport_id: sport2.id, coach_id: coach4.id, user_id: user1.id, training_date: "2020-07-29 12:00", training_duration: 30, training_rate: 20, training_description: "I want to work on my ball handles")
CoachingSession.create(sport_id: sport5.id, coach_id: coach15.id, user_id: user1.id, training_date: "2020-08-07 11:00", training_duration: 30, training_rate: 150, training_description: "I'm having issues on my swing follow through, would love some advice")
CoachingSession.create(sport_id: sport4.id, coach_id: coach13.id, user_id: user2.id, training_date: "2020-06-05 16:00", training_duration: 60, training_rate: 70, training_description: "Just looking to get out and get some exercise")
CoachingSession.create(sport_id: sport3.id, coach_id: coach21.id, user_id: user2.id, training_date: "2020-06-20 9:00", training_duration: 60, training_rate: 60, training_description: "passing drills please")
CoachingSession.create(sport_id: sport2.id, coach_id: coach1.id, user_id: user2.id, training_date: "2020-07-05 13:00", training_duration: 30, training_rate: 120, training_description: "wanna learn court vision from the best")

# componentdidmount in dashbaord class
# home component does a CPM and fetches