json.key_format! camelize: :lower
@comments.each do |comment|
    json.set! comment.id do
        json.partial! 'api/comments/comment', comment: comment
        json.extract! comment.author, :first_name, :last_name
    end
end