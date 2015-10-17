class Wake < ActiveRecord::Base
  belongs_to :music
  has_one :waker, :class_name => 'User', :foreign_key => 'waker_id'
  has_one :wakee, :class_name => 'User', :foreign_key => 'wakee_id'
end
