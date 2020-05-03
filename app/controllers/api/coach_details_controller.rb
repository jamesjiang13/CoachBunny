class Api::CoachDetailsController < ApplicationController
  def index # get all the coach details for a specific sport
    found_sport = Sport.find_by(id: params[:sport_id])

    @coaches = found_sport.coach_details 
    render :index
  end
  
  def show # show all the details for a specific coach
    @coaching_session = CoachDetail.find_by(id: params[:id])
    # render json: @coaching_session
    render :show
  end
end
