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

  # def show
  #   @user = User.find_by(id: params[:id])
  #   if @user
  #     render json: '/api/users/show'
  #   else 
  #     render json: {}
  #   end
  # end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :password_digest, :email_address, :image_url, :zip_code, :phone_number)
  end
end