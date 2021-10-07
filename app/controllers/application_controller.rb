class ApplicationController < ActionController::API
        include DeviseTokenAuth::Concerns::SetUserByToken
        before_action :configure_permitted_parameters, if: :devise_controller?

        protected
                def configure_permitted_parameters
                        devise_parameter_sanitizer.permit(
                                :sign_up, keys: [
                                        :birthdate, 
                                        :first_name, 
                                        :last_name,
                                        :age,
                                        :height,
                                        :weight,
                                        :blood,
                                        :gender,
                                        :address,
                                        :phone
                                        ])    
                end
end
