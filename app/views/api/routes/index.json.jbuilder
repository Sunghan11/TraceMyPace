json.key_format! camelize: :lower
@routes.each do |route|
    json.set! route.id do
        json.partial! 'api/routes/route', route: route
        json.extract! route.user, :first_name, :last_name, :email
    end
end