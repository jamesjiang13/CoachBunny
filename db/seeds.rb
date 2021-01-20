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
  2x All-NBA Second Team, 5x NBA assists leader", 
  image_url: "https://cdn.vox-cdn.com/thumbor/ziTpZtOM1q409La5uQw-zqZ4tfM=/0x4:600x404/1400x1400/filters:focal(0x4:600x404):format(jpeg)/cdn.vox-cdn.com/photo_images/1347393/23-Oct-10_103931147CP031_Golden_State.jpg")

coach2 = Coach.create(first_name: "Steph", last_name: "Curry", zip_code: "94501", 
  coach_description: "I'm a six-time NBA All-Star, 2x NBA MVP, and 3x NBA champ. I'm also pretty
  good at 3-point shots. I've also been golfing all my life.", image_url: "https://www.mercurynews.com/wp-content/uploads/2018/09/BNG-L-WARRIORS-0925-131.jpg")

coach3 = Coach.create(first_name: "Byron", last_name: "Norris", zip_code: "97275", 
  coach_description: "I've coached AAU for the last 5 years",
  image_url: "https://s.hdnux.com/photos/77/14/24/16565508/3/920x920.jpg")

coach4 = Coach.create(first_name: "Connie", last_name: "Gardner", zip_code: "83778", 
  coach_description: "I'm a former NCAA DII player",
  image_url: "https://d279m997dpfwgl.cloudfront.net/wp/2020/06/AP_19233438444594-1000x563.jpg")

coach5 = Coach.create(first_name: "Ed", last_name: "Waters", zip_code: "62474", 
  coach_description: "I'm a proven coach with proven methods that work",
  image_url: "https://www.csusbathletics.com/images/2018/5/23/Hello_Newman.jpg")

coach24 = Coach.create(first_name: "Charles", last_name: "Welch", zip_code: "41266", 
  coach_description: "Former Summer League assistant coach",
  image_url: "https://lagoldeneagles.com/images/2016/6/6/Coach_Jimmy_Saia.jpg")

coach25 = Coach.create(first_name: "Cecil", last_name: "French", zip_code: "62474", 
  coach_description: "I grew up playing ball, I know what it takes to bring your game to the next level",
  image_url: "https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/20181112mfpittsports08-2-1572643783.jpg")

coach26 = Coach.create(first_name: "Cliff", last_name: "Gibbs", zip_code: "83778", 
  coach_description: "15 years as a player, 5 years as a coach. I know what I'm doing",
  image_url: "https://www.denverpost.com/wp-content/uploads/2019/11/d612db4528a24b9f870cf28e95229c7e.jpg")

coach27 = Coach.create(first_name: "Marvin", last_name: "Leonard", zip_code: "62474", 
  coach_description: "I'm a retired collegiate player, just looking to spread the love of the game.",
  image_url: "https://www.gannett-cdn.com/presto/2019/04/12/USAT/e46c693b-bf94-4bcf-a4a6-0a280ea1d86d-_steve-alford.JPG")

# football
coach6 = Coach.create(first_name: "Charles", last_name: "Woodson", zip_code: "94501", 
  coach_description: "Super Bowl Champ, 9x Pro Bowl, 4x First-team 
    All-Pro, NFL Defensive Player of the Year, NFL Defensive ROTY",
    image_url: "https://www.gannett-cdn.com/-mm-/17b3c2d970a572c3bcc5f4bedc49c6ccb0601024/c=0-246-2862-1863/local/-/media/2015/11/22/DetroitFreePress/B9319793253Z.1_20151122021502_000_GKSCKL7QJ.1-0.jpg") 

coach7 = Coach.create(first_name: "Vince", last_name: "Young", zip_code: "85002", 
  coach_description: "The OG Vince Young National Champion, 2X Pro Bowler, 06 ROTY",
  image_url: "https://i1.wp.com/nypost.com/wp-content/uploads/sites/2/2019/03/vince-young.jpg?quality=80&strip=all&ssl=1")

coach8 = Coach.create(first_name: "George", last_name: "Hamilton", zip_code: "75399", 
  coach_description: "I once caught a TD in 5th grade flag football",
  image_url: "https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.oregonlive.com/home/olive-media/width2048/img/sports_impact/photo/jacksonjpg-66bffdbc99b3871c.jpg")
 
coach9 = Coach.create(first_name: "Byron", last_name: "Norris", zip_code: "66294", 
  coach_description: "Rec league champion '17",
  image_url: "https://www.gannett-cdn.com/presto/2019/10/30/PVCS/8701660d-a7aa-46ce-ba0b-bb383537e9b1-Camarillo_High_football_6.jpg")

coach10 = Coach.create(first_name: "Khalil", last_name: "Mack", zip_code: "66294", 
  coach_description: "DL/LB for Chicago Bears. I'm a one man wrecking crew.",
  image_url: "https://a.espncdn.com/photo/2018/0807/r411315_1296x729_16-9.jpg")

coach28 = Coach.create(first_name: "Joy", last_name: "Foster", zip_code: "75399", 
  coach_description: "I coached my two boys through high school, now I'm just looking 
    for a way to keep the love of football alive",
  image_url: "https://lh3.googleusercontent.com/proxy/2PwmPn-wmzK2-hfK8XPYCHrPtioOg0SVLHtCMDLAIlTMnW-_04_q_imL_4qKa8z4mhMTfOS9K6PAttUxD_rJ-FTD0sscjWJokQjuTu57sO6g3MQ")
 
coach29 = Coach.create(first_name: "Derek", last_name: "Cobb", zip_code: "66294", 
  coach_description: "Dual sport athlete (Football & Track), CSS Champion '13",
  image_url: "https://football.dailyherald.com/storyimage/DA/20190408/SPORTS/190408977/AR/0/AR-190408977.jpg")

coach30 = Coach.create(first_name: "Sean", last_name: "Cole", zip_code: "29596", 
  coach_description: "I played 5 years at UMich.",
  image_url: "https://www.gannett-cdn.com/presto/2020/09/19/PPOH/6bff4d97-1cee-4f1f-b74e-e9b96a94f929-Photo_Sep_18_7_30_24_PM.jpg")

# tennis
coach11 = Coach.create(first_name: "Andy", last_name: "Roddick", zip_code: "68022", 
  coach_description: "I used to play tennis", 
  image_url: "https://static01.nyt.com/images/2017/01/24/sports/24RODDICK1/24RODDICK1-superJumbo.jpg")
  
coach12 = Coach.create(first_name: "Pamela", last_name: "McGuire", zip_code: "85264", 
  coach_description: "I grew up playing tennis, it's what I was born to do.",
    image_url: "https://guhoyas.com/images/2017/8/15/genrel_auto_original_9895174.jpeg")

coach13 = Coach.create(first_name: "Kate", last_name: "Simon", zip_code: "73538", 
  coach_description: "CSS runner up '05",
  image_url: "https://universe.byu.edu/wp-content/uploads/2017/10/17-18-wTEN-Cusick-Kate-3-1024x576.jpg")
 
coach14 = Coach.create(first_name: "Brook", last_name: "Hicks", zip_code: "24679", 
  coach_description: "I have 10 years experience with coaching",
  image_url: "https://drmichellecleere.com/wp-content/uploads/2015/02/istock-490616308.jpg")

coach31 = Coach.create(first_name: "Judy", last_name: "Ryan", zip_code: "68022", 
  coach_description: "I grew up in the area, played Tennis at all the levels up to collegiate.",
  image_url: "https://troubadour.francis.edu/wp-content/uploads/2019/01/bodeaction-900x824.jpg")
  
coach32 = Coach.create(first_name: "Ruth", last_name: "Wright", zip_code: "85264", 
  coach_description: "CPR certified, mother of 2. I'm well used to coaching.",
  image_url: "https://i1.wp.com/lichfieldlive.co.uk/wp-content/uploads/2020/02/Zoe-Edwards-She-Rallies-Ambassador.jpg")

coach33 = Coach.create(first_name: "Tommy", last_name: "Hughes", zip_code: "73538", 
  coach_description: "As a former athlete, I know what it takes to bring your game up to the next level.",
  image_url: "https://phoenix.org/wp-content/uploads/2020/02/GCUGregPrudhommeA.jpg")
 
coach34 = Coach.create(first_name: "Maria", last_name: "Sharapova", zip_code: "24679", 
  coach_description: "Former professional tennis player",
  image_url: "https://photoresources.wtatennis.com/photo-resources/2020/02/26/154fcaf1-b3d8-405c-8d69-50ea09b9f955/GettyImages-494457750.jpg"
  )

# golf
coach15 = Coach.create(first_name: "Lorena", last_name: "Ochoa", zip_code: "22434", 
  coach_description: "Retired at #1. There is literally no one better than me. Ever.",
  image_url: "https://golfweek.usatoday.com/wp-content/uploads/sites/87/2017/05/20170504013-e1577743571854.jpg")

coach16 = Coach.create(first_name: "Angel", last_name: "Johnson", zip_code: "90645", 
  coach_description: "Let me teach you my secrets to up your putting game.",
  image_url: "https://tnsports360.com/wp-content/uploads/2019/05/APSU-women-golf-McCollum-resigns.jpg")
  
coach17 = Coach.create(first_name: "Steve", last_name: "Cobb", zip_code: "24601", 
  coach_description: "I can bring you from clubhouse zero to clubhouse hero.",
  image_url: "https://todaysgolfer-images.bauersecure.com/pagefiles/1036208/610x410/todd_main.png")
  
coach18 = Coach.create(first_name: "Steven", last_name: "Floyd", zip_code: "97338", 
  coach_description: "I am respectful but hard working. Always on time, always train hard!",
  image_url: "https://images.ctfassets.net/56u5qdsjym8c/783ALzXLHdKpWuMtThKHk4/cfbb52ce72bb6284226570e42ba4a042/Finding-A-Coach?fl=progressive&q=80")

coach35 = Coach.create(first_name: "Brooke", last_name: "Moran", zip_code: "22434", 
  coach_description: "Former pro-golfer",
  image_url: "https://cspbears.com/images/2018/3/16/DE176695_coach_Ramirez.jpg")

coach36 = Coach.create(first_name: "Arnold", last_name: "Gregory", zip_code: "90645", 
  coach_description: "I've dedicated my entire life to golfing, now I'm ready to pass on my knowledge.",
  image_url: "https://tsgigolf.com/wp-content/uploads/2017/03/DS_3012-e1401811840979-2wv7whnqckmewm2r0lp98q.jpg")
  
coach37 = Coach.create(first_name: "Hannah", last_name: "Holt", zip_code: "24603", 
  coach_description: "My credentials include various U15 course records, HS Varsity Golf captain, and golf team at Mich State.",
  image_url: "https://msutoday.msu.edu/-/media/assets/msutoday/images/2016/2/3/2016-07-01-golf-caroline-powers.jpg")
  
coach38 = Coach.create(first_name: "Phil", last_name: "Blackmon", zip_code: "97338", 
  coach_description: "SCU Golf Team '17",
  image_url: "https://parentingjuniorgolfers.files.wordpress.com/2012/08/junior-golf-coaching.jpg")

# soccer
coach19 = Coach.create(first_name: "Mia", last_name: "Hamm", zip_code: "36701", 
  coach_description: "2x Olympic gold medalist",
  image_url: "https://img.fifa.com/image/upload/t_l1/v1552571117/rsdkopgidpnmojoslurs.jpg")
  
coach20 = Coach.create(first_name: "Zinedine", last_name: "Zidane", zip_code: "10005", 
  coach_description: "#zizou", image_url: "https://c0.thejournal.ie/media/2019/03/zinedine-zidane-file-photo-2-752x501.jpg")
 
coach21 = Coach.create(first_name: "Elsa", last_name: "Richardson", zip_code: "72942", 
  coach_description: "I'm a highly detail-oriented coach. After all, the devils in the details.",
  image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUERXbgG3QxOWWtoOWV-Dw_xLHj5Tsaasm2g&usqp=CAU")
  
coach22 = Coach.create(first_name: "Nicolas", last_name: "Boone", zip_code: "24593", 
  coach_description: "Local middle school coach with some free time on the weekends",
  image_url: "https://steelsoccer.com/wp-content/uploads/2014/07/UK-Elite-Summer-Resi-2017-2017-UKElite-0010-copy.jpg")

coach23 = Coach.create(first_name: "Santiago", last_name: "Jaramillo", zip_code: "83569", 
  coach_description: "My friends call me Santi, nice to meet you",
  image_url: "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/c3oBpRvToBaNayRfHLEAup_u0FQ=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/ZOKZRYGTJAI6TLZ4SIVG6MIMCA.jpg")

coach39 = Coach.create(first_name: "Alfonso", last_name: "Cole", zip_code: "36701", 
  coach_description: "I played striker growning but transitioned to defense at the collegiate level.
    I know what methods are best for training both sides of the ball",
    image_url: "https://www.ziprecruiter.com/blog/static/wp-content/uploads/2019/11/28160715/1148407859_Soccer-Coach-628x419.jpg")
  
coach40 = Coach.create(first_name: "Tommie", last_name: "Ball", zip_code: "10005", 
  coach_description: "I was the CYSA scoring leader '18-'20. I can build you to become the best forward.",
  image_url: "https://snworksceo.imgix.net/cml/592f3986-ace0-4c00-a920-769d9c72610a.sized-1000x1000.jpg?w=1000")
 
coach41 = Coach.create(first_name: "Lawrence", last_name: "Stevens", zip_code: "72942", 
  coach_description: "+20 years on field experience, specializing in goalie training.",
  image_url: "https://d21gd0ap5v1ndt.cloudfront.net/web01/img.php?src=/images/2017-18/coach_misuraca_on_the_job.jpg&site=uhv&crop")
  
coach42 = Coach.create(first_name: "Rachel", last_name: "Townsend", zip_code: "24593", 
  coach_description: "Saratoga AYSO coach 2014-2017. Excellent communication skills and ability to work with young kids",
  image_url: "https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fd43d705e-2ff1-4d04-b922-c7ac49255868_4000x2752.jpeg")

coach43 = Coach.create(first_name: "Lula", last_name: "Perez", zip_code: "83569", 
  coach_description: "I played center mid for WVU.",
  image_url: "https://wmubroncos.com/images/2013/10/27/HNMPMSSLGJAOCNJ.20131027201451.jpg?width=1128&height=635&mode=crop")

# create users
user1 = User.create(first_name: "Demo", last_name: "User", password: "demouser", email_address: "demo@demo.com", zip_code: "95070")
user2 = User.create(first_name: "first", last_name: "last", password: "password", email_address: "test@test.com", zip_code: "95070")

# create coach details
CoachDetail.create(coach_id: coach1.id, sport_id: sport2.id, duration: 30, coaching_rate: 120, elite_coach: true, equipment: true, session_description: "I can share with you some of the skills and drills that brought me to where I am.")
CoachDetail.create(coach_id: coach2.id, sport_id: sport2.id, duration: 45, coaching_rate: 300, elite_coach: true, equipment: false, session_description: "I specialize in shooting drills and ball handling. I only have a ball, you'll have to bring anything else you want to work on.")
CoachDetail.create(coach_id: coach3.id, sport_id: sport2.id, duration: 60, coaching_rate: 40, elite_coach: false, equipment: true, session_description: "I have all the ladders and cones. I'm reliable and on time.")
CoachDetail.create(coach_id: coach4.id, sport_id: sport2.id, duration: 30, coaching_rate: 20, elite_coach: false, equipment: true, session_description: "I'm flexible with my schedule, just let me know what you'd like to work and let's chat!")
CoachDetail.create(coach_id: coach5.id, sport_id: sport2.id, duration: 45, coaching_rate: 40, elite_coach: false, equipment: true, session_description: "I've coached youth league and rec league basketball. If you're younger and want to build a solid foundation, I'm your guy.")
CoachDetail.create(coach_id: coach6.id, sport_id: sport1.id, duration: 30, coaching_rate: 40, elite_coach: true, equipment: false, session_description: "My specialty is defense: reading the QB, reading the pass, adjusting your body. I'm happy to work with you on those and more.")
CoachDetail.create(coach_id: coach7.id, sport_id: sport1.id, duration: 120, coaching_rate: 300, elite_coach: true, equipment: false, session_description: "I can adjust your entire throwing game, from handling the snap, to throwing form, to 3step and 5step drops; I've been there.")
CoachDetail.create(coach_id: coach8.id, sport_id: sport1.id, duration: 45, coaching_rate: 45, elite_coach: false, equipment: false, session_description: "I'm reliable, show up on time, and promise to get you to put a sweat in.")
CoachDetail.create(coach_id: coach9.id, sport_id: sport1.id, duration: 90, coaching_rate: 50, elite_coach: false, equipment: false, session_description: "I can share some of the same principles that made me a rec league champ. Get ready to work!")
CoachDetail.create(coach_id: coach10.id, sport_id: sport1.id, duration: 60, coaching_rate: 400, elite_coach: true, equipment: true, session_description: "You think you know how to play DE or OLB? Train with me, you'll see what it's like in the league.")
CoachDetail.create(coach_id: coach11.id, sport_id: sport4.id, duration: 30, coaching_rate: 140, elite_coach: true, equipment: true, session_description: "As someone who's been the best, I can help with anything you need to work on. Court vision, movement, swings, I can teach it all.")
CoachDetail.create(coach_id: coach12.id, sport_id: sport4.id, duration: 45, coaching_rate: 70, elite_coach: false, equipment: true, session_description: "I specialize in womens double's but I'm happy to help with any other tennis-needs.")
CoachDetail.create(coach_id: coach13.id, sport_id: sport4.id, duration: 60, coaching_rate: 70, elite_coach: false, equipment: true, session_description: "I have years of player experience under my belt and I'm happy to share my knowledge with the next generation.")
CoachDetail.create(coach_id: coach14.id, sport_id: sport4.id, duration: 30, coaching_rate: 55, elite_coach: false, equipment: true, session_description: "I've been a coach for more than a decade. Many of my students have continued their careers at the collegiate level.")
CoachDetail.create(coach_id: coach15.id, sport_id: sport5.id, duration: 30, coaching_rate: 150, elite_coach: true, equipment: true, session_description: "I've always been a student of the game; it's why I'm the best :) Now, I'm ready to be the teacher.")
CoachDetail.create(coach_id: coach16.id, sport_id: sport5.id, duration: 45, coaching_rate: 90, elite_coach: false, equipment: false, session_description: "My friends always ask me how my short game is so great, so now I'm ready to share it with you. Putting form above all!")
CoachDetail.create(coach_id: coach17.id, sport_id: sport5.id, duration: 60, coaching_rate: 120, elite_coach: false, equipment: false, session_description: "I've been an avid golfer for many years and I've taken my share of lessons. I know what it feels like to get started on the green, but I can help put your fears at ease.")
CoachDetail.create(coach_id: coach18.id, sport_id: sport5.id, duration: 120, coaching_rate: 50, elite_coach: false, equipment: true, session_description: "I caddied for Tiger a few years ago, I've seen his swing and how he's worked on the green. I can share those same skills with you.")
CoachDetail.create(coach_id: coach19.id, sport_id: sport3.id, duration: 90, coaching_rate: 250, elite_coach: true, equipment: false, session_description: "As one of the best ever to play the sport for the USWNT, I know what I'm doing, especially in the striker/foward role.")
CoachDetail.create(coach_id: coach20.id, sport_id: sport3.id, duration: 30, coaching_rate: 200, elite_coach: true, equipment: false, session_description: "Field vision, passing, touch, ball control. I can train you for all those things. Headers too.")
CoachDetail.create(coach_id: coach21.id, sport_id: sport3.id, duration: 60, coaching_rate: 30, elite_coach: false, equipment: true, session_description: "I can help you kick the ball around.")
CoachDetail.create(coach_id: coach22.id, sport_id: sport3.id, duration: 120, coaching_rate: 65, elite_coach: false, equipment: true, session_description: "I've coached a few teams, and inevitably one-on-one coaching as well. I have some good drills/training techniques I'd be happy to pull you through.")
CoachDetail.create(coach_id: coach23.id, sport_id: sport3.id, duration: 30, coaching_rate: 70, elite_coach: false, equipment: true, session_description: "I played a lot growing up. I'm especially good with ball control and touch.")
CoachDetail.create(coach_id: coach23.id, sport_id: sport4.id, duration: 30, coaching_rate: 45, elite_coach: false, equipment: true, session_description: "I can rally a few and give some pointers. I'm reliable and on time, and I have all the rackets and balls needed.")
CoachDetail.create(coach_id: coach18.id, sport_id: sport4.id, duration: 45, coaching_rate: 30, elite_coach: false, equipment: true, session_description: "If you're looking for a good workout and some friendly vibes, I'm sure to be that guy!")
CoachDetail.create(coach_id: coach21.id, sport_id: sport2.id, duration: 90, coaching_rate: 90, elite_coach: false, equipment: true, session_description: "My kids play flag football, so I have all the equipment for that. I can work with you on footwork, or some light drill work.")
CoachDetail.create(coach_id: coach3.id, sport_id: sport1.id, duration: 45, coaching_rate: 60, elite_coach: false, equipment: true, session_description: "I've have experience training with kids in AAU and I played HS football growing up. I have all the equipment and a book full of things we can work on.")
CoachDetail.create(coach_id: coach5.id, sport_id: sport5.id, duration: 60, coaching_rate: 65, elite_coach: false, equipment: false, session_description: "Whether you want help with your putting, your form, or just have a fun day on the green, I have enough expertise to improve your game.")
CoachDetail.create(coach_id: coach2.id, sport_id: sport5.id, duration: 60, coaching_rate: 300, elite_coach: true, equipment: false, session_description: "I can definitely change your golf game.")

CoachDetail.create(coach_id: coach24.id, sport_id: sport2.id, duration: 30, coaching_rate: 40, elite_coach: false, equipment: true, session_description: "I've worked with plenty of players during my time in Summer League. I can push you to your limits and redefine your game.")
CoachDetail.create(coach_id: coach25.id, sport_id: sport2.id, duration: 45, coaching_rate: 60, elite_coach: false, equipment: false, session_description: "I love the game, I grew up with the game, and now I'm a teacher of the game. I'm pulling from years of experience.")
CoachDetail.create(coach_id: coach26.id, sport_id: sport2.id, duration: 60, coaching_rate: 100, elite_coach: true, equipment: true, session_description: "I've spent +20 years as a player and a coach. I can work with you on a variety of things, and I have all the needed equipment.")
CoachDetail.create(coach_id: coach27.id, sport_id: sport2.id, duration: 120, coaching_rate: 120, elite_coach: false, equipment: false, session_description: "I played a few years at the D3 level, coached a little growing up, but now I'm ready to get back in it. I'm responsible and my coaching methods are very unique.")

CoachDetail.create(coach_id: coach28.id, sport_id: sport1.id, duration: 30, coaching_rate: 80, elite_coach: false, equipment: false, session_description: "I have the patience to work with you on your athlete needs. I'm a believer in repetition and hard work.")
CoachDetail.create(coach_id: coach29.id, sport_id: sport1.id, duration: 60, coaching_rate: 100, elite_coach: false, equipment: true, session_description: "As a dual sport athlete, I have the experience to bring out the best in you. Running, sprinting, lateral motion, if you're moving, I can make it better.")
CoachDetail.create(coach_id: coach30.id, sport_id: sport1.id, duration: 60, coaching_rate: 100, elite_coach: true, equipment: false, session_description: "I played all 5 years at UMich and received some of the best coaching in the world. As an athlete myself, I understand what it takes to motivate and move you.")

CoachDetail.create(coach_id: coach31.id, sport_id: sport4.id, duration: 30, coaching_rate: 50, elite_coach: false, equipment: true, session_description: "I am an experienced tennis coach and player. I've always had exceptional coaches growing up, now I want to help the next generation.")
CoachDetail.create(coach_id: coach32.id, sport_id: sport4.id, duration: 30, coaching_rate: 60, elite_coach: true, equipment: false, session_description: "I've practiced with my kids for years, and I have always received good feedback. I have a strong attention to detail, able to spot those tiny errors in your swing.")
CoachDetail.create(coach_id: coach33.id, sport_id: sport4.id, duration: 45, coaching_rate: 70, elite_coach: false, equipment: false, session_description: "I can help with your serve, backhand and forehand swings, and court agility. I have a series of drills I love to do, and I'd love to work with you on them.")
CoachDetail.create(coach_id: coach34.id, sport_id: sport4.id, duration: 90, coaching_rate: 100, elite_coach: false, equipment: true, session_description: "I've coached for decades. I have all the equipment, so all you need to bring is a winning attitude. I can teach from basics up to high advanced.")

CoachDetail.create(coach_id: coach35.id, sport_id: sport5.id, duration: 60, coaching_rate: 50, elite_coach: false, equipment: true, session_description: "I am a former sponsored golfer and my career taught me a lot about how to train properly. I'm able to look at your form and comb through any small mistakes you might have.")
CoachDetail.create(coach_id: coach36.id, sport_id: sport5.id, duration: 60, coaching_rate: 80, elite_coach: false, equipment: false, session_description: "I can help with your game, your putt, your drive, your swing, etc. You name it, I've done it on the green. Experience is key, and I have plenty of that.")
CoachDetail.create(coach_id: coach37.id, sport_id: sport5.id, duration: 90, coaching_rate: 100, elite_coach: false, equipment: false, session_description: "Short game? Long game? I can help with both and everything in between.")
CoachDetail.create(coach_id: coach38.id, sport_id: sport5.id, duration: 120, coaching_rate: 200, elite_coach: true, equipment: true, session_description: "I played golf for SCU and have a good understanding of the game. I can help you with all aspects, just let me know what you'd like to work on.")

CoachDetail.create(coach_id: coach39.id, sport_id: sport3.id, duration: 45, coaching_rate: 90, elite_coach: true, equipment: true, session_description: "I am an experienced player and coach. I've trained under some of the best coaches for both offense and defense, I definitely have knowledge to share.")
CoachDetail.create(coach_id: coach40.id, sport_id: sport3.id, duration: 60, coaching_rate: 100, elite_coach: false, equipment: false, session_description: "I'm a striker, and can help with everything that entails: touch, off-ball movement, technique, shooting, etc.")
CoachDetail.create(coach_id: coach41.id, sport_id: sport3.id, duration: 90, coaching_rate: 80, elite_coach: true, equipment: false, session_description: "Everybody needs a good keeper! I can help you build your reaction time, leadership, coordination, and all the other traits that make you a wall on defense.")
CoachDetail.create(coach_id: coach42.id, sport_id: sport3.id, duration: 120, coaching_rate: 200, elite_coach: false, equipment: true, session_description: "I have a few years of teaching and coaching experience, and can transfer that directly to your needs. Just let me know what you would like to work on. I have all the cones/goals/balls needed as well.")
CoachDetail.create(coach_id: coach43.id, sport_id: sport3.id, duration: 120, coaching_rate: 220, elite_coach: false, equipment: false, session_description: "I grew up prioritizing field vision, and that's something I can help you with. From passing and footwork, to being a great distributor, I can bring out your potential as a center mid.")

# create coach sessions
CoachingSession.create(sport_id: sport1.id, coach_id: coach10.id, user_id: user1.id, training_date: "2021-02-29 17:00", training_duration: 60, training_rate: 400, training_description: "I would like to work on my power rush technique.")
CoachingSession.create(sport_id: sport2.id, coach_id: coach2.id, user_id: user1.id, training_date: "2021-04-11 18:00", training_duration: 45, training_rate: 300, training_description: "I need help with my 3s")
CoachingSession.create(sport_id: sport2.id, coach_id: coach4.id, user_id: user1.id, training_date: "2021-03-29 19:00", training_duration: 30, training_rate: 20, training_description: "I want to work on my ball handles")
CoachingSession.create(sport_id: sport5.id, coach_id: coach15.id, user_id: user1.id, training_date: "2021-04-07 18:00", training_duration: 30, training_rate: 150, training_description: "I'm having issues on my swing follow through, would love some advice")
CoachingSession.create(sport_id: sport4.id, coach_id: coach13.id, user_id: user1.id, training_date: "2021-05-05 23:00", training_duration: 60, training_rate: 70, training_description: "Just looking to get out and get some exercise")
CoachingSession.create(sport_id: sport3.id, coach_id: coach21.id, user_id: user1.id, training_date: "2021-01-20 16:00", training_duration: 60, training_rate: 60, training_description: "passing drills please")
CoachingSession.create(sport_id: sport2.id, coach_id: coach1.id, user_id: user1.id, training_date: "2021-03-05 20:00", training_duration: 30, training_rate: 120, training_description: "wanna learn court vision from the best")