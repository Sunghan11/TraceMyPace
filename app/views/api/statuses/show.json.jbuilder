json.key_format! camelize: :lower
json.partial! 'api/statuses/status', status: @status
json.extract! @status.author, :first_name, :last_name
