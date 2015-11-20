json.array!(@wakes) do |wake|
  json.extract! wake, :id, :waker_name, :wakee_name
  json.url wake_url(wake, format: :json)
end
