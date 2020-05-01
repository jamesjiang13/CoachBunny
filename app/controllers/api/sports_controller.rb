class Api::SportsController < ApplicationController
  def index
    @sports = Sport.all
  end
end
