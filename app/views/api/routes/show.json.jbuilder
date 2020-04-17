json.key_format! camelize: :lower
json.partial! 'api/routes/route', route: @route
json.extract! @run.runner, :first_name, :last_name, :email