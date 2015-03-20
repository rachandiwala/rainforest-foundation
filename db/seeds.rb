# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

=begin
   User.destroy_all
    Product.destroy_all

    User.create!({
      email:  "example@bitmakerlabs.com",
      name:  "Examples User",
      password: "pass",
      password_confirmation: "pass"
      })


    50.times do |i|
      Product.create({
      name: "Product#{i}",
      description: "Description#{i}",
      price: i,

      })
    end

=end