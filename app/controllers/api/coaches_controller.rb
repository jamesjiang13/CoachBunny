class Api::CoachesController < ApplicationController
  def index # get all coaches that match sport ID
    passed_sport_id = params[:sport_id] 
    # @coaches = Coach.where(sport_id: passed_sport_id)
    #                 .where()
    found_sport = Sport.find(passed_sport_id)
    @coaches = found_sport.coaches
    render :index
  end

  def show # show detail for one coach

  end
  
end
