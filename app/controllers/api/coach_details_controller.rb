class Api::CoachDetailsController < ApplicationController
  def index # get all the coach details for a specific sport
    # debugger
    found_sport = Sport.find_by(id: params[:sport_id])
    # duration_beginning = params[:duration].split("-")[0]
    # duration_ending = params[:duration].split("-")[1]
    # debugger
    @coaches = found_sport.coach_details
    # debugger
    render :index
  end
  
  def show # show all the details for a specific coach
    @coaching_session = CoachDetail.find_by(id: params[:id])
    # render json: @coaching_session
    render :show
  end
end
