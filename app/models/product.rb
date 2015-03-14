class Product < ActiveRecord::Base

  validates :description, :name, :url, presence: true
  validates :price, numericality: {only_integer: true}



  def formatted_price
    price_in_dollars = price.to_f 
    sprintf("%.2f", price_in_dollars)
  end
end
