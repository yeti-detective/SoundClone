class Song < ApplicationRecord
  include PgSearch
  PgSearch.multisearch_options = { using: { tsearch: { prefix: true } }}
  multisearchable against: [:title]

  validates :title, presence: true

  user_icons = [
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

  has_attached_file :image, default_url: "user_icons/#{user_icons.sample}"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  has_attached_file :song_file, default_url: 'Rick_Astley_-_Never_Gonna_Give_You_Up.mp3'
  validates_attachment_content_type :song_file, content_type: [
    'audio/mpg',
    'audio/mpeg',
    'audio/mp3',
    'audio/avi',
    'audio/3gp',
    'audio/ogg'
  ]

  belongs_to :user
  has_many :playlists
  has_many :comments

end
