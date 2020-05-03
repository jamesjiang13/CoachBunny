class Api::UsersController < ApplicationController 
  def create
    @user = User.new(user_params)

    if @user.save
      log_in(@user)
      render json: @user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :password, :email_address, :image_url, :zip_code)
  end
end