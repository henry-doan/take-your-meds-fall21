class Api::CommentsController < ApplicationController

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

		def comment_params
			params.require(:comment).permit(:title, :description)
		end

		
end
