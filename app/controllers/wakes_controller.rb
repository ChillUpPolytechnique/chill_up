class WakesController < BaseController
  def index
  		@wakes = Wake.all
  end
end
