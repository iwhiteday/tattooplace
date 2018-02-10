module Public
  class StylesController < Public::ApplicationController
    def index
      render json: Style.all
    end
  end
end