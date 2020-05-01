class Api::SportsController < ApplicationController
  def index
    @sports = Sports.all
  end

end
