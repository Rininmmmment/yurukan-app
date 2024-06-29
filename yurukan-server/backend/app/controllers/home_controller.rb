class HomeController < ApplicationController
  def main
    render json: { message: 'hello' }
  end
end
