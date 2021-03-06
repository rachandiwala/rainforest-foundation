class ProductsController < ApplicationController
  
 
#  This code is for an HTML request from the browser:
 # def index
 #   @products = if params[:search] #Search method
 #    Product.where("LOWER(name) LIKE LOWER(?)", "%#{params[:search]}%") 
 #   else
 #     Product.all  # will show all products on products page (index page)

 #   end
 # end
  
 # This is replacement code of the Html code above using AJAX request/response
  
def index

   # @products = Product.order('products.created_at DESC').page(params[:page], :per_page => 5)
    @products = if params[:search]
      Product.where("LOWER(name) LIKE LOWER(?)", "%#{params[:search]}%").page(params[:page])
      else
      Product.all.page(params[:page])
    end

    respond_to do |format|
      format.html do
    if request.xhr?
      render @products
    end
  end

  format.js # render 'index.js.erb', a javascript response
  end
end



  def show
    @product = Product.find(params[:id])  # show products by its id parameter

      if current_user
          @review = @product.reviews.build
        end
  end

  def new
    @product = Product.new   # Create a new product object
  end

  def edit
    @product = Product.find(params[:id]) # find the product by its ID, than edit that product
  end

  def create
    @product = Product.new(product_params)  # create new Product with required options in 
                                            # ( product_parmas) which is defined at the bottom

        if @product.save

          redirect_to products_url      #when click on save, save product than take user to Products page
        else
          render :new     # if product is not saved than take user to new.html.erb page
        end
      end

  def update
    @product = Product.find(params[:id])

    if @product.update_attributes(product_params) # updates all the attributes/properties from the passed
                                                  # Hash, which is product_params, and save the product
      redirect_to products_path(@product)          # Take the user back to product page
    else
      render :edit
    end
  end

  def destroy
    @product = Product.find(params[:id])      #find/go to the product you wnat to delete
    @product.destroy                          #Delete that product and go back to product main page
    redirect_to products_path

  end

  private   

  def product_params
    params.require(:product).permit(:name, :description, :price, :url)
    # This is a key, value pair operation, Key => :prodcut , value is :name and its value
    # ex params=ActionController::parameters.new(person: { name: 'raza'})
    # in this case, the key is :person, and its vlue is the entire {name: 'raza'}

  end



end
