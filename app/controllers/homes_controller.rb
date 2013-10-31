class HomesController < ApplicationController
  before_filter :authenticate

  def index
    render 'home.slim'
  end

  private

  def authenticate
    @login = session[:login]
  end

end