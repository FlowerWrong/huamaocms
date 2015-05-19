require 'rake'

namespace :backend do
  desc 'Run Brakeman'
  task :brakeman, :output_files do |t, args|
    unless Rails.env == 'production'
      require 'brakeman'
      files = args[:output_files].split(' ') if args[:output_files]
      Brakeman.run app_path: '.', output_files: files, print_report: true
    end
  end
end

unless Rails.env == 'production'
  require 'rubocop/rake_task'
  RuboCop::RakeTask.new
end
