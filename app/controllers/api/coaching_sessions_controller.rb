class Api::CoachingSessionsController < ApplicationController
  def index # return all sessions for the current user
    @coaching_sessions = CoachingSession.where(user_id: current_user.id)
    # @coaching_sessions = CoachingSession.all
    render json: @coaching_sessions
  end

  # show fulls details for one coaching session 
  # inc: coach details and sports name
  def show   
    # @session = CoachingSession.find_by()
  end

  def create # create a new coaching session
    @coaching_session = CoachingSession.new(coaching_session_params)

    if @coaching_session.save
      render :index
    else
      render json: @coaching_session.errors.full_messages, status: 422
    end
  end

  # get one session by ID, update params for that session
  # 
  def update 
    coaching_session = CoachingSession.find_by(id: params[:id])

    if @coaching_session.save
      render :index
    else
      render json: @coaching_session.errors.full_messages, status: 422
    end

  end

  private
  def coaching_session_params
    params.require(:coaching_sessions).permit(:sport_id, :coach_id, :user_id, 
      :training_date, :training_duration, :training_rate, :training_description)
  end

end
