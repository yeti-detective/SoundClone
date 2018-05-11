class Song < ApplicationRecord
  validates :title, presence: true

  has_attached_file :image, default_url: 'user_icons/default_icon.png'
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  has_attached_file :song_file, default_url: 'SoundCloneDemoTape.3gp'
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
