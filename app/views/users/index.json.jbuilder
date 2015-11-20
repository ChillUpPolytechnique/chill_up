json.array!(@users) do |user|
  json.extract! user, :id, :name, :email, :password, :alarm_hour, :alarm_min
  json.url user_url(user, format: :json)
end
