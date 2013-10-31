class UsersController < ApplicationController

  def index
    @user = User.new
  end

  def login
    username = params[:user][:name]
    password = params[:user][:password]

    if (username == 'jianing') && (password == 'xiaozhu')
      session[:login] = true
      redirect_to root_path
    else
      session[:login] = false
      render :file => 'app/views/users/fails.slim', :layout => false
    end
  end
end