@comments.each do |comment|
    json.set! comment.id do
        json.extract! @comment, :id, :body, :author_id, :status_id, :created_at
        json.first_name comment.author.first_name
        json.last_name comment.author.last_name
        json.author_id comment.author.id
    end
end

# @comments.each do |comment|
#     json.set! comment.id do
#         json.partial! "api/comments/comment", comment: comment
#     end
# end