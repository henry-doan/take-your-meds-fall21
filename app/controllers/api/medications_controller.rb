class Api::MedicationsController < ApplicationController
  def index 
    render json: current_user.medications  
  end

  def show
    @medication = current_user.medications.find(params[:id])
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
    @medication = current_user.medications.find(params[:id])
    @medication.destroy
    render json: { message: 'Medication has been deleted' }
  end

  private 
    def medication_params
      params.require(:medication).permit(:name, :nickname, :strength, :dosage, :currently_taking)
    end

end

