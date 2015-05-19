require 'jshintrb/jshinttask'

Jshintrb::JshintTask.new :jshintrb do |t|
  t.pattern = "#{Rails.root}/app/assets/javascripts/**/*.js"
  t.options = :defaults
end
