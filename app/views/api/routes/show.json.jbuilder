json.key_format! camelize: :lower
json.partial! 'api/routes/route', route: @route
json.extract! @route.user, :first_name, :last_name, :email