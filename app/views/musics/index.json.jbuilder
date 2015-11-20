json.array!(@musics) do |music|
  json.extract! music, :id, :name, :file, :author, :image
  json.url music_url(music, format: :json)
end
