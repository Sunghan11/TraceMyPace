json.key_format! camelize: :lower
@statuses.each do |status|
    json.set! status.id do
        json.partial! 'api/statuses/status', status: status
        json.extract! status.author, :first_name, :last_name
    end
end