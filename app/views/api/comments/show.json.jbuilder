json.key_format! camelize: :lower
json.partial! 'api/comments/comment', comment: @comment
json.extract! @comment.author, :first_name, :last_name