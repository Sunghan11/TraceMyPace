json.key_format! camelize: :lower
json.extract! @status, :id, :body, :author_id, :created_at
json.first_name @status.author.first_name
json.last_name @status.author.last_name
json.author_id @status.author.id