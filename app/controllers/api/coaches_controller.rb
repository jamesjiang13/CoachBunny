class Api::CoachesController < ApplicationController
  def index # get all coaches that match sport ID
    found_sport = Sport.find(params[:sport_id]) # finds sport based on passed ID

    @coaches = found_sport.coaches 
    # render json: apple
    render :index
  end

  def show # show detail for one coach
    coach = Coach.find_by(id: params[:id])
    @details = coach.details
    render :show
  end
  
end

# @coaches = Coach.where(sport_id: passed_sport_id)