class Api::MedicationsController < ApplicationController
  # before_action :set_list, only: [:show, :update, des]


  def index 
    render json: current_user.medications  
  end

  def show
    @medication = @current_user.medications.find(params[:id])
    render json: @medication
  end

  def create 
    @medication = current_user.medications.new(medication_params)
    if @medication.save 
      render json: @medication
    else
      render json: { errors: @medication.errors }, status: :unprocessable_entity
    end
  end 

  def update
    @medication = current_user.medications.find(params[:id])
    if @medication.update(medication_params)
      render json: @medication
    else
      render json: { errors: @medication.errors }, status: :unprocessable_entity
    end
  end 

  def destroy
    @current_user.medications.find(params[:id])
		# @current_user.medications.find(params[:id]).destroy
		# render json: { message: 'Medication deleted'}
    @medication.destroy
    render json: { message: 'Medication has been deleted' }
  end

  private 
    # { list: { title: "", desc: ""}}
    def medication_params
      params.require(:medicaiton).permit(:name, :nickname, :strength, :dosage)
    end
end

