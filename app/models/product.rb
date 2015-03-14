class Product < ActiveRecord::Base

validates :description, :name, :url, presence: true
validates :price, numericality: {only_integer: true}

end
