json.array!(@musics) do |music|
  json.extract! music, :id, :name, :file
  json.url music_url(music, format: :json)
end
