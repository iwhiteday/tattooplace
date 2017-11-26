class TestDataController < ApplicationController
  HEROES = [
    { id: 11, name: 'Mr nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magnets' },
    { id: 16, name: 'Rubberman' },
    { id: 17, name: 'Dynamite' },
    { id: 18, name: 'Windfury' }
  ].freeze

  def index
    render json: HEROES
  end

  def show
    hero = HEROES.select { |obj| obj[:id] == params[:id].to_i }.first
    puts "HERO: #{hero}"
    render json: hero
  end
end