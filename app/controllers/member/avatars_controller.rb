module Member
  class AvatarsController < Member::ApplicationController
    def create
      if current_user.update(avatar: params.fetch(:file))
        render json: { message: 'Avatar updated', new_url: current_user.avatar.url }, status: :ok
      else
        render json: { errors: current_user.errors.full_messages.join(', ') }, status: :unprocessable_entity
      end
    end
  end
end