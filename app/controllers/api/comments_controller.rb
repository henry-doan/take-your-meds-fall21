class Api::CommentsController < ApplicationController
	#before_action :set_medication
		# before_action :set_list, only: [:show, :update, des]
		
	def index 
		render json: @medication.comments  
	end
	
	def show
		@comment = @medication.comments.find(params[:id])
		render json: @comment
	end
	
	def create 
			@comment = @medication.comments.new(comment_params)
		if @comment.save 
			render json: @comment
		else
			render json: { errors: @comment.errors }, status: :unprocessable_entity
		end
	end 
	
	def update
			@comment = @medication.comments.find(params[:id])
		if @comment.update(comment_params)
				render json: @comment
		else
				render json: { errors: @comment.errors }, status: :unprocessable_entity
		end
	end 
	
	def destroy
		@comment.medications.find(params[:id]).destroy
		render json: { message: 'Comment has been deleted' }
	end
	
	private 
			# { list: { title: "", desc: ""}}
		def comment_params
			params.require(:comment).permit(:title, :description)
		end

		# def set_medication
		# 	@medication = Medication.find(params[:medication_id])
		# end		
end
