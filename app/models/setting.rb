class Setting < ActiveRecord::Base
  validates :slug, :config_key, :config_value, presence: true
  validates :slug, :config_key, :config_value, uniqueness: true
end
