class Api::SessionDetailsController < ApplicationController
  def index # get all the available coaches for a specific sport
    @available_sessions = SessionDetail.all
  end
  
  def show # show all the details for a coaches session 
    @coaching_session = SessionDetail.find_by(id: params[:id])

    if @coaching_session
      render json: @coaching_session
    end
end
