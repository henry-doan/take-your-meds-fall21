class Api::UsersController < ApplicationController
  
  def index
    render json: User.all.first
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def create 
    @user = User.new(user_params)
    if @user.save 
      render json: @user
    else
      render json: { errors: @user.errors }, status: :unprocessable_entity
    end
  end


  def update 
    @user = User.find(params[:id])
    if @user.update(user_params)
      render json: @user
    else
      render json: { errors: @user.errors }, status: :unprocessable_entity
    end
  end 

  def destroy
    User.find(params[:id])
    @user.destroy
    render json: { message: 'User has been deleted' }
  end



  private 
    def user_params
      params.require(:user).permit(:first_name, :last_name, :age, :height, :weight, :gender, :blood, :address, :phone, :med_count)
    end
end
