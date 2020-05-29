json.key_format! camelize: :lower
@statuses.each do |status|
    json.set! status.id do
        json.partial! 'api/statuses/status', status: status
        json.extract! status.author, :first_name, :last_name
        # json.extract! @status, :id, :body, :author_id, :created_at
        # json.first_name status.author.first_name
        # json.last_name status.author.last_name
        # json.author_id status.author.id
    end
end