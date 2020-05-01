@coaches.each do |coach|
  json.set! coach.id do 
    json.extract! coach, :id, :first_name, :last_name, :zip_code, :coach_description
  end
end
