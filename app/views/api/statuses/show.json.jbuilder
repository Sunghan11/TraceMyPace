json.key_format! camelize: :lower
json.partial! 'api/statuses/status', status: @status
json.extract! @status.author, :first_name, :last_name, :id
# json.extract! @status, :id, :body, :author_id, :created_at
# json.first_name @status.author.first_name
# json.last_name @status.author.last_name
# json.author_id @status.author.id