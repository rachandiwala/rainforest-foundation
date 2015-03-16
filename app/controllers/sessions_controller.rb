class SessionsController < ApplicationController
  

  def new

  end

  def create
    user = User.find_by(email: params[:email])    #find user by its email field
      if user && user.authenticate(params[:password]) # if user's email and password exists and match
        session[:user_id] = user.id                   # create a hash, key :user_id, value is users actual ID
                                                       # This completes the process of session
          redirect_to products_url, notice: "Logged In!"
        else
          render "new"
        end
      end



  

  def destroy

    session[:user_id] = nil
    redirect_to products_url, notice: "Logged Out!"

  end







end
