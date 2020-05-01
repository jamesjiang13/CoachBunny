class Api::CoachingSessionsController < ApplicationController
  def index # 

  end

  def show # show all detail for one coaching session

  end

  def create # create a new coaching session
    @coaching_session = CoachingSession.new(coaching_session_params)

    if @coaching_session.save
    else
      render json: @coaching_session.errors.full_messages, status: 422
    end
  end
  
  def update # get one session by ID, update params for that session
    @coaching_session = CoachingSession.find_by(id: params[:id])

    if @coaching_session.save
    else
    end

  end

  private
  def coaching_session_params
    params.require(:coaching_sessions).permit(:sport_id, :coach_id, :user_id)
  end

end
