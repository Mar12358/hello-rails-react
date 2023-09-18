class Api::V1::MessagesController < ApplicationController
  def index
    @message = Message.order("RANDOM()").first

    respond_to do |format|
      format.json { render json: @message.content }
    end
  end
end
