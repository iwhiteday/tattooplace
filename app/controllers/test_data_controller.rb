class TestDataController < ApplicationController
  def index
    render json: Hero.all
  end

  def show
    render json: Hero.find(params[:id])
  end

  def update
    hero = Hero.find(params[:id])
    puts "HERO: #{hero.as_json}"
    if hero.update_attributes(hero_params.as_json)
      render json: {}, status: :ok
    else
      render json: {}, status: :unprocessable_entity
    end
  end

  private

  def hero_params
    params.permit(:name)
  end
end
