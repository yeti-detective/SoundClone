# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Song.destroy_all
User.create({username: 'GuestUser', password: 'starwars'})

10.times do
  User.create({username: Faker::Zelda.character, password: 'ocarina'})
end

USER_IDS = User.all.map { |user| user.id }

25.times do
  Song.create({title: Faker::HitchhikersGuideToTheGalaxy.specie, user_id: USER_IDS.sample})
end
