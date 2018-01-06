module Member
  class CurrentUsersController < Member::ApplicationController
    def show
      render json: current_user.as_json
    end
  end
end