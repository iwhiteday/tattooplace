class TestDataController < ApplicationController
  def index
    render json: Hero.all
  end

  def show
    render json: Hero.find(params[:id])
  end

  def update
    sleep(2.second)
    hero = Hero.find(hero_id)
    if hero.update_attributes(hero_params.as_json)
      render json: {}, status: :ok
    else
      render json: {}, status: :unprocessable_entity
    end
  end

  def create
    Hero.create(hero_params)
  end

  def destroy
    Hero.find(hero_id)
  end

  private

  def hero_id
    params.permit(:id).fetch(:id)
  end

  def hero_params
    params.permit(:name)
  end
end
