# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

Sport.destroy_all
Coach.destroy_all
User.destroy_all
CoachDetail.destroy_all
CoachingSession.destroy_all

# create sports
sport1 = Sport.create(sport: "Football")
sport2 = Sport.create(sport: "Basketball")
sport3 = Sport.create(sport: "Soccer")
sport4 = Sport.create(sport: "Tennis")
sport5 = Sport.create(sport: "Golf")
# sport6 = Sport.create(sport: "Volleyball")
# sport7 = Sport.create(sport: "Swimming")
# sport8 = Sport.create(sport: "Baseball")
# sport9 = Sport.create(sport: "Boxing")
# sport10 = Sport.create(sport: "Rugby")
# sport11 = Sport.create(sport: "Cricket")
# sport12 = Sport.create(sport: "Wrestling")
# sport13 = Sport.create(sport: "Badminton")
# sport14 = Sport.create(sport: "Rock Climbing")
# sport15 = Sport.create(sport: "Handball")
# sport16 = Sport.create(sport: "Field Hockey")

# create coaches
# basketball
coach1 = Coach.create(first_name: "Steve", last_name: "Nash", zip_code: "85002", 
  coach_description: "2x NBA Most Valuable Player, 8x NBA All-Star, 3x All-NBA First Team, 
  2x All-NBA Second Team, 5x NBA assists leader")

coach2 = Coach.create(first_name: "Steph", last_name: "Curry", zip_code: "94501", 
  coach_description: "I'm a six-time NBA All-Star, 2x NBA MVP, and 3x NBA champ. I'm also pretty
  good at 3-point shots. I've also been golfing all my life.")

coach3 = Coach.create(first_name: "Byron", last_name: "Norris", zip_code: "97275", 
  coach_description: "I've coached AAU for the last 5 years")

coach4 = Coach.create(first_name: "Connie", last_name: "Gardner", zip_code: "83778", 
  coach_description: "I'm a former NCAA DII player")

coach5 = Coach.create(first_name: "Ed", last_name: "Waters", zip_code: "62474", 
  coach_description: "I'm a proven coach with proven methods that work")

coach24 = Coach.create(first_name: "Charles", last_name: "Welch", zip_code: "41266", 
  coach_description: "Former Summer League assistant coach")

coach25 = Coach.create(first_name: "Cecil", last_name: "French", zip_code: "62474", 
  coach_description: "I grew up playing ball, I know what it takes to bring your game to the next level")

coach26 = Coach.create(first_name: "Cliff", last_name: "Gibbs", zip_code: "83778", 
  coach_description: "15 years as a player, 5 years as a coach. I know what I'm doing")

coach27 = Coach.create(first_name: "Marvin", last_name: "Leonard", zip_code: "62474", 
  coach_description: "I'm a retired collegiate player, just looking to spread the love of the game.")

# football
coach6 = Coach.create(first_name: "Charles", last_name: "Woodson", zip_code: "94501", 
  coach_description: "Super Bowl Champ, 9x Pro Bowl, 4x First-team 
    All-Pro, NFL Defensive Player of the Year, NFL Defensive ROTY") 

coach7 = Coach.create(first_name: "Vince", last_name: "Young", zip_code: "85002", 
  coach_description: "The OG Vince Young National Champion, 2X Pro Bowler, 06 ROTY")

coach8 = Coach.create(first_name: "George", last_name: "Hamilton", zip_code: "75399", 
  coach_description: "I once caught a TD in 5th grade flag football")
 
coach9 = Coach.create(first_name: "Byron", last_name: "Norris", zip_code: "66294", 
  coach_description: "Rec league champion '17")

coach28 = Coach.create(first_name: "Joy", last_name: "Foster", zip_code: "75399", 
  coach_description: "I coached my two boys through high school, now I'm just looking 
    for a way to keep the love of football alive")
 
coach29 = Coach.create(first_name: "Derek", last_name: "Cobb", zip_code: "66294", 
  coach_description: "Dual sport athlete (Football & Track), CSS Champion '13")

coach30 = Coach.create(first_name: "Sean", last_name: "Cole", zip_code: "29596", 
  coach_description: "I played 5 years at UMich under Harbaugh.")

# tennis
coach11 = Coach.create(first_name: "Andy", last_name: "Roddick", zip_code: "68022", 
  coach_description: "I used to play tennis")
  
coach12 = Coach.create(first_name: "Pamela", last_name: "McGuire", zip_code: "85264", 
  coach_description: "I grew up playing tennis, it's what I was born to do.")

coach13 = Coach.create(first_name: "Archie", last_name: "Simon", zip_code: "73538", 
  coach_description: "CSS runner up '05")
 
coach14 = Coach.create(first_name: "Brook", last_name: "Hicks", zip_code: "24679", 
  coach_description: "I have 10 years experience with coaching")

coach31 = Coach.create(first_name: "Judy", last_name: "Ryan", zip_code: "68022", 
  coach_description: "I grew up in the area, played Tennis at all the levels up to collegiate.")
  
coach32 = Coach.create(first_name: "Ruth", last_name: "Wright", zip_code: "85264", 
  coach_description: "CPR certified, mother of 2. I'm well used to coaching.")

coach33 = Coach.create(first_name: "Tommy", last_name: "Hughes", zip_code: "73538", 
  coach_description: "As a former athlete, I know what it takes to bring your game up to the next level.")
 
coach34 = Coach.create(first_name: "Shirley", last_name: "Potter", zip_code: "24679", 
  coach_description: "I've been a local volunteer coach for the last 2 decades.")

# golf
coach15 = Coach.create(first_name: "Lorena", last_name: "Ochoa", zip_code: "22434", 
  coach_description: "Retired at #1. There is literally no one better than me. Ever.")

coach16 = Coach.create(first_name: "Angel", last_name: "Johnson", zip_code: "90645", 
  coach_description: "Let me teach you my secrets to up your putting game.")
  
coach17 = Coach.create(first_name: "Steve", last_name: "Cobb", zip_code: "24601", 
  coach_description: "I can bring you from clubhouse zero to clubhouse hero.")
  
coach18 = Coach.create(first_name: "Steven", last_name: "Floyd", zip_code: "97338", 
  coach_description: "I caddied for Tiger, so I'm pretty much a sure thing.")

coach35 = Coach.create(first_name: "Brooke", last_name: "Moran", zip_code: "22434", 
  coach_description: "Former pro-golfer")

coach36 = Coach.create(first_name: "Arnold", last_name: "Gregory", zip_code: "90645", 
  coach_description: "I've dedicated my entire life to golfing, now I'm ready to pass on my knowledge.")
  
coach37 = Coach.create(first_name: "Hannah", last_name: "Holt", zip_code: "24603", 
  coach_description: "Short game? Long game? I can help with both and everything in between.")
  
coach38 = Coach.create(first_name: "Phil", last_name: "Blackmon", zip_code: "97338", 
  coach_description: "SCU Golf Team '17")

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

coach39 = Coach.create(first_name: "Alfonso", last_name: "Cole", zip_code: "36701", 
  coach_description: "I played striker growning but transitioned to defense at the collegiate level.
    I know what methods are best for training both sides of the ball")
  
coach40 = Coach.create(first_name: "Tommie", last_name: "Ball", zip_code: "10005", 
  coach_description: "I was the CYSA scoring leader '18-'20. I can build you to become the best forward.")
 
coach41 = Coach.create(first_name: "Lawrence", last_name: "Stevens", zip_code: "72942", 
  coach_description: "+20 years on field experience, specializing in goalie training.")
  
coach42 = Coach.create(first_name: "Rachel", last_name: "Townsend", zip_code: "24593", 
  coach_description: "Saratoga AYSO coach 2014-2017. Excellent communication skills and ability to work with young kids")

coach43 = Coach.create(first_name: "Lula", last_name: "Perez", zip_code: "83569", 
  coach_description: "I played center mid for WVU.")

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

CoachDetail.create(coach_id: coach24.id, sport_id: sport2.id, duration: 30, coaching_rate: 40, elite_coach: false, equipment: true)
CoachDetail.create(coach_id: coach25.id, sport_id: sport2.id, duration: 45, coaching_rate: 60, elite_coach: false, equipment: false)
CoachDetail.create(coach_id: coach26.id, sport_id: sport2.id, duration: 60, coaching_rate: 100, elite_coach: true, equipment: true)
CoachDetail.create(coach_id: coach27.id, sport_id: sport2.id, duration: 120, coaching_rate: 150, elite_coach: false, equipment: false)

CoachDetail.create(coach_id: coach28.id, sport_id: sport1.id, duration: 30, coaching_rate: 80, elite_coach: false, equipment: false)
CoachDetail.create(coach_id: coach29.id, sport_id: sport1.id, duration: 60, coaching_rate: 100, elite_coach: false, equipment: true)
CoachDetail.create(coach_id: coach30.id, sport_id: sport1.id, duration: 60, coaching_rate: 100, elite_coach: true, equipment: false)

CoachDetail.create(coach_id: coach31.id, sport_id: sport4.id, duration: 30, coaching_rate: 50, elite_coach: false, equipment: true)
CoachDetail.create(coach_id: coach32.id, sport_id: sport4.id, duration: 30, coaching_rate: 60, elite_coach: true, equipment: false)
CoachDetail.create(coach_id: coach33.id, sport_id: sport4.id, duration: 45, coaching_rate: 70, elite_coach: false, equipment: false)
CoachDetail.create(coach_id: coach34.id, sport_id: sport4.id, duration: 90, coaching_rate: 100, elite_coach: false, equipment: true)

CoachDetail.create(coach_id: coach35.id, sport_id: sport5.id, duration: 60, coaching_rate: 50, elite_coach: false, equipment: true)
CoachDetail.create(coach_id: coach36.id, sport_id: sport5.id, duration: 60, coaching_rate: 80, elite_coach: false, equipment: false)
CoachDetail.create(coach_id: coach37.id, sport_id: sport5.id, duration: 90, coaching_rate: 100, elite_coach: false, equipment: false)
CoachDetail.create(coach_id: coach38.id, sport_id: sport5.id, duration: 120, coaching_rate: 200, elite_coach: true, equipment: true)

CoachDetail.create(coach_id: coach39.id, sport_id: sport3.id, duration: 45, coaching_rate: 90, elite_coach: true, equipment: true)
CoachDetail.create(coach_id: coach40.id, sport_id: sport3.id, duration: 60, coaching_rate: 100, elite_coach: false, equipment: false)
CoachDetail.create(coach_id: coach41.id, sport_id: sport3.id, duration: 90, coaching_rate: 80, elite_coach: true, equipment: false)
CoachDetail.create(coach_id: coach42.id, sport_id: sport3.id, duration: 120, coaching_rate: 200, elite_coach: false, equipment: true)
CoachDetail.create(coach_id: coach43.id, sport_id: sport3.id, duration: 120, coaching_rate: 220, elite_coach: false, equipment: false)

# create coach sessions
CoachingSession.create(sport_id: sport1.id, coach_id: coach10.id, user_id: user1.id, training_date: "2020-05-29 10:00", training_duration: 60, training_rate: 25, training_description: "Just need some simple help cleaning up my route running")
CoachingSession.create(sport_id: sport2.id, coach_id: coach2.id, user_id: user1.id, training_date: "2020-07-11 11:00", training_duration: 45, training_rate: 300, training_description: "I need help with my 3s")
CoachingSession.create(sport_id: sport2.id, coach_id: coach4.id, user_id: user1.id, training_date: "2020-07-29 12:00", training_duration: 30, training_rate: 20, training_description: "I want to work on my ball handles")
CoachingSession.create(sport_id: sport5.id, coach_id: coach15.id, user_id: user1.id, training_date: "2020-08-07 11:00", training_duration: 30, training_rate: 150, training_description: "I'm having issues on my swing follow through, would love some advice")
CoachingSession.create(sport_id: sport4.id, coach_id: coach13.id, user_id: user1.id, training_date: "2020-06-05 16:00", training_duration: 60, training_rate: 70, training_description: "Just looking to get out and get some exercise")
CoachingSession.create(sport_id: sport3.id, coach_id: coach21.id, user_id: user1.id, training_date: "2020-06-20 9:00", training_duration: 60, training_rate: 60, training_description: "passing drills please")
CoachingSession.create(sport_id: sport2.id, coach_id: coach1.id, user_id: user1.id, training_date: "2020-07-05 13:00", training_duration: 30, training_rate: 120, training_description: "wanna learn court vision from the best")