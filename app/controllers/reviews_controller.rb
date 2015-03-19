class ReviewsController < ApplicationController
  before_filter :ensure_logged_in, only: [:create, :destroy]  #Run these methods first
  before_filter :load_product



  def show
    @review = Review.find(params[:id])
  end

  def create
    @review = @product.reviews.build(review_params)
    @review.user = current_user

      #Respond for/with HTTP Request:
#      if @review.save
#          redirect_to products_path, notice: 'Review created successfully'
#        else
#          render 'products/show'
#        end
      
      #Responding with AJAX (javascript) and HTML (both), using respond_to
      if @review.save
      respond_to do |format|
        if @review.save
          format.html { redirect_to products_path(@product.id), notice: 'Review created successfully!'}
          format.js {} #This will look for app/views/reviews/create.js.erb
        else
          format.html { render 'products/show', alert: 'There was an error creating the review.'}
          format.js {} #This will look for app/views/reviews/create.js.erb

    end
  end

  end
end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
  end


private

def review_params

  params.require(:review).permit(:comment, :product_id)

end

def load_product
  @product= Product.find(params[:product_id])
end



end
