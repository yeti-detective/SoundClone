# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Song.destroy_all
Comment.destroy_all
User.create({username: 'GuestUser', password: 'starwars'})

BACKGROUND_IMAGE_URLS = [
  '01.jpeg',
  '02.jpeg',
  '03.jpg',
  '04.jpg',
  '05.jpg',
  '06.jpg',
  '07.jpg',
  '08.jpg',
  '09.jpg',
  '10.jpg'
]

SONG_IMAGE_URLS = [
  '01.png',
  '02.png',
  '03.png',
  '04.jpg',
  '05.png',
  '06.jpg',
  '07.png',
  '08.jpg',
  '09.jpg',
  '10.jpg'
]

10.times do
  user = User.new({username: Faker::Zelda.character, password: 'ocarina'})
  user.avatar = File.open("./app/assets/images/user_icons/#{SONG_IMAGE_URLS.sample}")
  user.image = File.open("./app/assets/images/background_images/#{BACKGROUND_IMAGE_URLS.sample}")
  user.save
end

USER_IDS = User.all.map { |user| user.id }

25.times do
  song = Song.new({title: Faker::HitchhikersGuideToTheGalaxy.specie, user_id: USER_IDS.sample})
  song.image = File.open("./app/assets/images/user_icons/#{SONG_IMAGE_URLS.sample}")
  song.save
end

SONG_IDS = Song.all.map { |song| song.id }

50.times do
  Comment.create({body: Faker::Hipster.sentence, user_id: USER_IDS.sample, song_id: SONG_IDS.sample})
end
