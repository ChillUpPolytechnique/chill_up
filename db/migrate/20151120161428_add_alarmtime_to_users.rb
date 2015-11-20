class AddAlarmtimeToUsers < ActiveRecord::Migration
  def change
  	add_column :users, :alarm_hour, :integer
  	add_column :users, :alarm_min, :integer
  end
end
