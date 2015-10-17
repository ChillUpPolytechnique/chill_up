class User < ActiveRecord::Base
	has_many :wakes_given, :class_name => 'Wake', :foreign_key => 'waker_id'
  has_many :wakes_received, :class_name => 'Wake', :foreign_key => 'wakee_id'
end
